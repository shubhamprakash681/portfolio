import { generatePageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'
import { Card } from '@/components/ui/card'
import { skillCategories } from '@/data/skills'

export const metadata = generatePageMetadata({
  title: 'Skills',
  description: 'Technical skills, programming languages, and tools expertise of Shubham Prakash.',
  path: '/skills'
})

export default function SkillsPage() {
  return (
    <Container className="py-20">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Skills' }]} />
      <SectionHeading title="Technical Skills" align="left" className="mb-12" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.name} direction="up" delay={index * 0.1}>
            <Card className="p-6 h-full flex flex-col">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 border-b border-border pb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
