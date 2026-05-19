"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const HEADLINE_LINE1 = "We Build Solutions That";
const HEADLINE_LINE2 = "Move Your Mission.";
const SECTORS = ["NGOs", "Government", "SMEs", "Education", "Fintech", "Health"];

const words1 = HEADLINE_LINE1.split(" ");
const words2 = HEADLINE_LINE2.split(" ");

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
          alt="Technology infrastructure"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.82) 100%)",
          }}
        />
      </div>


      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="wrap pt-28 pb-10 sm:pt-32 sm:pb-12">

          {/* Location pill */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6"
            style={{
              border: "1px solid rgba(3,169,244,0.25)",
              backgroundColor: "rgba(3,169,244,0.06)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shrink-0" />
            <span className="text-brand font-mono text-[11px] uppercase tracking-widest">
              Kigali, Rwanda · Est. 2024
            </span>
          </motion.div> */}

          {/* Animated headline */}
          <h1 className="font-bold leading-[1.06] tracking-tight mb-7 text-[2.4rem] sm:text-[3.2rem] lg:text-[4.25rem] xl:text-[4.75rem]">
            {/* Line 1 — white */}
            <span className="block mb-1">
              {words1.map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.22em] text-ivory"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 — gradient */}
            <span className="block">
              {words2.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.12 + (words1.length + i) * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.22em] text-gradient"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
            style={{ color: "rgba(244,244,245,0.65)" }}
          >
            We build the systems that help organisations; NGOs, government offices, and
            growing businesses deliver on their mission with precision and scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <Button href="/work" variant="primary" size="lg" className="glow-brand w-full sm:w-auto">
              See Client Results
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Start a Conversation
            </Button>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            {[
              { value: "8+", label: "Projects delivered" },
              { value: "82%", label: "Avg. time saved" },
              { value: "4+", label: "Organisations served" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(13,17,23,0.45)",
                }}
              >
                <span className="text-brand font-bold text-sm font-mono">{stat.value}</span>
                <span className="w-px h-3 shrink-0" style={{ backgroundColor: "rgba(244,244,245,0.15)" }} />
                <span className="text-xs" style={{ color: "rgba(244,244,245,0.5)" }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Sector strip */}
      <div
        className="relative z-10"
        style={{
          borderTop: "1px solid rgba(42,47,63,0.55)",
          backgroundColor: "rgba(13,17,23,0.7)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="wrap py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.18em] shrink-0"
              style={{ color: "rgba(139,143,168,0.6)" }}
            >
              We serve
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              {SECTORS.map((sector, i) => (
                <div key={sector} className="flex items-center gap-6">
                  <span
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "rgba(244,244,245,0.7)" }}
                  >
                    {sector}
                  </span>
                  {i < SECTORS.length - 1 && (
                    <span
                      className="hidden sm:block w-px h-3 shrink-0"
                      style={{ backgroundColor: "rgba(42,47,63,0.8)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
