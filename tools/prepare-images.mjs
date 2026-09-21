import { readFileSync, writeFileSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import sharp from 'sharp';
import { parseHTML } from 'linkedom';
import { pages } from './seo-config.mjs';

const root = resolve(import.meta.dirname, '..');
const paths = new Set();
for (const file of Object.keys(pages)) {
  const doc = parseHTML(readFileSync(resolve(root, file), 'utf8')).document;
  for (const img of doc.querySelectorAll('img')) {
    const src = img.getAttribute('data-original-src') || img.getAttribute('src');
    if (src?.startsWith('/assets/') && /\.(png|jpe?g)(\?|$)/i.test(src)) paths.add(src.split('?')[0]);
  }
}
const manifest = {};
for (const src of [...paths].sort()) {
  const file = resolve(root, '.' + src);
  const { width, height } = await sharp(file).metadata();
  const entry = manifest[src] = { width, height };
  // Keep text-heavy posters and scans in their original format and resolution.
  const photo = !/event-artifacts|teaching-materials|story\//.test(src);
  if (!photo || statSync(file).size < 60000) continue;
  const maxWidth = Math.min(width, 1920);
  const widths = [...new Set([480, 960, maxWidth].filter(w => w <= maxWidth))].sort((a,b) => a-b);
  const variants = [];
  for (const w of widths) {
    const dest = '/assets/optimized/' + src.slice('/assets/'.length).replace(new RegExp(extname(src) + '$'), '') + `-${w}.webp`;
    const output = resolve(root, '.' + dest);
    mkdirSync(dirname(output), { recursive: true });
    if (!existsSync(output) || statSync(file).mtimeMs > statSync(output).mtimeMs) {
      await sharp(file).resize({ width: w, withoutEnlargement: true }).webp({ quality: 84, effort: 5 }).toFile(output);
    }
    variants.push({ src: dest, width: w });
  }
  entry.variants = variants;
}
writeFileSync(resolve(root, 'tools/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared dimensions for ${paths.size} images and responsive WebP copies. Originals retained.`);
