"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Professional and timely delivery of well designed patient files and other requirements for the hospital are fulfilled.",
    name: "Dr. Kaushik Shah",
    initials: "KS",
    hospital: "AIMS Hospital",
    city: "Mandvi",
  },
  {
    quote:
      "Multiple design options ranging from minimalistic to complex designs for various purposes. Truly a one-stop solution.",
    name: "Dr. Nitesh Patel",
    initials: "NP",
    hospital: "Samarapan Hospital",
    city: "Ahmedabad",
  },
  {
    quote:
      "Indeed served as a one stop solution for all hospital needs pertaining not just to printing and design but stationery requirements as well.",
    name: "Dr. Amit Gupta",
    initials: "AG",
    hospital: "Usmanpura Imaging Center",
    city: "Ahmedabad",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-navy" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 text-brand-secondary border border-white/20">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
            What Doctors Say About Us
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, initials, hospital, city }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white rounded-2xl p-7 flex flex-col gap-5 shadow-lg"
            >
              {/* Large quote mark */}
              <span
                aria-hidden="true"
                className="absolute top-5 right-6 text-7xl font-serif leading-none text-brand-secondary/20 select-none"
              >
                "
              </span>

              {/* Star row */}
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-brand-accent fill-brand-accent"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-neutral-dark text-sm leading-relaxed italic flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Doctor info */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-dark">{name}</p>
                  <p className="text-xs text-neutral-mid">
                    {hospital} · {city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
