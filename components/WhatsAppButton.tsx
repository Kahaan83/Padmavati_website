"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

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
    ? "Need help with hospital branding? Chat with us →"
    : "Chat with us on WhatsApp";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip bubble */}
      <div
        className={`
          pointer-events-none bg-neutral-dark text-white text-xs font-semibold
          px-3.5 py-2 rounded-xl shadow-xl whitespace-nowrap relative
          transition-all duration-300 ease-out
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"}
        `}
      >
        {tooltipText}
        {/* Tooltip arrow */}
        <span className="absolute right-4 bottom-[-4px] w-2.5 h-2.5 bg-neutral-dark rotate-45" />
      </div>

      {/* Button with pulse ring */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />

        <a
          href={`${CONTACT.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Padmavati%20Enterprise`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setShowAutoTooltip(false)}
          aria-label="Chat with us on WhatsApp"
          className="
            relative z-10 flex items-center justify-center
            w-14 h-14 rounded-full
            bg-[#25D366] hover:bg-[#1ebe5a]
            text-white shadow-lg hover:shadow-xl
            transition-all duration-200 hover:scale-110
          "
        >
          <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        </a>
      </div>
    </div>
  );
}

