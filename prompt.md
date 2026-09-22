# MASTER PROMPT

# Build a Premium, High-SEO Next.js Portfolio for Shubham Prakash

You are an expert:

* Next.js engineer
* React engineer
* TypeScript engineer
* UI/UX designer
* SEO specialist
* Web performance engineer
* Accessibility engineer
* Technical content writer
* Full-stack architect

Your job is to **design and implement a complete production-ready personal portfolio website** for me.

This is NOT a simple portfolio template.

Build a visually impressive, technically sophisticated, highly SEO-optimized personal website that represents me as a serious professional Software Engineer specializing in:

**Java + Spring Boot + Microservices + React + Distributed Systems + Cloud-Native Development**

The final website should be good enough to use as my primary professional identity when applying to product companies, fintech companies, MNCs and high-paying software engineering roles.

---

# 1. IMPORTANT: WORK AUTONOMOUSLY

Do not stop after creating a basic landing page.

You are responsible for:

1. Inspecting the provided repository.
2. Inspecting the attached resume.
3. Inspecting my GitHub.
4. Inspecting my LinkedIn.
5. Inspecting TradeX if its source is available.
6. Inspecting VideoShare if its source is available.
7. Understanding the existing design language.
8. Designing the portfolio.
9. Implementing the complete application.
10. Implementing SEO.
11. Implementing structured data.
12. Implementing responsive design.
13. Implementing animations.
14. Implementing dark/light mode.
15. Testing the application.
16. Fixing build/lint/type errors.
17. Performing an SEO/performance review before finishing.

Do not ask me to manually implement obvious pieces that you can implement yourself.

If something cannot be verified, do not invent it.

---

# 2. SOURCE OF TRUTH

Use these sources.

## Primary source

Attached resume.

The resume establishes my:

* professional experience
* education
* skills
* employment dates
* projects
* achievements
* technical responsibilities
* measurable results

Do not invent professional claims that are not supported by the source.

---

# 3. ONLINE PROFILES

GitHub:

https://github.com/shubhamprakash681

LinkedIn:

https://linkedin.com/in/shubhamprakash681

Inspect my public GitHub repositories.

Use GitHub to discover:

* repositories
* project descriptions
* technologies
* READMEs
* architecture
* screenshots
* live URLs
* APIs
* project relationships

Inspect LinkedIn for publicly available professional/project information.

GitHub and LinkedIn should supplement the resume, not contradict it.

If there is conflicting information:

Resume > GitHub > LinkedIn

Do not fabricate information when the sources disagree.

---

# 4. MY IDENTITY

Use the following verified information.

Name:

Shubham Prakash

Location:

Mumbai, India

Professional title:

Software Engineer

Primary positioning:

Full Stack Java + React Developer

Specialization:

Java, Spring Boot, Microservices, React, Distributed Systems and Cloud-Native Development

Experience:

3+ years

Current company:

Accenture

Current role:

Packaged App Development Analyst

Previous company:

Tata Consultancy Services — TCS Digital

Previous role:

Software Developer

Education:

B.Tech in Electronics and Communication Engineering

University:

Cochin University of Science and Technology

CGPA:

8.91/10

---

# 5. PROFESSIONAL POSITIONING

The portfolio must immediately communicate:

> Software Engineer building scalable backend systems, microservices and modern full-stack applications with Java, Spring Boot and React.

The website should emphasize:

* scalable systems
* backend engineering
* microservices
* distributed systems
* APIs
* authentication
* event-driven architecture
* caching
* databases
* cloud deployment
* frontend engineering

Do not position me as merely a "web developer".

Do not use generic phrases such as:

"Passionate coder"

"Tech enthusiast"

"10x developer"

"I love turning coffee into code"

Instead, communicate engineering depth.

---

# 6. DESIGN DIRECTION

The website should look:

* Premium
* Modern
* Professional
* Technical
* Minimal but visually rich
* Highly polished
* Recruiter-friendly
* Developer-friendly

Use visual inspiration from:

* Vercel
* Linear
* GitHub
* modern SaaS dashboards
* premium developer portfolios

BUT:

Do not copy any website.

Create an original design.

---

# 7. REFERENCE MY EXISTING PROJECT DESIGNS

I already have two applications whose visual language should influence the portfolio:

## TradeX

Use TradeX as a reference for:

* Dark/light theme implementation
* Theme switching behavior
* Colors
* cards
* buttons
* borders
* shadows
* typography
* dashboard-like components
* spacing
* responsive behavior
* animations
* static pages

If TradeX source code is available in the workspace, inspect it.

