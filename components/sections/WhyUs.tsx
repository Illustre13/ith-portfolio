import { Globe, Zap, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const FEATURES = [
  {
    icon: Globe,
    title: "Built for the African Context",
    body: "We understand the infrastructure constraints, compliance landscape, and institutional realities of East African organisations. Our solutions are designed for the environment they'll actually run in — not an idealised version of it.",
    delay: 0,
  },
  {
    icon: Zap,
    title: "Agentic AI & Modern Stack",
    body: "From open-source deployment to custom LLM pipelines and earth observation ML, we bring frontier technology to practical problems. We don't recommend technology for its own sake — only when it creates a measurable advantage.",
    delay: 100,
  },
  {
    icon: Shield,
    title: "Boutique Accountability",
    body: "As a focused firm, every engagement receives direct senior attention. There are no handoffs to juniors, no offshore teams, no disappearing acts. You work with the same engineers throughout — from scoping to delivery.",
    delay: 200,
  },
];

export default function WhyUs() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg-section-alt)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <SectionLabel className="mb-4">Our Edge</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Precision.{" "}
            <span className="text-brand">Context.</span>{" "}
            Delivery.
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {FEATURES.map((f) => (
            <ScrollReveal key={f.title} direction="left" delay={f.delay as 0 | 100 | 200}>
              <div
                className="hover-card flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl card-theme"
              >
                <div className="shrink-0">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(3,169,244,0.1)",
                      border:          "1px solid rgba(3,169,244,0.2)",
                    }}
                  >
                    <f.icon size={24} className="text-brand" />
                  </div>
                </div>
                <div className="max-w-2xl">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                    {f.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {f.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
