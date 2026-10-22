<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <title>Sitemap: Marko Bodiroza</title>
        <style>
          :root { color-scheme: light dark; --paper: oklch(0.985 0.005 265); --ink: oklch(0.2 0.03 268); --muted: oklch(0.45 0.03 265); --rule: oklch(0.87 0.022 265); --brand: oklch(0.37 0.19 268); --link: oklch(0.43 0.2 268); }
          @media (prefers-color-scheme: dark) { :root { --paper: oklch(0.23 0.09 268); --ink: oklch(0.98 0.006 265); --muted: oklch(0.85 0.04 262); --rule: oklch(0.38 0.11 268); --brand: oklch(0.28 0.14 268); --link: oklch(0.91 0.19 117); } }
          * { box-sizing: border-box; }
          body { margin: 0; background: var(--paper); color: var(--ink); font: 17px/1.6 ui-sans-serif, system-ui, sans-serif; }
          header { background: var(--brand); color: oklch(0.985 0.005 265); padding: 48px 20px; }
          main, header div { max-width: 1440px; margin: 0 auto; padding: 0 12px; }
          h1 { margin: 0; font-size: 2.4rem; line-height: 1.1; letter-spacing: -0.03em; }
          header p { margin: 12px 0 0; opacity: 0.85; }
          table { width: 100%; border-collapse: collapse; margin: 40px 0 64px; }
          th { text-align: left; font-size: 15px; padding: 12px 16px 12px 0; border-bottom: 2px solid var(--ink); }
          td { padding: 14px 16px 14px 0; border-bottom: 1px solid var(--rule); vertical-align: top; }
          td.date { color: var(--muted); white-space: nowrap; width: 9rem; }
          a { color: var(--link); font-weight: 600; text-decoration: none; word-break: break-word; }
          a:hover { text-decoration: underline; text-underline-offset: 4px; }
        </style>
      </head>
      <body>
        <header>
          <div>
            <h1>Sitemap</h1>
            <p><xsl:value-of select="count(s:urlset/s:url)" /> pages on markobodiroza.com. This file helps search engines and AI tools find every page.</p>
          </div>
        </header>
        <main>
          <table>
            <thead>
              <tr><th>Page</th><th>Updated</th></tr>
            </thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td><a href="{s:loc}"><xsl:value-of select="s:loc" /></a></td>
                  <td class="date"><xsl:value-of select="s:lastmod" /></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
