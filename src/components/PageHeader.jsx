import { Container } from '@/components/Container'

export function PageHeader({ label, title, children }) {
  return (
    <header className="blueprint on-brand text-on-brand">
      <Container className="pt-14 pb-14 sm:pt-20 sm:pb-20">
        {label && <p className="label mb-4 text-citron">{label}</p>}
        <h1 className="text-page-header max-w-4xl">{title}</h1>
        {children && (
          <p className="text-lead mt-6 max-w-2xl text-on-brand-muted">
            {children}
          </p>
        )}
      </Container>
    </header>
  )
}
