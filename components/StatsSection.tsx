"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const stats = [
  { value: 600, suffix: "+", label: "Doctors & Hospitals Served" },
  { value: 47, suffix: "", label: "Years of Experience" },
  { value: 2000, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "In-House Team Members" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  if (inView) {
    motionVal.set(value);
  }

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-brand-primary" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              {/* Number */}
              <p className="text-5xl font-extrabold text-white tracking-tight leading-none">
                <AnimatedCounter value={value} suffix={suffix} />
              </p>

              {/* Divider */}
              <span className="w-8 h-0.5 rounded-full bg-white/30 my-3" />

              {/* Label */}
              <p className="text-sm font-medium text-white/75 leading-snug max-w-[120px]">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
