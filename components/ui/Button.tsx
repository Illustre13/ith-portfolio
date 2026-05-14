"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

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
  style?: React.CSSProperties;
}

function getVariantStyle(variant: Variant): React.CSSProperties {
  switch (variant) {
    case "secondary":
      return { borderColor: "var(--border)", color: "var(--text-primary)" };
    case "outline":
      return { borderColor: "var(--border)", color: "var(--text-muted)" };
    case "ghost":
      return { color: "var(--text-muted)" };
    default:
      return {};
  }
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-obsidian font-semibold hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20 active:translate-y-0 focus:ring-2 focus:ring-brand focus:ring-offset-2",
  secondary:
    "border font-semibold hover:border-brand hover:text-brand hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-brand focus:ring-offset-2",
  outline:
    "border hover:border-brand hover:text-brand hover:-translate-y-0.5 active:translate-y-0",
  ghost: "hover:text-brand hover:bg-brand/5",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-6 py-3 text-sm gap-2",
  md: "px-7 py-3.5 text-sm gap-2",
  lg: "px-9 py-4 text-base gap-3",
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
  style,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const computedStyle = { ...getVariantStyle(variant), ...style };

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={computedStyle}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={computedStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} style={computedStyle}>
      {content}
    </button>
  );
}
