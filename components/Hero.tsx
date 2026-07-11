"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { STATS } from "@/lib/stats";
import { CONTACT } from "@/lib/contact";
import { Plus, MessageCircle, ChevronRight, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: STATS.doctors, label: "Doctors Served" },
  { icon: Clock, value: "In-House", label: "Design & Print" },
  { icon: MapPin, value: "🚚 Pan-India", label: "Delivery" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, #F8FAFC 0%, #EBF4F9 50%, #F8FAFC 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-primary/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ─── Left Column (60%) ─── */}
          <div className="lg:col-span-3 space-y-7">

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="show"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/15 border border-brand-accent/40 text-brand-deep text-xs font-semibold rounded-full">
                <Plus className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
                Trusted by {STATS.doctors} Doctors Since {STATS.founded}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.12] text-brand-primary text-balance"
            >
              Complete Branding &amp; Print Solutions for{" "}
              <span className="relative inline-block">
                Healthcare Professionals
                <span className="absolute -bottom-1.5 left-0 w-full h-1 rounded-full bg-gradient-to-r from-brand-secondary to-brand-accent opacity-70" />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="text-base sm:text-lg text-neutral-mid leading-relaxed max-w-xl"
            >
              From logo design to PP files, visiting cards to NABH forms —{" "}
              <strong className="text-neutral-dark font-medium">
                we design, print and deliver
              </strong>{" "}
              everything your clinic needs. In-house team. Zero outsourcing. We deliver pan-India — from Gujarat to Delhi, Mumbai to Chennai.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3"
            >
              <a
                href={`${CONTACT.whatsapp}?text=Hi%2C%20I%20need%20help%20with%20clinic%20branding`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-navy text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us Now
              </a>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-primary text-brand-primary font-semibold rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                View Our Portfolio
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stat Pills */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3 pt-2"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm"
                >
                  <Icon className="w-4 h-4 text-brand-primary" />
                  <span className="text-sm font-bold text-neutral-dark">{value}</span>
                  <span className="text-xs text-neutral-mid">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── Right Column (40%) ─── */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="lg:col-span-2"
          >
            {/* ─── Product photo mosaic ─── */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Large main image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/hero/explore-products.png"
                  alt="Padmavati Enterprise product range — doctor files, letterheads, visiting cards"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />


                {/* Bottom caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-semibold drop-shadow-sm">
                    Doctor Files · Letterheads · Visiting Cards · Brochures
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
