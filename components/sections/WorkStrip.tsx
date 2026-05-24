import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import MotionReveal from "@/components/ui/MotionReveal";
import { CASE_STUDIES } from "@/lib/constants";

const SECTOR_ACCENT: Record<string, string> = {
  NGO:        "#03a9f4",
  Government: "#00C896",
  SME:        "#f59e0b",
  Education:  "#8b5cf6",
};

export default function WorkStrip() {
  const featured = CASE_STUDIES.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="section-py-lg" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="wrap">

        {/* Section header */}
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 section-head">
            <div>
              <SectionLabel className="mb-4">Recent Work</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Missions we&apos;ve{" "}
                <span className="chalk">supported.</span>
              </h2>
              <p
                className="mt-2 text-sm sm:text-base max-w-md"
                style={{ color: "var(--text-muted)" }}
              >
                Real outcomes for real organisations, documented with their permission.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors duration-200 shrink-0 self-start sm:self-end px-4 py-2 rounded-lg"
              style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              All case studies <ArrowRight size={14} />
            </Link>
          </div>
        </MotionReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((study, i) => {
            const accent = SECTOR_ACCENT[study.sector] ?? "#03a9f4";
            const isFeatured = i === 1;
            return (
              <MotionReveal key={study.id} direction="up" delay={i * 0.12}>
                <Link href={`/work/${study.id}`} className="group block h-full">
                  <article
                    className="hover-card card-theme rounded-2xl overflow-hidden flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden shrink-0">
                      {study.thumbnail && (
                        <Image
                          src={study.thumbnail}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                      {/* Dark gradient so badges are always legible */}
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.1) 60%)" }}
                      />
                      {/* Sector + tag row */}
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest"
                            style={{ backgroundColor: `${accent}28`, color: accent, border: `1px solid ${accent}50` }}
                          >
                            {study.sector}
                          </span>
                          <span
                            className="text-[10px] font-mono uppercase tracking-widest"
                            style={{ color: "rgba(244,244,245,0.6)" }}
                          >
                            {study.tag}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={16}
                          className="text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="card-body flex flex-col flex-1 gap-5">

                      {/* Title + client */}
                      <div>
                        <h3
                          className="font-bold text-base leading-snug mb-1 group-hover:text-brand transition-colors duration-200"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {study.title}
                        </h3>
                        <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                          {study.client}
                        </p>
                      </div>

                      {/* Result block — middle card gets brand treatment */}
                      {isFeatured ? (
                        <div
                          className="mt-auto p-4"
                          style={{ backgroundColor: "#03a9f4", borderRadius: "0.375rem" }}
                        >
                          <p className="font-mono text-[9px] uppercase tracking-widest mb-1.5" style={{ color: "rgba(13,17,23,0.6)" }}>
                            Key result
                          </p>
                          <p className="font-bold text-sm leading-snug" style={{ color: "#0d1117" }}>
                            {study.result}
                          </p>
                        </div>
                      ) : (
                        <div
                          className="mt-auto p-4"
                          style={{ border: "1px solid var(--border)", borderRadius: "0.375rem" }}
                        >
                          <p className="font-mono text-[9px] uppercase tracking-widest mb-1.5" style={{ color: "var(--text-muted)" }}>
                            Key result
                          </p>
                          <p className="font-bold text-sm leading-snug" style={{ color: accent }}>
                            {study.result}
                          </p>
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
