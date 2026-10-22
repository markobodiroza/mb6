import Link from 'next/link'

import { Container } from '@/components/Container'
import siteMeta from '@/data/siteMeta'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="on-night bg-night text-on-night dark:border-t dark:border-rule dark:bg-paper">
      <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-bold">Marko Bodiroza</p>
          <p className="mt-1 text-ui text-on-night-muted">{siteMeta.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-1 text-ui font-medium">
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
      <Container className="flex flex-col gap-3 border-t border-[color-mix(in_oklch,var(--on-night)_18%,transparent)] py-6 text-ui text-on-night-muted lg:flex-row lg:justify-between lg:gap-10">
        <p>
          &copy; {new Date().getFullYear()} {siteMeta.copyright}. This website
          uses no cookies, no tracking and no analytics.
          <br />
          Form submissions are only used to contact you back, and if we don’t
          engage further I delete the data after 30 days.
        </p>
        <p className="lg:flex-none lg:text-right">
          15+ years in digital marketing, engineering, AI and SEO.
          <br />
          Certified by Anthropic, Google and HubSpot.
        </p>
      </Container>
    </footer>
  )
}
