import type { Experience } from '@/types'

// All data sourced from verified resume
export const experiences: Experience[] = [
  {
    company: 'Accenture',
    role: 'Packaged App Development Analyst',
    location: 'Mumbai, India',
    startDate: 'Apr 2026',
    endDate: 'Present',
    description: [],
    technologies: ['Java', 'Spring Boot', 'Microservices', 'React'],
    metrics: [],
  },
  {
    company: 'Tata Consultancy Services — TCS Digital',
    role: 'Software Developer',
    location: 'Mumbai, India',
    startDate: 'Jun 2023',
    endDate: 'Apr 2026',
    description: [
      'Developed enterprise applications using Java, Spring Boot Microservices, React, TypeScript, and Node.js, following layered architecture and RESTful API principles.',
      'Migrated ArcGIS authentication from frontend to backend and implemented JWT, OAuth2, and Auth0 SSO across 3 enterprise applications, resolving authentication and login issues.',
      'Integrated Spring Cloud Eureka Service Discovery and Spring Cloud Gateway for centralized routing and service communication, improving scalability and maintainability.',
      'Optimized caching, data structures, and session management, supporting 10,000+ concurrent users with zero data conflicts and achieving up to 80% faster load times; built real-time Chart.js dashboards improving engagement by up to 90%.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'React',
      'TypeScript',
      'Node.js',
      'REST APIs',
      'JWT',
      'OAuth2',
      'Auth0',
      'Eureka',
      'Spring Cloud Gateway',
      'Chart.js',
    ],
    metrics: [
      '10,000+ concurrent users supported',
      'Up to 80% faster load times',
      'Up to 90% engagement improvement',
      '3 enterprise applications secured with SSO',
    ],
  },
  {
    company: 'Sylvr',
    role: 'Software Engineer Intern',
    location: 'Remote, India',
    startDate: 'Mar 2023',
    endDate: 'Jun 2023',
    description: [
      'Developed MERN stack applications for financial data visualization serving 50+ organizations, implementing REST APIs, OTP authentication, and role-based access control.',
      'Containerized applications using Docker and deployed on Linux servers with Nginx, achieving 98% uptime.',
    ],
    technologies: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Docker',
      'Linux',
      'Nginx',
      'REST APIs',
    ],
    metrics: [
      '50+ organizations served',
      '98% uptime achieved',
    ],
  },
  {
    company: 'IIT Patna',
    role: 'Research Intern',
    location: 'Remote, India',
    startDate: 'Jan 2022',
    endDate: 'May 2022',
    description: [
      'Worked on deep learning research involving emotion prediction, psychiatric disorder prediction from BCI signals, and audio classification.',
    ],
    technologies: [
      'Python',
      'Deep Learning',
      'BCI Signals',
      'Audio Classification',
    ],
    metrics: [],
  },
]

