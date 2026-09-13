import * as React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  href?: string
  icon?: React.ReactNode
  download?: boolean | string
  target?: string
  rel?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, icon, children, download, target, rel, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

    const variants = {
      primary: 'bg-primary text-primary-foreground hover:brightness-110',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-border text-foreground hover:bg-primary/10',
      ghost: 'text-foreground hover:bg-secondary',
    }

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-5 text-base',
      lg: 'h-12 px-8 text-lg',
      icon: 'h-9 w-9 p-0',
    }

    const classes = cn(baseStyles, variants[variant], sizes[size], className)

    const content = (
      <>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </>
    )

    if (href) {
      if (target || download || href.startsWith('http') || href.startsWith('mailto:')) {
        return (
          <a href={href} className={classes} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} download={download}>
            {content}
          </a>
        )
      }
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    )
  }
)
Button.displayName = 'Button'
