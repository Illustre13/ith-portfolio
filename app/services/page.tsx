import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/pages/ServiceCard";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import MotionReveal from "@/components/ui/MotionReveal";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, AI & data solutions, digital transformation, infrastructure, analytics, and training for African institutions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-28 sm:pt-32 pb-14 sm:pb-20"
        style={{ backgroundColor: "var(--bg-page)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <MotionReveal>
            <SectionLabel className="mb-3">What We Offer</SectionLabel>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-3xl"
              style={{ color: "var(--text-primary)" }}
            >
              Technology services built for{" "}
              <span className="text-brand">real outcomes.</span>
            </h1>
            <p
              className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              We don&apos;t sell technology for its own sake. Every service we offer is oriented
              around a measurable result — for your institution, your team, and the communities
              you serve.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Project
            </Button>
          </MotionReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-page)" }}>
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section
        className="section-py"
        style={{ backgroundColor: "var(--bg-section-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap" style={{ maxWidth: "56rem" }}>
          <MotionReveal>
            <SectionLabel className="mb-4">How We Work</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-10"
              style={{ color: "var(--text-primary)" }}
            >
              Our engagement model.
            </h2>
          </MotionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "A 30-minute conversation to understand your goals, constraints, and what success looks like.",
              },
              {
                step: "02",
                title: "Scoping & Proposal",
                desc: "We deliver a clear technical proposal with timeline, deliverables, and fixed or milestone-based pricing.",
              },
              {
                step: "03",
                title: "Build & Deliver",
                desc: "Regular check-ins, transparent progress tracking, and a handover that leaves your team fully capable.",
              },
            ].map((item, i) => (
              <MotionReveal key={item.step} direction="up" delay={i * 0.1}>
                <div className="space-y-3">
                  <span className="text-brand font-mono text-xs uppercase tracking-widest">{item.step}</span>
                  <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
