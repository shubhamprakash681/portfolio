import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { featuredProjects } from '@/data/projects'
import { Button } from '@/components/ui/button'

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Production-grade applications demonstrating full-stack and microservices expertise"
          gradient
        />
        
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <Card hover className="h-full flex flex-col p-6 transition-all duration-300 group">
                <div className="mb-4">
                  <Badge variant="accent" className="mb-4 inline-block">
                    {project.category}
                  </Badge>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                  </Link>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center text-sm font-medium"
                      title="Live Site"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center text-sm font-medium"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  )}
                  {project.swaggerUrl && (
                    <a 
                      href={project.swaggerUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center text-sm font-medium"
                      title="Swagger API Documentation"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> API
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary hover:underline transition-colors inline-flex items-center text-sm font-medium ml-auto"
                  >
                    Case Study &rarr;
                  </Link>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeIn delay={0.4} className="mt-12 text-center">
          <Button variant="ghost" href="/projects" className="group">
            View All Projects 
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
