import { generatePageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProjectsPageContent } from '@/components/projects/projects-page-content'

export const metadata = generatePageMetadata({
  title: 'Projects',
  description: 'Explore technical projects, distributed systems, and web applications built by Shubham Prakash.',
  path: '/projects'
})

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} />
      <SectionHeading title="All Projects" align="left" className="mb-8" />
      <ProjectsPageContent />
    </Container>
  )
}
