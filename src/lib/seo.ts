import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'

interface PageSeoProps {
  title: string
  description: string
  path: string
  ogImage?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageSeoProps): Metadata {
  const url = `${siteConfig.url}${path}`
  const image = ogImage || `${siteConfig.url}/opengraph-image`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.png`,
    email: `mailto:${siteConfig.email}`,
    telephone: `+91-${siteConfig.phone}`,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.company,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: siteConfig.university,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Microservices',
      'React',
      'Distributed Systems',
      'Cloud-Native Development',
      'System Design',
    ],
  }
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  }
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleJsonLd(article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    keywords: article.tags,
    image: `${siteConfig.url}/profile.png`,
  }
}

export function generateProjectJsonLd(project: {
  name: string
  description: string
  url: string
  technologies: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.name,
    description: project.description,
    url: project.url,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    programmingLanguage: project.technologies,
  }
}

