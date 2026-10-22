/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['jsx'],
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // The share image route reads its fonts and portrait from disk
  outputFileTracingIncludes: {
    '/api/og': ['./src/assets/og/*.ttf', './src/images/marko-head.jpg'],
  },
  async redirects() {
    return [
      { source: '/process', destination: '/pricing#process', permanent: true },
      // The articles list now lives at the end of About
      { source: '/insights', destination: '/about#insights', permanent: true },
      { source: '/thoughts', destination: '/about#insights', permanent: true },
      { source: '/blog', destination: '/about#insights', permanent: true },
      {
        source: '/blog/:slug*',
        destination: '/about#insights',
        permanent: true,
      },
      {
        source: '/rss/:path*',
        destination: '/about#insights',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
