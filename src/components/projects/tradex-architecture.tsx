'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowDown, Server, Cpu, Database, Radio, Shield, BarChart3, Layers } from 'lucide-react'

interface ServiceNode {
  id: string
  name: string
  category: string
  role: string
  description: string
  tech: string[]
  icon: typeof Server
}

const services: ServiceNode[] = [
  {
    id: 'frontend',
    name: 'React Frontend',
    category: 'Client Layer',
    role: 'Trading UI & Dashboards',
    description: 'Interactive trading interface featuring TradingView Lightweight Charts, real-time ticker quotes, portfolio tracking, and order placement.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'WebSockets'],
    icon: BarChart3,
  },
  {
    id: 'gateway',
    name: 'Spring Cloud Gateway',
    category: 'API Gateway',
    role: 'Single Entry Point & Ingress',
    description: 'Centralized reverse proxy handling route management, SSL termination, JWT token validation, request rate limiting, and CORS headers.',
    tech: ['Spring Cloud Gateway', 'Spring Security', 'JWT'],
    icon: Shield,
  },
  {
    id: 'eureka',
    name: 'Eureka Service Discovery',
    category: 'Service Registry',
    role: 'Dynamic Discovery',
    description: 'Maintains live registry of all microservice instances, enabling dynamic routing, client-side load balancing, and failover health checks.',
    tech: ['Spring Cloud Eureka', 'Netflix OSS'],
    icon: Layers,
  },
  {
    id: 'auth-service',
    name: 'Auth Service',
    category: 'Core Microservice',
    role: 'Authentication & Authorization',
    description: 'Manages user registration, credential hashing with BCrypt, stateless JWT issuance with refresh rotation, and RBAC.',
    tech: ['Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
    icon: Shield,
  },
  {
    id: 'market-service',
    name: 'Market Service',
    category: 'Core Microservice',
    role: 'Market Simulation Engine',
    description: 'Self-contained simulation generating 10 years of OHLCV history for 15 Indian stocks/ETFs, plus stochastic live price ticks using Geometric Brownian Motion.',
    tech: ['Java 21', 'Spring Boot', 'Stochastic Algorithms', 'Kafka'],
    icon: Cpu,
  },
  {
    id: 'portfolio-service',
    name: 'Portfolio Service',
    category: 'Core Microservice',
    role: 'Paper Trading Engine',
    description: 'Executes simulated buy/sell orders, tracks cash balances, computes live unrealized P&L, and maintains watchlists and order history.',
    tech: ['Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
    icon: BarChart3,
  },
  {
    id: 'kafka',
    name: 'Apache Kafka',
    category: 'Event Streaming',
    role: 'Decoupled Event Bus',
    description: 'Distributed event bus receiving market-tick events from Market Service and distributing them to the price streaming service.',
    tech: ['Kafka Topics', 'Partitioning', 'High Throughput'],
    icon: Radio,
  },
  {
    id: 'price-stream',
    name: 'Price Stream (WebSocket)',
    category: 'Real-Time Delivery',
    role: 'Live Market Data Streamer',
    description: 'Consumes price events from Kafka topics and pushes real-time bid/ask tick updates to active WebSocket client connections.',
    tech: ['WebSockets', 'STOMP', 'Kafka Consumer'],
    icon: Radio,
  },
  {
    id: 'storage',
    name: 'Redis + PostgreSQL',
    category: 'Persistence & Caching',
    role: 'Dual-Layer Data Store',
    description: 'Redis caches hot market prices and active user sessions with sub-millisecond latency; PostgreSQL reliably stores transactional orders and historical candles.',
    tech: ['Redis', 'PostgreSQL', 'Flyway Migrations'],
    icon: Database,
  },
]

export function TradeXArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<ServiceNode | null>(services[0])

  return (
    <div className="space-y-6">
      {/* Interactive Diagram Flow */}
      <div className="bg-card/50 border border-border/80 rounded-xl p-6 lg:p-8">
        <div className="flex flex-col items-center space-y-4">
          
          {/* Layer 1: Client */}
          <button
            type="button"
            onClick={() => setActiveNode(services.find(s => s.id === 'frontend') || null)}
            className={cn(
              "w-full max-w-md p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between",
              activeNode?.id === 'frontend' 
                ? "border-primary bg-primary/10 shadow-sm glow-orange-sm" 
                : "border-border bg-card hover:border-primary/40"
            )}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/20 text-primary">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">React Frontend (Next.js / Vite)</p>
                <p className="text-xs text-muted-foreground">TradingView Charts & Real-Time Dashboards</p>
              </div>
            </div>
            <Badge variant="accent" className="text-xs">Client</Badge>
          </button>

          <ArrowDown className="w-5 h-5 text-primary animate-pulse" />

          {/* Layer 2: API Gateway & Discovery */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setActiveNode(services.find(s => s.id === 'gateway') || null)}
              className={cn(
                "p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between",
                activeNode?.id === 'gateway' 
                  ? "border-primary bg-primary/10 glow-orange-sm" 
                  : "border-border bg-card hover:border-primary/40"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/20 text-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Spring Cloud Gateway</p>
                  <p className="text-xs text-muted-foreground">Routing, Auth Filter, Rate Limiting</p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveNode(services.find(s => s.id === 'eureka') || null)}
              className={cn(
                "p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between",
                activeNode?.id === 'eureka' 
                  ? "border-primary bg-primary/10 glow-orange-sm" 
                  : "border-border bg-card hover:border-primary/40"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/20 text-primary">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Eureka Discovery</p>
                  <p className="text-xs text-muted-foreground">Service Registry & Health Checks</p>
                </div>
              </div>
            </button>
          </div>

          <ArrowDown className="w-5 h-5 text-primary animate-pulse" />

          {/* Layer 3: Backend Microservices */}
          <div className="w-full max-w-3xl p-4 border border-dashed border-primary/40 rounded-xl bg-secondary/10">
            <p className="text-xs font-mono uppercase text-muted-foreground mb-3 text-center tracking-wider">
              Spring Boot Microservices Cluster
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { id: 'auth-service', name: 'Auth Service', sub: 'JWT & User Management', icon: Shield },
                { id: 'market-service', name: 'Market Service', sub: 'Simulation & 10-Yr OHLCV', icon: Cpu },
                { id: 'portfolio-service', name: 'Portfolio Service', sub: 'Orders, Positions, P&L', icon: BarChart3 }
              ].map(s => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveNode(services.find(node => node.id === s.id) || null)}
                  className={cn(
                    "p-3 rounded-lg border text-left transition-all cursor-pointer",
                    activeNode?.id === s.id 
                      ? "border-primary bg-primary/15 glow-orange-sm" 
                      : "border-border bg-card hover:border-primary/40"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <s.icon className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-xs text-foreground">{s.name}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{s.sub}</p>
                </button>
              ))}
            </div>
          </div>

          <ArrowDown className="w-5 h-5 text-primary animate-pulse" />

          {/* Layer 4: Event Streaming & WebSockets */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setActiveNode(services.find(s => s.id === 'kafka') || null)}
              className={cn(
                "p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between",
                activeNode?.id === 'kafka' 
                  ? "border-primary bg-primary/10 glow-orange-sm" 
                  : "border-border bg-card hover:border-primary/40"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/20 text-primary">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Apache Kafka</p>
                  <p className="text-xs text-muted-foreground">Market Tick Event Pub/Sub</p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveNode(services.find(s => s.id === 'price-stream') || null)}
              className={cn(
                "p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between",
                activeNode?.id === 'price-stream' 
                  ? "border-primary bg-primary/10 glow-orange-sm" 
                  : "border-border bg-card hover:border-primary/40"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/20 text-primary">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Price Stream (WS)</p>
                  <p className="text-xs text-muted-foreground">Real-Time Client Broadcast</p>
                </div>
              </div>
            </button>
          </div>

          <ArrowDown className="w-5 h-5 text-primary animate-pulse" />

          {/* Layer 5: Databases & Cache */}
          <button
            type="button"
            onClick={() => setActiveNode(services.find(s => s.id === 'storage') || null)}
            className={cn(
              "w-full max-w-md p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between",
              activeNode?.id === 'storage' 
                ? "border-primary bg-primary/10 glow-orange-sm" 
                : "border-border bg-card hover:border-primary/40"
            )}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/20 text-primary">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Redis Cache + PostgreSQL</p>
                <p className="text-xs text-muted-foreground">Hot Price Caching & Durable Relational Storage</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">Data Layer</Badge>
          </button>
        </div>
      </div>

      {/* Selected Node Details Panel */}
      {activeNode && (
        <Card className="p-6 border-primary/40 bg-card/80 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                {activeNode.category}
              </span>
              <h4 className="text-lg font-bold text-foreground mt-0.5">{activeNode.name}</h4>
              <p className="text-sm text-muted-foreground">{activeNode.role}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeNode.tech.map((t) => (
                <Badge key={t} variant="outline" className="text-xs font-mono">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {activeNode.description}
          </p>
        </Card>
      )}
    </div>
  )
}

