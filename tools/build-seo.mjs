import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import vm from 'node:vm';
import { parseHTML } from 'linkedom';
import { pages, pagePath, localHref } from './seo-config.mjs';
import { polishLabels, polishAlts } from './accessibility-copy.mjs';

const root = resolve(import.meta.dirname, '..');
const read = (file) => readFileSync(resolve(root, file), 'utf8');
const write = (file, value) => {
  mkdirSync(dirname(resolve(root, file)), { recursive: true });
  writeFileSync(resolve(root, file), value);
};
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const script = read('script.js');
const translations = vm.runInNewContext(`${script.slice(script.indexOf('const translations ='), script.indexOf('if (year)'))}; translations;`);
const updateCopyStart = script.indexOf('  const copy =', script.indexOf('const archive = document.querySelector("[data-updates-archive]")'));
const updateCopy = vm.runInNewContext(`${script.slice(updateCopyStart, script.indexOf('  const locale =', updateCopyStart))}; copy;`);
const dataContext = { window: {} };
vm.runInNewContext(read('updates.js'), dataContext);
const updates = [...dataContext.window.identitySiteUpdates.updates].sort((a,b) => b.date.localeCompare(a.date));
const pick = (value, lang) => typeof value === 'string' ? value : value[lang] || value.en;
const sources = Object.fromEntries(Object.keys(pages).filter(f => !['apu-pre-fd.html', 'tokyo-game-show-reporting.html'].includes(f)).map(f => [f, read(f)]));
const imageManifest = JSON.parse(read('tools/image-manifest.json'));

function updateEntries(lang, items) {
  return items.map(item => `<article class="update-entry"><a href="${esc(localHref(pick(item.url, lang), lang))}"><div class="update-entry-meta"><time datetime="${item.date}">${esc(new Intl.DateTimeFormat({en:'en-GB',pl:'pl-PL',ja:'ja-JP'}[lang], {dateStyle:'long',timeZone:'UTC'}).format(new Date(item.date)))}</time><span>${esc(pick(item.category, lang))}</span></div><h3>${esc(pick(item.title, lang))}</h3><p>${esc(pick(item.summary, lang))}</p><span class="update-entry-open">${esc(updateCopy[lang].open)} →</span></a></article>`).join('\n');
}

function renderUpdates(doc, lang) {
  doc.querySelectorAll('[data-update-label]').forEach(node => {
    const value = updateCopy[lang][node.dataset.updateLabel];
    if (value) node.textContent = value;
  });
  doc.querySelectorAll('[data-updates-module]').forEach(module => {
    module.removeAttribute('hidden');
    const list = module.querySelector('[data-updates-list]');
    list.innerHTML = updateEntries(lang, updates.slice(0, Number(list.dataset.updatesLimit) || 3));
  });
  const archive = doc.querySelector('[data-updates-archive]');
  if (archive) {
    const years = [...new Set(updates.map(i => i.date.slice(0,4)))];
    archive.innerHTML = years.map(year => `<section class="updates-year"><h2>${year}</h2><div class="updates-archive-list">${updateEntries(lang, updates.filter(i => i.date.startsWith(year)))}</div></section>`).join('\n');
  }
}

function topicSource(file) {
  const doc = parseHTML(sources['workshops.html']).document;
  doc.querySelectorAll('[data-topic-link]').forEach(n => n.remove());
  doc.querySelector('main').outerHTML = read(`content/topics/${file}`);
  // Use the existing header, footer and interactive passport; no invented dates or quotes.
  doc.querySelectorAll('script[type="application/ld+json"]').forEach(n => n.remove());
  return '<!doctype html>\n' + doc.documentElement.outerHTML;
}

