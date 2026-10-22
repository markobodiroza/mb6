// A row of in-page links under a page header, for long pages
export function JumpNav({ items }) {
  return (
    <nav aria-label="On this page" className="mt-lead">
      <p className="label text-graphite">Jump To</p>
      <ul role="list" className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-rule bg-paper px-4 text-ui font-semibold text-link transition-colors duration-200 hover:border-link hover:bg-[color-mix(in_oklch,var(--link)_10%,var(--paper))] dark:border-transparent dark:bg-raised dark:text-on-raised dark:hover:border-citron dark:hover:bg-raised"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
