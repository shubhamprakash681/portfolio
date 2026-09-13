'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  spotlight?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, spotlight = true, onMouseMove, children, ...props }, ref) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (hover && spotlight) {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        e.currentTarget.style.setProperty('--card-mouse-x', `${x}px`)
        e.currentTarget.style.setProperty('--card-mouse-y', `${y}px`)
      }
      onMouseMove?.(e)
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          'relative rounded-xl border border-border bg-card p-6 overflow-hidden transition-all duration-300 ease-out',
          hover && [
            'group',
            'hover:-translate-y-1',
            'hover:border-primary/50',
            'hover:shadow-[0_12px_30px_-10px_hsl(var(--primary)/0.18)]',
            'dark:hover:shadow-[0_12px_35px_-8px_hsl(var(--primary)/0.25)]',
            'will-change-transform',
          ],
          className
        )}
        {...props}
      >
        {/* Dynamic Card Cursor Spotlight */}
        {hover && spotlight && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
            style={{
              background:
                'radial-gradient(350px circle at var(--card-mouse-x, 50%) var(--card-mouse-y, 50%), hsl(var(--primary) / 0.1), transparent 75%)',
            }}
          />
        )}
        {children}
      </div>
    )
  }
)
Card.displayName = 'Card'
