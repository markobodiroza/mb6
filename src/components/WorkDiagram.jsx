import clsx from 'clsx'

// Flow diagrams for work examples, drawn in HTML so they stay readable on
// phones (lanes stack top to bottom) and follow dark mode. Data shape is
// described in src/data/work.js.
// Steps are raised cards: paper on a pale blue panel in light mode,
// ultramarine on a night blue panel in dark mode. Optional steps are
// dashed outlines; the result step is citron.

// Text is centered while a lane stacks, to line up with its arrows
function Node({ node, layout }) {
  return (
    <div
      className={clsx(
        'flex h-full flex-col justify-center rounded-2xl px-4 py-3',
        layout.text,
        node.highlight
          ? 'bg-citron text-on-citron shadow-card'
          : node.dashed
            ? 'border-2 border-dashed border-field text-ink'
            : 'bg-raised text-on-raised shadow-card',
      )}
    >
      <p className="leading-snug font-bold text-balance">{node.title}</p>
      {node.note && (
        <p
          className={clsx(
            'mt-1 text-ui leading-snug',
            node.highlight ? 'text-on-citron' : 'text-on-raised-muted',
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
    item: 'lg:flex-1 lg:flex-row lg:items-stretch',
    connector: 'lg:px-1.5 lg:py-0',
    arrow: 'lg:rotate-0',
    text: 'text-center lg:text-left',
  },
  xl: {
    list: 'xl:flex-row',
    item: 'xl:flex-1 xl:flex-row xl:items-stretch',
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
        'flex flex-none items-center justify-center self-center py-1.5 text-link',
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
      <p className={clsx('label text-muted', layout.text)}>{lane.label}</p>
      <ol className={clsx('mt-3 flex flex-col', layout.list)}>
        {lane.steps.map((step, index) => (
          <li
            key={step.title ?? index}
            className={clsx('flex min-w-0 flex-col', layout.item)}
          >
            {index > 0 && <Connector twoWay={step.twoWay} layout={layout} />}
            <div className="min-w-0 flex-1">
              {step.stack ? (
                <ul role="list" className="grid h-full gap-2">
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
        // Full-bleed band: edge to edge, with the lanes held to the 1440px container
        'mx-[calc(50%-50vw)] bg-panel py-20 sm:py-32',
        className,
      )}
    >
      <div className="mx-auto max-w-360 px-5 sm:px-8">
        {lanes.map((lane, index) => (
          <div key={lane.label} className={clsx(index > 0 && 'mt-10')}>
            <Lane lane={lane} />
          </div>
        ))}
      </div>
    </figure>
  )
}
