import clsx from 'clsx'

import { JsonLd } from '@/components/JsonLd'

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Native details/summary: keyboard accessible and works without JavaScript
export function Faq({ items, title = 'Questions About Timeline and Scope' }) {
  let half = Math.ceil(items.length / 2)
  let columns = [items.slice(0, half), items.slice(half)]

  return (
    <section aria-labelledby="faq-heading">
      <JsonLd
        id="faq"
        data={{
          '@type': 'FAQPage',
          mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
      <h2 id="faq-heading" className="text-section">
        {title}
      </h2>
      {/* Two independent columns on wide screens, so a long list scans faster */}
      <div className="mt-8 grid gap-x-12 lg:grid-cols-2">
        {columns.map((column, index) => (
          <div
            key={index}
            className={clsx(
              'border-rule-strong',
              index === 0 ? 'border-t-2' : 'lg:border-t-2',
            )}
          >
            {column.map((item) => (
              <details
                key={item.question}
                className="group border-b border-rule"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lead-size leading-[1.35] font-bold marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sunken text-link transition-transform duration-300 ease-out-quart group-open:rotate-45">
                    <PlusIcon className="h-5 w-5" />
                  </span>
                </summary>
                <p className="max-w-measure pr-14 pb-7 text-body leading-[1.7] text-graphite">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
