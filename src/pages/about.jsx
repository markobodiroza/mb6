import Image from 'next/image'
import { NextSeo } from 'next-seo'

import { BookCallButton, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { coreTools, resume, tools } from '@/data/content'
import siteMeta from '@/data/siteMeta'
import portraitImage from '@/images/marko-head.jpg'
import { contactHref } from '@/lib/contact'
import { absoluteUrl, pageOpenGraph, personSchema } from '@/lib/seo'

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
          className="text-[1.125rem] font-[850] tracking-[-0.03em] text-citron"
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
      <ol className="mt-10 border-t-2 border-ink">
        {resume.map((role, index) => (
          <li
            key={role.company}
            data-reveal
            style={{ '--i': index }}
            className="grid gap-x-6 gap-y-3 border-b border-rule py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)] lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-x-10"
          >
            <CompanyMark role={role} />
            <div>
              <p className="text-[1.1875rem] font-bold leading-[1.3]">
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
    <li className="rounded-full border-2 border-rule px-3.5 py-1.5 text-[0.9375rem] font-semibold">
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
      <p className="text-lead mt-5 max-w-prose text-graphite">
        I pick tools for the job and the team, not the other way around. These
        are the ones I reach for most.
      </p>
      <ul role="list" data-reveal className="mt-8 flex flex-wrap gap-2">
        {coreTools.map((tool) => (
          <ToolChip key={tool}>{tool}</ToolChip>
        ))}
      </ul>
      <details className="group mt-8 border-t-2 border-ink">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.1875rem] font-bold marker:hidden [&::-webkit-details-marker]:hidden">
          See All Tools
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sunken text-link transition-transform duration-300 ease-out-quart group-open:rotate-45">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                d="M10 4v12M4 10h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </summary>
        <dl className="pb-4">
          {tools.map((group) => (
            <div
              key={group.category}
              className="grid gap-x-10 gap-y-4 border-t border-rule py-6 sm:grid-cols-[12rem_1fr]"
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
      </details>
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
      <JsonLd
        id="profile"
        data={{
          '@type': 'ProfilePage',
          url: absoluteUrl('/about'),
          mainEntity: personSchema,
        }}
      />
      <PageHeader
        eyebrow="About"
        title="From Web Developer to AI System Builder"
      >
        I help marketing leaders, agencies and B2B founders turn AI into systems
        their teams actually use.
      </PageHeader>
      <Container className="mt-lead grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-20">
        <div className="max-w-[38rem] space-y-6 text-[1.125rem] leading-[1.7] text-graphite">
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
        </div>
        <aside className="lg:pt-2">
          <div className="relative w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.75rem] bg-citron"
            />
            <Image
              src={portraitImage}
              alt="Portrait of Marko Bodiroza"
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[50%_30%]"
              preload
            />
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <BookCallButton />
            <Button variant="secondary" href={contactHref()}>
              Send a Message
            </Button>
          </div>
          <a
            href={siteMeta.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link marker-hover mt-4 inline-block py-2.5 font-semibold"
          >
            Connect on LinkedIn
          </a>
        </aside>
      </Container>
      <Container className="mt-section gap-section flex flex-col">
        <WorkHistory />
        <Tools />
      </Container>
      <CtaBand />
    </>
  )
}
