import { Container } from '@/components/Container'
import { Prose } from './Prose'
export function PageLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
         {title}
        </h1>
        <p className="mt-6 text-lg text-slate-700 dark:text-slate-400">
          {intro}
        </p>
      </header>
      <Prose className="mt-8">{children}</Prose>
    </Container>
  )
}
