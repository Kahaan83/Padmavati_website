"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contact";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [showAutoTooltip, setShowAutoTooltip] = useState(false);

  useEffect(() => {
    // Reset tooltip state on path change
    setShowAutoTooltip(false);

    if (pathname === "/contact") {
      return;
    }

    // Show after 5 seconds
    const showTimer = setTimeout(() => {
      setShowAutoTooltip(true);
    }, 5000);

    // Hide after 9 seconds (5s wait + 4s display)
    const hideTimer = setTimeout(() => {
      setShowAutoTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  const isVisible = hovered || showAutoTooltip;
  const tooltipText = showAutoTooltip
    ? "Need help? Chat with us"
    : "Chat on WhatsApp";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip bubble — hidden on mobile to prevent 377px overflow on 360px screens */}
      <div
        id="whatsapp-tooltip"
        role="tooltip"
        className={`
          hidden sm:block pointer-events-none bg-neutral-dark text-white text-xs font-semibold
          px-3.5 py-2 rounded-xl shadow-xl whitespace-nowrap relative
          transition-all duration-300 ease-out
          ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-2 scale-95 pointer-events-none"}
        `}
      >
        {tooltipText}
        {/* Arrow pointing right toward the button */}
        <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-dark rotate-45" />
      </div>

      {/* Button with pulse ring */}
      <div className="relative">
        {/* Pulse ring — respects reduced-motion preference */}
        <span className="motion-safe:animate-ping absolute inset-0 rounded-full bg-whatsapp opacity-30" />

        <a
          href={getWhatsAppLink("Hi, I want to know more about Padmavati Enterprise")}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setShowAutoTooltip(false)}
          aria-label="Chat with us on WhatsApp"
          aria-describedby="whatsapp-tooltip"
          className="
            relative z-10 flex items-center justify-center
            w-14 h-14 rounded-full
            bg-whatsapp hover:bg-whatsapp-hover
            text-white shadow-lg hover:shadow-xl
            transition-all duration-200 hover:scale-110
          "
        >
          <MessageCircle className="w-7 h-7" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
