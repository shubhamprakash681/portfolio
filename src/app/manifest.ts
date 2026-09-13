import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Shubham',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#f97316',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