Reuse ideas and patterns where appropriate.

Do NOT blindly copy TradeX.

Adapt its visual language to a personal portfolio.

---

## VideoShare

Use VideoShare as a reference for:

* Footer
* static pages
* informational layouts
* navigation
* cards
* responsive components
* typography
* content sections

If VideoShare source code is available in the workspace, inspect it.

Use its static components as design references.

---

# 8. COLOR SYSTEM

Use an **orangish accent color** as the primary brand accent.

The orange should feel:

* modern
* sophisticated
* energetic
* technical

Do not make the entire website orange.

Use orange primarily for:

* primary CTA
* active navigation
* links
* highlights
* badges
* icons
* gradients
* hover states
* timeline indicators
* subtle glow effects

Create CSS variables/design tokens.

Example conceptual system:

--accent
--accent-foreground
--background
--foreground
--muted
--card
--border
--secondary
--success
--warning
--destructive

The exact colors should be chosen professionally.

---

# 9. LIGHT / DARK MODE

Implement a complete theme system.

There must be:

LIGHT MODE

DARK MODE

SYSTEM MODE

Theme switcher in the navbar.

Use the same conceptual theme behavior as TradeX.

Requirements:

* system preference detection
* persistent preference
* no visible flash during page load
* correct SSR/hydration behavior
* accessible theme switcher
* smooth theme transition where appropriate

Both themes must look intentionally designed.

Do NOT simply invert colors.

Dark mode should feel premium.

Light mode should feel clean and professional.

---

# 10. GRADIENTS

Use gradients.

But use them carefully.

Possible applications:

* hero heading
* accent text
* CTA
* background glow
* project cards
* section decorations
* timeline
* borders

Use orange-based gradients.

Avoid excessive rainbow gradients.

---

# 11. ANIMATIONS

Add polished animations.

Use animations for:

* hero entrance
* text reveal
* cards appearing on scroll
* hover states
* project cards
* buttons
* navigation
* section transitions
* timeline
* technology badges

Animations must feel professional.

Avoid:

* excessive bouncing
* distracting effects
* constant movement
* slow transitions
* animations that block content

Respect:

`prefers-reduced-motion`

If using Framer Motion or another animation library, use it selectively.

Do not turn the entire site into a client-side application unnecessarily.

---

# 12. PROFILE PHOTO

Add my actual profile photo prominently.

Use it in:

* hero section
* about section
* Person structured data where appropriate
* social sharing image if useful

Create a professional presentation.

Possible design:

Profile image inside a sophisticated circular/rounded container with:

* orange gradient border
* subtle glow
* animated ring
* professional background

Do not distort the photo.

Use Next.js Image optimization.

Do not create a fake AI-generated person.

If the actual profile photo is unavailable, create a clearly marked placeholder and tell me exactly where to place the image.

Expected location:

`/public/profile.png`

or

`/public/profile.webp`

---

# 13. HOMEPAGE

Create a premium homepage.

Recommended structure:

1. Navbar
2. Hero
3. Technical identity / stats
4. About
5. Experience
6. Featured projects
7. Engineering expertise
8. Architecture / system design
9. Skills
10. GitHub
11. Technical writing/blog
12. Buy Me a Coffee
13. Contact
14. Footer

The homepage should be scannable.

---

# 14. HERO SECTION

Hero should immediately establish my identity.

Display:

# Shubham Prakash

Primary heading:

Software Engineer building scalable systems with Java, Spring Boot, Microservices & React.

Supporting copy:

Create concise professional copy based on my resume.

Mention:

* 3+ years experience
* scalable applications
* Java/Spring Boot
* Microservices
* React
* distributed systems

Do not make the paragraph too long.

---

# 15. HERO VISUAL

Create an attractive technical visual.

Possible concept:

A subtle architecture/network visualization.

Example:

React
↓
API Gateway
↓
Microservices
↓
Kafka / Redis
↓
PostgreSQL

This should visually communicate my engineering focus.

It can use:

* animated nodes
* connecting lines
* subtle glow
* orange accent

But ensure:

* accessibility
* low CPU usage
* no performance problems
* mobile fallback

---

# 16. HERO CTA

Include:

View My Projects

Download Resume

GitHub

LinkedIn

Contact Me

Use icons where appropriate.

Ensure icons have accessible labels.

---

# 17. SOCIAL LINKS

Use:

GitHub:

https://github.com/shubhamprakash681

LinkedIn:

https://linkedin.com/in/shubhamprakash681

Email:

Use the email from the resume.

Do not expose phone number unnecessarily throughout the website.

