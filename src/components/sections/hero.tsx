'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/animations/fade-in'
import { siteConfig } from '@/data/site'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background with radial gradient mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <FadeIn delay={0.1} direction="up">
            <Badge variant="accent" className="mb-6">
              Software Engineer • Mumbai, India
            </Badge>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Shubham Prakash
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <h2 className="text-xl sm:text-2xl text-muted-foreground mt-4 font-medium">
              Software Engineer building scalable systems with Java, Spring Boot, Microservices & React.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up">
            <p className="text-muted-foreground mt-6 max-w-xl text-base sm:text-lg">
              3+ years of experience designing and implementing scalable backend systems, distributed architectures, and modern full-stack applications for enterprise environments.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up" className="w-full">
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" href="/resume/ShubhamPrakash_Resume.pdf" className="download-btn">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
              <Link
                href={siteConfig.github || "https://github.com/shubhamprakash681"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href={siteConfig.linkedin || "https://linkedin.com/in/shubhamprakash681"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href={`mailto:${siteConfig.email || "shubhamprakash681@gmail.com"}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col w-full lg:w-[40%] justify-center items-center">
          <FadeIn delay={0.3} direction="up">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-full p-1"
            >
              {/* Animated gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 animate-[spin_4s_linear_infinite]" style={{ margin: '-4px' }}></div>
              <div className="absolute inset-0 rounded-full bg-background" style={{ margin: '-2px' }}></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
              
              <div className="relative rounded-full overflow-hidden w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] bg-muted">
                <Image
                  src="/profile.png"
                  alt="Shubham Prakash — Software Engineer"
                  width={280}
                  height={280}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Architecture pipeline badge below profile */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono px-3 sm:px-4 py-2 rounded-full bg-card/90 border border-primary/30 shadow-sm max-w-full">
              <span className="text-primary font-semibold">React</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-foreground">API Gateway</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-primary">Microservices</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-foreground">Kafka/Redis</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-primary font-semibold">PostgreSQL</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
