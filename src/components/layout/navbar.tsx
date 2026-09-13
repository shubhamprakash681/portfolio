'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { navigationItems } from '@/data/site'
import { ThemeToggle } from './theme-toggle'
import { MobileNav } from './mobile-nav'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border h-16">
      <div className="max-w-6xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]">
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
                "relative py-1 text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href
                  ? "text-primary font-semibold after:scale-x-100"
                  : "text-muted-foreground after:scale-x-0",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-transform after:duration-200 hover:after:scale-x-100"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-secondary/60 hover:bg-secondary text-foreground hover:text-primary transition-all shadow-xs active:scale-95 cursor-pointer"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 stroke-[2.2]" />
          </button>
        </div>
      </div>

      <MobileNav 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)} 
      />
    </header>
  )
}
