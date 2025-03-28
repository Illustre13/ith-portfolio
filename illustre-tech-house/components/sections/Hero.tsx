"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SECTORS = ["NGOs", "Government", "SMEs", "Education", "Fintech", "Health"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    type P = { x: number; y: number; vx: number; vy: number; r: number; o: number };
    const pts: P[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r:  Math.random() * 1.6 + 0.4,
        o:  Math.random() * 0.35 + 0.08,
      });
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Check light mode */
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const dotColor = isLight ? "rgba(2,136,209," : "rgba(3,169,244,";
      const lineColor = isLight ? "rgba(2,136,209," : "rgba(3,169,244,";

      pts.forEach((p, i) => {
        p.x = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}${p.o})`;
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q   = pts[j];
          const dx  = p.x - q.x;
          const dy  = p.y - q.y;
          const d   = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `${lineColor}${0.07 * (1 - d / 120)})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Geo grid */}
      <div className="absolute inset-0 geo-grid" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />

      {/* Ambient glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-175 h-100 rounded-full blur-3xl pointer-events-none float-y"
        style={{ backgroundColor: "rgba(3,169,244,0.06)" }}
      />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(0,200,150,0.04)" }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* Pill */}
          <ScrollReveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{
                border:          "1px solid rgba(3,169,244,0.3)",
                backgroundColor: "rgba(3,169,244,0.06)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-brand font-mono text-[11px] uppercase tracking-widest">
                Kigali, Rwanda · Est. 2024
              </span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h1
              className="text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.06] tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              We Build the Systems
              <br />
              <span className="text-gradient">That Move Rwanda</span>
              <br />
              Forward.
            </h1>
          </ScrollReveal>

          {/* Sub */}
          <ScrollReveal delay={200}>
            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Software engineering, AI, and digital infrastructure — designed for African
              institutions that demand quality.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/services" variant="primary" size="lg" className="glow-brand">
                Explore Our Services
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Sector strip */}
      <div
        className="relative z-10"
        style={{
          borderTop:       "1px solid var(--border)",
          backgroundColor: "color-mix(in srgb, var(--bg-page) 88%, transparent)",
          backdropFilter:  "blur(8px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="font-mono text-xs uppercase tracking-widest shrink-0" style={{ color: "var(--text-muted)" }}>
              We serve
            </span>
            {SECTORS.map((sector, i) => (
              <div key={sector} className="flex items-center gap-6">
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {sector}
                </span>
                {i < SECTORS.length - 1 && (
                  <span className="hidden sm:block" style={{ color: "var(--border)" }}>·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
