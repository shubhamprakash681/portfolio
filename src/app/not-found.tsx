import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
      <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-4">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Looks like this page took a wrong route. The content you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="primary" size="md" href="/">
          Back Home
        </Button>
        <Button variant="outline" size="md" href="/projects">
          View Projects
        </Button>
      </div>
    </Container>
  )
}
