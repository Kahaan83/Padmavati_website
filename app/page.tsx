import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Padmavati Enterprise — Healthcare Design & Print | Ahmedabad",
  description:
    "Complete branding & print solutions for doctors, clinics and hospitals. Doctor files, letterheads, visiting cards, NABH forms, hospital stationery — all in-house. Serving Ahmedabad since 1977.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Phase 2 sections (placeholders) ── */}
      {/* TODO Phase 2: <ServicesSection /> */}
      {/* TODO Phase 2: <HowItWorksSection /> */}
      {/* TODO Phase 2: <PortfolioPreview /> */}
      {/* TODO Phase 2: <TestimonialsSection /> */}
      {/* TODO Phase 2: <StatsSection /> */}
      {/* TODO Phase 2: <CTABanner /> */}
    </>
  );
}
