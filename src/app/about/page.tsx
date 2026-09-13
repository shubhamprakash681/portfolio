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
              With over 3 years of experience in the tech industry, I specialize in building robust,
              scalable backend architectures using Java, Spring Boot, and Microservices, while also
              crafting modern frontend experiences with React and Next.js.
            </p>
            <p>
              During my time at Tata Consultancy Services (TCS), I&apos;ve had the opportunity to work on
              enterprise-scale applications, optimizing performance, implementing reliable distributed systems,
              and migrating legacy monolithic structures to modern microservices. My core focus has always
              been on delivering high-quality, maintainable code that directly contributes to business success.
            </p>
            <p>
              Outside of my enterprise work, I love exploring new technologies and building full-stack projects.
              From real-time trading platforms like TradeX to rich multimedia applications like VideoShare,
              I enjoy solving complex engineering challenges and continuously pushing the boundaries of my technical skills.
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <h3 className="text-2xl font-bold mb-6 text-foreground">Education</h3>
          <Card className="p-6">
            <h4 className="text-lg font-semibold text-primary">Bachelor of Technology in Computer Science</h4>
            <p className="text-muted-foreground mt-2">SRM Institute of Science and Technology</p>
            <p className="text-sm text-muted-foreground mt-1">2017 - 2021 | CGPA: 8.5/10</p>
            <div className="mt-4 text-muted-foreground text-sm">
              Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Distributed Systems, Operating Systems.
            </div>
          </Card>
        </FadeIn>
      </div>
    </Container>
  )
}
