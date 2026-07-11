"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { STATS } from "@/lib/stats";

export default function CTABanner() {
  return (
    <section className="py-20 bg-white" id="cta">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
            Get Started Today
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight text-balance">
            Ready to Give Your Clinic a{" "}
            <span className="relative inline-block">
              Professional Look?
              <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-gradient-to-r from-brand-secondary to-brand-accent opacity-70" />
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-neutral-mid text-lg leading-relaxed max-w-xl mx-auto">
            Join{" "}
            <strong className="text-neutral-dark font-semibold">{STATS.doctors} doctors</strong> who
            trust Padmavati Enterprise for all their design and printing needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://wa.me/919426338720?text=Hi%2C%20I%27m%20interested%20in%20clinic%20branding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-primary hover:bg-brand-navy text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>

            <a
              href="tel:+919426338720"
              className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-brand-primary text-brand-primary font-bold text-base rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Us: +91 94 2633 8720
            </a>
          </div>

          {/* Location note */}
          <p className="flex items-center justify-center gap-1.5 text-sm text-neutral-mid mt-2">
            <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
            Naranpura, Ahmedabad &middot; Delivering Pan-India Since 1977
          </p>
        </motion.div>
      </div>
    </section>
  );
}
