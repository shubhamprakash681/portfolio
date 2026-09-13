import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { About } from '@/components/sections/about'
import { ExperienceSection } from '@/components/sections/experience-section'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { EngineeringExpertise } from '@/components/sections/engineering-expertise'
import { SkillsSection } from '@/components/sections/skills-section'
import { GitHubSection } from '@/components/sections/github-section'
import { BlogPreview } from '@/components/sections/blog-preview'
import { CoffeeCTA } from '@/components/sections/coffee-cta'
import { ContactCTA } from '@/components/sections/contact-cta'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Shubham Prakash",
              "jobTitle": "Software Engineer",
              "email": "shubhamprakash681@gmail.com",
              "url": "https://shubhamprakash681.in",
              "sameAs": [
                "https://github.com/shubhamprakash681",
                "https://linkedin.com/in/shubhamprakash681"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Accenture"
              }
            }
          })
        }}
      />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Stats />
        <About />
        <ExperienceSection />
        <FeaturedProjects />
        <EngineeringExpertise />
        <SkillsSection />
        <GitHubSection />
        <BlogPreview />
        <CoffeeCTA />
        <ContactCTA />
      </main>
    </>
  )
}
