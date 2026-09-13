'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin } from 'lucide-react'
import { navigationItems, siteConfig } from '@/data/site'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm border-l border-border bg-background p-6 shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-lg">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                autoFocus
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="flex flex-col gap-4 flex-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-border pt-6 pb-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
