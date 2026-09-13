'use client'

import { FadeIn } from '@/components/animations/fade-in'

const statsData = [
  { value: '3+', label: 'Years Experience' },
  { value: '3', label: 'Companies Worked' },
  { value: '5+', label: 'Projects Built' },
  { value: '10K+', label: 'Concurrent Users Supported' },
]

export function Stats() {
  return (
    <section className="py-16 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-border">
          {statsData.map((stat, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              direction="up"
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
