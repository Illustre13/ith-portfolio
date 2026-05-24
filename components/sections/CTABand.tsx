"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import MotionReveal from "@/components/ui/MotionReveal";

export default function CTABand() {
  return (
    <section
      className="section-py-lg"
      style={{
        backgroundColor: "var(--bg-section-alt)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — question */}
          <MotionReveal direction="left">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              What are you<br />
              <span className="text-brand">building?</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              We&apos;re selectively onboarding. If your project needs precision
              and a partner who shows up, we should talk.
            </p>

            <div className="flex flex-col gap-4 mb-8" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest w-24 shrink-0" style={{ color: "var(--text-muted)" }}>Email</span>
                <a
                  href="mailto:info@illustretech.rw"
                  className="text-sm font-medium hover:text-brand transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                >
                  info@illustretech.rw
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest w-24 shrink-0" style={{ color: "var(--text-muted)" }}>Location</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest w-24 shrink-0" style={{ color: "var(--text-muted)" }}>Response</span>
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>Within 24 hours</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Button href="/contact" variant="primary" size="lg" className="glow-brand">
                Let&apos;s scope your project
              </Button>
            </motion.div>
          </MotionReveal>

          {/* Right — illustration */}
          <MotionReveal direction="up" delay={0.15}>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "858/605" }}>
              <Image
                src="/Preview.svg"
                alt="Project preview illustration"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
}
