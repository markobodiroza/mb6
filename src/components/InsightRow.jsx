import Link from 'next/link'

import { ArrowRightIcon } from '@/components/Icons'
import { formatDate } from '@/lib/formatDate'

export function InsightRow({ insight, as: Heading = 'h3' }) {
  return (
    <article
      data-reveal
      className="group relative grid gap-x-8 gap-y-2 border-b border-rule py-7 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline"
    >
      <time
        dateTime={insight.date}
        className="numeral whitespace-nowrap text-muted"
      >
        {formatDate(insight.date)}
      </time>
      <div>
        <Heading className="text-[1.1875rem] font-bold leading-[1.35] tracking-[-0.01em]">
          <Link href={`/insights/${insight.slug}`} className="marker-hover">
            <span className="absolute inset-0" aria-hidden="true" />
            {insight.title}
          </Link>
        </Heading>
        <p className="mt-2 max-w-prose text-graphite">{insight.description}</p>
      </div>
      <ArrowRightIcon className="hidden h-5 w-5 text-link transition-transform duration-200 ease-out-quart group-hover:translate-x-1 sm:block" />
    </article>
  )
}
