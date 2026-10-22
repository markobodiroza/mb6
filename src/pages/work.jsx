import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { CheckIcon } from '@/components/Icons'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { WorkDiagram } from '@/components/WorkDiagram'
import { workExamples } from '@/data/work'
import {
  absoluteUrl,
  breadcrumbSchema,
  pageOpenGraph,
  personSchema,
} from '@/lib/seo'

const description =
  'AI systems Marko Bodiroza built for real teams: agency AI skills, content pipelines, sales follow-up, connected operations and custom MCP connectors.'

function Story({ example }) {
  return (
    <article
      id={example.slug}
      aria-labelledby={`${example.slug}-title`}
      className="scroll-mt-28 border-t-2 border-ink pt-12"
    >
      <p className="label text-link">{example.client}</p>
      <h2
        id={`${example.slug}-title`}
        className="mt-2 max-w-3xl text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] leading-[1.1] font-[780] tracking-[-0.03em]"
      >
        {example.title}
      </h2>
      <WorkDiagram
        lanes={example.diagram}
        label={`Diagram: ${example.title}`}
        className="mt-8"
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
        <section>
          <h3 className="text-title">The Situation</h3>
          <p className="mt-3 leading-[1.65] text-graphite">
            {example.situation}
          </p>
        </section>
        <section>
          <h3 className="text-title">What I Built</h3>
          <ul
            role="list"
            className="mt-3 list-disc space-y-2 pl-5 text-graphite marker:text-link"
          >
            {example.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-title">What Changed</h3>
          <ul role="list" className="mt-3 space-y-2">
            {example.changed.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckIcon className="mt-[0.2rem] h-5 w-5 flex-none text-link" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="mt-10">
        <h3 className="label text-muted">Tools</h3>
        <ul role="list" className="mt-3 flex flex-wrap gap-2">
          {example.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border-2 border-rule px-3.5 py-1.5 text-[0.9375rem] font-semibold"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <>
      <NextSeo
        title="Work: Marko Bodiroza"
        description={description}
        canonical={absoluteUrl('/work')}
        openGraph={pageOpenGraph({
          path: '/work',
          title: 'Work',
          description,
        })}
      />
      <JsonLd
        id="work"
        data={{
          '@graph': [
            {
              '@type': 'CollectionPage',
              url: absoluteUrl('/work'),
              name: 'Work',
              description,
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: workExamples.map((example, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                    '@type': 'CreativeWork',
                    name: example.title,
                    description: example.summary,
                    url: absoluteUrl(`/work#${example.slug}`),
                    keywords: example.tools.join(', '),
                    creator: personSchema,
                  },
                })),
              },
            },
            breadcrumbSchema([['Work', '/work']]),
          ],
        }}
      />
      <PageHeader title="AI Systems at Work">
        Five systems I built for real teams. Client names stay private; the work
        and the results are real.
      </PageHeader>
      <Container className="mt-lead flex flex-col gap-section">
        {workExamples.map((example) => (
          <Story key={example.slug} example={example} />
        ))}
      </Container>
      <CtaBand />
    </>
  )
}
