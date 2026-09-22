import { generatePageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Briefcase, Code2, MapPin, Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/data/site'
import Link from 'next/link'

export const metadata = generatePageMetadata({
  title: 'Resume',
  description: 'Download and view the resume of Shubham Prakash.',
  path: '/resume'
})

export default function ResumePage() {
  return (
    <Container className="py-20">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resume' }]} />
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 mt-8">
        <SectionHeading title="Resume" align="left" className="mb-0" />
        <Button variant="primary" size="md" href="/resume/ShubhamPrakash_Resume_Latest.pdf" className="w-fit flex items-center gap-2" download>
          <Download className="w-4 h-4" /> Download PDF
        </Button>
      </div>
      
      <FadeIn direction="up">
        <Card className="p-8 md:p-12 border-primary/20 bg-secondary/10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Shubham Prakash</h2>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8 text-sm">
              <span className="flex items-center gap-1"><Code2 className="w-4 h-4" /> Software Engineer</span>
              <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> 3+ Years Experience</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Mumbai, India</span>
              <a href={`tel:+91${siteConfig.phone}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 6299783192
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </a>
            </div>
            
            <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
              Software Engineer with 3+ years of experience building scalable applications using Java, Spring Boot, Spring Cloud, 
              Microservices, React, and Node.js. Strong in System Design, DSA, REST APIs, distributed systems, authentication, 
              and cloud-native development across Accenture, Tata Consultancy Services (TCS Digital), Sylvr, and IIT Patna.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/experience">
                <Card hover className="p-6 bg-background border-border/50 group">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Professional Experience &rarr;</h3>
                  <p className="text-sm text-muted-foreground mt-2">View detailed work history across Accenture, TCS Digital, and more.</p>
                </Card>
              </Link>
              
              <Link href="/projects">
                <Card hover className="p-6 bg-background border-border/50 group">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Technical Projects &rarr;</h3>
                  <p className="text-sm text-muted-foreground mt-2">Explore complex systems I&apos;ve built.</p>
                </Card>
              </Link>
              
              <a href="https://linkedin.com/in/shubhamprakash681" target="_blank" rel="noopener noreferrer">
                <Card hover className="p-6 bg-background border-border/50 group h-full">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">LinkedIn &rarr;</h3>
                  <p className="text-sm text-muted-foreground mt-2">Connect with me professionally.</p>
                </Card>
              </a>
              
              <a href="https://github.com/shubhamprakash681" target="_blank" rel="noopener noreferrer">
                <Card hover className="p-6 bg-background border-border/50 group h-full">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">GitHub &rarr;</h3>
                  <p className="text-sm text-muted-foreground mt-2">Check out my open-source contributions.</p>
                </Card>
              </a>
            </div>
          </div>
        </Card>
      </FadeIn>
    </Container>
  )
}
