"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200
        ${theme === "dark"
          ? "border-slate-border text-ash hover:text-brand hover:border-brand/50 bg-transparent"
          : "border-[var(--border)] text-[var(--text-muted)] hover:text-brand hover:border-brand/50 bg-transparent"
        } ${className}`}
    >
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === "dark" ? 1 : 0,
          transform: theme === "dark" ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
        }}
      >
        <Moon size={15} />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === "light" ? 1 : 0,
          transform: theme === "light" ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
        }}
      >
        <Sun size={15} />
      </span>
    </button>
  );
}
