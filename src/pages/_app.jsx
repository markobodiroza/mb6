import dynamic from 'next/dynamic'
import localFont from 'next/font/local'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DefaultSeo } from '@/components/Seo'
import SEO from '@/lib/next-seo.config'
import { useReveal } from '@/lib/useReveal'

import '@/styles/tailwind.css'

// The color panel only exists on the dev server; production builds drop it
const DevColorPanel =
  process.env.NODE_ENV === 'development'
    ? dynamic(() => import('@/components/DevColorPanel'), { ssr: false })
    : () => null

// Google Sans Flex, self-hosted (no Google requests). The rond build carries
// the weight and roundness axes only, about 70 KB for Latin. next/font
// preloads it and sizes the fallback so text does not jump when it loads.
const sans = localFont({
  src: '../../node_modules/@fontsource-variable/google-sans-flex/files/google-sans-flex-latin-rond-normal.woff2',
  weight: '1 1000',
  display: 'swap',
  variable: '--font-google-sans',
  adjustFontFallback: 'Arial',
})

export default function App({ Component, pageProps }) {
  useReveal()

  return (
    <div className={`${sans.variable} flex min-h-screen flex-col font-sans`}>
      <DefaultSeo {...SEO} />
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-action px-4 py-2 font-semibold text-action-fg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
      <DevColorPanel />
    </div>
  )
}
