/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['jsx'],
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/thoughts', destination: '/insights', permanent: true },
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog/:slug*', destination: '/insights', permanent: true },
      { source: '/rss/:path*', destination: '/insights', permanent: true },
    ]
  },
}

export default nextConfig
