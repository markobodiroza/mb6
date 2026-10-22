import { ArrowLink, BookCallButton } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { CheckIcon } from '@/components/Icons'
import { InsightRow } from '@/components/InsightRow'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { insightSummary, insights } from '@/data/insights'
import { formatDate } from '@/lib/formatDate'
import {
  absoluteUrl,
  breadcrumbSchema,
  ogImage,
  pageOpenGraph,
  personSchema,
} from '@/lib/seo'

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
          '@graph': [
            {
              '@type': 'BlogPosting',
              headline: insight.title,
              description: insight.description,
              datePublished: insight.date,
              inLanguage: 'en-US',
              url: absoluteUrl(path),
              mainEntityOfPage: absoluteUrl(path),
              image: ogImage({
                title: insight.title,
                description: insight.description,
              }).url,
              author: personSchema,
              publisher: { '@id': personSchema['@id'] },
            },
            breadcrumbSchema([
              ['Insights', '/insights'],
              [insight.title, path],
            ]),
          ],
        }}
      />
      <PageHeader
        label={<time dateTime={insight.date}>{formatDate(insight.date)}</time>}
        title={insight.title}
      >
        {insight.description}
      </PageHeader>
      <Container className="mt-lead grid gap-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-20">
        <article className="max-w-measure">
          <p className="text-lead font-medium">{insight.intro}</p>
          {insight.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="text-subhead leading-[1.2] font-[780] tracking-[-0.022em]">
                {section.heading}
              </h2>
              <p className="mt-3 text-prose leading-[1.7] text-graphite">
                {section.body}
              </p>
            </section>
          ))}
          <section
            data-reveal
            className="mt-14 rounded-[1.25rem] bg-sunken p-7 sm:p-8"
          >
            <h2 className="text-title">Where to Start</h2>
            <ul role="list" className="mt-5 space-y-3">
              {insight.nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    style={{ '--i': index }}
                    className="step-pop flex h-8 w-8 flex-none items-center justify-center rounded-full bg-citron text-on-citron"
                  >
                    <CheckIcon className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <aside className="lg:pt-2">
          <div className="on-night rounded-[1.75rem] bg-night p-8 text-on-night lg:sticky lg:top-28 dark:ring-2 dark:ring-rule">
            <p className="label text-citron">Want This for Your Team?</p>
            <p className="mt-3 text-headline leading-[1.35] font-bold">
              I help marketing teams turn ideas like these into working AI
              systems.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <BookCallButton variant="on-brand" />
              <ArrowLink href="/insights" color="text-on-night" marker={false}>
                Read More Insights
              </ArrowLink>
            </div>
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
  // sourceUrl is for fact checking only, so it stays out of the page data
  let insight = { ...insights[index] }
  delete insight.sourceUrl
  let more = insights
    .filter((_, i) => i !== index)
    .slice(0, 3)
    .map(insightSummary)
  return { props: { insight, more } }
}
