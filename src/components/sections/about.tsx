import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Backend-first engineer with a passion for building scalable, production-grade systems" 
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <FadeIn delay={0.1}>
              <p>
                I specialize in designing and building scalable backend systems using Java, Spring Boot, and Spring Cloud. My experience spans from implementing microservices architectures with service discovery and API gateways to building real-time data pipelines with Kafka and WebSockets.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                At TCS Digital, I worked on enterprise applications supporting 10,000+ concurrent users, implementing JWT and OAuth2 authentication across multiple applications, and optimizing system performance to achieve up to 80% faster load times.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                Beyond backend engineering, I build modern frontend applications with React and TypeScript, and deploy production systems using Docker, AWS, and Nginx. I approach every project with a focus on clean architecture, performance, and maintainability.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} direction="up" className="w-full">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Current</span>
                  <span className="font-medium text-foreground">Accenture</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium text-foreground">3+ Years</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium text-foreground">B.Tech in ECE, SOE, CUSAT (8.91/10)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium text-foreground">Distributed Systems</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
