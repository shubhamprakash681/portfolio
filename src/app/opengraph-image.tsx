import { ImageResponse } from 'next/og'

export const alt = 'Shubham Prakash - Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0f', // Dark background
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Abstract shapes for decoration */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, rgba(10, 10, 15, 0) 70%)',
            borderRadius: '50%',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, rgba(10, 10, 15, 0) 70%)',
            borderRadius: '50%',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
          <h1
            style={{
              fontSize: '84px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Shubham Prakash
          </h1>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#ea580c', // Orange accent
              marginBottom: '40px',
              letterSpacing: '-0.01em',
            }}
          >
            Software Engineer
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '32px',
              fontWeight: 500,
              color: '#a1a1aa', // Muted text
              gap: '16px',
            }}
          >
            <span>Java</span>
            <span style={{ color: '#ea580c' }}>•</span>
            <span>Spring Boot</span>
            <span style={{ color: '#ea580c' }}>•</span>
            <span>Microservices</span>
            <span style={{ color: '#ea580c' }}>•</span>
            <span>React</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
