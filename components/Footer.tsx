import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const servicesList = [
  "Doctor Files",
  "Letterheads",
  "Visiting Cards",
  "Brochures",
  "NABH Forms",
  "Hospital Stationery",
  "Logo Design",
  "X-Ray Bags",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div>
              <p className="text-xl font-bold text-white tracking-tight">
                Padmavati Enterprise
              </p>
              <p className="text-xs font-medium text-brand-secondary uppercase tracking-widest mt-0.5">
                Design &amp; Print For Healthcare
              </p>
              <span className="inline-block mt-2 px-3 py-0.5 bg-brand-accent/20 text-brand-accent text-xs font-semibold rounded-full border border-brand-accent/30">
                Since 1977
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Ahmedabad&apos;s trusted healthcare branding &amp; print studio. We help
              doctors, clinics, and hospitals look professional — with in-house
              design, print, and delivery. No outsourcing, ever.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-brand-secondary/30 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2">
              {servicesList.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-300 hover:text-brand-secondary transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-secondary/50 group-hover:bg-brand-secondary transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-brand-secondary/30 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  7/38, Patrakar Colony,<br />
                  Near Vijay Nagar School,<br />
                  Naranpura, Ahmedabad — 380013
                </span>
              </li>
              <li>
                <a
                  href="tel:+919426338720"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                  +91 94 2633 8720
                </a>
              </li>
              <li>
                <a
                  href="tel:+919428801716"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                  +91 94 2880 1716
                </a>
              </li>
              <li>
                <a
                  href="mailto:sarthaktradingco@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-secondary transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand-secondary shrink-0" />
                  sarthaktradingco@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-brand-secondary/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-secondary transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-secondary/50 group-hover:bg-brand-secondary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919426338720?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Padmavati%20Enterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2024 Padmavati Enterprise. All rights reserved.</p>
          <p>Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
