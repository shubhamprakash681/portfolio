import { generatePageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/data/site'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Contact',
  description: 'Get in touch with Shubham Prakash. Open for opportunities and collaborations.',
  path: '/contact'
})

export default function ContactPage() {
  return (
    <Container className="py-20">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <SectionHeading title="Let's Connect" align="left" className="mb-12 mt-8" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <FadeIn direction="up" delay={0.1}>
          <a href={`mailto:${siteConfig.email}`} className="block group">
            <Card hover className="p-8 flex items-start gap-4 border-border/50">
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Email</h3>
                <p className="text-muted-foreground">shubhamprakash681@gmail.com</p>
                <p className="text-primary text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Send a message &rarr;</p>
              </div>
            </Card>
          </a>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2}>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="block group">
            <Card hover className="p-8 flex items-start gap-4 border-border/50">
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">LinkedIn</h3>
                <p className="text-muted-foreground">Connect professionally</p>
                <p className="text-primary text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View Profile &rarr;</p>
              </div>
            </Card>
          </a>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.3}>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="block group">
            <Card hover className="p-8 flex items-start gap-4 border-border/50">
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.35)] transition-all duration-300">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">GitHub</h3>
                <p className="text-muted-foreground">Check out my code</p>
                <p className="text-primary text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View Repos &rarr;</p>
              </div>
            </Card>
          </a>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <Card hover className="p-8 flex items-start gap-4 border-border/50 group">
            <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.35)] transition-all duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Location</h3>
              <p className="text-muted-foreground">Mumbai, India</p>
              <p className="text-xs text-muted-foreground mt-2">Open to remote worldwide</p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Container>
  )
}
