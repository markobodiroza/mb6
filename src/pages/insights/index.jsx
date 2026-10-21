import { NextSeo } from 'next-seo'

import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { InsightRow } from '@/components/InsightRow'
import { PageHeader } from '@/components/PageHeader'
import { insights } from '@/data/insights'
import { absoluteUrl, pageOpenGraph } from '@/lib/seo'

const title = 'AI Insights'
const description =
  'Notes by Marko Bodiroza on AI search, AI adoption and how teams can put AI to work.'

export default function Insights() {
  return (
    <>
      <NextSeo
        title="AI Insights: Marko Bodiroza"
        description={description}
        canonical={absoluteUrl('/insights')}
        openGraph={pageOpenGraph({ path: '/insights', title, description })}
      />
      <PageHeader eyebrow="Insights" title={title}>
        Short, practical notes on AI search, AI adoption and putting AI to work
        in marketing teams.
      </PageHeader>
      <Container>
        <div className="mt-lead border-t-2 border-ink">
          {insights.map((insight) => (
            <InsightRow key={insight.slug} insight={insight} as="h2" />
          ))}
        </div>
      </Container>
      <CtaBand />
    </>
  )
}
