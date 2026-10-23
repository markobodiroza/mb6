import Image from 'next/image'

import { ArrowLink, BookCallButton, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { CheckIcon, ServiceIcon } from '@/components/Icons'
import { JsonLd } from '@/components/JsonLd'
import { NextSeo } from '@/components/Seo'
import { QuoteCard } from '@/components/Testimonials'
import { processSteps, services, testimonials } from '@/data/content'
import siteMeta from '@/data/siteMeta'
import { featuredWorkSlug, workExamples, workOutcomes } from '@/data/work'
import portraitImage from '@/images/marko-head.jpg'
import { contactHref } from '@/lib/contact'
import { absoluteUrl, pageOpenGraph, personSchema } from '@/lib/seo'

function Hero() {
  return (
    <section className="blueprint on-brand overflow-hidden text-on-brand">
      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-7 lg:py-20">
        <div className="lg:self-end">
          <p className="enter text-lead-size leading-snug font-bold text-citron">
            {siteMeta.author.name}, AI Strategist and System Builder
          </p>
          <h1 className="enter-rise text-page-title mt-5">
            I Help Teams Put <span className="marker">AI to Work</span> in Their
            Daily Operations
          </h1>
        </div>
        <div className="relative mx-auto w-full max-w-52 sm:max-w-sm lg:row-span-2 lg:mr-0 lg:ml-auto lg:max-w-[23rem] lg:self-center">
          <div
            aria-hidden="true"
            className="enter-settle absolute -right-4 -bottom-4 h-full w-full rounded-[1.75rem] bg-citron"
          />
          <Image
            src={portraitImage}
            alt="Portrait of Marko Bodiroza"
            sizes="(min-width: 1024px) 368px, (min-width: 640px) 384px, 208px"
            className="relative aspect-4/5 w-full rounded-[1.75rem] object-cover object-[50%_30%]"
            preload
            fetchPriority="high"
          />
        </div>
        <div className="lg:self-start">
          <p
            className="text-lead enter max-w-2xl text-on-brand-muted"
            style={{ '--i': 1 }}
          >
            I help agencies and B2B teams reduce manual work across marketing,
            sales and operations. I map the process, build the system and train
            your people to use it. I work in the tools you already have, whether
            that is Claude, ChatGPT, Gemini or something else.
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
            className="enter mt-4 text-center text-ui font-semibold text-on-brand-muted sm:text-left"
            style={{ '--i': 2 }}
          >
            Free 30-minute call. You leave with a suggested first step.
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
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-t-2 border-rule-strong py-8"
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

function ProofAndProcess({ example, outcomes, quote }) {
  return (
    <section aria-labelledby="clients-heading" className="pt-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-0">
          <div data-reveal className="flex flex-col items-start lg:pr-12">
            <h2 id="clients-heading" className="text-section">
              What Clients Say
            </h2>
            <QuoteCard item={quote} className="mt-6" />
          </div>
          <div
            data-reveal
            style={{ '--i': 1 }}
            className="flex flex-col items-start border-t border-rule pt-12 lg:border-t-0 lg:border-l lg:px-12 lg:pt-0"
          >
            <h2 id="work-heading" className="text-section">
              Recent Work
            </h2>
            <p className="text-lead mt-5 text-graphite">
              <span className="font-bold text-ink">{example.title}.</span>{' '}
              {example.teaser}
            </p>
            {/* Results across the work, mirroring the process steps */}
            <ul
              role="list"
              className="mt-6 mb-auto flex flex-col items-start gap-2.5"
            >
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-pill py-2 pr-4 pl-2 text-ui font-semibold dark:bg-raised dark:text-on-raised"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-citron text-on-citron"
                  >
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <ArrowLink href="/work" className="mt-8">
              See All Work
            </ArrowLink>
          </div>
          <div
            data-reveal
            style={{ '--i': 2 }}
            className="flex flex-col items-start border-t border-rule pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
          >
            <h2 className="text-section">The Process</h2>
            <p className="text-lead mt-5 text-graphite">
              I get one thing working before scaling it, and your people stay in
              charge of the decisions that matter.
            </p>
            {/* The five steps at a glance, in order */}
            <ol className="mt-6 mb-auto flex flex-col items-start gap-2.5">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-pill py-2 pr-4 pl-2 text-ui font-semibold dark:bg-raised dark:text-on-raised"
                >
                  <span
                    aria-hidden="true"
                    className="numeral flex h-6 w-6 items-center justify-center rounded-full bg-citron text-caption font-extrabold text-on-citron"
                  >
                    {index + 1}
                  </span>
                  {step.title.replace(/^\d+\.\s*/, '')}
                </li>
              ))}
            </ol>
            <ArrowLink href="/pricing#process" className="mt-8">
              See the Full Process
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function Home({ featured, outcomes, quote }) {
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
      <ProofAndProcess example={featured} outcomes={outcomes} quote={quote} />
      <CtaBand title="Put AI to Work in Your Team" />
    </>
  )
}

// Read at build time, so work and quote data stay out of the page's JavaScript
export function getStaticProps() {
  return {
    props: {
      outcomes: workOutcomes,
      // Only the lines the teaser shows
      featured: (({ title, teaser }) => ({ title, teaser }))(
        workExamples.find((example) => example.slug === featuredWorkSlug),
      ),
      quote: testimonials.find((item) => item.author.startsWith('CEO')),
    },
  }
}
