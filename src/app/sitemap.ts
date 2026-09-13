import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const lastModified = new Date()

  // Static routes
  const routes = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/skills',
    '/blog',
    '/coffee',
    '/contact',
    '/resume',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.modifiedDate ? new Date(post.modifiedDate) : new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes, ...blogRoutes]
}
