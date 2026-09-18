import { STATS } from "@/lib/stats";

export default function StatsSection() {
  const stats = [
    { value: STATS.doctors, label: "Doctors & Hospitals Served" },
    { value: STATS.yearsExperience, label: "Years of Experience" },
    { value: STATS.team, label: "In-House Team Members" },
  ];

  return (
    <section className="py-16 bg-brand-primary" id="stats" aria-labelledby="stats-heading">
      {/* Hidden heading for screen reader outline navigation (WCAG 1.3.1) */}
      <h2 id="stats-heading" className="sr-only">Our Track Record &amp; Experience</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center text-white"
            >
              {/* Number */}
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                {value}
              </p>

              {/* Divider */}
              <span className="w-10 h-0.5 rounded-full bg-white/40 my-3.5" />

              {/* Label — improved from white/75 (fails) to white/95 (passes WCAG AA) */}
              <p className="text-sm font-medium text-white/95 leading-snug max-w-[200px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