---

# 18. STATS SECTION

Create an attractive statistics section.

Possible:

3+

Years Experience

Java / Spring Boot

Microservices

Distributed Systems

Production Projects

Only use quantitative values supported by the source.

Do not invent GitHub stars, users, revenue or company metrics.

---

# 19. ABOUT SECTION

Create a technically strong About section.

Explain:

* professional background
* backend specialization
* frontend capabilities
* distributed systems interest
* architecture experience
* cloud-native development
* engineering philosophy

Avoid generic filler.

---

# 20. EXPERIENCE SECTION

Create an elegant interactive timeline.

## Accenture

Packaged App Development Analyst

Mumbai, India

Apr 2026 – Present

Use only verified information.

---

## TCS Digital

Software Developer

Mumbai, India

Jun 2023 – Apr 2026

Highlight:

* Java
* Spring Boot
* Microservices
* React
* TypeScript
* Node.js
* REST APIs
* JWT
* OAuth2
* Auth0
* Eureka
* Spring Cloud Gateway
* caching
* session management
* Chart.js

Highlight verified measurable outcomes:

* 10,000+ concurrent users
* up to 80% faster load times
* up to 90% engagement improvement

Do not exaggerate these metrics.

---

## Sylvr

Software Engineer Intern

Mar 2023 – Jun 2023

Highlight:

* MERN
* financial data visualization
* REST APIs
* OTP authentication
* RBAC
* Docker
* Linux
* Nginx
* 50+ organizations
* 98% uptime

---

## IIT Patna

Research Intern

Jan 2022 – May 2022

Highlight:

* deep learning research
* emotion prediction
* psychiatric disorder prediction from BCI signals
* audio classification

---

# 21. PROJECTS — IMPORTANT

Mention **ALL relevant projects discovered from the resume, GitHub and LinkedIn**.

Do not limit the portfolio to only two projects.

Create a project data model.

Every project should have:

* name
* slug
* category
* description
* detailed description
* technologies
* features
* architecture
* challenges
* solutions
* GitHub
* live URL
* API URL
* Swagger URL
* screenshots
* date

Only show links that are actually verified.

---

# 22. FEATURED PROJECT — TRADEX

Create a dedicated case-study page.

Route:

`/projects/tradex`

Title:

TradeX — Real-Time Paper Trading Platform

Position it as:

A scalable paper-trading platform built with Spring Boot microservices and a self-contained market-data system.

Technologies:

* Java
* Spring Boot
* Spring Cloud
* API Gateway
* Eureka
* Kafka
* Redis
* PostgreSQL
* WebSockets
* Docker
* Nginx

Explain:

Authentication Service

Market Service

Portfolio Service

API Gateway

Service Discovery

Price Stream

Kafka

Redis

PostgreSQL

---

# 23. TRADEX ARCHITECTURE VISUALIZATION

Create a beautiful responsive architecture diagram.

Example:

Frontend
↓
API Gateway
↓
┌─────────────────────┐
│ Auth Service        │
│ Market Service      │
│ Portfolio Service   │
└─────────────────────┘
↓
Kafka
↓
Price Stream
↓
Redis + PostgreSQL

Make it interactive if appropriate.

On hover, show service descriptions.

On mobile, transform the diagram into a vertical flow.

---

# 24. TRADEX DETAILS

Mention:

* 15 Indian stocks/ETFs
* 10 years of generated OHLCV history
* real-time price streaming
* Kafka
* WebSockets
* Redis caching
* PostgreSQL
* microservices

Explicitly describe it as:

**Paper Trading / Simulated Trading**

Do NOT call it a real-money trading platform.

Do NOT claim real stock exchange connectivity.

---

# 25. VIDEOSHARE

Create:

`/projects/videoshare`

Title:

VideoShare — Video Sharing Platform

Describe it as a YouTube-like video sharing application.

Highlight:

* authentication
* video streaming
* likes
* comments
* subscriptions
* playlists
* REST APIs
* MongoDB Atlas
* fuzzy search
* NSFW classification pipeline
* Docker
* AWS EC2
* Nginx

Mention verified 99% uptime claim.

---

# 26. BLOG BREEZE

Find BlogBreeze information from my public GitHub/LinkedIn.

Create:

`/projects/blogbreeze`

Use verified information.

Do not invent functionality.

If a live website exists, include it.

If a repository exists, include GitHub.

---

# 27. ALL OTHER PROJECTS

Inspect:

* GitHub
* LinkedIn
* resume

Identify every meaningful project.

Do not include:

