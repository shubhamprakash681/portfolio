'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react'
import { navigationItems, siteConfig } from '@/data/site'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  if (!mounted) return null

  const content = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] isolate">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-background border-l border-border h-full shadow-2xl flex flex-col z-[10000] overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-card/40">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground font-bold text-sm shadow-xs">
                  SP
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm leading-tight text-foreground">Shubham Prakash</span>
                  <span className="text-[11px] text-muted-foreground">Software Engineer</span>
                </div>
              </div>

              {/* High-visibility Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-secondary/60 hover:bg-secondary text-foreground hover:text-primary transition-colors cursor-pointer active:scale-95"
              >
                <X className="h-5 w-5 stroke-[2.2]" />
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground px-3 mb-3">
                Navigation
              </p>
              <nav className="flex flex-col gap-1.5">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all",
                        isActive
                          ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-3"
                          : "text-foreground/80 hover:text-foreground hover:bg-secondary/60"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className={cn(
                        "w-4 h-4 transition-transform",
                        isActive ? "text-primary opacity-100 translate-x-0.5" : "text-muted-foreground/40 opacity-0 group-hover:opacity-100"
                      )} />
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Drawer Footer with Theme Toggle & Social Links */}
            <div className="mt-auto border-t border-border px-6 py-5 bg-card/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">Theme Appearance</span>
                <ThemeToggle />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/60">
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-md border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-md border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center justify-center w-8 h-8 rounded-md border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Send Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:+91${siteConfig.phone}`}
                    className="flex items-center justify-center w-8 h-8 rounded-md border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Call Phone"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>

                <Link
                  href="/resume"
                  onClick={onClose}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  View Resume &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )

  return createPortal(content, document.body)
}
