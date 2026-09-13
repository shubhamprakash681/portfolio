import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { siteConfig } from '@/data/site'
import { generatePersonJsonLd, generateWebsiteJsonLd } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Shubham Prakash — Software Engineer',
    template: '%s | Shubham Prakash',
  },
  description: siteConfig.description,
  keywords: [
    'Shubham Prakash',
    'Software Engineer',
    'Java Developer',
    'Spring Boot',
    'Microservices',
    'React Developer',
    'Full Stack Developer',
    'Mumbai'
  ],
  authors: [
    {
      name: 'Shubham Prakash',
      url: siteConfig.url,
    }
  ],
  creator: 'Shubham Prakash',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Shubham Prakash — Software Engineer',
    description: siteConfig.description,
    siteName: 'Shubham Prakash',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Prakash — Software Engineer',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personJsonLd = generatePersonJsonLd()
  const websiteJsonLd = generateWebsiteJsonLd()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
