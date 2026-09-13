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
]

