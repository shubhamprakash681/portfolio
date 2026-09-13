import { cn } from '@/lib/utils'
import * as React from 'react'

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  gradient?: boolean
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  gradient = false,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 flex flex-col', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl',
          gradient && 'bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 max-w-2xl text-lg text-muted-foreground', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