* forks
* trivial tutorials
* empty repositories
* boilerplates
* duplicate repositories

Unless they provide genuine evidence of engineering ability.

Create a "More Projects" section for secondary projects.

---

# 28. PROJECT CARD DESIGN

Project cards should be visually impressive.

Each card should show:

Project name

Short description

Technology badges

Project category

Links

Hover interaction

Subtle orange glow

Optional image/screenshot

Do not make cards excessively large.

---

# 29. PROJECT FILTERING

Add project filters such as:

All

Backend

Full Stack

Microservices

React

Cloud

AI/ML

Only include categories that actually apply.

Filtering should be accessible and SEO-safe.

Do not hide important content from crawlers unnecessarily.

---

# 30. SKILLS SECTION

Organize skills.

## Backend

Java

Spring Boot

Spring MVC

Spring Security

Spring Cloud

Node.js

REST APIs

Microservices

## Distributed Systems

Kafka

RabbitMQ

Redis

WebSockets

API Gateway

Eureka

## Databases

PostgreSQL

MongoDB

JPA

Hibernate

Prisma

Mongoose

## Frontend

React

Next.js

TypeScript

JavaScript

HTML

CSS

## Security

JWT

OAuth2

Auth0

RBAC

## DevOps

Docker

AWS EC2

Nginx

CI/CD

Git

Linux

Postman

## CS

System Design

HLD

LLD

DSA

OOP

Do not use skill progress bars such as:

Java — 95%

They are subjective and unprofessional.

---

# 31. ENGINEERING EXPERTISE

Create a visually impressive section showing engineering concepts.

Examples:

Microservices

Distributed Systems

Event-Driven Architecture

Authentication

Caching

API Design

System Design

Cloud Deployment

Database Design

Real-Time Systems

This section should demonstrate engineering depth.

---

# 32. GITHUB SECTION

Create a GitHub section.

Show selected repositories.

Each repository can include:

* name
* description
* language
* technologies
* stars if publicly verified
* repository link

Do not fabricate GitHub metrics.

If using GitHub API:

* cache responses
* avoid client-side fetching on every visitor
* implement fallback data
* do not expose tokens

---

# 33. BLOG

Create a technical blog architecture.

Routes:

`/blog`

`/blog/[slug]`

Focus on:

Java

Spring Boot

Microservices

Kafka

Redis

System Design

React

Docker

Cloud

Distributed Systems

Only publish technically credible articles.

Do not create fake personal experiences.

---

# 34. STATIC PAGES

Create:

`/about`

`/experience`

`/projects`

`/skills`

`/contact`

`/resume`

`/blog`

`/coffee`

Use TradeX and VideoShare as references for static page structure and footer behavior.

All static pages should feel like part of one design system.

---

# 35. BUY ME A COFFEE PAGE

Create a dedicated:

`/coffee`

or

`/buy-me-a-coffee`

page.

Purpose:

Allow visitors to support my work.

Design should be warm but professional.

Possible heading:

"Buy Me a Coffee ☕"

Copy:

"If you found my projects, articles, or open-source work useful, you can support me with a coffee."

---

# 36. COFFEE QR CODE

Create a QR-code area.

The QR code should be generated from a configurable environment variable or configuration value.

Example:

`NEXT_PUBLIC_COFFEE_UPI`

Do NOT invent my UPI ID.

Create:

`src/config/site.ts`

or equivalent configuration.

Example:

coffee:

{
enabled: true,
upiId: process.env.NEXT_PUBLIC_COFFEE_UPI,
name: "Shubham Prakash"
}

Generate the QR code dynamically or use a generated static QR asset.

The QR code should encode a valid UPI payment URI only when a real UPI ID is configured.

If the UPI ID is missing:

* show a graceful placeholder
* do not generate a fake payment QR

Add:

"Scan with any supported UPI app"

where appropriate.

Also provide a copy button for the UPI ID.

Add a "Buy Me a Coffee" CTA throughout the website only where it makes sense.

Do not make it intrusive.

---

# 37. CONTACT PAGE

Create a polished contact page.

Include:

* Email
* LinkedIn
* GitHub
* location
* optional contact form

If a contact form is implemented:

* validate inputs
* protect against spam
* do not expose secrets
* make backend integration configurable

---

# 38. RESUME PAGE

Create:

`/resume`

Include:

* Resume preview
* Download Resume
* Professional summary
* link to contact
* link to LinkedIn/GitHub

Use the supplied resume as the source of truth.

Do not create conflicting information.

---

# 39. NAVIGATION

Navbar:

Logo / Shubham Prakash

