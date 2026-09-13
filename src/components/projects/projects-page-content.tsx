'use client'

import { useState } from 'react'
import { projects, projectCategories } from '@/data/projects'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/animations/fade-in'
import Link from 'next/link'
import { ExternalLink, Github, Database } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {projectCategories.map(category => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer active:scale-95 capitalize",
              activeCategory === category.value 
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.35)] scale-105" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary/30"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.slug} direction="up" delay={index * 0.1}>
            <Card hover className="h-full flex flex-col p-6 group">
              <div className="mb-4">
                <Badge variant="accent" className="capitalize mb-3">{project.category}</Badge>
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.name}
                  </h3>
                </Link>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map(tech => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 5 && (
                  <Badge variant="outline" className="text-xs">+{project.technologies.length - 5}</Badge>
                )}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-1 text-sm font-medium hover:scale-105">
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-1 text-sm font-medium hover:scale-105">
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {project.swaggerUrl && (
                  <a href={project.swaggerUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-1 text-sm font-medium hover:scale-105">
                    <Database className="w-4 h-4" /> API
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center text-sm font-semibold ml-auto group/link"
                >
                  Case Study <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 ml-1">&rarr;</span>
                </Link>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
