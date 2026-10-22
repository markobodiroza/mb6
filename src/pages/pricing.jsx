import clsx from 'clsx'

import { BookCallButton, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { Faq } from '@/components/Faq'
import { ArrowRightIcon, CheckIcon } from '@/components/Icons'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { NextSeo } from '@/components/Seo'
import { faqs, hourlyRate, pricingPackages } from '@/data/content'
import { contactHref } from '@/lib/contact'
import { formatPrice } from '@/lib/formatPrice'
import { absoluteUrl, pageOpenGraph, personSchema } from '@/lib/seo'

const description =
  'AI strategy and system packages with rates: AI audit and roadmap, team workshops, AI process builds, monthly advisory and hourly advisory.'

// Each package has its own color world so they are easy to tell apart
const themes = {
  brand: {
    card: 'on-brand bg-brand text-on-brand',
    muted: 'text-on-brand',
    check: 'text-citron',
    rule: 'border-[color-mix(in_oklch,var(--on-brand)_25%,transparent)]',
    dot: 'bg-brand',
    button: 'on-brand',
  },
  citron: {
    card: 'bg-citron text-on-citron',
    muted: 'text-on-citron',
    check: 'text-on-citron',
    rule: 'border-[color-mix(in_oklch,var(--on-citron)_25%,transparent)]',
    dot: 'bg-citron ring-2 ring-ink',
    button: 'night',
  },
  night: {
    card: 'on-night bg-night text-on-night dark:ring-2 dark:ring-rule',
    muted: 'text-on-night',
    check: 'text-citron',
    rule: 'border-[color-mix(in_oklch,var(--on-night)_20%,transparent)]',
    dot: 'bg-night ring-2 ring-citron',
    button: 'on-brand-outline',
  },
  paper: {
    card: 'border-2 border-ink bg-paper text-ink dark:border-citron dark:bg-sunken',
    muted: 'text-graphite',
    check: 'text-link',
    rule: 'border-rule',
    dot: 'bg-paper ring-2 ring-ink dark:bg-sunken dark:ring-citron',
    button: 'secondary',
  },
}

function PackageGuide() {
  return (
    <section aria-labelledby="guide-heading" className="mt-lead">
      <h2 id="guide-heading" className="text-section">
        Which Package Fits?
      </h2>
      <ul role="list" className="mt-8 grid gap-3 md:grid-cols-2">
        {pricingPackages.map((pkg, index) => (
          <li key={pkg.slug} data-reveal style={{ '--i': index }}>
            <a
              href={`#${pkg.slug}`}
              className="group flex h-full items-center gap-4 rounded-[1.25rem] border-2 border-rule p-5 transition-colors duration-200 hover:border-ink"
            >
              <span
                aria-hidden="true"
                className={clsx(
                  'h-4 w-4 flex-none rounded-full',
                  themes[pkg.theme].dot
                )}
              />
              <span className="flex-1">
                <span className="block text-[1.0625rem] font-bold leading-[1.4]">
                  {pkg.question}
                </span>
                <span className="mt-1 block text-[0.9375rem] text-graphite">
                  Start with {pkg.name}
                </span>
              </span>
              <ArrowRightIcon className="h-5 w-5 flex-none rotate-90 text-link transition-transform duration-200 ease-out-quart group-hover:translate-y-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Package({ pkg, index }) {
  let theme = themes[pkg.theme]
  let featured = pkg.theme === 'brand'

  return (
    <article
      id={pkg.slug}
      data-reveal
      style={{ '--i': index % 2 }}
      className={clsx(
        'flex scroll-mt-28 flex-col rounded-[1.75rem] p-6 sm:p-9',
        theme.card
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[1.625rem] font-[780] leading-[1.15] tracking-tight">
          {pkg.name}
        </h2>
        {featured && (
          <span className="eyebrow shrink-0 rounded-full bg-citron px-3 py-1 text-[0.8125rem] text-on-citron">
            Start Here
          </span>
        )}
      </div>
      <p className={clsx('mt-3 text-[1.0625rem] leading-normal', theme.muted)}>
        <span className="font-bold">Best for:</span> {pkg.bestFor}
      </p>
      <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
        <span className="text-[0.9375rem] font-semibold">From</span>
        <span className="text-[3rem] font-[850] leading-none tracking-[-0.045em]">
          {formatPrice(pkg.price)}
        </span>
        <span className="text-[0.9375rem] font-semibold">{pkg.unit}</span>
      </p>
      {pkg.term && (
        <p className={clsx('mt-2 text-[0.9375rem] font-semibold', theme.muted)}>
          {pkg.term}
        </p>
      )}
      <h3 className={clsx('eyebrow mt-8 border-t pt-6', theme.rule)}>
        Included
      </h3>
      <ul role="list" className="mt-4 space-y-2 text-[0.9375rem] leading-normal">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-3">
            <CheckIcon
              className={clsx('mt-[0.2rem] h-5 w-5 flex-none', theme.check)}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-9">
        {featured ? (
          <BookCallButton
            variant={theme.button}
            className="h-auto! min-h-13 w-full whitespace-normal! py-3! text-center"
          />
        ) : (
          <Button
            variant={theme.button}
            className="h-auto! min-h-13 w-full whitespace-normal! py-3! text-center"
            href={contactHref(pkg.name)}
          >
            Send an Inquiry
          </Button>
        )}
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
      <PageHeader eyebrow="Packages and Rates" title="Pricing">
        Most work is priced as a fixed-scope package, so you know the cost
        before we start. Final prices depend on your team size and scope.
      </PageHeader>
      <Container>
        <PackageGuide />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pricingPackages.map((pkg, index) => (
            <Package key={pkg.slug} pkg={pkg} index={index} />
          ))}
        </div>
        <section
          aria-labelledby="hourly-heading"
          className="mt-6 grid gap-6 rounded-[1.75rem] border-2 border-dashed border-ink p-7 sm:p-9 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-10"
        >
          <div>
            <h2
              id="hourly-heading"
              className="text-[1.625rem] font-[780] leading-[1.15] tracking-tight"
            >
              Hourly Advisory
            </h2>
            <p className="mt-2 max-w-prose text-graphite">
              {hourlyRate.description}
            </p>
          </div>
          <p className="flex items-baseline gap-2">
            <span className="text-[3rem] font-[850] leading-none tracking-[-0.045em]">
              {formatPrice(hourlyRate.price)}
            </span>
            <span className="text-[0.9375rem] text-graphite">per hour</span>
          </p>
          <Button variant="secondary" href={contactHref('Hourly Advisory')}>
            Send an Inquiry
          </Button>
        </section>
        <div className="mt-section">
          <Faq items={faqs} />
        </div>
      </Container>
      <CtaBand />
    </>
  )
}