Home

About

Experience

Projects

Skills

Blog

Coffee

Contact

Theme switcher

Mobile menu

Use sticky navigation if appropriate.

Add active route indication.

Use orange accent.

---

# 40. FOOTER

Use TradeX and VideoShare as references.

Footer should contain:

Shubham Prakash

Software Engineer

Short professional description

Navigation

Projects

Social links

GitHub

LinkedIn

Email

Buy Me a Coffee

Copyright

Theme consistency

Do not overload the footer.

---

# 41. SEO — EXTREMELY HIGH PRIORITY

SEO is one of the primary goals.

Implement professional technical SEO across the entire application.

Use Next.js Metadata API.

Every indexable page needs:

* unique title
* unique description
* canonical URL
* OpenGraph metadata
* Twitter metadata
* robots metadata
* appropriate keywords
* structured data where applicable

---

# 42. HOMEPAGE SEO

Target natural search intent around:

Shubham Prakash

Software Engineer

Java Developer

Spring Boot Developer

Microservices Developer

React Developer

Full Stack Java React Developer

Software Engineer Mumbai

Java Spring Boot Developer Mumbai

Do NOT keyword stuff.

---

# 43. JSON-LD

Implement valid JSON-LD.

Use:

Person

WebSite

ProfilePage

BreadcrumbList

CreativeWork / SoftwareApplication where appropriate

Person schema should contain:

name

jobTitle

url

image

sameAs

GitHub

LinkedIn

location where appropriate

Do not include fake information.

---

# 44. ENTITY SEO

Make it very clear that all of these profiles belong to the same person:

Shubham Prakash

GitHub

LinkedIn

Portfolio

Use consistent:

name

profile photo

professional title

sameAs links

canonical URL

---

# 45. SITEMAP

Implement:

`/sitemap.xml`

Include all public indexable pages.

Include project pages.

Include blog pages.

Exclude:

404

internal pages

private pages

duplicate pages

query parameter URLs

---

# 46. ROBOTS

Implement:

`/robots.txt`

Allow search engines to crawl public content.

Reference sitemap.

Do not accidentally block:

CSS

JavaScript

images

important assets

---

# 47. CANONICAL DOMAIN

Use:

`NEXT_PUBLIC_SITE_URL`

Do NOT invent a production domain.

If the repository already contains the production domain, use it.

Otherwise configure it through environment variables.

Use the same domain consistently for:

* canonical
* sitemap
* OpenGraph
* JSON-LD
* internal absolute URLs

---

# 48. OPEN GRAPH

Create professional OG metadata.

Homepage:

Shubham Prakash

Software Engineer

Java • Spring Boot • Microservices • React

Projects should have project-specific OG images.

If practical, use Next.js dynamic OG image generation.

---

# 49. SEO-FRIENDLY URLS

Use clean URLs:

`/`

`/about`

`/experience`

`/projects`

`/projects/tradex`

`/projects/videoshare`

`/projects/blogbreeze`

`/skills`

`/blog`

`/blog/example-title`

`/coffee`

`/contact`

Avoid:

`/project?id=123`

---

# 50. SEMANTIC HTML

Use:

header

nav

main

section

article

aside

footer

h1

h2

h3

p

ul

li

a

button

Do not build everything with divs.

Maintain a logical heading hierarchy.

Only one primary H1 per page unless there is a strong semantic reason otherwise.

---

# 51. INTERNAL LINKING

Build strong internal linking.

Examples:

Homepage → Projects

Homepage → Experience

Homepage → About

Projects → Case studies

Case studies → Technologies

Blog → Projects

Projects → Blog

About → Experience

Use descriptive anchor text.

---

# 52. IMAGE SEO

Use:

Next.js Image

WebP/AVIF where appropriate

descriptive filenames

proper dimensions

meaningful alt text

lazy loading where appropriate

Example:

`shubham-prakash-profile.webp`

`tradex-trading-dashboard.webp`

`videoshare-platform.webp`

Do not use:

`IMG001.jpg`

---

# 53. PERFORMANCE

Target:

Lighthouse Performance: 95+

Lighthouse Accessibility: 95+

Lighthouse Best Practices: 95+

Lighthouse SEO: 100

Optimize:

LCP

CLS

INP

TTFB

Use:

* Server Components
* static generation
* streaming where appropriate
* next/image
* next/font
* code splitting
* lazy loading
* caching

Avoid unnecessary client-side rendering.

---

# 54. CLIENT COMPONENTS

Use Server Components by default.

Only use `"use client"` when required.

Examples:

