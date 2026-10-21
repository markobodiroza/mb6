import Link from 'next/link'

import { Container } from '@/components/Container'
import siteMeta from '@/data/siteMeta'
import { contactHref } from '@/lib/contact'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="on-night bg-night text-on-night">
      <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-bold">Marko Bodiroza</p>
          <p className="mt-1 text-[0.9375rem] text-on-night-muted">
            {siteMeta.tagline}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 text-[0.9375rem] font-medium">
            <li>
              <Link
                href={contactHref()}
                className="inline-block py-2.5 text-citron underline-offset-4 hover:underline"
              >
                Send a Message
              </Link>
            </li>
            <li>
              <a
                href={siteMeta.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2.5 text-citron underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-1 text-[0.9375rem] font-medium">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block py-2.5 text-on-night-muted transition-colors duration-200 hover:text-on-night"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="border-t border-[color-mix(in_oklch,var(--on-night)_18%,transparent)] py-6 text-[0.9375rem] text-on-night-muted">
        &copy; {new Date().getFullYear()} {siteMeta.copyright}. This website
        uses no cookies, no tracking and no analytics.
      </Container>
    </footer>
  )
}
