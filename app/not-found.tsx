import Link from "next/link";
import { MessageCircle, Home } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contact";

export const metadata = {
  title: "404 Page Not Found | Padmavati Enterprise",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-16 text-center">
      {/* 404 Heading */}
      <h1 className="text-8xl sm:text-9xl font-extrabold text-brand-navy tracking-tight">
        404
      </h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-neutral-dark">
        Looks like this page doesn&apos;t exist.
      </h2>
      <p className="mt-2 text-sm sm:text-base text-neutral-mid max-w-md mx-auto">
        The link you followed might be broken, or the page may have been removed. Let&apos;s get you back on track.
      </p>

      {/* Action Button */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-primary hover:bg-brand-navy text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Home className="w-4 h-4" />
          Go Back Home
        </Link>

        <a
          href={getWhatsAppLink("Hi, I got a 404 error on your website")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white font-bold text-sm rounded-xl transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          Or WhatsApp us if you need help
        </a>
      </div>
    </div>
  );
}

