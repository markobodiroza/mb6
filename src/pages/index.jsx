import Image from 'next/image'

import { ArrowLink, BookCallButton, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { ServiceIcon } from '@/components/Icons'
import { InsightRow } from '@/components/InsightRow'
import { JsonLd } from '@/components/JsonLd'
import { NextSeo } from '@/components/Seo'
import { WorkDiagram } from '@/components/WorkDiagram'
import {
  hourlyRate,
  pricingPackages,
  processSteps,
  services,
} from '@/data/content'
import { insightSummary, insights } from '@/data/insights'
import siteMeta from '@/data/siteMeta'
import { featuredWorkSlug, workExamples } from '@/data/work'
import portraitImage from '@/images/marko-head.jpg'
import { contactHref } from '@/lib/contact'
import { formatPrice } from '@/lib/formatPrice'
import { absoluteUrl, pageOpenGraph, personSchema } from '@/lib/seo'

// Projects, day rates and retainers are priced differently, so the teaser
// names each one instead of mixing them under "from"
const projectPackages = pricingPackages.filter((pkg) =>
  ['per project', 'per process'].includes(pkg.unit),
)
const lowestProjectPrice = Math.min(...projectPackages.map((pkg) => pkg.price))
const workshop = pricingPackages.find((pkg) => pkg.slug === 'workshop')
const advisory = pricingPackages.find((pkg) => pkg.slug === 'advisory')

const ruleOnNight =
  'border-[color-mix(in_oklch,var(--on-night)_18%,transparent)]'

function Hero() {
  return (
    <section className="blueprint on-brand overflow-hidden text-on-brand">
      <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-7 lg:py-28">
        <div className="lg:self-end">
          <p className="enter text-[1.1875rem] leading-snug font-bold text-citron sm:text-[1.3125rem]">
            {siteMeta.author.name}, AI Strategist and System Builder
          </p>
          <h1 className="enter-rise mt-5 text-[clamp(2.5rem,1.4rem+3.3vw,4.5rem)] leading-[1.06] font-extrabold tracking-[-0.04em]">
            I Help Teams Put{' '}
            <span className="marker text-citron">AI to Work</span> in Their
            Daily Operations
          </h1>
        </div>
        <div className="relative mx-auto w-full max-w-68 sm:max-w-sm lg:row-span-2 lg:mr-0 lg:ml-auto lg:max-w-[23rem] lg:self-center">
          <div
            aria-hidden="true"
            className="enter-settle absolute -right-4 -bottom-4 h-full w-full rounded-[1.75rem] bg-citron"
          />
          <Image
            src={portraitImage}
            alt="Portrait of Marko Bodiroza"
            sizes="(min-width: 1024px) 368px, (min-width: 640px) 384px, 272px"
            className="relative aspect-4/5 w-full rounded-[1.75rem] object-cover object-[50%_30%]"
            preload
            fetchPriority="high"
          />
        </div>
        <div className="lg:self-start">
          <p
            className="text-lead enter max-w-xl text-on-brand-muted"
            style={{ '--i': 1 }}
          >
            I map how your team works, plan where AI fits, build the systems and
            train your people to run them. I work in the tools you already have,
            whether that is ChatGPT, Claude, Gemini or something else.
          </p>
          <div
            className="enter mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ '--i': 2 }}
          >
            <BookCallButton variant="on-brand" />
            <Button variant="on-brand-outline" href={contactHref()}>
              Send Inquiry
            </Button>
          </div>
          <p
            className="enter mt-10 max-w-xl text-[1.0625rem] font-medium text-on-brand-muted"
            style={{ '--i': 3 }}
          >
            15+ years in digital marketing, engineering, AI and SEO. Working
            with marketing teams, agencies and B2B companies.
          </p>
        </div>
      </Container>
    </section>
  )
}

function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading" className="pt-section">
      <Container>
        <div
          data-reveal
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 id="services-heading" className="text-section">
              Services
            </h2>
            <p className="text-lead mt-5 text-graphite">
              From strategy and roadmap to the AI systems your team runs on.
            </p>
          </div>
          <ArrowLink href="/services">See All Services</ArrowLink>
        </div>
        <ol className="mt-14 grid gap-x-14 sm:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.title}
              data-reveal
              style={{ '--i': index % 2 }}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-t-2 border-ink py-8"
            >
              <ServiceIcon name={service.icon} className="h-9 w-9 text-link" />
              <div className="pt-1">
                <h3 className="text-title">{service.title}</h3>
                <p className="mt-2 text-graphite">{service.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function FeaturedWork({ example }) {
  return (
    <section aria-labelledby="work-heading" className="pt-section">
      <Container>
        <div
          data-reveal
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 id="work-heading" className="text-section">
              Recent Work
            </h2>
            <p className="text-lead mt-5 text-graphite">
              <span className="font-bold text-ink">{example.title}.</span>{' '}
              {example.summary}
            </p>
          </div>
          <ArrowLink href="/work">See All Work</ArrowLink>
        </div>
        <WorkDiagram
          lanes={example.diagram}
          label={`Diagram: ${example.title}`}
          className="mt-10"
        />
      </Container>
    </section>
  )
}

function ProcessAndPricing() {
  return (
    <section
      aria-labelledby="process-heading"
      className="on-night mt-section bg-night py-section text-on-night dark:border-y-2 dark:border-rule"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
          <div data-reveal>
            <h2 id="process-heading" className="text-section">
              How I Work
            </h2>
            <p className="text-lead mt-5 max-w-md text-on-night-muted">
              I get one thing working before scaling it, and your people stay in
              charge of the decisions that matter.
            </p>
            <ArrowLink
              href="/process"
              color="text-citron"
              marker={false}
              className="mt-8"
            >
              See the Full Process
            </ArrowLink>
          </div>
          <ol className={`border-t ${ruleOnNight}`}>
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                data-reveal
                style={{ '--i': index }}
                className={`grid grid-cols-[3.5rem_1fr] gap-x-4 border-b py-6 sm:grid-cols-[3.5rem_13rem_1fr] sm:gap-x-6 ${ruleOnNight}`}
              >
                <span
                  className="text-[1.625rem] leading-none font-extrabold tracking-[-0.04em] text-citron"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[1.1875rem] leading-[1.35] font-bold">
                  {step.title.replace(/^\d+\.\s*/, '')}
                </h3>
                <p className="col-start-2 mt-1 text-[0.9375rem] leading-[1.6] text-on-night-muted sm:col-start-auto sm:mt-0">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div
          data-reveal
          className="mt-20 flex flex-col gap-8 rounded-[1.75rem] bg-citron p-8 text-on-citron sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <p className="text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-[1.18] font-extrabold tracking-[-0.03em]">
              Projects from {formatPrice(lowestProjectPrice)}
            </p>
            <p className="mt-2 text-[1.0625rem] font-medium">
              Workshops from {formatPrice(workshop.price)}. Monthly advisory
              from {formatPrice(advisory.price)}. Hourly at{' '}
              {formatPrice(hourlyRate.price)}.
            </p>
          </div>
          <ArrowLink href="/pricing" color="text-on-citron" marker={false}>
            Compare All Packages
          </ArrowLink>
        </div>
      </Container>
    </section>
  )
}

function LatestInsights({ latest }) {
  return (
    <section aria-labelledby="insights-heading" className="pt-section">
      <Container>
        <div
          data-reveal
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 id="insights-heading" className="text-section">
              Latest Insights
            </h2>
            <p className="text-lead mt-5 text-graphite">
              Short, practical notes on AI search and putting AI to work.
            </p>
          </div>
          <ArrowLink href="/insights">Read All Insights</ArrowLink>
        </div>
        <div className="mt-12 border-t-2 border-ink">
          {latest.map((insight) => (
            <InsightRow key={insight.slug} insight={insight} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default function Home({ latest, featured }) {
  return (
    <>
      <NextSeo
        title={`${siteMeta.title}: ${siteMeta.tagline}`}
        description={siteMeta.metaDescription}
        canonical={absoluteUrl('/')}
        openGraph={pageOpenGraph({
          path: '/',
          title: siteMeta.title,
          description: siteMeta.tagline,
        })}
      />
      <JsonLd
        id="website"
        data={{
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': absoluteUrl('/#website'),
              url: siteMeta.siteUrl,
              name: siteMeta.title,
              description: siteMeta.description,
              publisher: { '@id': personSchema['@id'] },
            },
            personSchema,
          ],
        }}
      />
      <Hero />
      <ServicesOverview />
      <FeaturedWork example={featured} />
      <ProcessAndPricing />
      <LatestInsights latest={latest} />
      <CtaBand />
    </>
  )
}

// Read at build time, so full articles stay out of the page's JavaScript
export function getStaticProps() {
  return {
    props: {
      latest: insights.slice(0, 3).map(insightSummary),
      featured: workExamples.find(
        (example) => example.slug === featuredWorkSlug,
      ),
    },
  }
}
