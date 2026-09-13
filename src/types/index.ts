export interface Project {
  name: string
  slug: string
  category: 'full-stack' | 'backend' | 'microservices' | 'ai-ml' | 'frontend'
  description: string
  detailedDescription: string
  technologies: string[]
  features: string[]
  architecture?: string
  challenges?: string[]
  solutions?: string[]
  github?: string
  githubApi?: string
  liveUrl?: string
  apiUrl?: string
  swaggerUrl?: string
  date: string
  endDate?: string
  featured: boolean
  image?: string
}

export interface Experience {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
  metrics?: string[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  modifiedDate?: string
  tags: string[]
  readTime: string
  author: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

