import { ArrowLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { NextSeo } from '@/components/Seo'

export default function NotFound() {
  return (
    <>
      <NextSeo title="Page Not Found: Marko Bodiroza" noindex />
      <section className="blueprint on-brand text-on-brand">
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
          <p
            aria-hidden="true"
            className="text-[clamp(6rem,4rem+10vw,12rem)] leading-[0.85] font-extrabold tracking-[-0.06em] text-citron [font-variation-settings:'ROND'_100]"
          >
            404
          </p>
          <div>
            <p className="label text-citron">Page Not Found</p>
            <h1 className="text-page-title mt-4">
              This Page Isn’t on the Roadmap
            </h1>
            <p className="text-lead mt-6 max-w-xl text-on-brand-muted">
              The link may be old, or the page moved. Good news: nothing here
              needs automating. Let’s get you somewhere useful.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <ArrowLink href="/" color="text-citron" marker={false}>
                Go to the Home Page
              </ArrowLink>
              <ArrowLink href="/services" color="text-citron" marker={false}>
                Browse the Services
              </ArrowLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
