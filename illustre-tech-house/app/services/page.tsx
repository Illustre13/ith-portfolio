import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/pages/ServiceCard";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
        className="pt-32 pb-16"
        style={{ backgroundColor: "var(--bg-page)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-4">What We Offer</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl"
              style={{ color: "var(--text-primary)" }}
            >
              Technology services built for{" "}
              <span className="text-brand">real outcomes.</span>
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              We don&apos;t sell technology for its own sake. Every service we offer is oriented
              around a measurable result — for your institution, your team, and the communities
              you serve.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Project
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-page">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-section-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-4">How We Work</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-10"
              style={{ color: "var(--text-primary)" }}
            >
              Our engagement model.
            </h2>
          </ScrollReveal>
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
              <ScrollReveal key={item.step} delay={(i * 100) as 0 | 100 | 200}>
                <div className="space-y-3">
                  <span className="text-brand font-mono text-xs uppercase tracking-widest">{item.step}</span>
                  <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
