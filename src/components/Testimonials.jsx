import clsx from 'clsx'

import { Container } from '@/components/Container'
import { testimonials } from '@/data/content'

// Each quote gets its own surface, so the row reads as three voices
const surfaces = [
  'on-brand bg-brand text-on-brand shadow-card dark:bg-raised',
  'bg-sunken text-ink dark:bg-night',
  'bg-citron text-on-citron',
]

const markColors = ['text-citron', 'text-link', 'text-on-citron']

export function Testimonials({ items = testimonials }) {
  return (
    <section aria-labelledby="testimonials-heading" className="pt-section">
      <Container>
        <h2
          id="testimonials-heading"
          data-reveal
          className="text-section max-w-2xl"
        >
          What Clients Say
        </h2>
        <ul role="list" className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item.author}
              data-reveal
              style={{ '--i': index }}
              className={clsx(
                'flex flex-col rounded-[1.75rem] p-8 sm:p-9',
                surfaces[index % surfaces.length],
              )}
            >
              <figure className="flex h-full flex-col">
                <span
                  aria-hidden="true"
                  className={clsx(
                    'text-price leading-[0.6] font-extrabold',
                    markColors[index % markColors.length],
                  )}
                >
                  “
                </span>
                <blockquote className="mt-4 flex-1 text-body leading-[1.65] font-medium">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="label mt-6">{item.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
