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
      { source: '/thoughts', destination: '/insights', permanent: true },
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog/:slug*', destination: '/insights', permanent: true },
      { source: '/rss/:path*', destination: '/insights', permanent: true },
    ]
  },
}

export default nextConfig
