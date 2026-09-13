import type { NavigationItem, SocialLink } from '@/types'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const siteConfig = {
  name: 'Shubham Prakash',
  title: 'Shubham Prakash — Software Engineer',
  description:
    'Software Engineer with 3+ years of experience building scalable applications using Java, Spring Boot, Microservices, React, and distributed systems. Specializing in backend engineering, cloud-native development, and modern full-stack architecture.',
  url: siteUrl,
  email: 'shubhamprakash681@gmail.com',
  phone: '6299783192',
  location: 'Mumbai, India',
  github: 'https://github.com/shubhamprakash681',
  linkedin: 'https://linkedin.com/in/shubhamprakash681',
  jobTitle: 'Software Engineer',
  company: 'Accenture',
  university: 'Cochin University of Science and Technology',
  degree: 'B.Tech in Electronics and Communication Engineering',
  cgpa: '8.91/10',
  yearsExperience: '3+',
  coffee: {
    enabled: true,
    upiId: process.env.NEXT_PUBLIC_COFFEE_UPI || '',
    name: 'Shubham Prakash',
  },
  analytics: {
    id: process.env.NEXT_PUBLIC_ANALYTICS_ID || '',
  },
} as const

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/shubhamprakash681',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shubhamprakash681',
  },
  {
    name: 'Email',
    url: 'mailto:shubhamprakash681@gmail.com',
  },
]

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Coffee', href: '/coffee' },
  { name: 'Contact', href: '/contact' },
]

