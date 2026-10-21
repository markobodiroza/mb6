/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://markobodiroza.com',
  generateRobotsTxt: true, // also generates robots.txt
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/thank-you'], // optional
  robotsTxtOptions: {
    // next-sitemap always adds a Host line, which Google ignores and flags
    transformRobotsTxt: async (_, robotsTxt) =>
      robotsTxt.replace(/# Host\nHost: .*\n\n?/, ''),
  },
}
