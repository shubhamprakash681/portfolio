import { generatePageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/experience'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Experience',
  description: 'Professional experience of Shubham Prakash as a Software Engineer.',
  path: '/experience'
})

export default function ExperiencePage() {
  return (
    <Container className="py-20">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Experience' }]} />
      <SectionHeading title="Professional Experience" align="left" />
      <div className="mt-12 relative border-l-2 border-primary/20 pl-6 space-y-12 ml-3">
        {experiences.map((exp, index) => (
          <FadeIn key={`${exp.company}-${index}`} direction="up" delay={index * 0.1}>
            <div className="relative">
              <div className="absolute -left-[35px] top-1 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1 text-primary">
                        <Calendar className="w-4 h-4" /> {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-3">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="bg-secondary/50 rounded-lg px-3 py-2 text-sm text-primary font-medium border border-border/50">
                        {metric}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
