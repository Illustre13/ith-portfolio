import type { Metadata } from "next";
import { Mail, MapPin, Clock, Calendar } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/SocialIcons";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/pages/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Illustre Tech House. We respond to all enquiries within 24 hours.",
};

const INFO_ITEMS = [
  { icon: Mail,    label: "Email",         content: "hello@illustretech.rw", href: "mailto:hello@illustretech.rw" },
  { icon: MapPin,  label: "Location",      content: "Kigali, Rwanda",        href: null },
  { icon: Clock,   label: "Response Time", content: "Within 24 hours, guaranteed.", href: null },
];

const STEPS = [
  "We read your message carefully within 24 hours.",
  "We reply with clarifying questions or an initial proposal.",
  "We schedule a discovery call if the fit looks right.",
  "We send a scoped proposal with timeline and pricing.",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{ backgroundColor: "var(--bg-page)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-4">Get in Touch</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s talk about
              <br />
              <span className="text-brand">your project.</span>
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
              We&apos;re selectively onboarding new clients. Tell us about your organisation and
              what you&apos;re trying to build.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal direction="left">
                <h2 className="font-bold text-xl mb-6" style={{ color: "var(--text-primary)" }}>
                  Contact Information
                </h2>

                <div className="space-y-5">
                  {INFO_ITEMS.map(({ icon: Icon, label, content, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(3,169,244,0.1)" }}
                      >
                        <Icon size={14} className="text-brand" />
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>
                          {label}
                        </p>
                        {href ? (
                          <a href={href} className="text-sm hover:text-brand transition-colors duration-200" style={{ color: "var(--text-primary)" }}>
                            {content}
                          </a>
                        ) : (
                          <p className="text-sm" style={{ color: "var(--text-primary)" }}>{content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100}>
                <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                  Connect
                </p>
                <div className="flex gap-3">
                  {[
                    { href: "https://linkedin.com/company/illustre-tech-house", Icon: LinkedInIcon, label: "LinkedIn" },
                    { href: "https://github.com/illustre-tech-house",            Icon: GitHubIcon,  label: "GitHub"   },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 hover:text-brand"
                      style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                    >
                      <s.Icon size={14} /> {s.label}
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200}>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-brand" />
                    <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                      Book a Discovery Call
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    Prefer a conversation? Book a free 30-minute call with no commitment.
                  </p>
                  <a
                    href="https://calendly.com/illustretech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand text-sm font-medium hover:underline"
                  >
                    Schedule on Calendly →
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={300}>
                <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                  What Happens Next
                </p>
                <ol className="space-y-3">
                  {STEPS.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-brand font-mono text-xs mt-0.5 w-4 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ color: "var(--text-muted)" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </ScrollReveal>
            </div>

            {/* Right — form */}
            <ScrollReveal className="lg:col-span-3">
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                <h2 className="font-bold text-xl mb-6" style={{ color: "var(--text-primary)" }}>
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
