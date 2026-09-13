import type { Project } from '@/types'

// All data sourced from verified resume, GitHub repos, and README files
export const projects: Project[] = [
  {
    name: 'TradeX',
    slug: 'tradex',
    category: 'microservices',
    description:
      'A scalable paper-trading platform built with Spring Boot microservices and a self-contained market-data system.',
    detailedDescription:
      'TradeX is a production-inspired full-stack paper trading platform built using Java (Spring Boot) and React. The application simulates a modern stock trading platform similar to Groww or INDmoney without performing any real financial transactions. Unlike traditional demo trading applications, TradeX is completely self-contained and does not rely on any third-party market data providers. Instead, it contains its own market simulation engine capable of generating realistic historical and live stock market data.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'API Gateway',
      'Eureka',
      'Kafka',
      'Redis',
      'PostgreSQL',
      'WebSockets',
      'Docker',
      'Nginx',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
    ],
    features: [
      'Microservices architecture with API Gateway and Eureka Service Discovery',
      'Self-contained market data system generating price history for 15 Indian stocks/ETFs',
      '10 years of generated OHLCV historical data',
      'Real-time price streaming using Kafka and WebSockets',
      'Redis caching for low-latency market price access',
      'PostgreSQL for transactional persistence',
      'JWT-based authentication and authorization',
      'Portfolio management with virtual trading',
      'Transaction history and watchlists',
      'Interactive TradingView Lightweight Charts',
    ],
    architecture:
      'Frontend → API Gateway → Auth Service / Market Service / Portfolio Service → Kafka → Redis + PostgreSQL',
    challenges: [
      'Building a realistic market simulation engine without third-party APIs',
      'Ensuring consistent price data generation across 15 stocks over 10 years',
      'Real-time price streaming at low latency using Kafka and WebSockets',
      'Managing inter-service communication in a microservices architecture',
    ],
    solutions: [
      'Implemented stochastic price movement algorithms (Random Walk, Geometric Brownian Motion, Mean Reversion)',
      'Used deterministic random seeds for consistent historical data generation',
      'Kafka event streaming with WebSocket consumers for real-time price delivery',
      'Spring Cloud Eureka and API Gateway for service discovery and routing',
    ],
    github: 'https://github.com/shubhamprakash681/trade-x-api',
    liveUrl: 'http://tradex.shubhamprakash681.in/',
    swaggerUrl:
      'http://api.tradex.shubhamprakash681.in/swagger-ui/index.html',
    date: 'Jun 2026',
    endDate: 'Present',
    featured: true,
  },
  {
    name: 'VideoShare',
    slug: 'videoshare',
    category: 'full-stack',
    description:
      'A YouTube-like video sharing platform with authentication, streaming, social features, and NSFW content moderation.',
    detailedDescription:
      'VideoShare is a full-featured video sharing platform where creators and viewers connect through engaging video content. Built with the MERN stack, it offers a seamless experience for uploading, discovering, and interacting with videos. The platform includes advanced features like MongoDB Atlas fuzzy search, an NSFW content classification pipeline, and Cloudinary-powered video storage.',
    technologies: [
      'Node.js',
      'Express',
      'React',
      'Redux',
      'MongoDB Atlas',
      'Mongoose',
      'Cloudinary',
      'JWT',
      'Docker',
      'AWS EC2',
      'Nginx',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    features: [
      'Video streaming with Cloudinary-powered storage',
      'User authentication and channel creation',
      'Like, dislike, and comment system',
      'Subscription system for following creators',
      'Playlist creation and management',
      'MongoDB Atlas fuzzy search for content discovery',
      'NSFW content classification pipeline for videos and thumbnails',
      'Channel dashboard with stats and content management',
      'Responsive design across all devices',
    ],
    architecture:
      'React Frontend → Express REST API → MongoDB Atlas + Cloudinary',
    challenges: [
      'Implementing efficient video streaming and storage',
      'Building a reliable NSFW content moderation pipeline',
      'Achieving high uptime with containerized deployment',
    ],
    solutions: [
      'Cloudinary integration for optimized video storage and delivery',
      'Automated NSFW classification pipeline for uploaded content',
      'Docker containerization deployed on AWS EC2 with Nginx reverse proxy',
    ],
    github: 'https://github.com/shubhamprakash681/videoshare',
    githubApi: 'https://github.com/shubhamprakash681/videoshare-server',
    liveUrl: 'https://videoshare.shubhamprakash681.in/',
    apiUrl: 'https://api.videoshare.shubhamprakash681.in/api/v1',
    date: 'Dec 2024',
    endDate: 'Apr 2025',
    featured: true,
  },
  {
    name: 'BlogBreeze',
    slug: 'blogbreeze',
    category: 'full-stack',
    description:
      'A modern blogging platform with rich text editing, category organization, privacy controls, and dark/light mode.',
    detailedDescription:
      'BlogBreeze is a modern, user-friendly blogging platform built with React (Vite), Redux, and Appwrite. It features a rich text editor powered by TinyMCE, privacy controls for public/private posts, category-based organization, user profiles, and a clean responsive UI with dark/light mode support.',
    technologies: [
      'React',
      'Vite',
      'Redux Toolkit',
      'Tailwind CSS',
      'TinyMCE',
      'Appwrite',
    ],
    features: [
      'Rich text editor powered by TinyMCE',
      'Privacy controls — mark blogs as public or private',
      'Category system for post organization',
      'Dark/Light mode support',
      'User profiles and personalization',
      'Clean, responsive UI across all devices',
    ],
    github: 'https://github.com/shubhamprakash681/blog-breeze',
    liveUrl: 'https://blogbreeze.shubhamprakash681.in/',
    date: '2024',
    featured: true,
  },
  {
    name: 'E-Kart',
    slug: 'e-kart',
    category: 'full-stack',
    description:
      'An e-commerce application with product management, cart functionality, and user authentication.',
    detailedDescription:
      'E-Kart is a full-stack e-commerce application featuring product browsing, shopping cart management, and user authentication. Built with a Node.js/Express backend and a React frontend.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express',
      'React',
      'MongoDB',
    ],
    features: [
      'Product catalog and browsing',
      'Shopping cart functionality',
      'User authentication',
      'Order management',
    ],
    github: 'https://github.com/shubhamprakash681/e-kart_server',
    date: '2023',
    featured: false,
  },
  {
    name: 'Audio Classification — IIT Patna',
    slug: 'audio-classification',
    category: 'ai-ml',
    description:
      'Deep learning research on audio classification, emotion prediction, and psychiatric disorder prediction from BCI signals.',
    detailedDescription:
      'Research project conducted during an internship at IIT Patna, focused on deep learning applications for audio classification, emotion prediction from audio signals, and psychiatric disorder prediction from Brain-Computer Interface (BCI) signals.',
    technologies: [
      'Python',
      'Deep Learning',
      'TensorFlow',
      'Signal Processing',
      'Jupyter Notebook',
    ],
    features: [
      'Audio classification using deep learning architectures',
      'Emotion prediction from audio signals',
      'Psychiatric disorder prediction from BCI signals',
    ],
    github: 'https://github.com/shubhamprakash681/audioClassification',
    date: 'Jan 2022',
    endDate: 'May 2022',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const projectCategories = [
  { value: 'all', label: 'All' },
  { value: 'full-stack', label: 'Full Stack' },
  { value: 'microservices', label: 'Microservices' },
  { value: 'backend', label: 'Backend' },
  { value: 'ai-ml', label: 'AI/ML' },
  { value: 'frontend', label: 'Frontend' },
] as const

