"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, MessageCircle, ChevronRight, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "600+", label: "Clients" },
  { icon: Clock, value: "47 Yrs", label: "Experience" },
  { icon: MapPin, value: "Pan-India", label: "Delivery" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
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
                Trusted by 600+ Doctors Since 1977
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
              everything your clinic needs. In-house team. Zero outsourcing.
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
                href="https://wa.me/919426338720?text=Hi%2C%20I%20need%20help%20with%20clinic%20branding"
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient background card */}
              <div
                className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0077B6 0%, #00B4D8 60%, #90BE6D 100%)",
                }}
              >
                {/* TODO: Replace with actual product image */}
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <p className="text-white text-xl font-bold mb-2">
                  Your Portfolio Preview
                </p>
                <p className="text-white/75 text-sm">
                  Doctor files · Letterheads · Visiting Cards · Brochures
                </p>

                {/* Decorative dots */}
                <div className="absolute bottom-6 left-6 flex gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full bg-white/40"
                    />
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <span className="text-white text-xs font-semibold">
                    Since 1977
                  </span>
                </div>
              </div>
            </div>

            {/* Social proof below card */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { num: "600+", txt: "Doctors" },
                { num: "47+", txt: "Years" },
                { num: "100%", txt: "In-House" },
              ].map(({ num, txt }) => (
                <div
                  key={txt}
                  className="text-center py-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <p className="text-lg font-bold text-brand-primary">{num}</p>
                  <p className="text-xs text-neutral-mid">{txt}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
