import { Container } from '@/components/Container'

export function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="blueprint on-brand text-on-brand">
      <Container className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        {eyebrow && <p className="eyebrow mb-5 text-citron">{eyebrow}</p>}
        <h1 className="text-page-title max-w-4xl">{title}</h1>
        {children && (
          <p className="text-lead mt-6 max-w-2xl text-on-brand-muted">
            {children}
          </p>
        )}
      </Container>
    </header>
  )
}
