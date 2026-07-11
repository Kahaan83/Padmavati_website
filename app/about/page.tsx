import type { Metadata } from "next";
import { Stethoscope, Zap, Globe, CheckCircle2, MessageSquare, Sparkles, TrendingUp, Users, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { STATS } from "@/lib/stats";

export const metadata: Metadata = {
  title: "About Us",
  description:
    `${new Date().getFullYear() - STATS.founded} years of serving doctors and hospitals in Ahmedabad. Learn about Padmavati Enterprise's story and team.`,
};

/* ─── Why Choose Us cards ─── */
const whyUs = [
  {
    icon: Sparkles,
    title: "In-House Design Team",
    desc: "Your artwork is created by our own designers, not outsourced. Faster revisions, better understanding of your brand.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Specialists",
    desc: "We only serve doctors and hospitals. We know what a patient file needs, what NABH requires, what works in a clinic.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Because design and print happen in the same place, we deliver faster than any general print shop.",
  },
  {
    icon: Globe,
    title: "Pan-India Delivery",
    desc: "Serving doctors across Gujarat and all major Indian cities. Your stationery reaches you wherever you practise.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Guarantee",
    desc: "If it's not right, we reprint. No questions, no delays. Your satisfaction is non-negotiable.",
  },
  {
    icon: MessageSquare,
    title: "Single Point of Contact",
    desc: "One person handles your entire order from design approval to delivery. No calls bouncing between departments.",
  },
];

/* ─── Focus areas ─── */
const focus = [
  {
    icon: Sparkles,
    label: "Creativity",
    color: "bg-brand-primary/10 text-brand-primary",
    desc: "Fresh, modern designs that make your clinic stand out and inspire patient confidence.",
  },
  {
    icon: TrendingUp,
    label: "Innovation",
    color: "bg-brand-secondary/10 text-brand-secondary",
    desc: "We constantly update our processes — UV printing, anti-scratch lamination, digital proofing before every print run.",
  },
  {
    icon: Target,
    label: "Productivity",
    color: "bg-brand-accent/15 text-brand-deep",
    desc: "Our streamlined in-house workflow means you spend less time chasing printers and more time with patients.",
  },
  {
    icon: Users,
    label: "Success",
    color: "bg-brand-navy/10 text-brand-navy",
    desc: `Your professional image is our success metric. ${STATS.doctors} satisfied clients across Gujarat and India since ${STATS.founded}.`,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHeader
        title={`Established ${STATS.founded} · ${new Date().getFullYear() - STATS.founded} Years of Excellence`}
        subtitle={`Three generations of trust. ${STATS.doctors} doctors. One mission — make your clinic look as professional as you are.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* ── Story ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: story text */}
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-6 leading-snug">
                Built for Healthcare. <br className="hidden sm:block" />Trusted for {new Date().getFullYear() - STATS.founded} Years.
              </h2>
              <div className="space-y-5 text-neutral-mid leading-relaxed text-[15px]">
                <p>
                  <strong className="text-neutral-dark">Padmavati Enterprise was founded in {STATS.founded}</strong> in Ahmedabad
                  with one simple goal — to give healthcare professionals the same quality of design and print that was
                  previously only available to large corporations. For over {new Date().getFullYear() - STATS.founded} years, we have grown alongside the
                  doctors and hospitals we serve, becoming a trusted name in healthcare printing across Gujarat and
                  India.
                </p>
                <p>
                  What sets us apart is simple:{" "}
                  <strong className="text-neutral-dark">we do everything in-house</strong>. Our design team, print team
                  and dispatch team all work under one roof at our Naranpura office. When you work with us, you get a
                  single point of contact who understands healthcare — not a general print shop guessing what a
                  prescription pad should look like.
                </p>
                <p>
                  Over four decades we have printed millions of patient files, thousands of visiting card sets, and
                  complete NABH documentation packages for hospitals across India. Every order, large or small, gets
                  the same attention to detail that earned us the trust of {STATS.doctors} doctors and counting.
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Founded", val: "1977" },
                  { label: "Location", val: "Naranpura, Ahmedabad" },
                  { label: "Specialty", val: "Healthcare Print & Branding" },
                ].map(({ label, val }) => (
                  <div key={label} className="px-4 py-2.5 bg-neutral-surface rounded-xl border border-gray-100">
                    <p className="text-[10px] font-semibold text-neutral-mid uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-bold text-neutral-dark mt-0.5">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stats */}
            <div className="bg-brand-primary rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-lg font-bold text-white/80 mb-8 uppercase tracking-wider text-sm">
                Our Numbers
              </h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {[
                  { num: STATS.doctors,  label: "Doctors & Hospitals Served" },
                  { num: `${new Date().getFullYear() - STATS.founded}`,    label: "Years of Experience" },
                  { num: STATS.projects, label: "Projects Completed" },
                  { num: STATS.team,     label: "In-House Team Members" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p className="text-4xl font-extrabold leading-none">{num}</p>
                    <div className="w-6 h-0.5 rounded-full bg-white/30 my-2" />
                    <p className="text-xs text-white/70 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-neutral-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
              What Makes Us Different
            </h2>
            <p className="text-neutral-mid">
              We are not a general print shop. We specialise in healthcare — and that makes all the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-secondary transition-all duration-200 flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-dark mb-1.5">{title}</p>
                  <p className="text-xs text-neutral-mid leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Focus Areas ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              Our Focus
            </span>
            <h2 className="text-3xl font-bold text-brand-primary mb-3">What We Stand For</h2>
            <p className="text-neutral-mid">The four pillars that guide every order we take on</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focus.map(({ icon: Icon, label, color, desc }) => (
              <div
                key={label}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 p-7 flex flex-col items-center text-center gap-4"
              >
                <div className={`w-14 h-14 rounded-2xl ${color.split(" ")[0]} flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${color.split(" ")[1]}`} strokeWidth={1.75} />
                </div>
                <p className="text-base font-bold text-neutral-dark">{label}</p>
                <p className="text-xs text-neutral-mid leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
