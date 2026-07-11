import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Padmavati Enterprise — Ahmedabad's trusted healthcare design and print company serving doctors and hospitals since 1977.",
};

export default function AboutPage() {
  return (
    <StubPage
      title="About Us"
      subtitle="Our story, our team, and 47+ years of healthcare printing excellence."
      pageName="About"
    />
  );
}
