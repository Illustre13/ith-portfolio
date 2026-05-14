import Link from "next/link";
import Image from "next/image";
import { Code2, Brain, Layers, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import MotionReveal from "@/components/ui/MotionReveal";

const PREVIEW_SERVICES = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Web applications, internal tools, APIs, and backend systems built to production standards — no shortcuts, no technical debt.",
    href: "/services#software-dev",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Brain,
    title: "AI & Data Solutions",
    desc: "Machine learning pipelines, agentic AI systems, and analytics dashboards that turn your data into decisions.",
    href: "/services#ai-data",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Layers,
    title: "Digital Transformation",
    desc: "IT audits, technology roadmaps, and open-source platform deployment for institutions moving from paper to digital.",
    href: "/services#digital-transformation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-py-lg" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="wrap">

        {/* Section header */}
        <MotionReveal className="section-head text-center">
          <SectionLabel className="mb-4">What We Do</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mx-auto"
            style={{ color: "var(--text-primary)" }}
          >
            End-to-end technology consulting for organisations that demand quality.
          </h2>
        </MotionReveal>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PREVIEW_SERVICES.map((service, i) => (
            <MotionReveal key={service.title} direction="up" delay={i * 0.12}>
              <article className="card-theme hover-card flex flex-col rounded-2xl overflow-hidden h-full group">

                {/* Image */}
                <div className="relative h-52 overflow-hidden shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.15) 100%)" }}
                  />
                  {/* Icon badge over image */}
                  <div
                    className="absolute bottom-4 left-5 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#03a9f4" }}
                  >
                    <service.icon size={18} className="text-obsidian" />
                  </div>
                </div>

                {/* Body */}
                <div className="card-body flex flex-col flex-1 gap-4">
                  <h3 className="text-base font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                    {service.desc}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-brand text-sm font-semibold hover:gap-3 transition-all duration-200 pt-4"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>

        {/* Footer link */}
        <MotionReveal className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors duration-200 px-5 py-2.5 rounded-lg"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
          >
            View all six services <ArrowRight size={14} />
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
}
