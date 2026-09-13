import { generatePageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animations/fade-in'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from '@/data/blog'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Technical blog focusing on Java, Spring Boot, Microservices, and modern web development.',
  path: '/blog'
})

export default function BlogPage() {
  return (
    <Container className="py-20">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <SectionHeading 
        title="Technical Blog" 
        subtitle="Insights and engineering articles on backend systems, performance optimization, and web development."
        align="left" 
        className="mb-12 mt-8" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.slug} direction="up" delay={index * 0.1}>
            <Link href={`/blog/${post.slug}`} className="block h-full group">
              <Card hover className="p-6 h-full flex flex-col border-border/50">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-primary inline-flex items-center ml-2 shrink-0">
                    Read <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">&rarr;</span>
                  </span>
                </div>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
