import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/SocialIcons";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/illustre-tech-house", Icon: LinkedInIcon },
  { label: "GitHub",   href: "https://github.com/illustre-tech-house",            Icon: GitHubIcon  },
  { label: "Email",    href: "mailto:hello@illustretech.rw",                       Icon: () => <Mail size={14} /> },
];

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

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-page)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <ITHMark />
              <div className="leading-none">
                <span
                  className="font-bold text-[17px] transition-colors duration-200 group-hover:text-brand"
                  style={{ color: "var(--text-primary)" }}
                >
                  Illustre<span className="text-brand">.</span>
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-[0.18em] mt-0.5 text-muted-th">
                  Tech House
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-muted-th" style={{ color: "var(--text-muted)" }}>
              Precision engineering for African institutions. Custom software, AI, and digital infrastructure built to last.
            </p>
            <p className="text-brand font-mono text-xs italic">Engineering What&apos;s Next.</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-sm mb-4" style={{ color: "var(--text-primary)" }}>Navigation</p>
            <nav className="flex flex-col gap-2">
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

          {/* Contact */}
          <div>
            <p className="font-semibold text-sm mb-4" style={{ color: "var(--text-primary)" }}>Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:hello@illustretech.rw"
                className="flex items-center gap-2 text-sm hover:text-brand transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail size={14} /> hello@illustretech.rw
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <MapPin size={14} /> Kigali, Rwanda
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:text-brand"
                    style={{
                      border: "1px solid var(--border)",
                      color:  "var(--text-muted)",
                    }}
                  >
                    <s.Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © 2026 Illustre Tech House · Kigali, Rwanda
          </p>
          <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
