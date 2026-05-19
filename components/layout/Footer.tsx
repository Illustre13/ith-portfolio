import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/SocialIcons";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/illustre-tech-house", Icon: LinkedInIcon },
  { label: "GitHub",   href: "https://github.com/illustre-tech-house",            Icon: GitHubIcon  },
];

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

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-page)" }}>
      <div className="wrap py-16 lg:py-20">

        {/* Top grid — 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <ITHMark />
              <div className="leading-none">
                <span
                  className="font-bold text-base tracking-wide transition-colors duration-200 group-hover:text-brand"
                  style={{ color: "var(--text-primary)" }}
                >
                  Illustre<span className="text-brand">.</span>
                </span>
                <span
                  className="block font-mono text-[9px] uppercase tracking-[0.18em] mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  Tech House
                </span>
              </div>
            </Link>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-muted)", maxWidth: "22ch" }}
            >
              Precision engineering for African institutions. Custom software, AI, and digital
              infrastructure built to last.
            </p>

            <p className="text-brand font-mono text-xs italic">Engineering What&apos;s Next.</p>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:text-brand hover:border-brand"
                  style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  <s.Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Services
            </p>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Custom Software", href: "/services#software-dev" },
                { label: "AI & Data", href: "/services#ai-data" },
                { label: "Digital Transformation", href: "/services#digital-transformation" },
                { label: "Infrastructure & DevOps", href: "/services#infrastructure" },
                { label: "Data Analytics", href: "/services#data-analytics" },
                { label: "Training", href: "/services#training" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm w-fit hover:text-brand transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Company
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm w-fit hover:text-brand transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Contact
            </p>
            <div className="space-y-3.5">
              <a
                href="mailto:illustre.tech.house@gmail.com"
                className="flex items-center gap-2.5 text-sm hover:text-brand transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail size={13} className="shrink-0" />
                illustre.tech.house@gmail.com
              </a>
              <div
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <MapPin size={13} className="shrink-0" />
                Kigali, Rwanda
              </div>
              <div
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <Phone size={13} className="shrink-0" />
                +250 786 949 188
              </div>

              <div
                className="mt-5 pt-5"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#03a9f4", color: "#0D1117" }}
                >
                  Start a Project →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Illustre Tech House · Kigali, Rwanda · All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
