import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CASE_STUDIES } from "@/lib/constants";

export default function WorkStrip() {
  const featured = CASE_STUDIES.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="py-24 bg-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-4">Recent Work</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
                Solutions we&apos;ve built.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm hover:text-brand transition-colors duration-200 shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              View all work <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {featured.map((study, i) => (
            <ScrollReveal key={study.id} delay={(i * 100) as 0 | 100 | 200}>
              <div className="hover-card card-theme flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-xl">
                {/* Tag */}
                <div className="sm:w-44 shrink-0">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-widest"
                    style={{
                      backgroundColor: "rgba(139,143,168,0.1)",
                      color:           "var(--text-muted)",
                      border:          "1px solid var(--border)",
                    }}
                  >
                    {study.sector}
                  </span>
                  <p className="text-brand font-mono text-xs uppercase tracking-widest mt-1">
                    {study.tag}
                  </p>
                </div>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                    {study.title}
                  </h3>
                  <p className="text-sm truncate" style={{ color: "var(--text-muted)" }}>
                    {study.client}
                  </p>
                </div>

                {/* Result */}
                <div className="sm:w-64 shrink-0">
                  <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                    {study.result}
                  </p>
                </div>

                {/* Arrow */}
                <Link
                  href={`/work#${study.id}`}
                  className="shrink-0 text-brand opacity-50 hover:opacity-100 transition-opacity duration-200"
                  aria-label={`View case study: ${study.title}`}
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
