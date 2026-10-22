// Writes public/sitemap.xml and public/robots.txt after `next build`.
// Pages come from the prerendered HTML, so the sitemap always matches what
// is served: each page's canonical URL, skipping anything marked noindex.
// Only articles get a lastmod, from their published date; a build timestamp
// on every page would teach search engines to ignore lastmod entirely.
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const siteUrl = 'https://markobodiroza.com'
const pagesDir = '.next/server/pages'

async function htmlFiles(dir) {
  let entries = await readdir(dir, { withFileTypes: true })
  let files = await Promise.all(
    entries.map((entry) => {
      let full = path.join(dir, entry.name)
      if (entry.isDirectory()) return htmlFiles(full)
      return entry.name.endsWith('.html') ? [full] : []
    }),
  )
  return files.flat()
}

function meta(html, attr, name) {
  let tag = html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*>`))
  return tag?.[0].match(/content="([^"]*)"/)?.[1]
}

// Articles come from their data file too: on Vercel the prerendered pages
// of dynamic routes are not on disk yet when postbuild runs. The file has
// no imports, so it loads as a module from a data URL.
async function insights() {
  let source = await readFile('src/data/insights.js', 'utf8')
  let url = `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
  return (await import(url)).insights
}

let urls = new Map()
for (let file of await htmlFiles(pagesDir)) {
  let html = await readFile(file, 'utf8')
  let canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  if (!canonical || /noindex/.test(meta(html, 'name', 'robots') ?? '')) continue
  urls.set(canonical, {
    loc: canonical,
    lastmod:
      meta(html, 'property', 'article:modified_time') ??
      meta(html, 'property', 'article:published_time'),
  })
}
for (let insight of await insights()) {
  let loc = `${siteUrl}/insights/${insight.slug}`
  urls.set(loc, { loc, lastmod: insight.date })
}
urls = [...urls.values()]

// Home first, then by path
urls.sort((a, b) =>
  a.loc === `${siteUrl}/`
    ? -1
    : b.loc === `${siteUrl}/`
      ? 1
      : a.loc.localeCompare(b.loc),
)

let sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(
    ({ loc, lastmod }) =>
      `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`,
  ),
  '</urlset>',
  '',
].join('\n')

let robots = [
  'User-agent: *',
  'Allow: /',
  '',
  `Sitemap: ${siteUrl}/sitemap.xml`,
  '',
].join('\n')

await writeFile('public/sitemap.xml', sitemap)
await writeFile('public/robots.txt', robots)
console.log(`Sitemap: ${urls.length} URLs written to public/sitemap.xml`)
