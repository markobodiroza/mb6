// A row of in-page links under a page header, for long pages. They share
// the tag colors and flip to an outline on hover
export function JumpNav({ items }) {
  return (
    <nav aria-label="On this page" className="mt-lead">
      <p className="label text-graphite">Jump To</p>
      <ul role="list" className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-tag-bg bg-tag-bg px-4 text-ui font-semibold text-tag-fg transition-colors duration-200 hover:bg-transparent hover:text-link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
