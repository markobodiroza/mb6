import clsx from 'clsx'

const tones = {
  brand: {
    card: 'on-brand bg-brand text-on-brand shadow-card dark:bg-raised',
    mark: 'text-citron',
  },
  citron: { card: 'bg-citron text-on-citron', mark: 'text-on-citron' },
}

// One quote on its own card, for columns and sidebars
export function QuoteCard({ item, tone = 'brand', className }) {
  let { card, mark } = tones[tone]

  return (
    <figure
      className={clsx(
        'flex flex-col rounded-[1.75rem] p-8 sm:p-9',
        card,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={clsx('text-price leading-[0.6] font-extrabold', mark)}
      >
        “
      </span>
      <blockquote className="mt-4 text-body leading-[1.65] font-medium">
        <p>{item.quote}</p>
      </blockquote>
      <figcaption className="mt-6">
        <span className="label block">{item.author}</span>
        {item.project && (
          <span className="mt-1 block text-ui opacity-80">{item.project}</span>
        )}
      </figcaption>
    </figure>
  )
}

// A single wide quote, for pages that carry one voice
export function Quote({ item, className }) {
  return (
    <figure
      data-reveal
      className={clsx(
        'on-brand grid gap-6 rounded-[1.75rem] bg-brand p-8 text-on-brand shadow-card sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-10 dark:bg-raised',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="text-price leading-[0.6] font-extrabold text-citron lg:text-[5rem]"
      >
        “
      </span>
      <div>
        <blockquote className="text-lead max-w-4xl font-medium">
          <p>{item.quote}</p>
        </blockquote>
        <figcaption className="mt-6">
          <span className="label block text-citron">{item.author}</span>
          {item.project && (
            <span className="mt-1 block text-ui text-on-brand-muted">
              {item.project}
            </span>
          )}
        </figcaption>
      </div>
    </figure>
  )
}