function addTopicLinks(doc, file) {
  doc.querySelectorAll('[data-topic-link]').forEach(n => n.remove());
  if (file === 'writing.html') for (const lang of ['en', 'pl']) {
    const article = doc.querySelector(`#key-tgs-${lang}`);
    article.querySelector('details')?.remove();
    article.insertAdjacentHTML('beforeend', `<p data-topic-link><a class="text-link" href="tokyo-game-show-reporting.html">${lang === 'pl' ? 'Tokyo Game Show: fotografie i fragmenty reportażu' : 'Tokyo Game Show: photographs and reporting excerpts'} →</a></p>`);
    const gallery = doc.querySelector(`.writing-field-notes[data-lang-panel="${lang}"]`);
    gallery?.querySelector('.writing-field-notes-grid')?.remove();
    gallery?.insertAdjacentHTML('beforeend', `<p data-topic-link><a class="text-link" href="tokyo-game-show-reporting.html">${lang === 'pl' ? 'Zobacz fotografie z wyjazdów' : 'View photographs from reporting visits'} →</a></p>`);
  }
  if (file === 'workshops.html') for (const lang of ['en','pl','ja']) {
    doc.querySelector(`#apu-prefd-spring-2026-${lang} .course-record-evidence`)?.remove();
    doc.querySelector(`#apu-prefd-spring-2026-${lang} .course-record-copy`).insertAdjacentHTML('beforeend', `<p data-topic-link><a href="apu-pre-fd.html">${{en:'Explore the Pre-FD programme and materials',pl:'Program Pre-FD i materiały z warsztatów',ja:'Pre-FDのプログラムと資料'}[lang]} →</a></p>`);
    const posterCopy = doc.querySelector(`.workshop-artifact-copy[data-lang-panel="${lang}"]`);
    posterCopy.querySelectorAll('p:not(.eyebrow), a').forEach(n => n.remove());
    posterCopy.insertAdjacentHTML('beforeend', `<p>${{en:'The original Pre-FD poster, the workshop design and the Spring 2026 record are collected on the programme page.',pl:'Oryginalny plakat Pre-FD, opis projektu warsztatów i dokumentację edycji wiosennej 2026 znajdziesz na stronie programu.',ja:'Pre-FDのオリジナルポスター、ワークショップの設計、2026年春の記録をプログラムのページにまとめています。'}[lang]}</p><a class="text-link" href="apu-pre-fd.html">${{en:'See the programme and materials',pl:'Zobacz program i materiały',ja:'プログラムと資料を見る'}[lang]} →</a>`);
  }
  if (file === 'case-studies.html') for (const lang of ['en','pl','ja']) {
    const study = doc.querySelector(`.case-study-list[data-lang-panel="${lang}"] .case-study`);
    study.querySelector('dl')?.remove();
    study.querySelector('.case-study-body').insertAdjacentHTML('beforeend', `<p data-topic-link><a href="apu-pre-fd.html">${{en:'Read the Pre-FD case study and see the materials',pl:'Przeczytaj studium przypadku Pre-FD i zobacz materiały',ja:'Pre-FDの実践事例と資料を見る'}[lang]} →</a></p>`);
  }
}

function polishAccessibility(doc, lang) {
  doc.querySelectorAll('.skip-link').forEach(n => n.remove());
  const main = doc.querySelector('main');
  main.setAttribute('tabindex','-1');
  doc.body.insertAdjacentHTML('afterbegin', `<a class="skip-link" href="#${main.id}">${{en:'Skip to content',pl:'Przejdź do treści',ja:'本文へ移動'}[lang]}</a>`);
  if (lang !== 'pl') return;
  doc.querySelectorAll('[aria-label]').forEach(n => {
    const original = n.getAttribute('aria-label');
    if (polishLabels[original]) n.setAttribute('aria-label',polishLabels[original]);
  });
  doc.querySelectorAll('img[alt]').forEach(n => {
    if (polishAlts[n.alt]) n.alt = polishAlts[n.alt];
  });
}

function optimiseImages(doc) {
  for (const img of doc.querySelectorAll('img')) {
    const original = img.getAttribute('data-original-src') || img.getAttribute('src');
    const info = imageManifest[original?.split('?')[0]];
    const hero = img.classList.contains('hero-image');
    const logo = Boolean(img.closest('.site-header'));
    img.setAttribute('decoding','async');
    img.setAttribute('loading', hero || logo ? 'eager' : 'lazy');
    if (hero) img.setAttribute('fetchpriority','high');
    if (!info) continue;
    img.setAttribute('width',info.width); img.setAttribute('height',info.height);
    if (!info.variants) continue;
    img.setAttribute('data-original-src',original);
    img.src = info.variants.at(-1).src;
    img.setAttribute('srcset',info.variants.map(v=>`${v.src} ${v.width}w`).join(', '));
    // The landscape hero covers a tall phone viewport, so size it for the crop.
    img.setAttribute('sizes', hero ? '(max-width: 600px) 180vh, 100vw' : logo ? '64px' : '(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 800px');
  }
}

