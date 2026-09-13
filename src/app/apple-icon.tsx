import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          background: 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f97316',
          fontWeight: 900,
          borderRadius: 40,
          fontFamily: 'sans-serif',
          border: '4px solid rgba(249, 115, 22, 0.4)',
        }}
      >
        SP
      </div>
    ),
    {
      ...size,
    }
  )
}

