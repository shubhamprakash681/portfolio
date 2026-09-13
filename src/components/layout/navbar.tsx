'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { navigationItems } from '@/data/site'
import { ThemeToggle } from './theme-toggle'
import { MobileNav } from './mobile-nav'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border h-16">
      <div className="max-w-6xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-primary-foreground font-bold text-sm">
            SP
          </div>
          <span className="hidden lg:inline-block font-semibold group-hover:text-primary transition-colors">
            Shubham Prakash
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <MobileNav 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)} 
      />
    </header>
  )
}
