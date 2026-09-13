import type { BlogPost } from '@/types'

// Technically credible blog posts based on Shubham's actual experience and tech stack
export const blogPosts: BlogPost[] = [
  {
    title: 'Building a Microservices Architecture with Spring Boot and Spring Cloud',
    slug: 'microservices-spring-boot-spring-cloud',
    excerpt:
      'A practical guide to designing and implementing a microservices architecture using Spring Boot, Spring Cloud Gateway, Eureka Service Discovery, and inter-service communication patterns.',
    content: `
## Why Microservices?

Microservices architecture decomposes a monolithic application into small, independently deployable services. Each service owns its data and communicates through well-defined APIs. This approach enables teams to develop, deploy, and scale services independently.

## Core Components

### Service Discovery with Eureka

Spring Cloud Eureka provides a service registry where microservices register themselves at startup. Other services can then discover and communicate with them without hardcoding addresses.

\`\`\`java
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServiceApplication.class, args);
    }
}
\`\`\`

### API Gateway with Spring Cloud Gateway

The API Gateway serves as the single entry point for all client requests. It handles routing, rate limiting, authentication verification, and load balancing across service instances.

### Inter-Service Communication

Services communicate using REST APIs for synchronous requests and message brokers like Kafka for asynchronous event-driven communication. This decoupling ensures services remain independent and resilient.

## Key Patterns

- **Circuit Breaker**: Prevents cascading failures when a downstream service is unavailable
- **Configuration Server**: Centralizes configuration management across all services
- **Distributed Tracing**: Tracks requests across service boundaries for debugging

## Lessons from Production

In production environments supporting thousands of concurrent users, proper service discovery and gateway configuration are critical. Caching strategies at the gateway level can significantly reduce load on downstream services.
    `,
    date: '2025-03-15',
    tags: ['Java', 'Spring Boot', 'Microservices', 'Spring Cloud', 'System Design'],
    readTime: '8 min read',
    author: 'Shubham Prakash',
  },
  {
    title: 'Event-Driven Architecture with Apache Kafka and Spring Boot',
    slug: 'event-driven-architecture-kafka-spring-boot',
    excerpt:
      'Exploring event-driven architecture patterns using Apache Kafka for real-time data streaming in a Spring Boot microservices application.',
    content: `
## Event-Driven Architecture

Event-driven architecture (EDA) enables services to communicate through events rather than direct API calls. This decoupling makes systems more scalable, resilient, and easier to extend.

## Apache Kafka

Kafka is a distributed event streaming platform that handles high-throughput, fault-tolerant messaging. In a microservices setup, Kafka acts as the central event bus.

### Key Concepts

- **Topics**: Named channels where events are published
- **Producers**: Services that publish events to topics
- **Consumers**: Services that subscribe to topics and process events
- **Consumer Groups**: Enable parallel processing of events across multiple instances

## Real-Time Streaming Example

Consider a paper trading platform where market price updates need to reach connected clients in real-time:

1. A Market Service generates price tick events
2. Events are published to a Kafka topic
3. A WebSocket service consumes these events
4. Connected clients receive real-time price updates through WebSocket connections

\`\`\`java
@KafkaListener(topics = "market-ticks", groupId = "websocket-service")
public void handleMarketTick(MarketTickEvent event) {
    webSocketHandler.broadcastToSubscribers(event.getSymbol(), event);
}
\`\`\`

## Combining Kafka with Redis

Redis caching complements Kafka streaming by providing low-latency access to the latest state. While Kafka handles the event stream, Redis stores the most recent values for instant client access.

## When to Use EDA

Event-driven architecture is particularly effective for real-time data pipelines, audit logging, cross-service notifications, and scenarios where services need to react to state changes without tight coupling.
    `,
    date: '2025-01-20',
    tags: ['Kafka', 'Spring Boot', 'Event-Driven', 'Redis', 'Distributed Systems'],
    readTime: '7 min read',
    author: 'Shubham Prakash',
  },
  {
    title: 'Implementing JWT and OAuth2 Authentication in Spring Boot Applications',
    slug: 'jwt-oauth2-authentication-spring-boot',
    excerpt:
      'A comprehensive guide to implementing secure authentication using JWT tokens, OAuth2, and Auth0 SSO in enterprise Spring Boot applications.',
    content: `
## Authentication in Microservices

In a microservices architecture, authentication must be handled consistently across all services. Token-based authentication with JWT provides a stateless, scalable solution.

## JWT Authentication Flow

1. Client sends credentials to the Authentication Service
2. Service validates credentials and generates a signed JWT
3. Client includes the JWT in subsequent requests via the Authorization header
4. API Gateway or individual services validate the token before processing requests

### Token Structure

A JWT consists of three parts: Header, Payload, and Signature. The payload carries claims such as user ID, roles, and expiration time.

## OAuth2 and Auth0 Integration

For enterprise applications, integrating with an identity provider like Auth0 provides:

- Single Sign-On (SSO) across multiple applications
- Social login support
- Multi-factor authentication
- Centralized user management

## Spring Security Configuration

Spring Security integrates naturally with JWT and OAuth2:

\`\`\`java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated())
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}
\`\`\`

## Security Best Practices

- Use short-lived access tokens with refresh token rotation
- Store tokens securely (HttpOnly cookies for web applications)
- Implement Role-Based Access Control (RBAC) at the service level
- Validate tokens at the API Gateway to prevent unauthorized requests from reaching backend services
    `,
    date: '2024-11-10',
    tags: ['JWT', 'OAuth2', 'Spring Security', 'Auth0', 'Authentication'],
    readTime: '9 min read',
    author: 'Shubham Prakash',
  },
  {
    title: 'Containerizing and Deploying Spring Boot Microservices with Docker',
    slug: 'docker-deployment-spring-boot-microservices',
    excerpt:
      'Practical guide to containerizing Spring Boot microservices with Docker and deploying them with Docker Compose, including Nginx reverse proxy setup.',
    content: `
## Why Docker for Microservices?

Docker containers package an application with its dependencies, ensuring consistent behavior across development, staging, and production environments. For microservices, Docker provides isolation between services and simplifies deployment.

## Creating Docker Images

A multi-stage Dockerfile keeps images lean:

\`\`\`dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

## Docker Compose for Service Orchestration

Docker Compose defines and runs multi-container applications. For a microservices stack, it manages service dependencies, networking, and startup order.

### Infrastructure Services

- **PostgreSQL**: Persistent data storage
- **Redis**: Caching and session management
- **Kafka + Zookeeper**: Event streaming
- **Eureka**: Service discovery

### Application Services

Each microservice is defined as a Compose service with environment-specific configuration injected through environment variables.

## Nginx Reverse Proxy

Nginx sits in front of the application stack, handling:

- SSL termination
- Request routing to the API Gateway
- Static file serving
- Gzip compression
- Rate limiting

## Production Considerations

- Use environment variables for all secrets and configuration
- Implement health checks for container orchestration
- Set resource limits to prevent any single service from consuming all available resources
- Use Docker volumes for persistent data
    `,
    date: '2024-09-05',
    tags: ['Docker', 'Deployment', 'Nginx', 'Spring Boot', 'DevOps'],
    readTime: '6 min read',
    author: 'Shubham Prakash',
  },
  {
    title: 'Architecting Low-Latency WebSockets with Spring Boot and STOMP for Real-Time Streaming',
    slug: 'real-time-websockets-spring-boot-stomp',
    excerpt:
      'A deep dive into engineering low-latency WebSocket connections for real-time market data streaming in paper trading platforms like TradeX.',
    content: `
## Why WebSockets for Real-Time Applications?

Traditional HTTP polling and long-polling introduce unacceptable latency and bandwidth overhead for real-time systems like trading desks, live monitoring dashboards, and collaboration tools. 

WebSockets establish a persistent, bidirectional, full-duplex TCP connection over a single handshake, reducing overhead to just a few bytes per frame.

## The STOMP Sub-Protocol

While raw WebSockets transmit arbitrary text or binary frames, **STOMP (Simple Text Oriented Messaging Protocol)** introduces a structured frame format (COMMAND, HEADERS, BODY) that maps directly to publish-subscribe patterns.

### Spring Boot WebSocket Configuration

\`\`\`java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // Enable in-memory broker for destinations prefixed with /topic
        config.enableSimpleBroker("/topic")
              .setHeartbeatValue(new long[]{10000, 10000});
        
        // Application destination prefix for incoming client messages
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws/market")
                .setAllowedOriginPatterns("*")
                .withSockJS(); // Fallback for restrictive firewalls
    }
}
\`\`\`

## High-Throughput Tick Broadcasting

In high-concurrency systems, publishing updates directly inside the incoming event loop degrades performance. Decoupling ingestion from distribution using Kafka consumer worker pools ensures reliable broadcasts:

\`\`\`java
@Service
public class MarketDataStreamer {

    private final SimpMessagingTemplate messagingTemplate;

    public MarketDataStreamer(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @KafkaListener(topics = "market.ticks", containerFactory = "kafkaListenerContainerFactory")
    public void onPriceTick(MarketTickDto tick) {
        // Broadcasts to all active subscribers of the specific stock symbol topic
        messagingTemplate.convertAndSend("/topic/ticks/" + tick.getSymbol(), tick);
    }
}
\`\`\`

## Handling Scale: In-Memory vs External Message Brokers

For single-instance deployments, Spring's built-in simple broker is sufficient. When scaling across multiple container instances, an external STOMP broker (such as RabbitMQ or Redis Pub/Sub) is required so clients connected to Service Instance A receive messages emitted by Service Instance B.

## Client-Side Reconnection & Heartbeats

Network dropouts are inevitable on mobile and unstable connections. Implementing exponential backoff reconnection strategies and monitoring STOMP heartbeat ping/pong frames on the client ensures seamless recovery without stale state.
    `,
    date: '2025-02-10',
    tags: ['WebSockets', 'Spring Boot', 'STOMP', 'Real-Time', 'Java'],
    readTime: '8 min read',
    author: 'Shubham Prakash',
  },
  {
    title: 'Advanced Redis Caching Strategies: Cache-Aside, Write-Through, and Stampede Prevention',
    slug: 'redis-caching-strategies-spring-boot',
    excerpt:
      'How to effectively implement Redis caching to achieve sub-millisecond query responses, eliminate cache stamps, and prevent the N+1 query problem in microservices.',
    content: `
## The Cost of Database Read Contention

As application traffic grows, database read contention rapidly becomes the primary bottleneck for system scalability. Integrating an in-memory datastore like Redis reduces read latency from milliseconds to microseconds.

However, poorly implemented caching patterns frequently introduce stale data anomalies, memory bloat, and devastating cache stampedes.

## Core Caching Topologies

### 1. Cache-Aside (Lazy Loading)

The application code directly coordinates between the cache and the primary database:
- Read request arrives -> Check Redis.
- If hit -> Return immediately.
- If miss -> Query PostgreSQL, write result to Redis with TTL, and return.

\`\`\`java
@Service
public class ProductService {

    @Cacheable(value = "products", key = "#id", unless = "#result == null")
    public ProductDto getProductById(String id) {
        return productRepository.findById(id)
            .map(this::mapToDto)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found: " + id));
    }

    @CacheEvict(value = "products", key = "#id")
    public void updateProduct(String id, ProductUpdateRequest request) {
        // Mutates database and invalidates the cached entry
        productRepository.update(id, request);
    }
}
\`\`\`

## Preventing Common Cache Failure Modes

### Cache Penetration
Occurs when queries for non-existent keys repeatedly bypass the cache, pounding the database.
- **Solution**: Cache null values with short TTLs (e.g. 60 seconds), or employ a Bloom filter at the API Gateway.

### Cache Stampede (Dog-piling)
Occurs when a high-traffic key expires, causing hundreds of concurrent threads to simultaneously query the database to regenerate the cache.
- **Solution**: Distributed locking using Redisson or probabilistic early expiration (XFetch algorithm).

\`\`\`java
RLock lock = redissonClient.getLock("lock:product:" + id);
if (lock.tryLock(100, 5000, TimeUnit.MILLISECONDS)) {
    try {
        // Double-check cache inside lock
        ProductDto cached = redisTemplate.opsForValue().get(key);
        if (cached != null) return cached;
        
        ProductDto fresh = fetchFromDatabase(id);
        redisTemplate.opsForValue().set(key, fresh, Duration.ofMinutes(15));
        return fresh;
    } finally {
        lock.unlock();
    }
}
\`\`\`

## Key Takeaways

1. Always set an explicit TTL on every cache key to prevent unbounded memory growth.
2. Separate transient session/rate-limit caches from persistent business data caches.
3. Use JSON serializers (such as Jackson2JsonRedisSerializer) over default Java binary serialization for maintainability and debugging.
    `,
    date: '2024-12-18',
    tags: ['Redis', 'Caching', 'Spring Boot', 'System Design', 'Performance'],
    readTime: '7 min read',
    author: 'Shubham Prakash',
  },
  {
    title: 'Mastering PostgreSQL Indexing, Query Optimization, and HikariCP Tuning in High-Concurrency Java Apps',
    slug: 'postgresql-performance-tuning-indexing-spring-boot',
    excerpt:
      'Real-world database optimization techniques from enterprise systems: query execution plans, B-Tree vs GIN/GiST indexes, connection pool sizing with HikariCP, and avoiding common JPA/Hibernate pitfalls.',
    content: `
## Beyond Basic Database Queries

In high-concurrency enterprise applications supporting 10,000+ users, suboptimal SQL queries and misconfigured connection pools can completely degrade cluster performance.

Tuning PostgreSQL alongside Spring Data JPA requires understanding both how the database planner executes queries and how HikariCP manages physical socket connections.

## Deconstructing Query Plans with EXPLAIN ANALYZE

Never optimize database queries blindly. Always inspect the PostgreSQL execution plan:

\`\`\`sql
EXPLAIN (ANALYZE, BUFFERS, COSTS)
SELECT * FROM orders 
WHERE user_id = 'usr_981' AND status = 'COMPLETED' 
ORDER BY created_at DESC 
LIMIT 20;
\`\`\`

Key metrics to look for:
- **Seq Scan vs Index Scan**: Sequential scans on tables with millions of rows result in massive disk I/O.
- **Buffers (Shared Hit vs Read)**: Highlights whether data was retrieved from the PostgreSQL buffer cache or required physical disk reads.
- **Rows Removed by Filter**: A high number indicates an index exists, but is not covering all predicates.

## Indexing Strategies: Composite and Covering Indexes

Creating single-column indexes on multiple fields is often counterproductive. For multi-predicate queries with sorting, a composite B-Tree index following the Equality-Range-Sort (ERS) rule is essential:

\`\`\`sql
-- Composite index optimizing user_id, status, and sorted created_at
CREATE INDEX idx_orders_user_status_created 
ON orders (user_id, status, created_at DESC);
\`\`\`

For index-only scans, the \`INCLUDE\` clause allows non-predicate columns to be stored in the index leaf nodes without inflating the tree structure:

\`\`\`sql
CREATE INDEX idx_orders_covering 
ON orders (user_id, status) INCLUDE (total_amount, currency);
\`\`\`

## Eliminating the JPA / Hibernate N+1 Problem

The infamous N+1 select problem occurs when fetching an entity with lazy relationships triggers N additional queries for each child record.

\`\`\`java
// Avoid: N+1 queries
List<Order> orders = orderRepository.findByUserId(userId);

// Solution: Fetch join in single query
@Query("SELECT o FROM Order o JOIN FETCH o.items WHERE o.userId = :userId")
List<Order> findWithItemsByUserId(@Param("userId") String userId);
\`\`\`

Alternatively, use \`@EntityGraph\` to declaratively define fetch plans per repository method without writing custom HQL queries.

## HikariCP Connection Pool Sizing

A common fallacy is assuming larger connection pools yield higher throughput. In reality, too many concurrent database connections cause CPU context-switching overhead and disk thrashing.

The recommended formula by the PostgreSQL team:

\`\`\`
connections = ((core_count * 2) + effective_spindle_count)
\`\`\`

For an 8-core database server with SSD storage, a connection pool between 20 to 30 connections typically yields optimal throughput while avoiding thread starvation.
    `,
    date: '2024-10-15',
    tags: ['PostgreSQL', 'Database', 'Spring Data JPA', 'HikariCP', 'Performance'],
    readTime: '10 min read',
    author: 'Shubham Prakash',
  },
  {
    title: 'Building Resilient Full-Stack Systems: Next.js 15 App Router with Spring Boot Microservices',
    slug: 'modern-full-stack-nextjs-spring-boot',
    excerpt:
      'Architectural patterns for integrating a high-performance Next.js 15 frontend with a Spring Boot microservices backend, covering SSR, streaming, and type safety.',
    content: `
## The Polyglot Full-Stack Topology

Modern full-stack engineering often leverages the strengths of multiple ecosystems:
- **Next.js 15 (React 19)** on the presentation layer for lightning-fast server-side rendering, edge caching, and optimized user interfaces.
- **Java & Spring Boot** on the backend for robust business logic, high-throughput multithreading, enterprise security, and transactional integrity.

## Server-Side Fetching with React Server Components (RSC)

Next.js 15 App Router defaults all components to React Server Components. This architecture enables backend API calls to occur server-to-server within the internal network:

\`\`\`tsx
// Server Component: direct server-to-server call to internal API Gateway
export default async function PortfolioOverview({ userId }: { userId: string }) {
  const response = await fetch(\`http://api-gateway:8080/api/v1/portfolios/\${userId}\`, {
    headers: {
      'X-Internal-Secret': process.env.INTERNAL_SERVICE_SECRET || '',
    },
    next: { revalidate: 60 }, // Cache on edge for 60 seconds
  });

  if (!response.ok) throw new Error('Failed to fetch portfolio data');
  const portfolio: PortfolioDto = await response.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Portfolio Value" value={portfolio.totalValue} />
      <StatCard title="Unrealized P&L" value={portfolio.unrealizedPnl} />
      <StatCard title="Available Cash" value={portfolio.cashBalance} />
    </div>
  );
}
\`\`\`

## Handling Secure Cross-Origin Authentication

When the Next.js frontend and Spring Boot API Gateway operate on separate subdomains (e.g. \`app.example.com\` and \`api.example.com\`), cookie configuration is paramount:

1. **HttpOnly**: Prevents JavaScript access and protects against XSS token theft.
2. **Secure**: Ensures tokens are only transmitted over TLS/HTTPS.
3. **SameSite=Lax or None**: \`SameSite=Lax\` works seamlessly when sharing a common parent domain, while \`SameSite=None; Secure\` is required for cross-domain calls.
4. **Spring Cloud Gateway Cookie Forwarding**: Ensure the gateway forwards authorization cookies across downstream microservice invocations.

## Unified Type Safety Across Java and TypeScript

Maintaining consistency between Java backend DTOs and TypeScript frontend models prevents runtime mapping errors. Defining shared contracts with strict TypeScript interfaces mirroring Spring Boot records/classes guarantees end-to-end reliability.

## Summary

Combining the agility and SEO strengths of Next.js 15 with the robustness of Spring Boot creates an enterprise-ready architecture capable of scaling to millions of requests with optimal user experience and minimal maintenance friction.
    `,
    date: '2024-08-12',
    tags: ['Next.js', 'React', 'TypeScript', 'Spring Boot', 'Full Stack'],
    readTime: '8 min read',
    author: 'Shubham Prakash',
  },
]

