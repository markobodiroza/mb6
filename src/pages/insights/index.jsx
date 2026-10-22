import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { InsightRow } from '@/components/InsightRow'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { insightSummary, insights } from '@/data/insights'
import { absoluteUrl, breadcrumbSchema, pageOpenGraph } from '@/lib/seo'

const title = 'AI Insights'
const description =
  'Notes by Marko Bodiroza on AI search, AI adoption and how teams can put AI to work.'

export default function Insights({ items }) {
  return (
    <>
      <NextSeo
        title="AI Insights: Marko Bodiroza"
        description={description}
        canonical={absoluteUrl('/insights')}
        openGraph={pageOpenGraph({ path: '/insights', title, description })}
      />
      <JsonLd
        id="insights"
        data={{
          '@graph': [
            {
              '@type': 'CollectionPage',
              url: absoluteUrl('/insights'),
              name: title,
              description,
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: items.map((insight, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  url: absoluteUrl(`/insights/${insight.slug}`),
                  name: insight.title,
                })),
              },
            },
            breadcrumbSchema([['Insights', '/insights']]),
          ],
        }}
      />
      <PageHeader title={title}>
        Short, practical notes on AI search, AI adoption and putting AI to work
        in marketing teams.
      </PageHeader>
      <Container>
        <div className="mt-lead border-t-2 border-ink dark:border-field">
          {items.map((insight) => (
            <InsightRow key={insight.slug} insight={insight} as="h2" />
          ))}
        </div>
      </Container>
      <CtaBand title="Turn Ideas Into Working Systems">
        Read something you want for your team? Let’s talk about how to put it to
        work.
      </CtaBand>
    </>
  )
}

// Read at build time, so full articles stay out of the page's JavaScript
export function getStaticProps() {
  return { props: { items: insights.map(insightSummary) } }
}
