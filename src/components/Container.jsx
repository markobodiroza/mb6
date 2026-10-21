import clsx from 'clsx'

export function Container({
  as: Component = 'div',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={clsx('mx-auto w-full max-w-[78rem] px-5 sm:px-8', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
