import { Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CoffeeCTA() {
  return (
    <section className="py-16 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Buy Me a Coffee ☕
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            If you found my projects, articles, or open-source work useful, you can support me with a coffee.
          </p>
          <Button variant="primary" size="lg" href="/coffee" className="group">
            <Coffee className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Support My Work
          </Button>
        </div>
      </div>
    </section>
  )
}
