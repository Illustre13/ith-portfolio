"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-obsidian font-semibold hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20 active:translate-y-0 focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-obsidian",
  secondary:
    "border border-ivory/30 text-ivory font-semibold hover:border-brand hover:text-brand hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-obsidian",
  outline:
    "border border-slate-border text-ash hover:border-brand hover:text-brand hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ash hover:text-brand hover:bg-brand/5",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  showArrow = false,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
