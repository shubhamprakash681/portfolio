import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { generateBreadcrumbJsonLd } from '@/lib/seo'
import { siteConfig } from '@/data/site'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Add home item by default if not present
  const fullItems = items[0]?.label === 'Home' 
    ? items 
    : [{ label: 'Home', href: '/' }, ...items]

  const jsonLd = generateBreadcrumbJsonLd(
    fullItems
      .filter((item) => item.href)
      .map((item) => ({
        name: item.label,
        url: `${siteConfig.url}${item.href}`,
      }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1

            return (
              <li key={index} className="flex items-center gap-2">
                {isLast || !item.href ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
