"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Eye } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { STATS } from "@/lib/stats";

/* ─── Tabs ─── */
type Tab = "All" | "Doctor Files" | "Visiting Cards" | "Letterheads" | "Logos" | "Brochures" | "Envelopes" | "NABH Forms";
const TABS: Tab[] = ["All", "Doctor Files", "Visiting Cards", "Letterheads", "Logos", "Brochures", "Envelopes", "NABH Forms"];


const badgeColors: Record<string, string> = {
  "Doctor Files":   "bg-brand-primary",
  "Visiting Cards": "bg-brand-secondary",
  Letterheads:      "bg-brand-navy",
  Logos:            "bg-brand-accent",
  Brochures:        "bg-brand-deep",
  Envelopes:        "bg-brand-secondary",
  "NABH Forms":     "bg-brand-primary",
};

/* ─── Portfolio items (18 entries) ─── */
const items = [
  { id:  1, category: "Doctor Files",   client: "Nidaan Clinic",                   location: "Ahmedabad" },
  { id:  2, category: "Brochures",      client: "Dr. Sanjay Shah",                 location: "Ahmedabad" },
  { id:  3, category: "Letterheads",    client: "Shreyan Hospital",                location: "Ahmedabad" },
  { id:  4, category: "Visiting Cards", client: "Cure Sight Laser Center",         location: "Ahmedabad" },
  { id:  5, category: "Logos",          client: "Max Hospital",                    location: "India" },
  { id:  6, category: "Doctor Files",   client: "Chirayu Hospital",                location: "Ahmedabad" },
  { id:  7, category: "Doctor Files",   client: "Darsan Diagnostic",               location: "Ahmedabad" },
  { id:  8, category: "Visiting Cards", client: "Dr. Mauli Shah",                  location: "Ahmedabad" },
  { id:  9, category: "Letterheads",    client: "Dr. Maulik R Soni",               location: "Ahmedabad" },
  { id: 10, category: "Doctor Files",   client: "Vedant Hospital",                 location: "Ahmedabad" },
  { id: 11, category: "NABH Forms",     client: "Gandhinagar Fetal Medicine Center",location: "Gandhinagar" },
  { id: 12, category: "Logos",          client: "Annya Clinic",                    location: "Ahmedabad" },
  { id: 13, category: "Brochures",      client: "Dr. Hardik Shah",                 location: "Ahmedabad" },
  { id: 14, category: "Envelopes",      client: "Chirayu Hospital",                location: "Ahmedabad" },
  { id: 15, category: "NABH Forms",     client: "Nidaan Clinic",                   location: "Ahmedabad" },
  { id: 16, category: "Visiting Cards", client: "Cure Sight Laser Center",         location: "Ahmedabad" },
  { id: 17, category: "Doctor Files",   client: "Gandhinagar Fetal Medicine Center",location: "Gandhinagar" },
  { id: 18, category: "Brochures",      client: "Darsan Diagnostic",               location: "Ahmedabad" },
] as const;

/* ─── Portfolio Card ─── */
function PortfolioCard({ category, client, location, index }: { category: string; client: string; location: string; index: number }) {
  // Map categories to real downloaded image assets
  const categoryImages: Record<string, string> = {
    "Doctor Files": "/portfolio/nidaan-clinic.jpg",
    "Visiting Cards": "/portfolio/cure-sight-visiting-card.jpg",
    Letterheads: "/portfolio/shreyan-letterhead.jpg",
    Logos: "/portfolio/logo-sample.png",
    Brochures: "/portfolio/dr-sanjay-shah-brochure.jpg",
    Envelopes: "/portfolio/letterpad-sample.png",
    "NABH Forms": "/portfolio/stationery-sample.png",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: index * 0.04, ease: "easeOut" }}
      className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-surface">
        <Image
          src={categoryImages[category] || "/portfolio/nidaan-clinic.jpg"}
          alt={`${category} designed and printed by Padmavati Enterprise for ${client}`}
          fill
          loading="lazy"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badge */}
        <span className={`absolute top-3 left-3 px-2.5 py-1 ${badgeColors[category] ?? "bg-brand-primary"} text-white text-[10px] font-bold rounded-full uppercase tracking-wider`}>
          {category}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-navy/80 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-bold text-base text-center px-4">{client}</p>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-medium hover:bg-white/30 transition-colors cursor-pointer">
            <Eye className="w-3.5 h-3.5" /> View
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3.5 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-neutral-dark">{client}</p>
          <p className="text-xs text-neutral-mid mt-0.5">{location}</p>
        </div>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${badgeColors[category] ?? "bg-brand-primary"} text-white`}>
          {category}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function PortfolioPage() {
  const [active, setActive] = useState<Tab>("All");
  const [toastVisible, setToastVisible] = useState(false);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  function handleLoadMore() {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }

  return (
    <>
      {/* ── Page meta injected via export const metadata in server component ── */}
      {/* Using client component for filter state; metadata set in generateMetadata below */}

      <PageHeader
        title="Our Portfolio"
        subtitle={`Real work for real doctors. ${STATS.doctors} clients, ${new Date().getFullYear() - STATS.founded} years of excellence.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio" },
        ]}
      />

      {/* Sticky filter tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  active === tab
                    ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                    : "bg-white text-neutral-mid border-gray-200 hover:border-brand-secondary hover:text-brand-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <PortfolioCard
                key={item.id}
                category={item.category}
                client={item.client}
                location={item.location}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center text-neutral-mid">
            No portfolio items in this category yet. Check back soon!
          </div>
        )}

        {/* Load more */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 border-2 border-brand-primary text-brand-primary font-semibold rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-200 hover:shadow-md"
          >
            Load More
          </button>
        </div>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-neutral-dark text-white text-sm font-medium px-5 py-3 rounded-xl shadow-xl"
          >
            🚀 More portfolio work coming soon!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
