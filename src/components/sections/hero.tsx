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
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <Button variant="primary" size="lg" href="/projects" className="w-full sm:w-auto">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" href="/resume" className="w-full sm:w-auto">
                View Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center lg:text-left">
              Looking for raw file?{' '}
              <a
                href="/resume/ShubhamPrakash_Resume_Latest.pdf"
                download="ShubhamPrakash_Resume_Latest.pdf"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Download direct PDF <Download className="w-3 h-3 inline" />
              </a>
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200 p-2 rounded-lg hover:bg-primary/10 hover:scale-110 active:scale-95"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200 p-2 rounded-lg hover:bg-primary/10 hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-primary transition-all duration-200 p-2 rounded-lg hover:bg-primary/10 hover:scale-110 active:scale-95"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col w-full lg:w-[40%] justify-center items-center">
          <FadeIn delay={0.3} direction="up">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Animated Ambient Orange Glow */}
              {/* 1. Breathing atmospheric aura */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-8 sm:-inset-12 rounded-full bg-gradient-to-tr from-primary/40 via-orange-500/30 to-amber-500/20 blur-3xl pointer-events-none"
              />

              {/* 2. Rotating ambient light sweep */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1.05, 0.95, 1.05],
                }}
                transition={{
                  rotate: { duration: 16, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-r from-primary/30 via-transparent to-orange-400/30 blur-2xl pointer-events-none"
              />

              {/* Animated spinning gradient border ring */}
              <div className="relative p-[3px] rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,hsl(var(--primary))_0deg,#ea580c_120deg,#fdba74_180deg,#ea580c_240deg,hsl(var(--primary))_360deg)] animate-[spin_5s_linear_infinite]" />

                {/* Inner photo container */}
                <div className="relative rounded-full overflow-hidden w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[270px] lg:h-[270px] bg-muted border-2 border-background">
                  <Image
                    src="/profile.png"
                    alt="Shubham Prakash — Software Engineer"
                    width={270}
                    height={270}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Architecture pipeline badge below profile */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-mono px-3.5 py-2 rounded-2xl sm:rounded-full bg-card/90 border border-primary/30 shadow-xs max-w-full text-center hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] transition-all duration-300">
              <span className="text-primary font-semibold">Spring Boot</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-foreground font-semibold">React</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-primary">API Gateway</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-foreground">Microservices</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-primary">Kafka/Redis</span>
              <span className="text-muted-foreground/60">→</span>
              <span className="text-foreground font-semibold">PostgreSQL</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
