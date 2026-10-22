import { Fragment } from 'react'
import Link from 'next/link'

import { ArrowLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { Faq } from '@/components/Faq'
import { ArrowRightIcon, CheckIcon, ServiceIcon } from '@/components/Icons'
import { JsonLd } from '@/components/JsonLd'
import { JumpNav } from '@/components/JumpNav'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { pricingPackages, serviceFaqs, services } from '@/data/content'
import {
  absoluteUrl,
  breadcrumbSchema,
  pageOpenGraph,
  personSchema,
} from '@/lib/seo'

const description =
  'AI strategy and systems for marketing teams, agencies and B2B companies: roadmaps, process redesign, automation, training and AEO.'

const packagesBySlug = Object.fromEntries(
  pricingPackages.map((pkg) => [pkg.slug, pkg]),
)

function Service({ service, index }) {
  let pkg = packagesBySlug[service.package]

  return (
    <article
      id={service.slug}
      data-reveal
      className="grid scroll-mt-28 gap-x-16 gap-y-10 border-t-2 border-ink py-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] dark:border-field"
    >
      <div>
        <div className="flex items-start gap-4">
          <ServiceIcon
            name={service.icon}
            className="mt-1 h-9 w-9 flex-none text-link"
          />
          <h2 className="text-heading">{service.title}</h2>
        </div>
        <p className="text-lead mt-4 text-graphite">{service.description}</p>
        <h3 className="label mt-9 text-link">You Get</h3>
        <ul role="list" className="mt-4 space-y-3">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckIcon className="mt-[0.2rem] h-5 w-5 flex-none text-link" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="on-brand rounded-[1.25rem] bg-brand p-6 text-on-brand shadow-card sm:p-7 lg:sticky lg:top-28 lg:self-start dark:bg-raised">
        <p>
          <span className="label block text-on-brand-muted">Good Fit For</span>
          <span className="mt-1 block font-bold">
            {service.roles.join(', ')}
          </span>
          <span className="mt-1 block text-on-brand-muted">
            {service.goodFit}
          </span>
        </p>
        {pkg && (
          <p className="mt-6 border-t border-[color-mix(in_oklch,var(--on-brand)_25%,transparent)] pt-6">
            <span className="label block text-on-brand-muted">Priced As</span>
            <Link
              href={`/pricing#${pkg.slug}`}
              className="group mt-1 inline-flex items-center gap-2 font-bold text-citron"
            >
              <span className="underline-offset-4 group-hover:underline">
                {pkg.name}
              </span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1" />
            </Link>
          </p>
        )}
      </div>
    </article>
  )
}

function NotSureBand() {
  return (
    <aside
      data-reveal
      className="mb-14 flex flex-col gap-6 rounded-[1.75rem] bg-citron p-10 text-on-citron sm:flex-row sm:items-center sm:justify-between sm:p-12"
    >
      <div>
        <p className="text-heading">Not Sure Which You Need?</p>
        <p className="mt-2 text-body font-medium">
          Strategy and process redesign are both part of the AI Audit and
          Roadmap.
        </p>
        <p className="mt-2 text-body font-medium">
          Start there if your priorities are unclear. If you already have a
          defined workflow, we can scope a build directly.
        </p>
      </div>
      <ArrowLink
        href="/pricing#audit"
        color="text-on-citron"
        marker={false}
        className="flex-none"
      >
        Read About the Audit
      </ArrowLink>
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
        id="breadcrumbs"
        data={breadcrumbSchema([['Services', '/services']])}
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
      <PageHeader title="AI Strategy and Systems">
        I help marketing teams, agencies and B2B companies set an AI strategy,
        redesign how work gets done and build the systems that run it, in the
        tools you already use.
      </PageHeader>
      <Container>
        <JumpNav
          items={services.map((service) => ({
            href: `#${service.slug}`,
            label: service.short,
          }))}
        />
      </Container>
      <Container className="mt-10">
        {services.map((service, index) => (
          <Fragment key={service.title}>
            {index === 3 && <NotSureBand />}
            <Service service={service} index={index} />
          </Fragment>
        ))}
        <div className="mt-section">
          <Faq items={serviceFaqs} title="Questions About Working Together" />
        </div>
      </Container>
      <CtaBand title="Not Sure Which Service Fits?">
        Tell me where your team is today. On a short call we will match your
        goals to the right service.
      </CtaBand>
    </>
  )
}
