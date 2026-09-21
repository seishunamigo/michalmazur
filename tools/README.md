# Static language pages and SEO checks

The eight existing English URLs stay in place. Polish and Japanese versions live
under `/pl/` and `/ja/`. The two topic pages gather existing material about Tokyo
Game Show reporting and APU Pre-FD. The Tokyo Game Show topic page currently has
English and Polish versions; no Japanese translation is advertised for it.

## Editing and building

1. Edit the original root HTML files. They retain all editorial language panels.
2. Edit shared UI translations in `script.js` and updates in `updates.js`.
3. For titles, descriptions and available language routes, edit `tools/seo-config.mjs`.
4. Run `npm ci` once, then `npm run images`, `npm run build` and `npm test`.
5. Review the root pages plus `/pl/` and `/ja/` before publishing.

Do not edit generated files in `pl/` or `ja/`, or the generated topic pages
`apu-pre-fd.html` and `tokyo-game-show-reporting.html`. Their full editorial content
now lives in `content/topics/`; the overview pages link to those detailed records.
The build is deterministic. Original quotations are retained on the topic page.

Image preparation retains the originals, generates responsive WebP copies under
`assets/optimized/`, and records dimensions in `tools/image-manifest.json`. Run it
again after adding or replacing images. Posters and text-heavy scans retain their
original format. Publish the generated images together with the HTML.

The build creates translated initial HTML, localized navigation, working section
anchors, language links, self-referencing canonicals, reciprocal hreflang links,
static updates and `sitemap.xml`. It does not manufacture publication dates.
The same update data is used for initial HTML and browser enhancements.

Legacy `?lang=pl` and `?lang=ja` links navigate to their language URL and retain
other parameters, such as `design=emi`. Language selection is URL-based; stored
preferences cannot override a shared link. Passport storage remains shared
across all languages on the same origin.

## Checks

`npm test` checks all published routes, language metadata, internal resource and
fragment links, static translations, the update archive, sitemap coverage,
runtime link routing and repeatable builds. It compares existing blockquotes
against `origin/main` to catch unintended changes to quotations.

Browser QA should additionally cover mobile layout, language navigation,
Co-MIX, Teaching Design Studio and the passport drawer. Do not submit public
visitor-book messages as a test.

## Publishing

Publish only the HTML, `pl/`, `ja/`, `script.js`, `seo-layout.css`, sitemap, and
build/test files belonging to this change. Do not sweep unrelated working-tree
changes into the release. The existing CNAME and hosting configuration stay as-is.

After publication, verify the public URLs, canonical and language links, then
submit the existing sitemap URL in Search Console if an updated submission is
needed. Do not request indexing of every language/parameter combination, and do
not try to force redirect or duplicate URLs into the index. Indexing and ranking
remain Google's decision.