Theme switcher

Mobile navigation

Animations requiring client state

Interactive project filters

QR copy button

GitHub dynamic components

Do not turn entire pages into client components unnecessarily.

---

# 55. ACCESSIBILITY

Target WCAG 2.2 AA.

Implement:

* keyboard navigation
* focus states
* screen reader labels
* semantic HTML
* accessible buttons
* accessible navigation
* alt text
* contrast
* reduced motion
* accessible theme switcher

Never rely solely on color to communicate meaning.

---

# 56. RESPONSIVE DESIGN

Mobile-first.

Test:

320px

375px

390px

430px

768px

1024px

1280px

1440px+

No horizontal overflow.

Hero must remain attractive on mobile.

Architecture diagrams must adapt to mobile.

Project cards should stack properly.

Navbar must become a polished mobile menu.

---

# 57. TECHNICAL ARCHITECTURE

Use a clean structure such as:

src/
app/
components/
components/ui/
components/layout/
components/sections/
components/projects/
components/experience/
components/seo/
data/
lib/
config/
types/
styles/

public/
images/
projects/
icons/

Keep content separate from UI.

---

# 58. DATA-DRIVEN CONTENT

Create typed models.

For example:

Project

Experience

Skill

SocialLink

BlogPost

NavigationItem

Use structured data objects rather than duplicating content throughout components.

---

# 59. DESIGN SYSTEM

Create reusable:

Button

Card

Badge

SectionHeading

Container

Timeline

ProjectCard

SocialLink

ThemeToggle

Navbar

Footer

Image

Modal

Tooltip

Do not create 20 slightly different button components.

---

# 60. ICONS

Use one consistent icon system.

Avoid loading enormous icon libraries unnecessarily.

Icons must:

* have consistent sizing
* align correctly
* have accessible labels
* not replace semantic text

---

# 61. ANIMATION ARCHITECTURE

Use reusable animation primitives.

Examples:

FadeIn

SlideUp

ScaleIn

StaggerContainer

HoverCard

Do not duplicate animation configuration everywhere.

Animations should be disabled/reduced when:

`prefers-reduced-motion: reduce`

---

# 62. NO GENERIC TEMPLATE CONTENT

Do not use placeholder text such as:

"Lorem ipsum"

"Your Name"

"Passionate developer"

"10+ projects"

"100+ happy clients"

unless supported.

Everything should represent my actual profile.

---

# 63. NO FAKE METRICS

Never invent:

* users
* customers
* revenue
* GitHub stars
* downloads
* uptime
* traffic
* performance improvements
* clients

Use only verified metrics.

---

# 64. SECURITY

Never expose:

* API keys
* GitHub tokens
* database credentials
* UPI secrets
* private environment variables

Use `.env.local`.

Create:

`.env.example`

with placeholders.

---

# 65. ANALYTICS

Prepare the site for analytics.

Make analytics configurable.

For example:

`NEXT_PUBLIC_ANALYTICS_ID`

Do not make analytics mandatory for local development.

---

# 66. SEO CONTENT QUALITY

SEO must not result in awkward writing.

Write for:

1. humans
2. recruiters
3. engineers
4. search engines

in that order.

Use natural technical terminology.

---

# 67. BLOG SEO

Each article should have:

* unique title
* meta description
* canonical URL
* author
* published date
* modified date
* tags
* OpenGraph
* JSON-LD Article schema
* breadcrumbs
* related articles

Avoid duplicate content.

---

# 68. PROJECT SEO

Each project page should have unique metadata.

Example:

TradeX:

"TradeX | Spring Boot Microservices Paper Trading Platform | Shubham Prakash"

VideoShare:

"VideoShare | Full-Stack Video Sharing Platform | Shubham Prakash"

Do not use generic:

"Project | Shubham"

---

# 69. BREADCRUMBS

Implement visible breadcrumbs where useful.

Example:

Home → Projects → TradeX

Also add BreadcrumbList JSON-LD.

---

# 70. SOCIAL SHARING

Make LinkedIn sharing look good.

Ensure:

OG title

OG description

OG image

OG URL

are correct.

---

# 71. FAVICON / BRANDING

Create a professional favicon.

Use initials:

SP

or another minimal professional symbol.

Use orange accent.

Provide:

favicon

apple icon

manifest

appropriate theme colors

---

# 72. PWA / WEB APP MANIFEST

Create a proper manifest if useful.

Name:

Shubham Prakash

Short name:

Shubham

Use theme colors consistent with the orange accent.

Do not over-engineer this into an offline PWA unless useful.

---

