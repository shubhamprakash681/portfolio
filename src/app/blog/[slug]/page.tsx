import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import { siteConfig } from '@/data/site'
import { generateArticleJsonLd } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/animations/fade-in'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User } from 'lucide-react'
import Script from 'next/script'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return {}
  
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  }
}

// Simple helper to render basic markdown-like content (splits by ``` for code blocks)
function renderContent(content: string) {
  const parts = content.split('```');
  
  return parts.map((part, index) => {
    // Even indexes are normal text, odd indexes are code blocks
    if (index % 2 === 0) {
      return (
        <div key={index} className="space-y-4" dangerouslySetInnerHTML={{ __html: part.replace(/\n\n/g, '<br/><br/>') }} />
      )
    } else {
      // It's a code block
      // Extract language if present (first line)
      const lines = part.split('\n');
      const lang = lines[0].trim();
      const code = lines.slice(1).join('\n').trim();
      
      return (
        <pre key={index} className="bg-secondary/30 p-4 rounded-lg overflow-x-auto border border-border/50 my-6 font-mono text-sm" data-language={lang}>
          <code className="text-muted-foreground">{code || part}</code>
        </pre>
      )
    }
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    notFound()
  }

  const jsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.modifiedDate,
    tags: post.tags,
  })

  return (
    <>
      <Script id="article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="py-20">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title }
        ]} />
        
        <article className="max-w-3xl mx-auto mt-12">
          <FadeIn direction="up">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime} min read
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map(tag => (
                <Badge key={tag} variant="accent">{tag}</Badge>
              ))}
            </div>
            
            <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-transparent prose-pre:p-0">
              {renderContent(post.content)}
            </div>
          </FadeIn>
        </article>
      </Container>
    </>
  )
}
