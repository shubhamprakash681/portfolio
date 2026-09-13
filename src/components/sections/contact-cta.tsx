import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/data/site'

export function ContactCTA() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Let's Connect" 
          subtitle="Open to discussing engineering challenges, collaboration opportunities, or new roles" 
          align="center"
        />
        
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href={`mailto:${siteConfig.email || "shubhamprakash681@gmail.com"}`} className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
            <Card hover className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                shubhamprakash681@gmail.com
              </p>
            </Card>
          </a>

          <a href={`tel:+91${siteConfig.phone || "6299783192"}`} className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
            <Card hover className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">Phone</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                +91 6299783192
              </p>
            </Card>
          </a>
          
          <a href={siteConfig.linkedin || "https://linkedin.com/in/shubhamprakash681"} target="_blank" rel="noopener noreferrer" className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
            <Card hover className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">LinkedIn</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Connect on LinkedIn
              </p>
            </Card>
          </a>
          
          <a href={siteConfig.github || "https://github.com/shubhamprakash681"} target="_blank" rel="noopener noreferrer" className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
            <Card hover className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">GitHub</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                View my repositories
              </p>
            </Card>
          </a>
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button variant="outline" size="lg" href="/resume">
            View Resume <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
