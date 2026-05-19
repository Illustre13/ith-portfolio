import type { Metadata } from "next";
import { Mail, MapPin, Clock, Calendar } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/SocialIcons";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/pages/ContactForm";
import MotionReveal from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Illustre Tech House. We respond to all enquiries within 24 hours.",
};

const INFO_ITEMS = [
  { icon: Mail,  label: "Email",         content: "illustre.tech.house@gmail.com", href: "mailto:illustre.tech.house@gmail.com" },
  { icon: MapPin, label: "Location",     content: "Kigali, Rwanda",        href: null },
  { icon: Clock,  label: "Response Time", content: "Within 24 hours, guaranteed.", href: null },
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
        className="pt-28 sm:pt-32 pb-14 sm:pb-16"
        style={{ backgroundColor: "var(--bg-page)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <MotionReveal>
            <SectionLabel className="mb-3">Get in Touch</SectionLabel>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s talk about
              <br />
              <span className="text-brand">your project.</span>
            </h1>
            <p className="text-base sm:text-lg max-w-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
              We&apos;re selectively onboarding new clients. Tell us about your organisation and
              what you&apos;re trying to build.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-page)" }}>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <MotionReveal direction="left">
                <h2 className="font-bold text-lg mb-5" style={{ color: "var(--text-primary)" }}>
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {INFO_ITEMS.map(({ icon: Icon, label, content, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(3,169,244,0.1)" }}
                      >
                        <Icon size={13} className="text-brand" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>
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
              </MotionReveal>

              <MotionReveal direction="left" delay={0.08}>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  Connect
                </p>
                <div className="flex gap-2.5">
                  {[
                    { href: "https://linkedin.com/company/illustre-tech-house", Icon: LinkedInIcon, label: "LinkedIn" },
                    { href: "https://github.com/illustre-tech-house", Icon: GitHubIcon, label: "GitHub" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:text-brand hover:border-brand"
                      style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                    >
                      <s.Icon size={13} /> {s.label}
                    </a>
                  ))}
                </div>
              </MotionReveal>

              <MotionReveal direction="left" delay={0.14}>
                <div
                  className="card-theme rounded-xl"
                  style={{ padding: "1.5rem" }}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <Calendar size={15} className="text-brand" />
                    <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                      Book a Discovery Call
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed mb-3.5" style={{ color: "var(--text-muted)" }}>
                    Prefer a conversation? Book a free 30-minute call with no commitment.
                  </p>
                  <a
                    href="https://calendly.com/illustre-tech-house/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand text-sm font-medium hover:underline"
                  >
                    Schedule on Calendly →
                  </a>
                </div>
              </MotionReveal>

              <MotionReveal direction="left" delay={0.2}>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                  What Happens Next
                </p>
                <ol className="space-y-3">
                  {STEPS.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-brand font-mono text-xs mt-0.5 w-5 shrink-0 font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ color: "var(--text-muted)" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </MotionReveal>
            </div>

            {/* Right — form */}
            <MotionReveal className="lg:col-span-3" direction="up" delay={0.1}>
              <div
                className="card-theme rounded-2xl"
                style={{ padding: "2rem 2rem" }}
              >
                <h2 className="font-bold text-lg mb-6" style={{ color: "var(--text-primary)" }}>
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
