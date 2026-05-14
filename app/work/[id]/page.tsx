import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABand from "@/components/sections/CTABand";
import CaseStudyDetailHero from "@/components/pages/CaseStudyDetailHero";
import MotionReveal from "@/components/ui/MotionReveal";
import { CASE_STUDIES } from "@/lib/constants";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const study = CASE_STUDIES.find((c) => c.id === id);
  if (!study) return {};
  return {
    title: study.title,
    description: study.problem,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { id } = await params;
  const study = CASE_STUDIES.find((c) => c.id === id);
  if (!study) notFound();

  return (
    <>
      <CaseStudyDetailHero
        title={study.title}
        client={study.client}
        sector={study.sector}
        tag={study.tag}
        result={study.result}
        thumbnail={study.thumbnail}
      />

      {/* Body */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-page)" }}>
        <div className="wrap" style={{ maxWidth: "56rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <MotionReveal>
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                    The Problem
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--text-primary)" }}>
                    {study.problem}
                  </p>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                    Our Solution
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--text-primary)" }}>
                    {study.solution}
                  </p>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <div
                  className="rounded-2xl card-body"
                  style={{ backgroundColor: "rgba(3,169,244,0.06)", border: "1px solid rgba(3,169,244,0.2)" }}
                >
                  <h2 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                    Key Result
                  </h2>
                  <p className="text-2xl font-black text-brand">{study.result}</p>
                </div>
              </MotionReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <MotionReveal direction="left" delay={0.15}>
                <div className="card-theme rounded-xl card-body">
                  <h3 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Stack Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-widest"
                        style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal direction="left" delay={0.25}>
                <div className="card-theme rounded-xl card-body">
                  <h3 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>Client</h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{study.client}</p>
                </div>
              </MotionReveal>

              <MotionReveal direction="left" delay={0.35}>
                <Link
                  href="/contact"
                  className="block text-center py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#03a9f4", color: "#0D1117" }}
                >
                  Work with us on something similar
                </Link>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
