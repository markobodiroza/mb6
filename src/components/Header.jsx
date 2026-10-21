import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { BookCallButton } from '@/components/Button'
import { Container } from '@/components/Container'
import avatarImage from '@/images/marko-head.jpg'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4.75 8h14.5M4.75 16h14.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M5.6 18.4l1.1-1.1M17.3 6.7l1.1-1.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M19.25 14.5A7.75 7.75 0 0 1 9.5 4.75a7.75 7.75 0 1 0 9.75 9.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function useIsActive() {
  let { pathname } = useRouter()
  return (href) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`)
}

function ModeToggle() {
  // Mirrors the real theme (the toggle, the system setting or another tab can
  // change it) so screen readers hear whether dark mode is on
  let [isDark, setIsDark] = useState(false)

  useEffect(() => {
    let root = document.documentElement
    let sync = () => setIsDark(root.classList.contains('dark'))
    sync()
    let observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Dark mode"
      aria-pressed={isDark}
      className="flex h-11 w-11 items-center justify-center rounded-full text-graphite transition-colors duration-200 hover:bg-sunken hover:text-ink"
      onClick={toggleMode}
    >
      <SunIcon className="h-5 w-5 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 dark:block" />
    </button>
  )
}

function DesktopNavigation() {
  let isActive = useIsActive()

  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex items-center gap-1 text-[0.9375rem] font-medium">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={clsx(
                'relative block rounded-full px-3.5 py-2 transition-colors duration-200',
                isActive(item.href)
                  ? 'text-ink'
                  : 'text-graphite hover:bg-sunken hover:text-ink'
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3.5 bottom-0.5 h-[3px] rounded-full bg-link" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function MobileNavigation() {
  let isActive = useIsActive()
  let router = useRouter()
  let [open, setOpen] = useState(false)
  let triggerRef = useRef(null)
  let panelRef = useRef(null)
  let closeRef = useRef(null)

  let close = useCallback((restoreFocus = true) => {
    setOpen(false)
    if (restoreFocus) triggerRef.current?.focus()
  }, [])

  // Close whenever the route changes
  useEffect(() => {
    let onRoute = () => close(false)
    router.events.on('routeChangeStart', onRoute)
    return () => router.events.off('routeChangeStart', onRoute)
  }, [router.events, close])

  // While open: focus the panel, trap Tab, close on Escape and lock scroll
  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    document.documentElement.style.overflow = 'hidden'

    function onKeyDown(event) {
      if (event.key === 'Escape') close()
      if (event.key !== 'Tab') return
      let focusable = panelRef.current.querySelectorAll('a[href], button')
      let first = focusable[0]
      let last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.documentElement.style.overflow = ''
    }
  }, [open, close])

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-sunken"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      <div
        aria-hidden="true"
        onClick={() => close()}
        className={clsx(
          'fixed inset-0 z-50 bg-[color-mix(in_oklch,var(--ink)_45%,transparent)] transition-opacity duration-200 ease-out-quart dark:bg-[color-mix(in_oklch,var(--night)_80%,transparent)]',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      />
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={open ? undefined : ''}
        className={clsx(
          'fixed inset-x-3 top-3 z-50 origin-top rounded-[1.25rem] border-2 border-rule bg-paper p-6 transition duration-200 ease-out-quart',
          open
            ? 'visible translate-y-0 scale-100 opacity-100'
            : 'invisible -translate-y-2 scale-[0.98] opacity-0'
        )}
      >
        <div className="flex items-center justify-between">
          <p className="eyebrow text-muted">Menu</p>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={() => close()}
            className="-m-2 flex h-11 w-11 items-center justify-center rounded-full text-graphite hover:bg-sunken hover:text-ink"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav aria-label="Main" className="mt-4">
          <ul className="divide-y divide-rule text-[1.125rem] font-semibold">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => close(false)}
                  className={clsx(
                    'block py-3',
                    isActive(item.href) && 'text-link'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <BookCallButton className="mt-6 w-full" />
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <Container className="flex h-[4.5rem] items-center gap-4">
        <Link
          href="/"
          aria-label="Marko Bodiroza, home"
          className="group mr-auto rounded-full"
        >
          <Image
            src={avatarImage}
            alt=""
            sizes="2.75rem"
            className="h-11 w-11 rounded-full bg-sunken object-cover ring-[3px] ring-link ring-offset-2 ring-offset-paper transition-transform duration-300 ease-out-quart group-hover:-rotate-6 group-hover:scale-105"
            priority
          />
        </Link>
        <DesktopNavigation />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <BookCallButton size="sm" className="!px-4 sm:!px-5" />
          <MobileNavigation />
        </div>
      </Container>
    </header>
  )
}
