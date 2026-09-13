import { generatePageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { CoffeeContent } from '@/components/coffee-content'

export const metadata = generatePageMetadata({
  title: 'Buy Me a Coffee',
  description: 'Support my open-source work and projects by buying me a coffee.',
  path: '/coffee'
})

export default function CoffeePage() {
  return (
    <Container className="py-20">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Buy Me a Coffee' }]} />
      
      <div className="mt-8 mb-12 text-center max-w-2xl mx-auto">
        <SectionHeading title="Buy Me a Coffee ☕" align="center" className="mb-4" />
        <p className="text-muted-foreground text-lg">
          If you found my projects, articles, or open-source work helpful, consider supporting me! 
          It helps keep the servers running and the caffeine flowing.
        </p>
      </div>
      
      <CoffeeContent />
    </Container>
  )
}
