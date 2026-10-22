import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { Faq } from '@/components/Faq'
import { CheckIcon } from '@/components/Icons'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { hourlyRate, pricingFaqs, pricingPackages } from '@/data/content'
import { contactHref } from '@/lib/contact'
import { formatPrice } from '@/lib/formatPrice'
import {
  absoluteUrl,
  breadcrumbSchema,
  pageOpenGraph,
  personSchema,
} from '@/lib/seo'

const description =
  'AI strategy and system packages with rates: AI audit and roadmap, team workshops, AI process builds, monthly advisory and hourly advisory.'

function Package({ pkg, index }) {
  let featured = pkg.featured

  return (
    <article
      id={pkg.slug}
      data-reveal
      style={{ '--i': index }}
      className={clsx(
        'grid scroll-mt-28 gap-8 rounded-[1.75rem] p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-0 lg:p-10',
        featured
          ? 'blueprint on-brand text-on-brand transition-[background-position] duration-700 ease-out-quart hover:[background-position:23px_23px]'
          : 'border-2 border-rule bg-paper transition-colors duration-200 hover:border-ink dark:bg-sunken',
      )}
    >
      <div className="flex flex-col items-start lg:pr-14">
        {featured && (
          <span className="label mb-4 rounded-full bg-citron px-3 py-1 text-on-citron">
            Start Here
          </span>
        )}
        <h2 className="text-subhead">{pkg.name}</h2>
        <p
          className={clsx(
            'mt-2 text-body leading-normal',
            featured ? 'text-on-brand-muted' : 'text-graphite',
          )}
        >
          <span className="font-bold">Best for:</span> {pkg.bestFor}
        </p>
        <p className="mt-5 flex flex-wrap items-baseline gap-x-2">
          <span className="text-ui font-semibold">From</span>
          <span className="text-price leading-none font-extrabold tracking-[-0.045em]">
            {formatPrice(pkg.price)}
          </span>
          <span className="text-ui font-semibold">{pkg.unit}</span>
        </p>
        {pkg.term && (
          <p
            className={clsx(
              'mt-1 text-ui',
              featured ? 'text-on-brand-muted' : 'text-muted',
            )}
          >
            {pkg.term}
          </p>
        )}
        <Button
          variant={featured ? 'on-brand' : 'secondary'}
          className="mt-7 w-full sm:w-auto"
          href={contactHref(pkg.name)}
        >
          Send Inquiry
        </Button>
      </div>
      <div
        className={clsx(
          'lg:border-l lg:pl-14',
          featured
            ? 'border-[color-mix(in_oklch,var(--on-brand)_25%,transparent)]'
            : 'border-rule',
        )}
      >
        <h3 className="label">Included</h3>
        <ul
          role="list"
          className="mt-4 grid gap-x-8 gap-y-2.5 text-ui leading-snug sm:grid-cols-2"
        >
          {pkg.includes.map((item, index) => (
            <li key={item} className="flex gap-3">
              {/* Checks pop in one after another as the card scrolls in */}
              <CheckIcon
                style={{ '--i': index }}
                className={clsx(
                  'step-pop mt-[0.15rem] h-4 w-4 flex-none',
                  featured ? 'text-citron' : 'text-link',
                )}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Pricing() {
  return (
    <>
      <NextSeo
        title="Pricing: Marko Bodiroza"
        description={description}
        canonical={absoluteUrl('/pricing')}
        openGraph={pageOpenGraph({
          path: '/pricing',
          title: 'Pricing',
          description,
        })}
      />
      <JsonLd
        id="breadcrumbs"
        data={breadcrumbSchema([['Pricing', '/pricing']])}
      />
      <JsonLd
        id="pricing"
        data={{
          '@type': 'OfferCatalog',
          name: 'AI strategy and system packages',
          itemListElement: [
            ...pricingPackages.map((pkg) => ({
              '@type': 'Offer',
              name: pkg.name,
              description: pkg.description,
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: pkg.price,
                priceCurrency: 'USD',
              },
              seller: personSchema,
            })),
            {
              '@type': 'Offer',
              name: 'Hourly advisory',
              description: hourlyRate.description,
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: hourlyRate.price,
                priceCurrency: hourlyRate.currency,
                unitCode: 'HUR',
              },
              seller: personSchema,
            },
          ],
        }}
      />
      <PageHeader title="Pricing">
        Most work is priced as a fixed-scope package, so you know the cost
        before we start. Final prices depend on your team size and scope.
      </PageHeader>
      <Container>
        <div className="mt-lead grid gap-6">
          {pricingPackages.map((pkg, index) => (
            <Package key={pkg.slug} pkg={pkg} index={index} />
          ))}
        </div>
        <section
          aria-labelledby="hourly-heading"
          className="mt-6 grid gap-6 rounded-[1.75rem] border-2 border-dashed border-ink p-7 sm:p-9 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-10"
        >
          <div>
            <h2 id="hourly-heading" className="text-subhead">
              Hourly Advisory
            </h2>
            <p className="mt-2 max-w-measure text-graphite">
              {hourlyRate.description}
            </p>
          </div>
          <p className="flex items-baseline gap-2">
            <span className="text-price leading-none font-extrabold tracking-[-0.045em]">
              {formatPrice(hourlyRate.price)}
            </span>
            <span className="text-ui text-graphite">per hour</span>
          </p>
          <Button variant="secondary" href={contactHref('Hourly Advisory')}>
            Send Inquiry
          </Button>
        </section>
        <div className="mt-section">
          <Faq items={pricingFaqs} title="Questions About Pricing and Scope" />
        </div>
      </Container>
      <CtaBand />
    </>
  )
}
