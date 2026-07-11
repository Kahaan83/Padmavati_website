"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FolderOpen,
  FileText,
  CreditCard,
  BookOpen,
  Pen,
  ClipboardList,
  Package,
  Baby,
  IdCard,
  Usb,
} from "lucide-react";

const services = [
  {
    icon: FolderOpen,
    name: "Doctor Files & PP Files",
    desc: "Premium patient files with UV printing, anti-scratch coating",
  },
  {
    icon: FileText,
    name: "Letterheads & Prescription Pads",
    desc: "Branded prescription pads and hospital letterheads",
  },
  {
    icon: CreditCard,
    name: "Visiting Cards",
    desc: "Premium quality visiting cards for doctors",
  },
  {
    icon: BookOpen,
    name: "Brochures & Flyers",
    desc: "3-fold, 4-fold hospital brochures",
  },
  {
    icon: Pen,
    name: "Logo Design",
    desc: "Complete hospital brand identity from scratch",
  },
  {
    icon: ClipboardList,
    name: "NABH Forms & Consent Forms",
    desc: "All required hospital documentation",
  },
  {
    icon: Package,
    name: "Envelopes & X-Ray Bags",
    desc: "Hospital envelopes and MRI/X-Ray report bags",
  },
  {
    icon: Baby,
    name: "New Born Baby Kit",
    desc: "Printed kits for newborn departments",
  },
  {
    icon: IdCard,
    name: "ID Cards & Wristbands",
    desc: "Staff IDs and patient wristbands",
  },
  {
    icon: Usb,
    name: "Printed Pendrives & CD Covers",
    desc: "Branded medical media",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4 text-balance">
            Everything Your Hospital Needs — Under One Roof
          </h2>
          <p className="text-neutral-mid text-base leading-relaxed">
            From concept to delivery, our in-house team handles everything. No middlemen.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {services.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="group relative bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-brand-secondary transition-all duration-250 cursor-default flex flex-col gap-3"
            >
              {/* Icon box */}
              <div className="w-11 h-11 rounded-xl bg-neutral-surface flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors duration-200 shrink-0">
                <Icon className="w-5 h-5 text-brand-primary" strokeWidth={1.75} />
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold text-neutral-dark leading-snug mb-1">
                  {name}
                </p>
                <p className="text-xs text-neutral-mid leading-relaxed">{desc}</p>
              </div>

              {/* Hover accent line */}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-brand-primary font-semibold text-sm hover:text-brand-navy transition-colors group"
          >
            See full product range
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

