import { cn } from '@/lib/utils'
import * as React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'accent'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-border/80',
    outline: 'border border-border text-foreground hover:border-primary/50 hover:bg-secondary/60 hover:text-foreground',
    accent: 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 hover:border-primary/40 hover:shadow-[0_0_12px_hsl(var(--primary)/0.2)]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 hover:scale-[1.03] select-none',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
