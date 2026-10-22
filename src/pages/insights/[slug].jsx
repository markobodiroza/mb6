import Link from 'next/link'

import { BookCallButton } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/Icons'
import { InsightRow } from '@/components/InsightRow'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { insights } from '@/data/insights'
import { formatDate } from '@/lib/formatDate'
import { absoluteUrl, pageOpenGraph, personSchema } from '@/lib/seo'

export default function Insight({ insight, more }) {
  let path = `/insights/${insight.slug}`

  return (
    <>
      <NextSeo
        title={insight.seoTitle ?? insight.title}
        description={insight.description}
        canonical={absoluteUrl(path)}
        openGraph={{
          ...pageOpenGraph({
            path,
            title: insight.title,
            description: insight.description,
          }),
          type: 'article',
          article: {
            publishedTime: insight.date,
            authors: [absoluteUrl('/about')],
          },
        }}
      />
      <JsonLd
        id="insight"
        data={{
          '@type': 'BlogPosting',
          headline: insight.title,
          description: insight.description,
          datePublished: insight.date,
          url: absoluteUrl(path),
          mainEntityOfPage: absoluteUrl(path),
          isBasedOn: insight.sourceUrl,
          author: personSchema,
        }}
      />
      <PageHeader
        eyebrow={
          <time dateTime={insight.date}>{formatDate(insight.date)}</time>
        }
        title={insight.title}
      >
        {insight.description}
      </PageHeader>
      <Container className="mt-lead grid gap-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-20">
        <article className="max-w-prose">
          <p className="text-lead font-medium">{insight.intro}</p>
          {insight.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="text-[1.625rem] leading-[1.2] font-[780] tracking-[-0.022em]">
                {section.heading}
              </h2>
              <p className="mt-3 text-[1.125rem] leading-[1.7] text-graphite">
                {section.body}
              </p>
            </section>
          ))}
          <section
            data-reveal
            className="mt-14 rounded-[1.25rem] bg-sunken p-7 sm:p-8"
          >
            <h2 className="text-title">Where to Start</h2>
            <ol className="mt-5 space-y-3">
              {insight.nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    style={{ '--i': index }}
                    className="step-pop flex h-8 w-8 flex-none items-center justify-center rounded-full bg-citron text-[0.9375rem] font-[850] text-on-citron"
                  >
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>
          <p className="mt-10 text-graphite">
            This is a summary. The full article, with sources and examples, was
            first published on{' '}
            <a
              href={insight.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link marker-hover inline-flex items-center gap-1"
            >
              npws.net
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            .
          </p>
        </article>
        <aside className="lg:pt-2">
          <div className="on-night rounded-[1.75rem] bg-night p-8 text-on-night lg:sticky lg:top-28 dark:ring-2 dark:ring-rule">
            <p className="eyebrow text-citron">Want This for Your Team?</p>
            <p className="mt-3 text-[1.375rem] leading-[1.35] font-bold">
              I help marketing teams turn ideas like these into working AI
              systems.
            </p>
            <BookCallButton variant="on-brand" className="mt-6" />
            <Link
              href="/insights"
              className="group mt-6 flex items-center gap-2 font-semibold text-on-night-muted hover:text-on-night"
            >
              All Insights
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1" />
            </Link>
          </div>
        </aside>
      </Container>
      {more.length > 0 && (
        <Container
          as="section"
          className="mt-section"
          aria-labelledby="more-heading"
        >
          <h2 id="more-heading" className="text-section">
            More Insights
          </h2>
          <div className="mt-8 border-t-2 border-ink">
            {more.map((item) => (
              <InsightRow key={item.slug} insight={item} />
            ))}
          </div>
        </Container>
      )}
      <CtaBand />
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: insights.map((insight) => ({ params: { slug: insight.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  let index = insights.findIndex((insight) => insight.slug === params.slug)
  let more = insights.filter((_, i) => i !== index).slice(0, 3)
  return { props: { insight: insights[index], more } }
}
