import { Fragment } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { ArrowRightIcon, CheckIcon } from '@/components/Icons'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { pricingPackages, services } from '@/data/content'
import { absoluteUrl, pageOpenGraph, personSchema } from '@/lib/seo'

const description =
  'AI strategy and systems for marketing teams, agencies and B2B companies: roadmaps, process redesign, automation, training and AEO.'

const packagesBySlug = Object.fromEntries(
  pricingPackages.map((pkg) => [pkg.slug, pkg]),
)

function Service({ service, index }) {
  let pkg = packagesBySlug[service.package]

  return (
    <article
      data-reveal
      className="grid gap-x-16 gap-y-8 border-t-2 border-ink py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <span className="big-numeral block text-link" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="mt-4 text-[clamp(1.75rem,1.4rem+1.2vw,2.25rem)] leading-[1.1] font-[780] tracking-[-0.03em]">
          {service.title}
        </h2>
      </div>
      <div>
        <p className="text-lead text-graphite">{service.description}</p>
        <h3 className="eyebrow mt-9 text-link">You Get</h3>
        <ul role="list" className="mt-4 space-y-3">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckIcon className="mt-[0.2rem] h-5 w-5 flex-none text-link" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-col gap-5 rounded-[1.25rem] bg-sunken p-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="eyebrow block text-muted">Good Fit If</span>
            <span className="mt-1 block font-semibold">{service.goodFit}</span>
          </p>
          {pkg && (
            <Link
              href={`/pricing#${pkg.slug}`}
              className="group inline-flex flex-none items-center gap-2 font-bold text-link"
            >
              <span className="marker-hover">{pkg.name}</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

function NotSureBand() {
  return (
    <aside
      data-reveal
      className="my-6 flex flex-col gap-6 rounded-[1.75rem] bg-citron p-8 text-on-citron sm:flex-row sm:items-center sm:justify-between sm:p-10"
    >
      <div>
        <p className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-[1.15] font-extrabold tracking-[-0.03em]">
          Not Sure Which You Need?
        </p>
        <p className="mt-2 text-[1.0625rem] font-medium">
          Most teams start with the AI Audit and Roadmap. It answers that
          question for you.
        </p>
      </div>
      <Button variant="night" href="/pricing#audit">
        See the Audit
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </aside>
  )
}

export default function Services() {
  return (
    <>
      <NextSeo
        title="Services: Marko Bodiroza"
        description={description}
        canonical={absoluteUrl('/services')}
        openGraph={pageOpenGraph({
          path: '/services',
          title: 'Services',
          description,
        })}
      />
      <JsonLd
        id="services"
        data={{
          '@type': 'ItemList',
          name: 'AI strategy and system services',
          itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              provider: personSchema,
            },
          })),
        }}
      />
      <PageHeader eyebrow="Services" title="AI Strategy and Systems">
        I help marketing teams, agencies and B2B companies set an AI strategy,
        redesign how work gets done and build the systems that run it, in the
        tools you already use.
      </PageHeader>
      <Container className="mt-lead">
        {services.map((service, index) => (
          <Fragment key={service.title}>
            {index === 3 && <NotSureBand />}
            <Service service={service} index={index} />
          </Fragment>
        ))}
      </Container>
      <CtaBand />
    </>
  )
}
