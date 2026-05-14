"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import MotionReveal from "@/components/ui/MotionReveal";

export default function CTABand() {
  return (
    <section
      className="relative section-py-lg overflow-hidden"
      style={{
        backgroundColor: "var(--bg-section-alt)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(3,169,244,0.05)" }}
      />

      <div className="relative z-10 wrap text-center">
        <MotionReveal>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ backgroundColor: "rgba(3,169,244,0.5)" }} />
            <span className="text-brand font-mono text-xs uppercase tracking-widest">Let&apos;s Talk</span>
            <div className="w-8 h-px" style={{ backgroundColor: "rgba(3,169,244,0.5)" }} />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to build something
            <br />
            <span className="text-gradient">that lasts?</span>
          </h2>

          <p
            className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            We&apos;re selectively onboarding new clients. If your project demands quality
            and you value a partner who takes it seriously, let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button href="/contact" variant="primary" size="lg" className="glow-brand w-full sm:w-auto justify-center">
                Book a Discovery Call
              </Button>
            </motion.div>
            <Button href="/work" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
              See Our Work
            </Button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
