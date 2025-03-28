import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTABand() {
  return (
    <section
      className="py-24"
      style={{
        backgroundColor: "var(--bg-section-alt)",
        borderTop:        "1px solid var(--border)",
        borderBottom:     "1px solid var(--border)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

        <ScrollReveal>
          {/* Decorative rule */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-brand/40" />
            <span className="text-brand font-mono text-xs uppercase tracking-widest">Let&apos;s Talk</span>
            <div className="w-8 h-px bg-brand/40" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to build something
            <br />
            <span className="text-brand">that lasts?</span>
          </h2>

          <p
            className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            We&apos;re selectively onboarding new clients. If your project demands quality
            and you value a partner who takes it seriously, let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" className="glow-brand">
              Book a Discovery Call
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              See Our Work
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
