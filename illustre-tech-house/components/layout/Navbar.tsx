"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

const ITHMark = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
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
          backgroundColor: scrolled ? "color-mix(in srgb, var(--bg-page) 95%, transparent)" : "transparent",
          backdropFilter:  scrolled ? "blur(12px)" : "none",
          borderBottom:    scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <ITHMark />
              <div className="leading-none">
                <span
                  className="font-bold text-[17px] tracking-wide transition-colors duration-200 group-hover:text-brand"
                  style={{ color: "var(--text-primary)" }}
                >
                  Illustre<span className="text-brand">.</span>
                </span>
                <span
                  className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.18em] mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  Tech House
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                    style={{
                      color:           active ? "#03a9f4" : "var(--text-muted)",
                      backgroundColor: active ? "rgba(3,169,244,0.08)" : "transparent",
                    }}
                    onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                    onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button href="/contact" variant="primary" size="sm">
                Start a Project
              </Button>
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(13,17,23,0.6)" }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "var(--bg-card)", borderLeft: "1px solid var(--border)" }}
        >
          <div className="flex items-center justify-between p-6" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>Navigation</span>
            <button onClick={() => setMobileOpen(false)} style={{ color: "var(--text-muted)" }}>
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-4 flex-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color:           active ? "#03a9f4" : "var(--text-muted)",
                    backgroundColor: active ? "rgba(3,169,244,0.08)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-4" style={{ borderTop: "1px solid var(--border)" }}>
            <Button href="/contact" variant="primary" className="w-full justify-center">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
