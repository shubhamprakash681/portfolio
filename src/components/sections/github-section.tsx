import { ExternalLink, Github } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site'

const repositories = [
  {
    name: 'trade-x-api',
    description: 'Spring Boot microservices backend for TradeX paper trading platform',
    language: 'Java',
    color: '#b07219',
    url: 'https://github.com/shubhamprakash681/trade-x-api'
  },
  {
    name: 'trade-x-ui',
    description: 'React frontend for TradeX with real-time charts and trading interface',
    language: 'TypeScript',
    color: '#3178c6',
    url: 'https://github.com/shubhamprakash681/trade-x-ui'
  },
  {
    name: 'videoshare',
    description: 'YouTube-like video sharing platform with streaming and social features',
    language: 'TypeScript',
    color: '#3178c6',
    url: 'https://github.com/shubhamprakash681/videoshare'
  },
  {
    name: 'videoshare-server',
    description: 'Express API for VideoShare with MongoDB and Cloudinary integration',
    language: 'TypeScript',
    color: '#3178c6',
    url: 'https://github.com/shubhamprakash681/videoshare-server'
  },
  {
    name: 'blog-breeze',
    description: 'Modern blogging platform with React, Redux, and Appwrite',
    language: 'TypeScript',
    color: '#3178c6',
    url: 'https://github.com/shubhamprakash681/blog-breeze'
  },
  {
    name: 'audioClassification',
    description: 'Audio Classification using Deep Learning — IIT Patna Internship',
    language: 'Python',
    color: '#3572A5',
    url: 'https://github.com/shubhamprakash681/audioClassification'
  }
]

export function GitHubSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Open Source & GitHub" 
          subtitle="Selected repositories from my GitHub profile" 
        />
        
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <StaggerItem key={index}>
              <a 
                href={repo.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
              >
                <Card hover className="p-5 h-full flex flex-col bg-background/50 border-border/60">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-muted-foreground" />
                      <h3 className="font-mono text-sm font-semibold text-primary/90">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {repo.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: repo.color }}
                    />
                    <span className="text-xs text-muted-foreground font-medium">
                      {repo.language}
                    </span>
                  </div>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            href={siteConfig.github || "https://github.com/shubhamprakash681"}
            target="_blank"
            className="group"
          >
            <Github className="w-4 h-4 mr-2" />
            View GitHub Profile 
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
