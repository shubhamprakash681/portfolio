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
    const baseStyles = 'group relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden active:scale-[0.98]'

    const variants = {
      primary: 'bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_0_22px_hsl(var(--primary)/0.4)]',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary/30 hover:shadow-sm active:scale-[0.98]',
      outline: 'border border-border text-foreground hover:border-primary/60 hover:text-primary hover:bg-primary/10 hover:-translate-y-0.5 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)]',
      ghost: 'text-foreground hover:bg-primary/10 hover:text-primary active:scale-[0.98]',
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
        {/* Shimmer sweep effect on primary button hover */}
        {variant === 'primary' && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
          />
        )}
        {icon && <span className="mr-2 transition-transform duration-200 group-hover:scale-110">{icon}</span>}
        <span className="relative z-10 inline-flex items-center">{children}</span>
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
