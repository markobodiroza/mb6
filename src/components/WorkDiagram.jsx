import clsx from 'clsx'

// Flow diagrams for work examples, drawn in HTML so they stay readable on
// phones (lanes stack top to bottom) and follow dark mode. Data shape is
// described in src/data/work.js.
// Plain steps sit on a soft fill; only optional steps keep an outline
const fill = 'bg-[color-mix(in_oklch,var(--on-brand)_10%,transparent)]'
const line = 'border-[color-mix(in_oklch,var(--on-brand)_45%,transparent)]'

// Text is centered while a lane stacks, to line up with its arrows
function Node({ node, layout }) {
  return (
    <div
      className={clsx(
        'rounded-2xl px-4 py-3',
        layout.text,
        node.highlight
          ? 'bg-citron text-on-citron'
          : node.dashed
            ? clsx('border-[1.5px] border-dashed', line)
            : fill,
      )}
    >
      <p className="leading-snug font-bold">{node.title}</p>
      {node.note && (
        <p
          className={clsx(
            'mt-1 text-ui leading-snug',
            node.highlight ? 'text-on-citron' : 'text-on-brand-muted',
          )}
        >
          {node.note}
        </p>
      )}
    </div>
  )
}

// Lanes run across at lg, or at xl when they have six steps or more
const across = {
  lg: {
    list: 'lg:flex-row',
    item: 'lg:flex-1 lg:flex-row lg:items-center',
    connector: 'lg:px-1.5 lg:py-0',
    arrow: 'lg:rotate-0',
    text: 'text-center lg:text-left',
  },
  xl: {
    list: 'xl:flex-row',
    item: 'xl:flex-1 xl:flex-row xl:items-center',
    connector: 'xl:px-1.5 xl:py-0',
    arrow: 'xl:rotate-0',
    text: 'text-center xl:text-left',
  },
}

// Points down while a lane stacks, and right once it runs across
function Connector({ twoWay, layout }) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        'flex flex-none items-center justify-center py-1.5 text-on-brand-muted',
        layout.connector,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx('h-5 w-5 rotate-90', layout.arrow)}
      >
        {twoWay ? (
          <path d="M4 8.5h15m-3-3 3 3-3 3M20 15.5H5m3-3-3 3 3 3" />
        ) : (
          <path d="M4 12h16m-4-4 4 4-4 4" />
        )}
      </svg>
    </span>
  )
}

function Lane({ lane }) {
  let layout = across[lane.steps.length >= 6 ? 'xl' : 'lg']
  return (
    <div>
      <p className={clsx('label text-on-brand-muted', layout.text)}>
        {lane.label}
      </p>
      <ol className={clsx('mt-4 flex flex-col', layout.list)}>
        {lane.steps.map((step, index) => (
          <li
            key={step.title ?? index}
            className={clsx('flex min-w-0 flex-col', layout.item)}
          >
            {index > 0 && <Connector twoWay={step.twoWay} layout={layout} />}
            <div className="min-w-0 flex-1">
              {step.stack ? (
                <ul role="list" className="grid gap-2">
                  {step.stack.map((node) => (
                    <li key={node.title}>
                      <Node node={node} layout={layout} />
                    </li>
                  ))}
                </ul>
              ) : (
                <Node node={step} layout={layout} />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function WorkDiagram({ lanes, label, className }) {
  return (
    <figure
      aria-label={label}
      className={clsx(
        'blueprint on-brand rounded-[1.75rem] p-6 text-on-brand sm:p-9',
        className,
      )}
    >
      {lanes.map((lane, index) => (
        <div key={lane.label} className={clsx(index > 0 && 'mt-10')}>
          <Lane lane={lane} />
        </div>
      ))}
    </figure>
  )
}
