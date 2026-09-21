import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import vm from 'node:vm';
import { createHash } from 'node:crypto';
import { parseHTML } from 'linkedom';
import { pages, pagePath, localHref } from './seo-config.mjs';

const root = resolve(import.meta.dirname,'..');
const read = f => readFileSync(resolve(root,f),'utf8');
const document = f => parseHTML(read(f)).document;
const variants = Object.entries(pages).flatMap(([file,c]) => c.langs.map(lang => ({file,lang,path: lang === 'en' ? file : `${lang}/${file}`})));
const shown = node => !node.closest('[hidden]');

test('every language has its own canonical, reciprocal alternates and static heading', () => {
  for (const {file,lang,path} of variants) {
    const doc = document(path);
    assert.equal(doc.documentElement.lang, lang,path);
    assert.equal(doc.documentElement.dataset.pageLanguage,lang,path);
    assert.equal(doc.querySelector('link[rel="canonical"]').href,`https://mazur.jp${pagePath(file,lang)}`,path);
    assert.equal([...doc.querySelectorAll('h1')].filter(shown).length,1,path);
    for (const other of pages[file].langs) {
      assert.equal(doc.querySelector(`link[hreflang="${other}"]`).href,`https://mazur.jp${pagePath(file,other)}`,path);
      assert.equal(doc.querySelector(`.language-switch a[data-lang="${other}"]`).getAttribute('href'),pagePath(file,other),path);
    }
    assert.equal(doc.querySelectorAll('.language-switch button').length,0,path);
    assert.equal(doc.querySelector('[data-i18n="navResearch"]').textContent,{en:'Research',pl:'Badania',ja:'研究'}[lang],path);
    assert.ok(!doc.querySelector('meta[name="robots"]')?.content.includes('noindex'),path);
  }
});

test('all internal page/resource links resolve, including fragments', () => {
  for (const {path} of variants) {
    const doc = document(path);
    const ids = [...doc.querySelectorAll('[id]')].map(n=>n.id);
    assert.equal(ids.length,new Set(ids).size,`duplicate IDs: ${path}`);
    for (const node of doc.querySelectorAll('[href], [src], [poster]')) {
      const value = node.getAttribute('href') || node.getAttribute('src') || node.getAttribute('poster');
      if (/^(?:mailto:|tel:|data:|javascript:)/.test(value)) continue;
      const url = new URL(value,`https://mazur.jp/${path}`);
      if (url.origin !== 'https://mazur.jp') continue;
      let target = decodeURIComponent(url.pathname).slice(1);
      if (!target || target.endsWith('/')) target += 'index.html';
      assert.ok(existsSync(resolve(root,target)),`${path}: missing ${value}`);
      if (url.hash && target.endsWith('.html')) {
        const targetDoc = target === path ? doc : document(target);
        assert.ok(targetDoc.getElementById(decodeURIComponent(url.hash.slice(1))),`${path}: missing fragment ${value}`);
        if (shown(node)) assert.ok(!targetDoc.getElementById(decodeURIComponent(url.hash.slice(1))).closest('[data-lang-panel][hidden]'),`${path}: fragment in hidden language panel ${value}`);
      }
    }
  }
});

test('updates and homepage news exist without JavaScript', () => {
  for (const lang of ['en','pl','ja']) {
    const prefix = lang === 'en' ? '' : lang + '/';
    const doc = document(prefix+'updates.html');
    assert.equal(doc.querySelectorAll('.update-entry').length,8);
    assert.ok(!doc.querySelector('[data-updates-status]'));
    assert.equal(document(prefix+'index.html').querySelectorAll('[data-updates-list] .update-entry').length,3);
    assert.ok(!document(prefix+'index.html').querySelector('[data-updates-module]').hasAttribute('hidden'));
  }
});

test('original quotations remain unchanged on existing pages', () => {
  for (const file of Object.keys(pages).filter(f => !['apu-pre-fd.html','tokyo-game-show-reporting.html'].includes(f))) {
    const old = parseHTML(execFileSync('git',['show',`origin/main:${file}`],{cwd:root,encoding:'utf8'})).document;
    const quotes = doc => [...doc.querySelectorAll('blockquote')].map(n=>n.textContent.replace(/\s+/g,' ').trim());
    const actual = quotes(document(file));
    if (file === 'writing.html') actual.push(...quotes(document('tokyo-game-show-reporting.html')));
    assert.deepEqual(actual.sort(),quotes(old).sort(),file);
  }
});

test('reading order, skip links and responsive photos are available in static HTML', () => {
  for (const {path} of variants) {
    const doc = document(path);
    assert.equal(doc.body.firstElementChild.className,'skip-link',path);
    assert.equal(doc.querySelector('main').getAttribute('tabindex'),'-1',path);
    for (const img of doc.querySelectorAll('img[src^="/assets/"]')) {
      assert.ok(Number(img.getAttribute('width')) > 0,`${path}: image width`);
      assert.ok(Number(img.getAttribute('height')) > 0,`${path}: image height`);
      if (!img.closest('.site-header') && !img.classList.contains('hero-image')) assert.equal(img.getAttribute('loading'),'lazy');
      for (const candidate of (img.getAttribute('srcset') || '').split(',').filter(Boolean)) assert.ok(existsSync(resolve(root,'.'+candidate.trim().split(' ')[0])),candidate);
    }
  }
  for (const prefix of ['', 'pl/', 'ja/']) {
    const doc = document(prefix+'index.html');
    const sections = [...doc.querySelector('main').children];
    assert.ok(sections.indexOf(doc.querySelector('.start-here')) < sections.indexOf(doc.querySelector('[data-updates-module]')));
    assert.equal(doc.querySelector('.hero-image').getAttribute('fetchpriority'),'high');
  }
});

test('sitemap covers all published variants, without query variants or fabricated dates', () => {
  const xml = read('sitemap.xml');
  assert.equal([...xml.matchAll(/<loc>/g)].length,variants.length);
  for (const {file,lang} of variants) assert.ok(xml.includes(`<loc>https://mazur.jp${pagePath(file,lang)}</loc>`));
  assert.ok(!/<loc>[^<]*\?/.test(xml) && !xml.includes('<lastmod>'));
});

test('runtime link routing matches build routing, including Japanese fallback', () => {
  const script = read('script.js');
  const fn = vm.runInNewContext(script.slice(script.indexOf('const portfolioHref ='),script.indexOf('const languageFromUrl ='))+'; portfolioHref', {window:{location:{origin:'https://mazur.jp'}},document:{documentElement:{lang:'en'}},URL});
  for (const href of ['workshops.html#teaching-design-studio','achievements.html#educational-spaces-2026-en','writing.html','/pl/updates.html','assets/story/klamka-ticket.png','https://example.com']) {
    for (const lang of ['en','pl','ja']) assert.equal(fn(href,lang),localHref(href,lang),`${lang}: ${href}`);
  }
});

test('build is deterministic and can run twice without accumulating content', () => {
  const hashes = () => Object.fromEntries(variants.map(({path})=>[path,createHash('sha256').update(read(path)).digest('hex')]));
  const before = hashes();
  execFileSync(process.execPath,['tools/build-seo.mjs'],{cwd:root});
  assert.deepEqual(hashes(),before);
});
