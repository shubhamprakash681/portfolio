import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/animations/fade-in'
import { skillCategories } from '@/data/skills'

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I use to build production-grade software" 
        />
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <Card className="p-6 h-full border border-border/50 bg-card/40">
                <h3 className="font-semibold text-lg border-b border-border pb-2 mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="default" className="bg-background border-border/50 font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
