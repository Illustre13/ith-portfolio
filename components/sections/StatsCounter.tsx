import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MotionReveal from "@/components/ui/MotionReveal";
import { STATS } from "@/lib/constants";

export default function StatsCounter() {
  return (
    <section
      className="section-py geo-grid"
      style={{
        backgroundColor: "rgba(3,169,244,0.025)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {STATS.map((stat, i) => (
            <MotionReveal key={stat.label} direction="up" delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-2">
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-mono leading-none"
                  style={{ color: "#03a9f4" }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p
                  className="text-[11px] uppercase tracking-widest font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
