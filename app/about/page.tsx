import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import HoverCard from "@/components/ui/HoverCard";
import CTABand from "@/components/sections/CTABand";
import MotionReveal from "@/components/ui/MotionReveal";
import { TEAM, TECH_STACK_LOGOS } from "@/lib/constants";
import { Target, Heart, Gem, Wrench, SquareArrowOutUpRight } from "lucide-react";

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
        className="pt-28 sm:pt-32 pb-14 sm:pb-20"
        style={{ backgroundColor: "var(--bg-page)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap" style={{ maxWidth: "48rem" }}>
          <MotionReveal>
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
          </MotionReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-section-alt)" }}>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionReveal direction="left">
              <SectionLabel className="mb-4">Our Mission</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Precision digital systems for your organization.
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                To engineer digital systems that empower organisations to operate with
                precision, scale with confidence, and serve their communities better.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We work at the intersection of custom software, frontier AI, and open-source
                infrastructure — bringing the best of global technology practice to problems that
                matter locally.
              </p>
            </MotionReveal>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "6+",   label: "Service areas" },
                { value: "24h",  label: "Response time" },
                { value: "100%", label: "Senior delivery" },
                { value: "EAC",  label: "Regional focus" },
              ].map((stat, i) => (
                <MotionReveal key={stat.label} direction="scale" delay={i * 0.1}>
                  <HoverCard className="card-body text-center">
                    <p className="text-4xl font-bold text-brand mb-1">{stat.value}</p>
                    <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </p>
                  </HoverCard>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section-py"
        style={{ backgroundColor: "var(--bg-section-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <MotionReveal>
            <SectionLabel className="mb-4">Core Values</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
              What we stand for.
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <MotionReveal key={v.name} direction="up" delay={i * 0.1}>
                <HoverCard className="card-body h-full">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(3,169,244,0.1)" }}
                  >
                    <v.icon size={18} className="text-brand" />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>{v.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
                </HoverCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team — inverted section */}
      <section
        className="section-py"
        style={{ backgroundColor: "var(--bg-inverted)", borderTop: "1px solid var(--border-inverted)", borderBottom: "1px solid var(--border-inverted)" }}
      >
        <div className="wrap">
          <MotionReveal>
            <SectionLabel className="mb-4">The Team</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text-inv-primary)" }}>
              People behind the work.
            </h2>
            <p className="text-base leading-relaxed mb-14 max-w-xl" style={{ color: "var(--text-inv-muted)" }}>
              A small, senior team each member hands-on from kick-off to delivery.
            </p>
          </MotionReveal>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 sm:gap-x-16">
            {TEAM.map((member, i) => (
              <MotionReveal key={member.name} direction="up" delay={i * 0.1}>
                <div className="flex flex-col items-center gap-4 w-44">

                  {/* Circular avatar */}
                  <div
                    className="relative w-36 h-36 rounded-full overflow-hidden shrink-0 flex items-center justify-center font-bold text-3xl font-mono text-brand"
                    style={{
                      backgroundColor: "rgba(3,169,244,0.12)",
                      border: "2px solid rgba(3,169,244,0.3)",
                    }}
                  >
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      member.initials
                    )}
                  </div>

                  {/* Name + role + LinkedIn */}
                  <div className="flex flex-col items-center gap-1 text-center">
                    <p className="font-semibold text-sm leading-snug" style={{ color: "var(--text-inv-primary)" }}>
                      {member.name}
                    </p>
                    <p className="text-xs italic" style={{ color: "#03a9f4" }}>
                      {member.role}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest transition-colors duration-200 hover:text-brand"
                      style={{ color: "var(--text-inv-muted)" }}
                    >
                      LinkedIn
                      <SquareArrowOutUpRight size={11} />
                    </a>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section
        className="section-py"
        style={{ backgroundColor: "var(--bg-raised)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <MotionReveal>
            <SectionLabel className="mb-4">Technologies</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              What we build with.
            </h2>
            <p className="text-base leading-relaxed mb-10 max-w-xl" style={{ color: "var(--text-muted)" }}>
              Open-source and cloud-native tools — chosen for reliability, community support, and fit for the East African context.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {TECH_STACK_LOGOS.map((tech, i) => (
              <MotionReveal key={tech} direction="scale" delay={i * 0.05}>
                <HoverCard size="sm" className="px-4 py-3.5 text-center">
                  <span className="text-sm font-mono font-medium" style={{ color: "var(--text-primary)" }}>
                    {tech}
                  </span>
                </HoverCard>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div
                className="flex-1 p-6 rounded-xl"
                style={{ backgroundColor: "rgba(3,169,244,0.05)", border: "1px solid rgba(3,169,244,0.18)" }}
              >
                <p className="text-brand font-mono text-xs uppercase tracking-widest mb-2">Open Source First</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  We default to open-source where it meets the need — reducing vendor lock-in,
                  lowering long-term costs, and keeping your organisation in control of its own infrastructure.
                </p>
              </div>
              <Button href="/contact" variant="primary" className="shrink-0">Work With Us</Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
