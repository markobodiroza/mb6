import Link from 'next/link'
import siteMeta from '@/data/siteMeta';
import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-emerald-500 dark:hover:text-emerald-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-neutral-100 pt-10 pb-16 dark:border-neutral-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/process">Process</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/about">About</NavLink>                
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  &copy; {new Date().getFullYear()} {siteMeta.copyright} This website does not track you, or use any analytics software.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
