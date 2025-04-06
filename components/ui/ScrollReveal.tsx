"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "scale";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
  as?: React.ElementType;
}

const directionClass: Record<Direction, string> = {
  up:    "reveal",
  left:  "reveal-left",
  scale: "reveal-scale",
};

const delayClass: Record<number, string> = {
  0:   "",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
  400: "delay-400",
  500: "delay-500",
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dc        = directionClass[direction];
  const delayCls  = delayClass[delay] ?? "";

  return (
    <Tag ref={ref} className={`${dc} ${delayCls} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
