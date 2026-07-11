import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Padmavati Enterprise. Call +91 94 2633 8720, WhatsApp us, or visit our studio at Naranpura, Ahmedabad for all your healthcare printing and branding needs.",
};

export default function ContactPage() {
  return (
    <StubPage
      title="Contact Us"
      subtitle="Reach out via WhatsApp, call, or visit our studio in Naranpura, Ahmedabad."
      pageName="Contact"
    />
  );
}
