import Image from "next/image";
import { Check, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import MotionReveal from "@/components/ui/MotionReveal";

const COMPARISON = [
  {
    topic: "Team on your project",
    them: "Junior devs, rotated",
    us: "Senior engineers only",
  },
  {
    topic: "Open-source policy",
    them: "Licences first",
    us: "Open-source default",
  },
  {
    topic: "Location context",
    them: "Generic global delivery",
    us: "Built for EAC constraints",
  },
  {
    topic: "Handoff",
    them: "PDF documentation",
    us: "Live training + support",
  },
];

export default function WhyUs() {
  return (
    <section className="section-py-lg" style={{ backgroundColor: "var(--bg-raised)" }}>
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

          {/* Right — comparison table */}
          <div className="flex flex-col gap-6">
            <MotionReveal>
              <SectionLabel className="mb-4">Our Edge</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                Precision.{" "}
                <span className="text-brand">Context.</span>{" "}
                <span className="chalk">Delivery.</span>
              </h2>
            </MotionReveal>

            {/* Table header */}
            <MotionReveal delay={0.05}>
              <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-2 px-1">
                <span />
                <span className="text-[10px] font-mono uppercase tracking-widest text-center" style={{ color: "var(--text-muted)" }}>
                  Most agencies
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-center text-brand">
                  Illustre
                </span>
              </div>
            </MotionReveal>

            {/* Rows */}
            <div className="flex flex-col gap-0" style={{ border: "1px solid var(--border)", borderRadius: "0.75rem", overflow: "hidden" }}>
              {COMPARISON.map((row, i) => (
                <MotionReveal key={row.topic} direction="up" delay={0.08 + i * 0.07}>
                  <div
                    className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center px-4 py-3.5"
                    style={{
                      borderBottom: i < COMPARISON.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                      {row.topic}
                    </span>
                    <div className="flex items-center justify-center gap-1.5">
                      <X size={12} style={{ color: "rgba(239,68,68,0.6)" }} className="shrink-0" />
                      <span className="text-xs text-center" style={{ color: "var(--text-muted)", textDecoration: "line-through", textDecorationColor: "rgba(239,68,68,0.4)" }}>
                        {row.them}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <Check size={12} className="text-brand shrink-0" />
                      <span className="text-xs font-medium text-center" style={{ color: "var(--text-primary)" }}>
                        {row.us}
                      </span>
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
