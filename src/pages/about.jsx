import Image from 'next/image'

import { BookCallButton, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { resume, tools } from '@/data/content'
import siteMeta from '@/data/siteMeta'
import portraitImage from '@/images/marko-head.jpg'
import { contactHref } from '@/lib/contact'
import {
  absoluteUrl,
  breadcrumbSchema,
  pageOpenGraph,
  personSchema,
} from '@/lib/seo'

const description =
  'Marko Bodiroza is an AI strategist and system builder. He designs and builds the AI systems marketing teams run on every day.'

function CompanyMark({ role }) {
  // Always-dark tile: some logos include a white mark
  return (
    <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-night dark:ring-2 dark:ring-rule">
      {role.logo ? (
        <Image src={role.logo} alt="" className="h-8 w-8" unoptimized />
      ) : (
        <span
          aria-hidden="true"
          className="text-body font-extrabold tracking-[-0.03em] text-citron"
        >
          {role.monogram}
        </span>
      )}
    </span>
  )
}

function WorkHistory() {
  return (
    <section aria-labelledby="work-heading">
      <h2 id="work-heading" className="text-section">
        Work History
      </h2>
      <ol className="mt-8 border-t-2 border-ink">
        {resume.map((role, index) => (
          <li
            key={role.company}
            data-reveal
            style={{ '--i': index }}
            className="grid gap-x-6 gap-y-3 border-b border-rule py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)] lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-x-10"
          >
            <CompanyMark role={role} />
            <div>
              <p className="text-lead-size leading-[1.3] font-bold">
                {role.title}
              </p>
              <p className="text-graphite">{role.company}</p>
              <p className="numeral mt-1 text-muted">
                <time dateTime={String(role.start.dateTime ?? role.start)}>
                  {role.start.label ?? role.start}
                </time>
                {' to '}
                <time dateTime={String(role.end.dateTime ?? role.end)}>
                  {role.end.label ?? role.end}
                </time>
              </p>
            </div>
            <p className="text-graphite sm:col-start-2 lg:col-start-auto">
              {role.summary}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function ToolChip({ children }) {
  return (
    <li className="rounded-full bg-[color-mix(in_oklch,var(--link)_14%,var(--paper))] px-3.5 py-1.5 text-ui font-semibold text-link dark:bg-raised dark:text-on-raised">
      {children}
    </li>
  )
}

function Tools() {
  return (
    <section aria-labelledby="tools-heading">
      <h2 id="tools-heading" className="text-section">
        Tools I Work With
      </h2>
      <p className="text-lead mt-5 max-w-measure text-graphite">
        I pick tools for the job and the team, not the other way around. Here is
        what I work with, by category.
      </p>
      <dl className="mt-8 border-t-2 border-ink">
        {tools.map((group) => (
          <div
            key={group.category}
            data-reveal
            className="grid gap-x-10 gap-y-4 border-b border-rule py-6 sm:grid-cols-[12rem_1fr]"
          >
            <dt className="font-bold">{group.category}</dt>
            <dd>
              <ul role="list" className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <ToolChip key={item}>{item}</ToolChip>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About Marko Bodiroza: AI Strategist & System Builder"
        description={description}
        canonical={absoluteUrl('/about')}
        openGraph={{
          ...pageOpenGraph({ path: '/about', title: 'About', description }),
          type: 'profile',
          profile: { firstName: 'Marko', lastName: 'Bodiroza' },
        }}
      />
      <JsonLd id="breadcrumbs" data={breadcrumbSchema([['About', '/about']])} />
      <JsonLd
        id="profile"
        data={{
          '@type': 'ProfilePage',
          url: absoluteUrl('/about'),
          mainEntity: personSchema,
        }}
      />
      <PageHeader title="From Web Developer to AI System Builder">
        I help marketing leaders, agencies and B2B founders turn AI into systems
        their teams actually use.
      </PageHeader>
      <Container className="mt-lead grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-20">
        <div className="max-w-152 space-y-6 text-body leading-[1.7] text-graphite">
          <p className="text-lead text-ink">
            I’m Marko Bodiroza, an AI strategist and system builder. I started
            as a web developer, spent more than 15 years across web, SEO and
            content and moved into marketing leadership in 2020.
          </p>
          <p>
            Now I help teams put AI into their daily work. I start with how a
            team actually works, find the tasks where AI saves real time and
            plan the rollout. Then I build the workflows, write the guides and
            run the training, so the change sticks.
          </p>
          <p>
            I’m not tied to one platform. I work with ChatGPT, Claude,
            NotebookLM and automation tools like Zapier, and I pick whatever
            fits the team and the task.
          </p>
          <p>
            I graduated from the Faculty of Technical Sciences at the University
            of Novi Sad and am the author of several papers on engineering. I
            still do UI/UX design and code in Python.
          </p>
          <a
            href={siteMeta.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link marker-hover inline-block py-2.5 font-semibold"
          >
            Connect on LinkedIn
          </a>
        </div>
        <aside className="lg:pt-2">
          <div className="relative w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 h-full w-full rounded-[1.75rem] bg-citron"
            />
            <Image
              src={portraitImage}
              alt="Portrait of Marko Bodiroza"
              sizes="(min-width: 1248px) 384px, (min-width: 1024px) calc((100vw - 144px) / 2.6), (min-width: 424px) 384px, calc(100vw - 40px)"
              className="relative aspect-4/5 w-full rounded-[1.75rem] object-cover object-[50%_30%]"
              preload
            />
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <BookCallButton />
            <Button variant="secondary" href={contactHref()}>
              Send Inquiry
            </Button>
          </div>
        </aside>
      </Container>
      <Container className="mt-section flex flex-col gap-section">
        <WorkHistory />
        <Tools />
      </Container>
      <CtaBand />
    </>
  )
}
