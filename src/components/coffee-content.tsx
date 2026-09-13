'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/data/site'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/animations/fade-in'
import { Coffee, Copy, CheckCircle2 } from 'lucide-react'
import QRCode from 'qrcode'
import Image from 'next/image'

export function CoffeeContent() {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const upiId = siteConfig.coffee?.upiId

  useEffect(() => {
    if (upiId) {
      const upiUrl = `upi://pay?pa=${upiId}&pn=Shubham%20Prakash&cu=INR`
      QRCode.toDataURL(upiUrl, {
        width: 250,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      })
      .then(url => setQrCodeDataUrl(url))
      .catch(err => console.error(err))
    }
  }, [upiId])

  const handleCopy = () => {
    if (upiId) {
      navigator.clipboard.writeText(upiId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!upiId) {
    return (
      <Card className="p-8 max-w-md mx-auto text-center border-border/50">
        <Coffee className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
        <p className="text-muted-foreground">UPI payment is not configured yet.</p>
      </Card>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <FadeIn direction="up">
        <Card className="p-8 text-center border-primary/20 bg-gradient-to-b from-secondary/50 to-background shadow-lg">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Coffee className="w-8 h-8" />
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-2">Buy me a coffee</h2>
          <p className="text-muted-foreground text-sm mb-8">Scan the QR code below with any supported UPI app (GPay, PhonePe, Paytm, etc.) to show your support.</p>
          
          {qrCodeDataUrl && (
            <div className="bg-white p-4 rounded-xl inline-block mb-8 shadow-sm">
              <Image 
                src={qrCodeDataUrl} 
                alt="UPI Payment QR Code" 
                width={200} 
                height={200}
                className="rounded-lg"
              />
            </div>
          )}
          
          <div className="flex items-center justify-center gap-3 bg-secondary/50 p-4 rounded-lg border border-border">
            <code className="text-foreground font-mono text-sm">{upiId}</code>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleCopy}
              className="px-2 h-8"
              aria-label="Copy UPI ID"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
            </Button>
          </div>
        </Card>
      </FadeIn>
    </div>
  )
}
