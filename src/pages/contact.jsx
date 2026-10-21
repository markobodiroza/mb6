import { NextSeo } from 'next-seo'

import { BookCallButton } from '@/components/Button'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import siteMeta from '@/data/siteMeta'
import { absoluteUrl, pageOpenGraph } from '@/lib/seo'

const description =
  'Start a project inquiry with Marko Bodiroza about AI strategy, workshops or an AI process build for your team.'

const nextSteps = [
  'I review your inquiry',
  'We talk it through on a short call',
  'You get a clear next step',
]

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Project Inquiry: Marko Bodiroza"
        description={description}
        canonical={absoluteUrl('/contact')}
        openGraph={pageOpenGraph({
          path: '/contact',
          title: 'Contact',
          description,
        })}
      />
      <PageHeader eyebrow="Project Inquiry" title="Tell Me About Your Project">
        Share where your team is today and what you want AI to take on. A few
        details up front make our first conversation far more useful.
      </PageHeader>
      <Container className="mt-lead mb-section grid gap-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-20">
        <ContactForm />
        <aside data-reveal className="space-y-10">
          <section aria-labelledby="next-heading">
            <h2 id="next-heading" className="text-title">
              What Happens Next
            </h2>
            <ol className="mt-5 space-y-4">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-citron font-[850] text-on-citron"
                  >
                    {index + 1}
                  </span>
                  <span className="font-semibold">{step}</span>
                </li>
              ))}
            </ol>
          </section>
          {/* Book a Call falls back to this page until a booking URL is set */}
          {siteMeta.bookingUrl && (
            <section
              aria-labelledby="call-heading"
              className="on-brand blueprint rounded-[1.25rem] p-7 text-on-brand"
            >
              <h2 id="call-heading" className="text-title">
                Prefer to Talk?
              </h2>
              <p className="mt-2 text-on-brand-muted">
                Skip the form and book a call directly.
              </p>
              <BookCallButton variant="on-brand" className="mt-5" />
            </section>
          )}
          <p className="text-graphite">
            You can also find me on{' '}
            <a
              href={siteMeta.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link marker-hover"
            >
              LinkedIn
            </a>
            .
          </p>
        </aside>
      </Container>
    </>
  )
}
