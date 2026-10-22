import Link from 'next/link'
import clsx from 'clsx'

import { ArrowRightIcon } from '@/components/Icons'
import { bookingHref, isExternal } from '@/lib/contact'

const variantStyles = {
  primary: 'bg-action text-action-fg hover:bg-action-hover',
  secondary: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
  'on-brand': 'bg-citron text-on-citron hover:bg-on-brand',
  night: 'bg-night text-on-night hover:bg-brand',
  'on-brand-outline':
    'border border-on-brand-muted text-on-brand hover:border-on-brand hover:bg-brand-line',
}

const sizeStyles = {
  sm: 'h-11 px-5 text-[0.9375rem]',
  md: 'h-13 px-7 text-[1.0625rem]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}) {
  className = clsx(
    // Tactile: a small press on click and the arrow nudges forward on hover
    'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-[background-color,border-color,color,transform] duration-200 ease-out-quart active:translate-y-px active:scale-[0.97] [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-out-quart [&>svg]:hover:translate-x-1 disabled:cursor-wait disabled:opacity-70',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  if (!href) {
    return <button className={className} {...props} />
  }

  if (href.startsWith('mailto:') || isExternal(href)) {
    return (
      <a
        href={href}
        className={className}
        {...(isExternal(href) && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        {...props}
      />
    )
  }

  return <Link href={href} className={className} {...props} />
}

export function BookCallButton({ children = 'Book a Call', ...props }) {
  return (
    <Button href={bookingHref()} {...props}>
      {children}
    </Button>
  )
}

// Text link to another page. Buttons stay reserved for the two calls to
// action, Book a Call and Send Inquiry. The highlighter hover only works on
// paper, so colored sections pass marker={false}.
export function ArrowLink({
  href,
  children,
  color = 'text-link',
  marker = true,
  className,
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex items-center gap-2 font-bold',
        color,
        className,
      )}
    >
      <span className={clsx(marker && 'marker-hover')}>{children}</span>
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1" />
    </Link>
  )
}
