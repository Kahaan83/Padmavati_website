"use client";

import { motion } from "framer-motion";
import { MessageCircle, Palette, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    iconColor: "text-brand-secondary",
    iconBg: "bg-brand-secondary/10",
    title: "Tell Us What You Need",
    desc: "WhatsApp or call us with your clinic name and requirements. No forms, no meetings.",
  },
  {
    number: "02",
    icon: Palette,
    iconColor: "text-brand-primary",
    iconBg: "bg-brand-primary/10",
    title: "We Design It",
    desc: "Our in-house design team creates your artwork — from a single visiting card to a complete clinic brand package. You approve before we print.",
  },
  {
    number: "03",
    icon: Truck,
    iconColor: "text-brand-accent",
    iconBg: "bg-brand-accent/15",
    title: "Delivered to Your Clinic",
    desc: "We print and dispatch to your clinic anywhere in India. Fast turnaround, zero hassle.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-neutral-surface" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4 text-balance">
            How It Works — Simple as 1, 2, 3
          </h2>
          <p className="text-neutral-mid text-base leading-relaxed">
            Tell us what you need. We design it. We print it. We deliver it.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dashed connector line — desktop only */}
          <div
            className="hidden md:block absolute top-14 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #00B4D8 0, #00B4D8 8px, transparent 8px, transparent 18px)",
            }}
          />

          {steps.map(({ number, icon: Icon, iconColor, iconBg, title, desc }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Step number badge */}
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brand-primary text-white text-xs font-bold rounded-full tracking-widest">
                STEP {number}
              </span>

              {/* Icon circle */}
              <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-5 mt-2`}>
                <Icon className={`w-8 h-8 ${iconColor}`} strokeWidth={1.75} />
              </div>

              <h3 className="text-lg font-bold text-neutral-dark mb-3">{title}</h3>
              <p className="text-sm text-neutral-mid leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://wa.me/919426338720?text=Hi%2C%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-none" />
            Start Your Order on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
