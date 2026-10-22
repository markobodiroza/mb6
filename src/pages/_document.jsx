import { Head, Html, Main, NextScript } from 'next/document'
import siteMeta from '@/data/siteMeta'

const modeScript = `
  // Scroll reveals only when motion is welcome and the browser supports it
  if (
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    document.documentElement.classList.add('reveal-ready')
  }

  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('**:transition-none!')
    window.setTimeout(() => {
      document.documentElement.classList.remove('**:transition-none!')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="6Y5LdwUX5hOcmfv8BFx27Zy2ody8ntkT20Xe23Nidho"
        />
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link rel="icon" href="/fixed/favicons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fixed/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fixed/favicons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/fixed/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/fixed/favicons/site.webmanifest" />
        {/* Browser UI color matches the header paper in each theme */}
        <meta
          name="theme-color"
          content="#f8fafe"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0b1746"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
