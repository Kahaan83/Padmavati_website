import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Padmavati Enterprise for all your healthcare printing and design needs. WhatsApp, call or visit us in Naranpura, Ahmedabad.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
