// Writes public/sitemap.xml and public/robots.txt after `next build`.
// Routes come from the page files and articles from their data file, not
// from the build output: on Vercel, pages that use getStaticProps are not
// on disk yet when postbuild runs. Each URL matches the page's canonical
// (absoluteUrl in src/lib/seo.js). Only articles get a lastmod, from their
// published date; a build timestamp on every page would teach search
// engines to ignore lastmod entirely.
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const siteUrl = 'https://markobodiroza.com'
const pagesDir = 'src/pages'

// Special files, error pages, API routes and dynamic routes are not pages
// to list. A page marked noindex belongs here too.
const exclude = /^(_|404|500|api\/)|\[/

async function routes(dir, base = '') {
  let entries = await readdir(dir, { withFileTypes: true })
  let found = await Promise.all(
    entries.map((entry) => {
      let file = path.posix.join(base, entry.name)
      if (entry.isDirectory()) return routes(path.join(dir, entry.name), file)
      if (!entry.name.endsWith('.jsx') || exclude.test(file)) return []
      let route = file.replace(/\.jsx$/, '').replace(/(^|\/)index$/, '')
      return [`/${route}`]
    }),
  )
  return found.flat()
}

// The data file has no imports, so it loads as a module from a data URL
async function insights() {
  let source = await readFile('src/data/insights.js', 'utf8')
  let url = `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
  return (await import(url)).insights
}

let urls = new Map()
for (let route of await routes(pagesDir)) {
  let loc = new URL(route, siteUrl).toString()
  urls.set(loc, { loc })
}
for (let insight of await insights()) {
  let loc = `${siteUrl}/insights/${insight.slug}`
  urls.set(loc, { loc, lastmod: insight.date })
}
urls = [...urls.values()]

// Main pages in menu order, then articles newest first
let order = ['/', '/services', '/work', '/pricing', '/about', '/contact']
let rank = (loc) => {
  let index = order.indexOf(new URL(loc).pathname)
  return index === -1 ? order.length : index
}
urls.sort(
  (a, b) =>
    rank(a.loc) - rank(b.loc) ||
    (b.lastmod ?? '').localeCompare(a.lastmod ?? '') ||
    a.loc.localeCompare(b.loc),
)

let sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  // Browsers show the list as a page; search engines ignore the stylesheet
  '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
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
