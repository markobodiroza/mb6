import { Container } from '@/components/Container'
import { Prose } from './Prose'
export function PageLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
         {title}
        </h1>
        <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-400">
          {intro}
        </p>
      </header>
      <Prose className="mt-8 max-w-3xl">{children}</Prose>
    </Container>
  )
}
