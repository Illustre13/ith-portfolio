"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

const ITHMark = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
    <rect x="4"  y="4"  width="4" height="24" fill="#03a9f4" />
    <rect x="12" y="4"  width="4" height="4"  fill="#03a9f4" />
    <rect x="12" y="14" width="4" height="4"  fill="#03a9f4" />
    <rect x="16" y="4"  width="8" height="4"  fill="#03a9f4" />
    <rect x="24" y="4"  width="4" height="24" fill="#03a9f4" />
    <rect x="16" y="14" width="4" height="4"  fill="#03a9f4" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "color-mix(in srgb, var(--bg-page) 94%, transparent)" : "transparent",
          backdropFilter:  scrolled ? "blur(14px)" : "none",
          borderBottom:    scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="wrap">
          <div className="flex items-center justify-between h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <ITHMark />
              <div className="leading-none">
                <span
                  className="font-bold text-[1rem] tracking-wide transition-colors duration-200 group-hover:text-brand"
                  style={{ color: "var(--text-primary)" }}
                >
                  Illustre<span className="text-brand">.</span>
                </span>
                <span
                  className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.2em] mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  Tech House
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 hover:text-brand group"
                    style={{
                      color: active ? "#03a9f4" : "var(--text-muted)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-1.5 left-4 right-4 h-px rounded-full bg-brand origin-left transition-transform duration-200 group-hover:transform-[scaleX(1)]"
                      style={{
                        transform: active ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <ThemeToggle />
              <Button href="/contact" variant="primary" size="sm">
                Start a Project
              </Button>
            </div>

            {/* Mobile / Tablet actions */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-lg transition-colors duration-200 hover:text-brand"
                style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer — Framer Motion */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: "rgba(13,17,23,0.55)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col"
              style={{
                width: "min(18rem, 85vw)",
                backgroundColor: "var(--bg-card)",
                borderLeft: "1px solid var(--border)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
                  <ITHMark />
                  <span
                    className="font-bold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Illustre<span className="text-brand">.</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-0.5 p-4 flex-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200"
                        style={{
                          color:           active ? "#03a9f4" : "var(--text-muted)",
                          backgroundColor: active ? "rgba(3,169,244,0.08)" : "transparent",
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="p-4 pb-8" style={{ borderTop: "1px solid var(--border)" }}>
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Projects
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
