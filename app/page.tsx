import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsCounter from "@/components/sections/StatsCounter";
import WhyUs from "@/components/sections/WhyUs";
import WorkStrip from "@/components/sections/WorkStrip";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Illustre Tech House — Engineering What's Next",
  description:
    "IT consulting in Kigali, Rwanda. Custom software development, AI solutions, and digital transformation for African institutions.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesGrid />
      <StatsCounter />
      <WhyUs />
      <WorkStrip />
      <Testimonials />
      <BlogPreview />
      <CTABand />
    </>
  );
}
