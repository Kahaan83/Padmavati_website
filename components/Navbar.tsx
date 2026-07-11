"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Padmavati Enterprise — Design & Print For Healthcare"
              width={200}
              height={70}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                 <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-brand-primary"
                      : "text-neutral-dark hover:text-brand-primary hover:bg-blue-50/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* WhatsApp CTA — desktop */}
          <a
            href={`${CONTACT.whatsapp}?text=Hi%2C%20I%20need%20help%20with%20hospital%20branding`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-brand-primary hover:bg-brand-navy text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="WhatsApp Padmavati Enterprise"
          >
            <Phone className="w-4 h-4" />
            <span>{CONTACT.phone1}</span>
          </a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-dark hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white animate-in slide-in-from-top duration-200">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? "bg-blue-50 text-brand-primary border-l-4 border-brand-primary"
                      : "text-neutral-dark hover:bg-gray-50 hover:text-brand-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile WhatsApp CTA */}
            <a
              href={`${CONTACT.whatsapp}?text=Hi%2C%20I%20need%20help%20with%20hospital%20branding`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 mx-4 my-3 px-4 py-3 bg-brand-primary text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-brand-navy"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

