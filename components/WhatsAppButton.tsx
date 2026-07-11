"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`
          pointer-events-none bg-neutral-dark text-white text-xs font-medium
          px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap
          transition-all duration-200
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
        `}
      >
        Chat with us on WhatsApp
        {/* Tooltip arrow */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-neutral-dark rotate-45" />
      </div>

      {/* Button with pulse ring */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />

        <a
          href="https://wa.me/919426338720?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Padmavati%20Enterprise"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
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
