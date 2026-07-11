import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageProgressBar from "@/components/PageProgressBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Padmavati Enterprise — Design & Print For Healthcare | Ahmedabad",
    template: "%s | Padmavati Enterprise",
  },
  description:
    "Complete healthcare branding, design and print solutions for doctors and hospitals. Doctor files, visiting cards, letterheads, NABH forms and more. Serving 2000+ clients since 1977.",
  keywords: [
    "medical printing Ahmedabad",
    "doctor files",
    "PP files",
    "clinic branding",
    "healthcare stationery",
    "NABH forms",
    "letterhead design",
    "visiting cards doctors",
    "hospital stationery",
    "healthcare printing",
  ],
  openGraph: {
    title: "Padmavati Enterprise — Design & Print For Healthcare",
    description:
      "Complete healthcare branding, design and print solutions for doctors in Ahmedabad and across India.",
    url: "https://padmavatienterprise.com",
    siteName: "Padmavati Enterprise",
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
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-neutral-dark antialiased`}>
        <PageProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
