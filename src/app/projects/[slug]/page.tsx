import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { generateProjectJsonLd } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ExternalLink, Github, Database, Calendar } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'
import { TradeXArchitectureDiagram } from '@/components/projects/tradex-architecture'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return {}
  
  return {
    title: `${project.name} — ${project.category === 'microservices' ? 'Spring Boot Microservices Paper Trading Platform' : project.category === 'full-stack' ? 'Full-Stack Platform' : 'Engineering Project'}`,
    description: project.description,
  }
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  
  if (!project) {
    notFound()
  }

  const jsonLd = generateProjectJsonLd({
    name: project.name,
    description: project.description,
    url: project.liveUrl || `${siteConfig.url}/projects/${project.slug}`,
    technologies: project.technologies,
  })

  return (
    <>
      <Script id="project-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="py-20">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.name }
        ]} />
        
        <FadeIn direction="up">
          <div className="mb-12 mt-8">
            <Badge variant="accent" className="mb-4 capitalize">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.name}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">
              {project.description}
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-8 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{project.date} {project.endDate ? `- ${project.endDate}` : ''}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium border border-border">
                  <Github className="w-4 h-4" /> Source Code
                </a>
              )}
              {project.swaggerUrl && (
                <a href={project.swaggerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium border border-border">
                  <Database className="w-4 h-4" /> API Docs
                </a>
              )}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <FadeIn direction="up" delay={0.1}>
              <SectionHeading title="Overview" align="left" className="mb-6" />
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>{project.detailedDescription}</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <SectionHeading title="Key Features" align="left" className="mb-6" />
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 bg-secondary/30 p-4 rounded-lg border border-border/50">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {project.slug === 'tradex' ? (
              <FadeIn direction="up" delay={0.3}>
                <SectionHeading 
                  title="Microservices Architecture & Event Streaming" 
                  subtitle="Interactive system architecture flow showing ingress, service discovery, pub/sub streaming, and dual-layer persistence"
                  align="left" 
                  className="mb-6" 
                />
                <TradeXArchitectureDiagram />
              </FadeIn>
            ) : project.architecture ? (
              <FadeIn direction="up" delay={0.3}>
                <SectionHeading title="Architecture Flow" align="left" className="mb-6" />
                <Card className="p-6 bg-secondary/20">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-muted-foreground">
                    {project.architecture}
                  </pre>
                </Card>
              </FadeIn>
            ) : null}

            {(project.challenges || project.solutions) && (
              <FadeIn direction="up" delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.challenges && (
                    <Card className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-4">Key Engineering Challenges</h3>
                      <ul className="space-y-3">
                        {project.challenges.map((c, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}
                  {project.solutions && (
                    <Card className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-4">Architectural Solutions</h3>
                      <ul className="space-y-3">
                        {project.solutions.map((s, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}
                </div>
              </FadeIn>
            )}
          </div>

          <div className="lg:col-span-1">
            <FadeIn direction="up" delay={0.2}>
              <Card className="p-6 sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
        
        {/* Related Projects (simplified, just showing some featured ones) */}
        <div className="mt-24">
          <SectionHeading title="Other Projects" align="left" className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.filter(p => p.slug !== project.slug && p.featured).slice(0, 3).map(p => (
              <Link key={p.slug} href={`/projects/${p.slug}`}>
                <Card hover className="p-6 h-full border-border/50">
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.name}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
