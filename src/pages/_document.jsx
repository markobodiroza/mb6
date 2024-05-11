import { Head, Html, Main, NextScript } from 'next/document'
import { JsonLd } from 'next-seo';
import portraitImage from '@/images/marko-head.jpg'
import logoImg from '@/favicon.png'

const modeScript = `
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
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <JsonLd>
      {{
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        'url': 'https://markobodiroza.com',
        'publisher': {
          '@type': 'Person',
          '@id': 'https://markobodiroza.com/#person',
          'name': 'Marko Bodiroža',
          'url': 'https://markobodiroza.com',
          'image': portraitImage,
          'jobTitle': 'Director of Marketing',
          'worksFor': {
            '@type': 'Organization',
            'name': 'markobodiroza.com',
            'url': 'https://markobodiroza.com',
            'logo': logoImg
          },
          'description': 'Marko Bodiroža is a Data Engineer & AI Specialist helping companies get more sales, create digital strategies, and rebrand.',
          'sameAs': [
            'https://www.twitter.com/markobodiroza/',
            'https://www.linkedin.com/in/markobodiroza/',
            'https://pinterest.com/markobodiroza/',
            'https://github.com/markobodiroza',
            'https://markobodiroza.medium.com/',
          ],
        },
        'mainEntity': {
          '@type': 'WebPage',
          '@id': 'https://markobodiroza.com/#webpage',
          'url': 'https://markobodiroza.com',
          'name': 'Marko Bodiroža: Data Engineer & AI Specialist',
          'description': 'Marko Bodiroža is a Data Engineer & AI Specialist helping companies get more sales, create digital strategies, and rebrand.',
          'image': portraitImage
        }
      }}
    </JsonLd>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
      </Head>
      <body className="flex flex-col h-full bg-neutral-50 dark:bg-black">
        <Main />
        <NextScript />
        <div style={{display: 'none'}}>        <a rel="me" href="https://tty0.social/@bketelsen">Mastodon</a>
</div>
      </body>
    </Html>
  )
}
