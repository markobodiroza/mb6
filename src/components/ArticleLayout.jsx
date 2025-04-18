import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  const [canonicalUrl, setCanonicalUrl] = useState(null)
  const [canGoBack, setCanGoBack] = useState(false)

  useEffect(() => {
    // Only run in the browser
    const { asPath } = window.__NEXT_DATA__.page === '/_error'
      ? { asPath: '/' }
      : window.history.state || {}

    const finalPath = asPath || window.location.pathname
    setCanonicalUrl(`https://markobodiroza.com${finalPath}`)
    setCanGoBack(document.referrer && document.referrer !== window.location.href)
  }, [])

  if (isRssFeed) return children

  return (
    <>
      {canonicalUrl && (
        <NextSeo
          title={meta.title}
          description={meta.description}
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            images: [
              {
                url: `https://og.markobodiroza.com/api/og?title=${meta.title}&desc=${meta.description}`,
                width: 1200,
                height: 600,
                alt: 'Og Image Alt',
                type: 'image/jpeg',
              },
            ],
            siteName: 'markobodiroza.com',
          }}
        />
      )}
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && canGoBack && (
              <button
                type="button"
                onClick={() => window.history.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 transition dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0 dark:ring-white/10 dark:hover:border-neutral-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-neutral-500 transition group-hover:stroke-neutral-700 dark:stroke-neutral-500 dark:group-hover:stroke-neutral-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-neutral-500 dark:text-neutral-200"
                >
                  <span className="h-4 w-0.5 rounded-full bg-neutral-500 dark:bg-neutral-200" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
