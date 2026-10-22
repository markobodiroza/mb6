import { ServiceIcon } from '@/components/Icons'
import { QuoteCard } from '@/components/Testimonials'
import { processSteps, testimonials } from '@/data/content'

// The five steps and the principles behind them. Lives on Pricing, under
// the packages, so cost and way of working sit together.
// The manufacturer's words sit beside how the work runs
const revenueQuote = testimonials.find((item) =>
  item.author.startsWith('Marketing Director'),
)

const principles = [
  {
    title: 'Small Before Big',
    text: 'One workflow that works beats ten that half work. We scale only what has proven itself.',
  },
  {
    title: 'People Stay in Charge',
    text: 'AI handles the volume of drafts and busywork. Your people review, decide and approve anything that goes out.',
  },
  {
    title: 'Tested by Someone Else',
    text: 'Whoever builds a workflow never signs it off alone. A second person tries it on real tasks first.',
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-28"
    >
      <h2 id="process-heading" className="text-section">
        How I Work
      </h2>
      <p className="text-lead mt-5 max-w-2xl text-graphite">
        I get one thing working before scaling it, and people stay in charge of
        the decisions that matter. Every project follows the same five steps,
        and the last one feeds back into the second.
      </p>
      <div className="mt-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-20">
          <ol className="relative">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                data-reveal
                className="relative grid grid-cols-[3.5rem_1fr] gap-x-6 pb-14 sm:grid-cols-[4.5rem_1fr]"
              >
                {/* The rail joins the steps; after the last step it turns
                    into a dashed line that leads to the loop back */}
                <span
                  aria-hidden="true"
                  className={
                    index < processSteps.length - 1
                      ? 'rail-draw absolute top-14 bottom-0 left-7 w-0.5 bg-rule sm:top-18 sm:left-9'
                      : 'rail-draw absolute top-14 bottom-0 left-7 border-l-2 border-dashed border-link sm:top-18 sm:left-9'
                  }
                />
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-citron text-on-citron sm:h-18 sm:w-18"
                >
                  <ServiceIcon
                    name={step.icon}
                    className="h-7 w-7 sm:h-8 sm:w-8"
                  />
                </span>
                <div className="pt-2 sm:pt-4">
                  <h3 className="text-subhead">
                    {step.title.replace(/^\d+\.\s*/, '')}
                  </h3>
                  <p className="mt-2 text-ui text-muted italic">{step.note}</p>
                  <p className="mt-3 max-w-measure text-body leading-[1.65] text-graphite">
                    {step.detail}
                  </p>
                  <p className="mt-5 inline-flex flex-wrap items-baseline gap-x-2 rounded-2xl bg-sunken px-4 py-2">
                    <span className="label text-link">You Get</span>
                    <span className="font-semibold">{step.outcome}</span>
                  </p>
                </div>
              </li>
            ))}
            <li
              data-reveal
              className="grid grid-cols-[3.5rem_1fr] items-center gap-x-6 sm:grid-cols-[4.5rem_1fr]"
            >
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-link text-link sm:h-18 sm:w-18"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-7 w-7 sm:h-8 sm:w-8"
                >
                  <path
                    d="M25 12a10 10 0 1 0 1.2 8.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    pathLength="1"
                    className="diagram-loop"
                  />
                  <path
                    d="M25.5 5.5V12H19"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-lead-size leading-[1.3] font-bold">
                  Then Back to Planning
                </p>
                <p className="mt-1 text-graphite">
                  The next item on the roadmap starts the loop again, so the
                  system keeps improving.
                </p>
              </div>
            </li>
          </ol>
          <aside
            data-reveal
            aria-labelledby="principles-heading"
            className="lg:pt-4"
          >
            <div className="lg:sticky lg:top-28">
              <div className="on-brand rounded-[1.75rem] bg-brand p-8 text-on-brand shadow-card">
                <h3 id="principles-heading" className="text-title">
                  What Stays the Same
                </h3>
                <ul role="list" className="mt-4 space-y-6">
                  {principles.map((principle) => (
                    <li key={principle.title}>
                      <p className="font-bold text-citron">{principle.title}</p>
                      <p className="mt-1 text-on-brand-muted">
                        {principle.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <QuoteCard item={revenueQuote} tone="citron" className="mt-6" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
