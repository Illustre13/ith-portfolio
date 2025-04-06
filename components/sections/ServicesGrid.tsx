import Link from "next/link";
import { Code2, Brain, Layers, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const PREVIEW_SERVICES = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Web applications, internal tools, APIs, and backend systems built to production standards — no shortcuts, no technical debt.",
    href: "/services#software-dev",
  },
  {
    icon: Brain,
    title: "AI & Data Solutions",
    desc: "Machine learning pipelines, agentic AI systems, and analytics dashboards that turn your data into decisions.",
    href: "/services#ai-data",
  },
  {
    icon: Layers,
    title: "Digital Transformation",
    desc: "IT audits, technology roadmaps, and open-source platform deployment for institutions moving from paper to digital.",
    href: "/services#digital-transformation",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="mb-4">What We Do</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            End-to-end technology consulting for organisations that demand quality.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PREVIEW_SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={(i * 100) as 0 | 100 | 200}>
              <article className="card-theme hover-card flex flex-col rounded-xl p-6 h-full">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(3,169,244,0.1)" }}
                >
                  <service.icon size={20} className="text-brand" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-muted)" }}>
                  {service.desc}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-brand text-sm font-medium hover:gap-2.5 transition-all duration-200"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm hover:text-brand transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
          >
            View all services <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
