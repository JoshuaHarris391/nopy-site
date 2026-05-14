import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost'
type Size = 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type AsLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string }

type AsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined }

export type ButtonProps = AsLinkProps | AsButtonProps

function classes(variant: Variant, size: Size, extra?: string): string {
  const base = `btn btn-${variant}`
  const sizeClass = size === 'lg' ? ' btn-lg' : ''
  return `${base}${sizeClass}${extra ? ` ${extra}` : ''}`
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props as CommonProps & {
    href?: string
  } & Record<string, unknown>

  if (typeof (props as AsLinkProps).href === 'string') {
    const { href, target, rel, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    const computedRel = target === '_blank' ? rel ?? 'noopener noreferrer' : rel
    return (
      <a
        href={href}
        target={target}
        rel={computedRel}
        className={classes(variant, size, className)}
        {...anchorRest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes(variant, size, className)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
