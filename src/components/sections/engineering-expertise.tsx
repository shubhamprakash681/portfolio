import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { 
  Layers, 
  Network, 
  Zap, 
  Shield, 
  Database, 
  Code, 
  Layout, 
  Cloud, 
  HardDrive, 
  Radio 
} from 'lucide-react'

const concepts = [
  {
    icon: Layers,
    title: 'Microservices',
    description: 'Designing independently deployable services with well-defined boundaries'
  },
  {
    icon: Network,
    title: 'Distributed Systems',
    description: 'Building systems that scale across multiple nodes and handle failures gracefully'
  },
  {
    icon: Zap,
    title: 'Event-Driven Architecture',
    description: 'Implementing event streaming with Kafka for decoupled, scalable communication'
  },
  {
    icon: Shield,
    title: 'Authentication & Security',
    description: 'JWT, OAuth2, Auth0 SSO, and RBAC across enterprise applications'
  },
  {
    icon: Database,
    title: 'Caching Strategies',
    description: 'Redis caching for low-latency data access and session management'
  },
  {
    icon: Code,
    title: 'API Design',
    description: 'RESTful APIs following best practices with proper versioning and documentation'
  },
  {
    icon: Layout,
    title: 'System Design',
    description: 'HLD and LLD for scalable, maintainable system architectures'
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Docker, AWS EC2, Nginx for production-grade deployments'
  },
  {
    icon: HardDrive,
    title: 'Database Design',
    description: 'PostgreSQL, MongoDB with JPA/Hibernate and aggregation pipelines'
  },
  {
    icon: Radio,
    title: 'Real-Time Systems',
    description: 'WebSocket streaming and live data pipelines'
  }
]

export function EngineeringExpertise() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Engineering Expertise" 
          subtitle="Core concepts and architectural patterns I work with" 
        />
        
        <StaggerContainer className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {concepts.map((concept, index) => {
            const Icon = concept.icon
            return (
              <StaggerItem key={index}>
                <Card hover className="p-4 h-full flex flex-col items-start border border-border/50 bg-background/50 backdrop-blur-sm group">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-sm mt-2 group-hover:text-primary transition-colors">{concept.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {concept.description}
                  </p>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
