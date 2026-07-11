import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Padmavati Enterprise — Healthcare Design & Print | Ahmedabad",
    template: "%s | Padmavati Enterprise",
  },
  description:
    "Ahmedabad's trusted healthcare print & branding studio since 1977. Doctor files, letterheads, visiting cards, NABH forms, hospital stationery and more. In-house design, print & delivery. Serving 600+ doctors and hospitals.",
  keywords: [
    "healthcare printing Ahmedabad",
    "doctor files printing",
    "NABH forms",
    "hospital stationery",
    "clinic branding",
    "medical printing",
    "letterhead design",
    "visiting cards doctors",
  ],
  openGraph: {
    title: "Padmavati Enterprise — Healthcare Design & Print | Ahmedabad",
    description:
      "Complete branding & print solutions for healthcare professionals. Design → Print → Deliver. Trusted since 1977.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-neutral-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
