export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="m5 10.5 3 3 7-7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Line icons for services and process steps: 24px grid, 1.75 stroke and
// round ends, matching the arrows above. They inherit color from the text.
function LineIcon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

const icons = {
  // A route between two points: strategy and roadmap
  route: (
    <>
      <circle cx="6" cy="18" r="2.25" />
      <circle cx="18" cy="6" r="2.25" />
      <path d="M8.25 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.75" />
    </>
  ),
  // A small flowchart: process analysis and redesign
  flow: (
    <>
      <rect x="3.5" y="3.5" width="6" height="6" rx="1.5" />
      <rect x="14.5" y="14.5" width="6" height="6" rx="1.5" />
      <path d="M9.5 6.5h4a3 3 0 0 1 3 3v5" />
      <path d="m14.5 12.5 2 2 2-2" />
    </>
  ),
  // A gear: AI systems and automation
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.25M12 18.25v2.25M3.5 12h2.25M18.25 12h2.25M5.99 5.99l1.59 1.59M16.42 16.42l1.59 1.59M5.99 18.01l1.59-1.59M16.42 7.58l1.59-1.59" />
      <circle cx="12" cy="12" r="6.25" />
    </>
  ),
  // Two people: team enablement and training
  team: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M15.5 5.75a3 3 0 0 1 0 5.5M17.5 14.25a5.5 5.5 0 0 1 3 5.25" />
    </>
  ),
  // A magnifier with a spark: AI search visibility
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.25 15.25 5.25 5.25" />
      <path d="M10.5 7.5v6M7.5 10.5h6" />
    </>
  ),
  // A compass: fractional AI leadership
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2.25 4.75L8.5 15.5l2.25-4.75z" />
    </>
  ),
  // An eye: understand the work
  look: (
    <>
      <path d="M2.75 12S6 5.75 12 5.75 21.25 12 21.25 12 18 18.25 12 18.25 2.75 12 2.75 12Z" />
      <circle cx="12" cy="12" r="2.75" />
    </>
  ),
  // A folded map: plan the roadmap
  map: (
    <>
      <path d="m3.5 6.25 5.5-2.5 6 2.5 5.5-2.5v14l-5.5 2.5-6-2.5-5.5 2.5z" />
      <path d="M9 3.75v14M15 6.25v14" />
    </>
  ),
  // A flask: pilot with real work
  flask: (
    <>
      <path d="M9.5 3.5h5M10.25 3.5v5.75L5 18.25a1.5 1.5 0 0 0 1.3 2.25h11.4a1.5 1.5 0 0 0 1.3-2.25l-5.25-9V3.5" />
      <path d="M7.5 14.5h9" />
    </>
  ),
  // A board with a pointer: roll out and train
  board: (
    <>
      <rect x="3.5" y="4" width="17" height="11.5" rx="1.5" />
      <path d="M12 15.5v4M8.5 20h7M7.5 11.5l3-3 2.5 2.5 3.5-3.5" />
    </>
  ),
  // A checklist: review and refine
  checklist: (
    <>
      <path d="m4 6.5 1.75 1.75L9 5M4 13.5l1.75 1.75L9 12" />
      <path d="M12.5 7h7.5M12.5 14h7.5M4.5 19.5H20" />
    </>
  ),
}

export function ServiceIcon({ name, ...props }) {
  return <LineIcon {...props}>{icons[name]}</LineIcon>
}
