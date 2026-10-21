import { NextSeo } from 'next-seo'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ArrowRightIcon } from '@/components/Icons'

export default function NotFound() {
  return (
    <>
      <NextSeo title="Page Not Found: Marko Bodiroza" noindex />
      <section className="blueprint on-brand text-on-brand">
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
          <p
            aria-hidden="true"
            className="text-[clamp(6rem,4rem+10vw,12rem)] font-[850] leading-[0.85] tracking-[-0.06em] text-citron [font-variation-settings:'ROND'_100]"
          >
            404
          </p>
          <div>
            <p className="eyebrow text-citron">Page Not Found</p>
            <h1 className="text-page-title mt-4">
              This Page Isn’t on the Roadmap
            </h1>
            <p className="text-lead mt-6 max-w-xl text-on-brand-muted">
              The link may be old, or the page moved. Good news: nothing here
              needs automating. Let’s get you somewhere useful.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="on-brand" href="/">
                Back to Home
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button variant="on-brand-outline" href="/services">
                See Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
