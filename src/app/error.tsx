'use client'

import { useEffect } from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
      <h1 className="text-4xl font-bold text-foreground mb-4">Something went wrong!</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        An unexpected error occurred while trying to load this page.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button 
          variant="primary" 
          size="md" 
          onClick={() => reset()}
        >
          Try Again
        </Button>
        <Button variant="outline" size="md" href="/">
          Back Home
        </Button>
      </div>
    </Container>
  )
}
