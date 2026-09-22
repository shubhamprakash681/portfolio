"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-8.5 w-23.5 rounded-lg border border-border bg-secondary/50 p-0.5 opacity-60"
        aria-hidden="true"
      />
    );
  }

  const themeOptions = [
    { value: "light" as const, icon: Sun, label: "Light" },
    { value: "dark" as const, icon: Moon, label: "Dark" },
    { value: "system" as const, icon: Monitor, label: "System" },
  ];

  return (
    <div className="flex items-center rounded-lg border border-border bg-secondary/60 p-0.5 gap-0.5 shadow-xs">
      {themeOptions.map((opt) => {
        const isSelected = theme === opt.value;
        const Icon = opt.icon;

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setTheme(opt.value)}
            className={cn(
              "flex items-center justify-center rounded-md p-1.5 transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
              isSelected
                ? "bg-primary text-primary-foreground shadow-xs shadow-primary/25 font-medium"
                : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
            )}
            title={opt.label}
            aria-label={`Switch to ${opt.label} mode`}
            aria-pressed={isSelected}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
