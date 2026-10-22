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
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div>
          <p className="label text-link">{example.client}</p>
          <h2
            id={`${example.slug}-title`}
            className="text-heading mt-2 max-w-3xl"
          >
            {example.title}
          </h2>
        </div>
        <div className="lg:max-w-md lg:flex-none">
          <h3 className="label text-muted lg:text-right">Tools</h3>
          <ul role="list" className="mt-3 flex flex-wrap gap-2 lg:justify-end">
            {example.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-[color-mix(in_oklch,var(--link)_14%,var(--paper))] px-3.5 py-1.5 text-ui font-semibold text-link dark:bg-raised dark:text-on-raised"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <WorkDiagram
        lanes={example.diagram}
        label={`Diagram: ${example.title}`}
        className="mt-8"
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-10">
        <section>
          <h3 className="text-title">Start</h3>
          <p className="mt-3 text-graphite">{example.situation}</p>
        </section>
        <section>
          <h3 className="text-title">What I Built</h3>
          <ul
            role="list"
            className="mt-4 list-disc space-y-2 pl-5 text-graphite marker:text-link"
          >
            {example.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {/* Results carry the story, so they get the raised card */}
        <section className="on-brand self-start rounded-[1.25rem] bg-brand p-6 text-on-brand shadow-card dark:bg-raised">
          <h3 className="text-title">Results</h3>
          <ul role="list" className="mt-4 space-y-3">
            {example.changed.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckIcon className="mt-[0.2rem] h-5 w-5 flex-none text-citron" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </section>
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
