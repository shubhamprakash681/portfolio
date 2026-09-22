import { generatePageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export const metadata = generatePageMetadata({
  title: 'About',
  description: 'Learn about Shubham Prakash, a Software Engineer specializing in backend development, distributed systems, and modern web applications.',
  path: '/about'
})

export default function AboutPage() {
  return (
    <Container className="py-20">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <SectionHeading title="About Me" align="left" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            <Image
              src="/profile.png"
              alt="Shubham Prakash"
              width={200}
              height={200}
              className="rounded-2xl object-cover shadow-lg border-2 border-primary/20"
            />
          </div>
          <div className="prose prose-invert max-w-none text-muted-foreground mt-6 space-y-4">
            <p>
              Hello! I&apos;m Shubham Prakash, a passionate Software Engineer based in Mumbai, India.
              With 3 years of experience in the tech industry, I specialize in building robust,
              scalable backend architectures using Java, Spring Boot, Spring Cloud, and Microservices, while also
              crafting modern frontend experiences with React, TypeScript, and Next.js.
            </p>
            <p>
              Currently, I work as a Packaged App Development Analyst at Accenture. Previously at Tata Consultancy
              Services (TCS Digital), I engineered enterprise applications, migrated authentication to JWT, OAuth2,
              and Auth0 SSO across 3 enterprise applications, integrated Spring Cloud Eureka and Gateway for centralized routing,
              and optimized caching and session management to support 10,000+ concurrent users with up to 80% faster load times.
            </p>
            <p>
              My background also includes software engineering at Sylvr, where I built MERN stack financial visualization applications
              serving 50+ organizations, and deep learning research at IIT Patna. Outside of enterprise engineering, I love
              architecting distributed platforms like TradeX (a realtime paper trading platform with Kafka, WebSockets, and Redis)
              and VideoShare.
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Education</h3>
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-primary">B.Tech in Electronics and Communication Engineering</h4>
              <p className="text-foreground font-medium mt-1">School of Engineering, Cochin University of Science and Technology (CUSAT)</p>
              <p className="text-sm text-muted-foreground mt-1">Jun 2019 – Mar 2023 | CGPA: 8.91 / 10</p>
              <div className="mt-4 text-muted-foreground text-sm border-t border-border/60 pt-3">
                <span className="font-medium text-foreground">Foundations & Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming, Database Management, Communication Systems, Digital Signal Processing, Microprocessors & Microcontrollers, Computer Networks.
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Snapshot</h3>
            <Card className="p-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-border/60">
                  <span className="text-muted-foreground">Current Role</span>
                  <span className="font-medium text-foreground">Accenture</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/60">
                  <span className="text-muted-foreground">Prior Experience</span>
                  <span className="font-medium text-foreground">TCS Digital, Sylvr, IIT Patna</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/60">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium text-foreground">3 Years</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/60">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium text-foreground">Mumbai, India</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Core Focus</span>
                  <span className="font-medium text-foreground">Distributed Systems & Backend</span>
                </div>
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}
