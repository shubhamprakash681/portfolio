'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

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
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Toggle theme (current: ${theme})`}
      className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-secondary/60 hover:bg-secondary text-foreground hover:text-primary transition-all shadow-xs active:scale-95 cursor-pointer"
      title={`Theme: ${theme}`}
    >
      {theme === 'light' ? (
        <Sun className="h-4 w-4 text-amber-500 transition-all" />
      ) : theme === 'dark' ? (
        <Moon className="h-4 w-4 text-blue-400 transition-all" />
      ) : (
        <Monitor className="h-4 w-4 text-primary transition-all" />
      )}
    </button>
  )
}
