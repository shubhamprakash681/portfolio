import { cn } from '@/lib/utils'
import * as React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card p-6',
        hover && 'transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]',
        className
      )}
      {...props}
    />
  )
}
