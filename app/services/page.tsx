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
              <span className="chalk">real outcomes.</span>
            </h1>
            <p
              className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              We don&apos;t sell technology for its own sake. Every service we offer is oriented
              around a measurable result for your institution, your team, and the communities
              you serve.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Project
            </Button>
          </MotionReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-section-alt)" }}>
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
        style={{ backgroundColor: "var(--bg-raised)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap" style={{ maxWidth: "64rem" }}>

          {/* Title block — acts as the tree root */}
          <MotionReveal>
            <div className="flex flex-col items-center text-center mb-0">
              <SectionLabel className="mb-3">How We Work</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-0"
                style={{ color: "var(--text-primary)" }}
              >
                Our engagement model.
              </h2>
              {/* Stem line down from title */}
              <div className="w-px mt-6 h-10" style={{ backgroundColor: "var(--border)" }} />
              {/* Horizontal branch spanning all 3 columns */}
              <div className="hidden sm:block w-full relative h-px" style={{ backgroundColor: "var(--border)" }}>
                {/* Left cap dot */}
                <div className="absolute left-[16.67%] -translate-x-1/2 -top-1 w-2 h-2 rounded-full" style={{ backgroundColor: "var(--border)" }} />
                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full" style={{ backgroundColor: "var(--border)" }} />
                {/* Right cap dot */}
                <div className="absolute left-[83.33%] -translate-x-1/2 -top-1 w-2 h-2 rounded-full" style={{ backgroundColor: "var(--border)" }} />
              </div>
            </div>
          </MotionReveal>

          {/* Desktop: 3 cards hanging from the branch */}
          <div className="hidden sm:grid grid-cols-3 gap-6 mt-0">
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
              <MotionReveal key={item.step} direction="up" delay={0.1 + i * 0.1}>
                <div className="flex flex-col items-center">
                  {/* Drop line from branch to card */}
                  <div className="w-px h-8" style={{ backgroundColor: "var(--border)" }} />
                  {/* Card */}
                  <div className="timeline-card w-full rounded-xl p-6 text-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold font-mono text-sm mx-auto mb-4"
                      style={{ backgroundColor: "#03a9f4", color: "#0d1117" }}
                    >
                      {item.step}
                    </div>
                    <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="flex sm:hidden flex-col gap-0 mt-8">
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
                <div className="flex gap-5 pb-6 last:pb-0">
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-bold font-mono text-sm shrink-0"
                      style={{ backgroundColor: "#03a9f4", color: "#0d1117" }}
                    >
                      {item.step}
                    </div>
                    {i < 2 && (
                      <div className="w-px flex-1 mt-2" style={{ backgroundColor: "var(--border)", minHeight: "2.5rem" }} />
                    )}
                  </div>
                  <div className="timeline-card flex-1 rounded-xl p-5 mb-2">
                    <h3 className="font-bold text-base mb-1.5" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                  </div>
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
