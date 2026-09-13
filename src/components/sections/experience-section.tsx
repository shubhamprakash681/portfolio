'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="Building enterprise-grade software across multiple organizations" 
        />
        
        <div className="mt-12 max-w-4xl mx-auto relative">
          {/* Vertical timeline line (hidden on mobile) */}
          <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-[2px] bg-primary/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up" className="relative">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  {/* Date (Left Side) */}
                  <div className="md:w-[25%] flex-shrink-0 md:text-right pt-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  
                  {/* Timeline Dot (hidden on mobile) */}
                  <div className="hidden md:flex absolute left-[25%] top-1.5 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
                  </div>
                  
                  {/* Content Card (Right Side) */}
                  <div className="md:w-[75%]">
                    <Card className="p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold">{exp.company}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                          <span className="text-primary text-sm font-medium">{exp.role}</span>
                          <span className="hidden sm:inline text-muted-foreground">•</span>
                          <span className="text-muted-foreground text-sm">{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6 list-outside list-disc pl-4">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            <span dangerouslySetInnerHTML={{ __html: desc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }} />
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="accent">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
