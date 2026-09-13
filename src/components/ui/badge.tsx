import { cn } from '@/lib/utils'
import * as React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'accent'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-secondary text-secondary-foreground',
    outline: 'border border-border text-foreground',
    accent: 'bg-primary/10 text-primary border border-primary/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
