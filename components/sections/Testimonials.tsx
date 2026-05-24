import Image from "next/image";
import { Quote } from "lucide-react";
import MotionReveal from "@/components/ui/MotionReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="relative section-py-lg overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
          alt="Team collaboration"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--bg-page) 0%, rgba(13,17,23,0.94) 15%, rgba(13,17,23,0.94) 85%, var(--bg-page) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 wrap">

        {/* Header */}
        <MotionReveal className="section-head text-center">
          <SectionLabel className="mb-4">Client Voices</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-xl mx-auto"
            style={{ color: "#F4F4F5" }}
          >
            What our clients{" "}
            <span className="text-gradient">actually say.</span>
          </h2>
        </MotionReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <MotionReveal key={t.author} direction="up" delay={i * 0.12}>
              <div
                className="flex flex-col h-full rounded-2xl gap-6"
                style={{
                  padding: "2rem",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <Quote size={20} className="text-brand opacity-50 shrink-0" />

                <p
                  className="text-sm leading-loose flex-1 italic"
                  style={{ color: "var(--text-muted)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                    style={{ backgroundColor: "rgba(3,169,244,0.18)", color: "#03a9f4" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.author}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
