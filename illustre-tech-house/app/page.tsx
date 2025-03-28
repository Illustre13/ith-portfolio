import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import WorkStrip from "@/components/sections/WorkStrip";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Illustre Tech House — Engineering What's Next",
  description:
    "Boutique IT consulting in Kigali, Rwanda. Custom software development, AI solutions, and digital transformation for African institutions.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <WorkStrip />
      <CTABand />
    </>
  );
}
