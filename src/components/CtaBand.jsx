import clsx from 'clsx'

import { BookCallButton, Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { contactHref } from '@/lib/contact'

export function CtaBand({
  flush = false,
  title = 'Find Your Starting Point',
  children = 'Tell me about your team and the work you want AI to take on. We will pick the right first step together on a short call.',
}) {
  return (
    <section
      className={clsx(
        'blueprint on-brand text-on-brand',
        !flush && 'mt-section',
      )}
    >
      <Container
        data-reveal
        className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end"
      >
        <div>
          <h2 className="text-page-title">{title}</h2>
          <p className="text-lead mt-5 max-w-xl text-on-brand-muted">
            {children}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <BookCallButton variant="on-brand" />
          <Button variant="on-brand-outline" href={contactHref()}>
            Send Inquiry
          </Button>
        </div>
      </Container>
    </section>
  )
}
