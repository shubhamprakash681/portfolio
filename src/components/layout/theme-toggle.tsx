'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : theme === 'dark' ? (
        <Moon className="h-5 w-5 transition-all" />
      ) : (
        <Monitor className="h-5 w-5 transition-all" />
      )}
    </Button>
  )
}
