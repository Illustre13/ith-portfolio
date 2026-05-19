import Image from "next/image";
import { Globe, Zap, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import MotionReveal from "@/components/ui/MotionReveal";

const FEATURES = [
  {
    icon: Globe,
    title: "Built for the African Context",
    body: "We understand the infrastructure constraints, compliance landscape, and institutional realities of East African organisations. Our solutions are designed for the environment they'll actually run in — not an idealised version of it.",
  },
  {
    icon: Zap,
    title: "Agentic AI & Modern Stack",
    body: "From open-source deployment to custom LLM pipelines and earth observation ML, we bring frontier technology to practical problems. We don't recommend technology for its own sake — only when it creates a measurable advantage.",
  },
  {
    icon: Shield,
    title: "Boutique Accountability",
    body: "As a focused firm, every engagement receives direct senior attention. There are no handoffs to juniors, no offshore teams, no disappearing acts. You work with the same engineers throughout — from scoping to delivery.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-py-lg" style={{ backgroundColor: "var(--bg-section-alt)" }}>
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — image */}
          <MotionReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Developers collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Stats strip at bottom of image */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background: "linear-gradient(to top, rgba(13,17,23,0.96) 0%, transparent 100%)",
                }}
              >
                <div className="flex items-center justify-between pt-6">
                  {[
                    { val: "100%", lab: "Senior-led" },
                    { val: "0",    lab: "Handoffs" },
                    { val: "∞",    lab: "Accountability" },
                  ].map((s) => (
                    <div key={s.lab} className="text-center flex-1">
                      <div className="text-xl font-black font-mono" style={{ color: "#03a9f4" }}>{s.val}</div>
                      <div className="text-[10px] font-mono uppercase tracking-widest mt-0.5" style={{ color: "rgba(139,143,168,0.7)" }}>{s.lab}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Right — text */}
          <div className="flex flex-col gap-8">
            <MotionReveal>
              <SectionLabel className="mb-4">Our Edge</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Precision.{" "}
                <span className="text-brand">Context.</span>{" "}
                Delivery.
              </h2>
            </MotionReveal>

            <div className="flex flex-col gap-4">
              {FEATURES.map((f, i) => (
                <MotionReveal key={f.title} direction="up" delay={i * 0.1}>
                  <div
                    className="hover-card flex gap-5 items-start rounded-xl card-theme"
                    style={{ padding: "1.5rem" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        backgroundColor: "rgba(3,169,244,0.08)",
                      }}
                    >
                      <f.icon size={18} className="text-brand" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1.5" style={{ color: "var(--text-primary)" }}>
                        {f.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {f.body}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
