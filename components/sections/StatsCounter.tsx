import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MotionReveal from "@/components/ui/MotionReveal";
import { STATS } from "@/lib/constants";

export default function StatsCounter() {
  return (
    <section
      className="py-10 sm:py-14"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="wrap">
        <MotionReveal>
          {/* Desktop: single horizontal row with pipe separators */}
          <div className="hidden sm:flex items-center justify-between gap-0">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center flex-1">
                <div className="flex flex-col items-center text-center flex-1 px-6">
                  <div
                    className="text-5xl lg:text-6xl font-black tracking-tight font-mono leading-none mb-2"
                    style={{ color: "#03a9f4" }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p
                    className="text-[10px] uppercase tracking-widest font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="w-px self-stretch shrink-0" style={{ backgroundColor: "var(--border)" }} />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: 2×2 grid */}
          <div className="grid grid-cols-2 gap-8 sm:hidden">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1.5">
                <div
                  className="text-4xl font-black tracking-tight font-mono leading-none"
                  style={{ color: "#03a9f4" }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p
                  className="text-[10px] uppercase tracking-widest font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
