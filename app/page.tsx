import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Padmavati Enterprise — Healthcare Design & Print | Ahmedabad",
  description:
    "Complete branding & print solutions for doctors, clinics and hospitals. Doctor files, letterheads, visiting cards, NABH forms, hospital stationery — all in-house. Serving Ahmedabad since 1977.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <HowItWorksSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <StatsSection />
      <CTABanner />
    </>
  );
}
