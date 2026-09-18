"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
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

  // Close mobile menu on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) setIsOpen(false);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
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
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-brand-primary"
                      : "text-neutral-dark hover:text-brand-primary hover:bg-blue-50/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-brand-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            {/* Phone call link */}
            <a
              href={`tel:${CONTACT.phone1Raw}`}
              className="flex items-center gap-2 px-4 py-2 text-neutral-dark hover:text-brand-primary text-sm font-semibold rounded-full transition-colors duration-200"
              aria-label={`Call Padmavati Enterprise at ${CONTACT.phone1}`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{CONTACT.phone1}</span>
            </a>
            {/* WhatsApp link */}
            <a
              href={`${CONTACT.whatsapp}?text=Hi%2C%20I%20need%20help%20with%20hospital%20branding`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-brand-primary hover:bg-brand-navy text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Chat with Padmavati Enterprise on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-dark hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav-menu"
        className={`md:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
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

          {/* Mobile CTAs */}
          <div className="flex gap-2 mx-1 my-3">
            <a
              href={`tel:${CONTACT.phone1Raw}`}
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-brand-primary text-brand-primary text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-brand-primary hover:text-white"
              aria-label={`Call ${CONTACT.phone1}`}
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href={`${CONTACT.whatsapp}?text=Hi%2C%20I%20need%20help%20with%20hospital%20branding`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-primary text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-brand-navy"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