# 73. 404 PAGE

Create an attractive custom 404.

Example concept:

"Looks like this page took a wrong route."

with:

Back Home

View Projects

Keep it professional and subtle.

---

# 74. LOADING STATES

Create elegant loading states only where needed.

Do not add loading screens to static pages unnecessarily.

Prefer streaming/static rendering.

---

# 75. ERROR HANDLING

Implement:

error.tsx

not-found.tsx

loading.tsx

where appropriate.

Ensure errors don't leak sensitive information.

---

# 76. FOOTER STATIC COMPONENTS

Since TradeX and VideoShare already contain similar static components:

Inspect them if available.

Extract design principles from:

* footer
* navigation
* static content layout
* cards
* typography
* spacing
* legal/information sections

Create a unified portfolio design rather than copying components blindly.

---

# 77. DEPLOYMENT

Make the application deployable to:

Vercel

or another standard Next.js hosting platform.

Ensure:

`npm run build`

works.

Document:

npm install

npm run dev

npm run build

npm start

---

# 78. ENVIRONMENT VARIABLES

Create `.env.example`.

Potential variables:

NEXT_PUBLIC_SITE_URL=

NEXT_PUBLIC_COFFEE_UPI=

NEXT_PUBLIC_ANALYTICS_ID=

Only include variables actually required.

---

# 79. TESTING

Before completion run:

TypeScript checks

ESLint

Production build

Link validation

SEO validation

Responsive inspection

Accessibility inspection

Do not finish with build errors.

---

# 80. LIGHTHOUSE

Perform a Lighthouse audit.

Target:

Performance >= 95

Accessibility >= 95

Best Practices >= 95

SEO = 100

If scores are poor:

Investigate and fix them.

Especially fix:

* render-blocking resources
* oversized images
* layout shifts
* excessive JS
* missing metadata
* accessibility issues

---

# 81. SEO VALIDATION

Verify:

* sitemap
* robots
* canonical
* metadata
* OG
* JSON-LD
* Person schema
* WebSite schema
* BreadcrumbList
* Article schema where appropriate
* semantic headings
* internal links
* image alt text
* mobile responsiveness

---

# 82. GOOGLE SEARCH CONSOLE

Add documentation explaining how I can:

1. Create Google Search Console property.
2. Verify ownership.
3. Submit sitemap.
4. Inspect URLs.
5. Request indexing.
6. Monitor Core Web Vitals.
7. Monitor search queries.

Do not claim that you submitted the site unless you actually have access.

---

# 83. PROFILE ENTITY CONSISTENCY

Ensure the following consistently identify the same person:

Shubham Prakash

Portfolio

GitHub

LinkedIn

Use:

same name

same profile photo

same professional identity

same social links

This is important for personal-brand SEO.

---

# 84. CONTENT PRIORITY

The visual hierarchy should be:

1. Who I am
2. What I specialize in
3. What I have built
4. Where I have worked
5. How I engineer systems
6. Technologies
7. Contact/support

Projects should be highly visible.

---

# 85. RECRUITER UX

A recruiter should be able to discover within seconds:

Name

Role

Experience

Current company

Technical specialization

Projects

GitHub

LinkedIn

Resume

Contact

Do not bury these behind animations or menus.

---

# 86. ENGINEER UX

A technical visitor should be able to quickly explore:

TradeX architecture

VideoShare architecture

GitHub repositories

Technology stack

System design concepts

Technical blog

APIs / Swagger when available

---

# 87. VISUAL DETAILS

Use:

* subtle orange glows
* gradient text
* gradient borders
* glass effects where appropriate
* fine borders
* layered cards
* subtle shadows
* grid backgrounds
* animated particles only if lightweight
* tasteful hover effects

Do not overuse glassmorphism.

Do not make everything glow.

The design must remain professional.

---

# 88. BACKGROUND DESIGN

Consider subtle backgrounds such as:

dot grid

technical grid

radial gradient

noise texture

very subtle orange glow

Keep backgrounds lightweight.

Ensure text remains readable.

---

# 89. HERO MICRO-INTERACTIONS

Possible:

Cursor-following subtle glow

Animated gradient

Hovering technology badges

Architecture nodes

Profile image ring animation

But keep it restrained.

---

# 90. PROJECT CASE STUDY EXPERIENCE

A project page should feel like reading an engineering case study.

Recommended structure:

Hero

Problem

Solution

Architecture

Features

Technical decisions

Technology

Challenges

Results

Screenshots

Links

Lessons learned

Related projects

Only include sections where source information supports them.

---

