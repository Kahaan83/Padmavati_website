import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0077B6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://padmavatienterprise.com"),
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
    "hospital branding",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white text-neutral-dark antialiased selection:bg-brand-secondary/20 selection:text-brand-navy`}>
        {/* Skip to main content — keyboard & screen reader accessibility (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <PageProgressBar />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="outline-none">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
