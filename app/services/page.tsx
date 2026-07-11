import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Doctor files, letterheads, visiting cards, brochures, NABH forms, hospital stationery, logo design, X-ray bags — complete healthcare print & branding by Padmavati Enterprise.",
};

export default function ServicesPage() {
  return (
    <StubPage
      title="Our Services"
      subtitle="Doctor files, letterheads, NABH forms, hospital stationery and much more — all in-house."
      pageName="Services"
    />
  );
}
