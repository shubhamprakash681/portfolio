import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/data/blog'

export function BlogPreview() {
  // Only show first 2 posts
  const recentPosts = blogPosts.slice(0, 2)
  
  if (recentPosts.length === 0) return null

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Writing" 
          subtitle="Articles on backend engineering, distributed systems, and architecture patterns" 
        />
        
        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <Card hover className="h-full flex flex-col p-6 transition-colors">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-primary inline-flex items-center ml-2 shrink-0">
                      Read <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">&rarr;</span>
                    </span>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <div className="mt-12 flex justify-center">
          <Button variant="ghost" href="/blog" className="group">
            Read All Articles 
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
