import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import HoverCard from "@/components/ui/HoverCard";
import CTABand from "@/components/sections/CTABand";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SKILLS_BADGES, TECH_STACK_LOGOS } from "@/lib/constants";
import { Target, Heart, Gem, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Illustre Tech House — a boutique IT consulting firm founded in Kigali with the conviction that African institutions deserve world-class software.",
};

const VALUES = [
  { icon: Gem,    name: "Precision", desc: "We treat every detail as consequential. Sloppy code and vague deliverables have no place here." },
  { icon: Heart,  name: "Integrity", desc: "We tell you what we can do, then we do it. No over-promising, no hidden scope." },
  { icon: Target, name: "Context",   desc: "Technology must fit the environment it inhabits. We design for Rwanda and East Africa — not Silicon Valley." },
  { icon: Wrench, name: "Craft",     desc: "Good enough is not good enough. We build things that age well and hold up under pressure." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20"
        style={{ backgroundColor: "var(--bg-page)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-4">About the Firm</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              Built in Kigali.
              <br />
              <span className="text-brand">Built to last.</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Illustre Tech House was founded with one conviction: African institutions deserve
              software built to the same standard as anywhere else in the world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionLabel className="mb-4">Our Mission</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Precision engineering for the African future.
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                To engineer digital systems that empower African organisations to operate with
                precision, scale with confidence, and serve their communities better.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We work at the intersection of custom software, frontier AI, and open-source
                infrastructure — bringing the best of global technology practice to problems that
                matter locally.
              </p>
            </ScrollReveal>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "6+",   label: "Service areas" },
                { value: "24h",  label: "Response time" },
                { value: "100%", label: "Senior delivery" },
                { value: "EAC",  label: "Regional focus" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={(i * 100) as 0 | 100 | 200 | 300} direction="scale">
                  <HoverCard className="p-6 text-center">
                    <p className="text-4xl font-bold text-brand mb-1">{stat.value}</p>
                    <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </p>
                  </HoverCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-section-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-4">Core Values</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
              What we stand for.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.name} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <HoverCard className="p-6 h-full">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(3,169,244,0.1)" }}
                  >
                    <v.icon size={18} className="text-brand" />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>{v.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-4">The Founder</SectionLabel>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-4">
            {/* Bio */}
            <ScrollReveal direction="left">
              <div className="flex items-center gap-5 mb-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(3,169,244,0.1)", border: "2px solid rgba(3,169,244,0.3)" }}
                >
                  <span className="text-brand font-bold text-2xl font-mono">BN</span>
                </div>
                <div>
                  <h2 className="font-bold text-2xl" style={{ color: "var(--text-primary)" }}>
                    Bertin Niyomufasha
                  </h2>
                  <p className="font-mono text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                    Founder &amp; Principal Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-4 leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                <p>
                  Masters in IT and Software Engineering with a specialisation in agentic AI systems,
                  machine learning, and data infrastructure. Based in Kigali, building technology for
                  institutions that matter.
                </p>
                <p>
                  Before founding Illustre Tech House, Bertin worked across open-source deployment,
                  earth observation machine learning, and scalable data architecture — including
                  engagement with UNICEF DPI and Mojaloop open-source financial infrastructure.
                </p>
                <p>
                  His approach to engineering is simple: understand the problem deeply, build only
                  what is necessary, and make sure what you build lasts.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {SKILLS_BADGES.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-widest font-medium text-brand"
                    style={{ backgroundColor: "rgba(3,169,244,0.1)", border: "1px solid rgba(3,169,244,0.2)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Tech stack */}
            <ScrollReveal>
              <h3 className="font-bold text-lg mb-6" style={{ color: "var(--text-primary)" }}>
                Technologies we work with
              </h3>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We work with leading open-source and cloud technologies — chosen for reliability,
                community support, and fit for the East African context.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TECH_STACK_LOGOS.map((tech) => (
                  <HoverCard key={tech} size="sm" className="px-3 py-3 text-center">
                    <span className="text-sm font-mono font-medium" style={{ color: "var(--text-primary)" }}>
                      {tech}
                    </span>
                  </HoverCard>
                ))}
              </div>

              <div
                className="mt-10 p-6 rounded-xl"
                style={{ backgroundColor: "rgba(3,169,244,0.05)", border: "1px solid rgba(3,169,244,0.2)" }}
              >
                <p className="text-brand font-mono text-xs uppercase tracking-widest mb-2">
                  Open Source First
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  We default to open-source where it meets the need — reducing vendor lock-in,
                  lowering long-term costs, and keeping your organisation in control of its own
                  infrastructure.
                </p>
              </div>

              <div className="mt-8">
                <Button href="/contact" variant="primary">Work With Us</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
