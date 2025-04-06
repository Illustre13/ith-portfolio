"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import CaseStudyCard from "@/components/pages/CaseStudyCard";
import CTABand from "@/components/sections/CTABand";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CASE_STUDIES, SECTOR_FILTERS } from "@/lib/constants";

export default function WorkPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.sector === active);

  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{ backgroundColor: "var(--bg-page)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="mb-4">Portfolio</SectionLabel>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              Our Work.
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
              A selection of systems, platforms, and solutions we&apos;ve built for organisations
              across Rwanda and East Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-page">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Filter tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {SECTOR_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: active === filter ? "#03a9f4"         : "transparent",
                    color:           active === filter ? "#0D1117"          : "var(--text-muted)",
                    border:          active === filter ? "1px solid #03a9f4" : "1px solid var(--border)",
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((study) => (
                <CaseStudyCard key={study.id} {...study} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                No case studies in this category yet.
              </p>
              <p className="text-sm mt-2" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                Check back soon — we&apos;re documenting more engagements.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-page" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs text-center" style={{ color: "var(--text-muted)" }}>
            Client details are anonymised or used with permission. Results are as reported by the client at project close.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
