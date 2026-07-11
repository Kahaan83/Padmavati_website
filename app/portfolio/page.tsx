import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of healthcare print & branding work — doctor files, clinic letterheads, visiting cards, brochures, and hospital stationery designed for 600+ clients.",
};

export default function PortfolioPage() {
  return (
    <StubPage
      title="Our Portfolio"
      subtitle="A showcase of our best work for doctors, clinics, and hospitals across India."
      pageName="Portfolio"
    />
  );
}
