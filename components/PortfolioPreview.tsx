"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

type Category = "All" | "Doctor Files" | "Visiting Cards" | "Letterhead" | "Logo Design" | "Brochures";

const tabs: Category[] = ["All", "Doctor Files", "Visiting Cards", "Letterhead", "Logo Design", "Brochures"];

const portfolioItems = [
  {
    id: 1,
    category: "Doctor Files" as Category,
    client: "Nidaan Clinic",
    location: "Ahmedabad",
    image: "/portfolio/nidaan-clinic.jpg",
    gradient: "from-brand-primary to-brand-secondary",
  },
  {
    id: 2,
    category: "Brochures" as Category,
    client: "Dr. Sanjay Shah",
    location: "Ahmedabad",
    image: "/portfolio/dr-sanjay-shah-brochure.jpg",
    gradient: "from-brand-secondary to-brand-accent",
  },
  {
    id: 3,
    category: "Letterhead" as Category,
    client: "Shreyan Hospital",
    location: "Ahmedabad",
    image: "/portfolio/shreyan-letterhead.jpg",
    gradient: "from-brand-navy to-brand-primary",
  },
  {
    id: 4,
    category: "Visiting Cards" as Category,
    client: "Cure Sight Laser Center",
    location: "Ahmedabad",
    image: "/portfolio/cure-sight-visiting-card.jpg",
    gradient: "from-brand-primary to-brand-accent",
  },
  {
    id: 5,
    category: "Logo Design" as Category,
    client: "Max Hospital",
    location: "India",
    image: "/portfolio/logo-sample.png",
    gradient: "from-brand-accent to-brand-secondary",
  },
  {
    id: 6,
    category: "Doctor Files" as Category,
    client: "Chirayu Hospital",
    location: "Ahmedabad",
    image: "/portfolio/stationery-sample.png",
    gradient: "from-brand-navy to-brand-secondary",
  },
];

// Accent color per category
const categoryColor: Record<string, string> = {
  "Doctor Files": "bg-brand-accent",
  Brochures: "bg-brand-secondary",
  Letterhead: "bg-brand-primary",
  "Visiting Cards": "bg-brand-deep",
  "Logo Design": "bg-brand-accent",
};

export default function PortfolioPreview() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filtered =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4 text-balance">
            Our Work Speaks for Itself
          </h2>
          <p className="text-neutral-mid text-base leading-relaxed">
            A glimpse of our work for doctors and hospitals across India
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 pb-4 overflow-x-auto scrollbar-hide mb-10 md:justify-center md:flex-wrap border-b border-gray-50 md:border-none"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === tab
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                  : "bg-white text-neutral-mid border-gray-200 hover:border-brand-secondary hover:text-brand-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04, ease: "easeOut" }}
                className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Real portfolio image */}
                  <Image
                    src={item.image}
                    alt={`${item.category} for ${item.client}`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Category badge */}
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 ${
                      categoryColor[item.category] ?? "bg-brand-primary"
                    } text-white text-[10px] font-bold rounded-full uppercase tracking-wider`}
                  >
                    {item.category}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-navy/75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold text-lg">{item.client}</p>
                    <p className="text-brand-secondary text-sm mt-1">{item.category}</p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-4 py-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-neutral-dark">{item.client}</p>
                    <p className="text-xs text-neutral-mid mt-0.5">{item.location}</p>
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                      categoryColor[item.category] ?? "bg-brand-primary"
                    } text-white`}
                  >
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-primary text-brand-primary font-semibold rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-200 hover:shadow-md"
          >
            View Full Portfolio
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
