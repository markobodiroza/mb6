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
      <div className="mt-8 border-t-2 border-ink">
        {items.map((item, index) => (
          <details
            key={item.question}
            open={index === 0}
            className="group border-b border-rule"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.1875rem] font-bold leading-[1.35] marker:hidden [&::-webkit-details-marker]:hidden">
              {item.question}
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sunken text-link transition-transform duration-300 ease-out-quart group-open:rotate-45">
                <PlusIcon className="h-5 w-5" />
              </span>
            </summary>
            <p className="max-w-prose pb-7 pr-14 text-[1.0625rem] leading-[1.7] text-graphite">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
