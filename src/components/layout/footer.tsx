import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { siteConfig, navigationItems } from '@/data/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-lg">Shubham Prakash</h3>
              <p className="text-muted-foreground text-sm font-medium mt-1">Software Engineer</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href={`tel:+91${siteConfig.phone}`} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Navigation</h3>
            <ul className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Projects</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/projects/tradex" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  TradeX
                </Link>
              </li>
              <li>
                <Link href="/projects/videoshare" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  VideoShare
                </Link>
              </li>
              <li>
                <Link href="/projects/blogbreeze" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  BlogBreeze
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Connect</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href={`tel:+91${siteConfig.phone}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +91 6299783192
                </a>
              </li>
              <li>
                <Link href="/coffee" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Buy Me a Coffee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Shubham Prakash. All rights reserved.</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  )
}
