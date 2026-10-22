import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CtaBand } from '@/components/CtaBand'
import { Faq } from '@/components/Faq'
import { CheckIcon } from '@/components/Icons'
import { JsonLd } from '@/components/JsonLd'
import { PageHeader } from '@/components/PageHeader'
import { ProcessSection } from '@/components/ProcessSection'
import { NextSeo } from '@/components/Seo'
import {
  hourlyRate,
  pricingFaqs,
  pricingPackages,
  processSteps,
} from '@/data/content'
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
          ? 'on-brand bg-brand text-on-brand'
          : 'border-2 border-rule bg-paper transition-colors duration-200 hover:border-ink dark:bg-sunken',
      )}
    >
      <div className="flex flex-col items-start justify-center lg:pr-14">
        {featured && (
          <span className="label mb-4 rounded-full bg-citron px-3 py-1 text-on-citron">
            Start Here
          </span>
        )}
        <h2 className="text-subhead">{pkg.name}</h2>
        <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
          <span className="text-ui font-semibold">From</span>
          <span className="text-price leading-none font-extrabold tracking-[-0.045em]">
            {formatPrice(pkg.price)}
          </span>
          <span className="text-ui font-semibold">USD {pkg.unit}</span>
        </p>
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

// One-line summary of every option, linking down to its full row
function PricingSummary() {
  let rows = [
    ...pricingPackages.map((pkg) => ({
      href: `#${pkg.slug}`,
      name: pkg.name,
      featured: pkg.featured,
      bestFor: pkg.bestFor,
      price: formatPrice(pkg.price),
      unit: `USD ${pkg.unit}`,
      from: true,
      term: pkg.term,
    })),
    {
      href: '#hourly',
      name: 'Hourly Advisory',
      bestFor: 'You need a second opinion or a smaller request.',
      price: formatPrice(hourlyRate.price),
      unit: 'USD per hour',
      term: 'As needed',
    },
  ]

  return (
    <section aria-labelledby="summary-heading" className="mt-lead">
      <h2 id="summary-heading" className="text-heading">
        Pricing at a Glance
      </h2>
      <div className="mt-6 overflow-hidden rounded-[1.75rem] border-2 border-rule bg-paper shadow-card dark:border-transparent dark:bg-sunken">
        <table className="w-full border-separate border-spacing-0 text-left max-md:block md:table-fixed">
          <colgroup className="max-md:hidden">
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
          </colgroup>
          <thead className="max-md:sr-only">
            <tr className="on-brand text-ui text-on-brand [&>th]:bg-brand [&>th]:shadow-[1px_0_0_var(--brand)] dark:[&>th]:bg-raised dark:[&>th]:shadow-[1px_0_0_var(--raised)]">
              <th scope="col" className="py-4 pr-6 pl-7 font-bold">
                Package
              </th>
              <th scope="col" className="py-4 pr-6 font-bold">
                Price
              </th>
              <th scope="col" className="py-4 pr-6 font-bold">
                Best For
              </th>
              <th scope="col" className="py-4 pr-7 font-bold">
                Timing
              </th>
            </tr>
          </thead>
          <tbody className="max-md:block">
            {rows.map((row) => (
              <tr
                key={row.name}
                className={clsx(
                  'align-top transition-colors duration-200 max-md:grid max-md:gap-1.5 max-md:border-t max-md:border-rule max-md:px-5 max-md:py-6 max-md:first:border-t-0 md:[&:not(:first-child)>*]:border-t md:[&>*]:border-rule',
                  row.featured
                    ? 'bg-[color-mix(in_oklch,var(--citron)_24%,var(--paper))] dark:bg-[color-mix(in_oklch,var(--citron)_12%,var(--sunken))]'
                    : 'hover:bg-sunken dark:hover:bg-night',
                )}
              >
                <th scope="row" className="py-5 pr-6 pl-7 font-bold max-md:p-0">
                  <a href={row.href} className="link marker-hover">
                    {row.name}
                  </a>
                  {row.featured && (
                    <span className="mt-2 block w-fit rounded-full bg-citron px-3 py-1 text-caption font-bold text-on-citron">
                      Start Here
                    </span>
                  )}
                </th>
                <td className="py-5 pr-6 max-md:p-0">
                  {row.from && (
                    <span className="text-caption font-semibold text-graphite">
                      From{' '}
                    </span>
                  )}
                  <span className="numeral text-lead-size font-extrabold tracking-[-0.03em] text-link">
                    {row.price}
                  </span>
                  <span className="block text-caption font-semibold text-graphite">
                    {row.unit}
                  </span>
                </td>
                <td className="py-5 pr-6 text-balance text-graphite max-md:p-0">
                  {row.bestFor}
                </td>
                <td className="py-5 pr-7 text-graphite max-md:p-0">
                  {row.term}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
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
        id="process"
        data={{
          '@type': 'ItemList',
          name: 'How Marko Bodiroza runs AI projects',
          url: absoluteUrl('/pricing#process'),
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
          itemListElement: processSteps.map((step, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: step.title.replace(/^\d+\.\s*/, ''),
            description: step.detail,
          })),
        }}
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
        <PricingSummary />
        <div className="mt-section grid gap-6">
          {pricingPackages.map((pkg, index) => (
            <Package key={pkg.slug} pkg={pkg} index={index} />
          ))}
        </div>
        <section
          id="hourly"
          aria-labelledby="hourly-heading"
          className="mt-6 grid scroll-mt-28 gap-6 rounded-[1.75rem] border-2 border-dashed border-ink p-7 sm:p-9 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-10 dark:border-field"
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
            <span className="text-ui text-graphite">USD per hour</span>
          </p>
          <Button variant="secondary" href={contactHref('Hourly Advisory')}>
            Send Inquiry
          </Button>
        </section>
        <div className="mt-section">
          <ProcessSection />
        </div>
        <div className="mt-section">
          <Faq items={pricingFaqs} title="Questions About Pricing and Scope" />
        </div>
      </Container>
      <CtaBand title="Get a Fixed Price for Your Scope">
        Share your team size and goals. I will confirm the right package and a
        fixed price before we start.
      </CtaBand>
    </>
  )
}