function transform(html, file, lang) {
  const { document: doc } = parseHTML(html);
  const config = pages[file];
  const url = `https://mazur.jp${pagePath(file,lang)}`;
  doc.documentElement.lang = lang;
  doc.documentElement.setAttribute('data-page-language', lang);
  doc.documentElement.setAttribute('data-page-file', file);
  doc.documentElement.setAttribute('data-page-languages', config.langs.join(' '));
  const [title, description] = config[lang] || [doc.title, doc.querySelector('meta[name="description"]').content];
  doc.title = title;
  const meta = (attr, key, content) => {
    let node = doc.querySelector(`meta[${attr}="${key}"]`);
    if (!node) { node = doc.createElement('meta'); node.setAttribute(attr,key); doc.head.append(node); }
    node.setAttribute('content', content);
  };
  meta('name','description',description);
  meta('property','og:title',title); meta('property','og:description',description); meta('property','og:url',url);
  meta('property','og:locale',{en:'en_US',pl:'pl_PL',ja:'ja_JP'}[lang]);
  meta('name','twitter:title',title); meta('name','twitter:description',description);
  doc.querySelector('link[rel="canonical"]').href = url;
  doc.querySelectorAll('link[hreflang]').forEach(n => n.remove());
  for (const alternative of [...config.langs,'x-default']) {
    const node = doc.createElement('link'); node.rel = 'alternate'; node.hreflang = alternative;
    node.href = `https://mazur.jp${pagePath(file, alternative === 'x-default' ? 'en' : alternative)}`;
    doc.head.append(node);
  }
  const dictionary = translations[lang];
  doc.querySelectorAll('[data-i18n]').forEach(n => { const key = n.getAttribute('data-i18n'); if (dictionary[key]) n.textContent = dictionary[key]; });
  doc.querySelectorAll('[data-i18n-aria-label]').forEach(n => { const key = n.getAttribute('data-i18n-aria-label'); if (dictionary[key]) n.setAttribute('aria-label',dictionary[key]); });
  doc.querySelectorAll('[data-person-name], [data-person-name-headline]').forEach(n => { n.textContent = lang === 'ja' ? 'マズル ミハウ マチェイ' : 'Michal Maciej Mazur'; });
  doc.querySelectorAll('[data-lang-panel]').forEach(n => {
    if (n.dataset.langPanel === lang) n.removeAttribute('hidden'); else n.setAttribute('hidden','');
  });
  // Keep shared fragment URLs pointing at the visible language panel.
  if (lang !== 'en') for (const node of [...doc.querySelectorAll('[id]')]) {
    if (node.closest('[data-lang-panel]')?.dataset.langPanel !== 'en' || /-(en|pl|ja)$/.test(node.id)) continue;
    const chapter = node.getAttribute('data-portfolio-chapter-target');
    let counterpart = chapter ? [...doc.querySelectorAll(`[data-portfolio-chapter-target="${chapter}"]`)].find(n => n.closest('[data-lang-panel]')?.dataset.langPanel === lang) : null;
    if (!counterpart && node.id === 'research-method') counterpart = doc.querySelector(`[data-lang-panel="${lang}"] .comix-demo`);
    if (!counterpart && node.matches('[data-lang-panel]')) counterpart = [...doc.querySelectorAll(`[data-lang-panel="${lang}"]`)].find(n => n.className === node.className);
    if (counterpart) {
      const anchor = doc.createElement('span'); anchor.id = node.id; anchor.className = 'anchor-target'; anchor.setAttribute('aria-hidden','true');
      node.id += '-en'; counterpart.before(anchor);
    }
  }
  addTopicLinks(doc,file);
  renderUpdates(doc,lang);
  if (file === 'index.html') {
    const start = doc.querySelector('.start-here');
    const latest = doc.querySelector('[data-updates-module]');
    if (start && latest) latest.before(start);
  }
  doc.querySelectorAll('.language-switch').forEach(n => {
    n.innerHTML = config.langs.map(l => `<a data-lang="${l}" href="${pagePath(file,l)}" hreflang="${l}" lang="${l}" ${l === lang ? 'class="is-active" aria-current="page"' : ''}>${l === 'ja' ? 'JP' : l.toUpperCase()}</a>`).join('');
  });
  doc.querySelectorAll('a[href]').forEach(n => {
    if (n.hasAttribute('data-lang')) return;
    const panelLang = n.closest('[data-lang-panel]')?.dataset.langPanel || lang;
    let href = localHref(n.getAttribute('href'),panelLang,file);
    if (href.startsWith('#') && /-(en|pl|ja)$/.test(href)) {
      const translated = href.replace(/-(en|pl|ja)$/, `-${panelLang}`);
      if (doc.getElementById(translated.slice(1))) href = translated;
    }
    n.setAttribute('href',href);
  });
  // Root-relative resource paths work in /pl/ and /ja/ without a <base> that breaks fragments.
  for (const attr of ['src','poster','href']) doc.querySelectorAll(`[${attr}]`).forEach(n => {
    if (attr === 'href' && n.tagName === 'A') return;
    const value = n.getAttribute(attr);
    if (value && !/^(?:[a-z]+:|\/|#)/i.test(value)) n.setAttribute(attr, '/' + value);
  });
  doc.querySelectorAll('[srcset]').forEach(n => n.setAttribute('srcset',n.getAttribute('srcset').replace(/(^|,\s*)(assets\/)/g,'$1/$2')));
  doc.querySelectorAll('[style]').forEach(n => n.setAttribute('style',n.getAttribute('style').replace(/url\((["']?)(assets\/)/g,'url($1/$2')));
  polishAccessibility(doc,lang);
  optimiseImages(doc);
  doc.querySelectorAll('meta[property="og:image"], meta[name="twitter:image"]').forEach(n => n.content = new URL(n.content,'https://mazur.jp/').href);
  doc.querySelectorAll('script[type="application/ld+json"]').forEach(n => {
    const data = JSON.parse(n.textContent);
    for (const entity of data['@graph'] || [data]) {
      if (['ProfilePage','Article','WebPage'].includes(entity['@type'])) {
        entity.inLanguage = lang; entity.url = url;
        if (entity['@type'] === 'ProfilePage') entity['@id'] = `${url}#profile`;
        if (entity['@type'] === 'Article') entity.headline = doc.querySelector(`[data-lang-panel="${lang}"] h1, h1`)?.textContent || title;
      }
    }
    n.textContent = JSON.stringify(data,null,2);
  });
  doc.querySelectorAll('link[data-seo-layout]').forEach(n => n.remove());
  doc.head.insertAdjacentHTML('beforeend','<link data-seo-layout rel="stylesheet" href="/seo-layout.css?v=2">');
  doc.querySelectorAll('script[src*="script.js"]').forEach(n => n.src = '/script.js?v=124');
  // Localized documents contain only their language. The English source retains
  // all editorial panels for rebuilding; language links navigate between files.
  if (lang !== 'en') doc.querySelectorAll('[data-lang-panel]').forEach(n => {
    if (n.dataset.langPanel !== lang) n.remove();
  });
  return '<!doctype html>\n' + doc.documentElement.outerHTML.replace(/[\t ]+$/gm, '') + '\n';
}

for (const file of ['apu-pre-fd.html','tokyo-game-show-reporting.html']) sources[file] = topicSource(file);
for (const [file, config] of Object.entries(pages)) for (const lang of config.langs) {
  write(lang === 'en' ? file : `${lang}/${file}`, transform(sources[file],file,lang));
}
const urls = Object.entries(pages).flatMap(([file,config]) => config.langs.map(lang => `  <url><loc>https://mazur.jp${pagePath(file,lang)}</loc></url>`));
write('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
console.log(`Built ${urls.length} static pages. Original language panels and quotations preserved.`);