# 91. DO NOT OVERSTATE PROJECTS

TradeX is a paper trading platform.

VideoShare is a personal video-sharing platform.

BlogBreeze is a personal project.

Clearly distinguish:

Professional experience

Personal projects

Research

Internships

Do not imply personal projects were built for an employer.

---

# 92. SOURCE COMMENTS

Where useful, add comments in the code indicating:

* resume-derived data
* GitHub-derived data
* manually verified data

But do not clutter production code.

---

# 93. FINAL PROJECT FILE STRUCTURE

Aim for something approximately like:

app/
page.tsx
about/
experience/
projects/
skills/
blog/
coffee/
contact/
resume/
sitemap.ts
robots.ts
layout.tsx
not-found.tsx
error.tsx

components/
layout/
navigation/
hero/
projects/
experience/
skills/
seo/
animations/
ui/

data/
projects.ts
experience.ts
skills.ts
site.ts
blog.ts

lib/
seo.ts
github.ts
utils.ts

public/
images/
projects/
icons/

Adapt this structure if a better architecture is appropriate.

---

# 94. FINAL CHECKLIST

Before declaring completion:

## Content

[ ] Resume fully incorporated

[ ] Accenture included

[ ] TCS included

[ ] Sylvr included

[ ] IIT Patna research included

[ ] TradeX included

[ ] VideoShare included

[ ] BlogBreeze included

[ ] All meaningful GitHub projects reviewed

[ ] LinkedIn reviewed

[ ] No fabricated claims

---

## UI

[ ] Premium design

[ ] Orange accent

[ ] Light mode

[ ] Dark mode

[ ] Theme switcher

[ ] Gradients

[ ] Animations

[ ] Profile photo

[ ] Responsive

[ ] Mobile navigation

[ ] Premium cards

[ ] Attractive footer

---

## SEO

[ ] Unique titles

[ ] Meta descriptions

[ ] Canonical URLs

[ ] Sitemap

[ ] Robots

[ ] JSON-LD

[ ] Person schema

[ ] Website schema

[ ] Breadcrumb schema

[ ] Article schema where appropriate

[ ] OG metadata

[ ] Twitter metadata

[ ] Semantic HTML

[ ] Internal linking

[ ] Image alt text

[ ] Clean URLs

---

## Performance

[ ] Server Components

[ ] Optimized images

[ ] next/font

[ ] Minimal JavaScript

[ ] Lazy loading

[ ] Good Core Web Vitals

[ ] Lighthouse >= 95 where practical

---

## Accessibility

[ ] Keyboard navigation

[ ] Focus states

[ ] Screen-reader labels

[ ] Color contrast

[ ] Reduced motion

[ ] Semantic HTML

---

## Engineering

[ ] TypeScript strict

[ ] No unnecessary `any`

[ ] Reusable components

[ ] Data-driven architecture

[ ] `.env.example`

[ ] No secrets

[ ] Production build works

[ ] ESLint passes

---

# 95. FINAL DELIVERABLE

When finished, provide a concise implementation report containing:

### 1. Architecture

Explain the project structure.

### 2. Pages

List every route.

### 3. Components

List major reusable components.

### 4. Projects

List every project included and its source.

### 5. SEO

Explain all SEO mechanisms implemented.

### 6. Structured Data

List JSON-LD schemas implemented.

### 7. Performance

Explain optimizations.

### 8. Theme

Explain light/dark mode implementation.

### 9. Coffee

Explain QR/UPI configuration.

### 10. Environment Variables

List required variables.

### 11. Local Development

Provide commands.

### 12. Deployment

Provide production deployment instructions.

### 13. Remaining Manual Tasks

Clearly identify anything that I need to provide or verify, especially:

* profile photo
* production domain
* UPI ID
* analytics ID
* project URLs

Do not claim these are configured if they are not.

---

# FINAL INSTRUCTION

Build the website completely.

Do not stop at a wireframe.

Do not produce a generic template.

Do not use placeholder professional content.

Do not invent achievements.

Do not fabricate URLs.

Do not sacrifice performance for animation.

Do not sacrifice accessibility for aesthetics.

Do not sacrifice SEO for visual effects.

The final result should feel like:

**a premium personal engineering website + technical portfolio + project case-study platform + professional identity website.**

The central message should be:

# Shubham Prakash

## Software Engineer

### Java • Spring Boot • Microservices • React • Distributed Systems

Make it visually memorable, technically credible, highly discoverable through search engines, and impressive to both recruiters and experienced engineers.

Start by inspecting all available source material and existing project implementations before writing the final UI.
