import { STATS } from "@/lib/stats";

export default function StatsSection() {
  const stats = [
    { value: STATS.doctors, label: "Doctors & Hospitals Served" },
    { value: `${new Date().getFullYear() - STATS.founded}+`, label: "Years of Experience" },
    { value: STATS.team, label: "In-House Team Members" },
  ];

  return (
    <section className="py-16 bg-brand-primary" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center text-white"
            >
              {/* Number */}
              <p className="text-5xl font-extrabold tracking-tight leading-none">
                {value}
              </p>

              {/* Divider */}
              <span className="w-8 h-0.5 rounded-full bg-white/30 my-3" />

              {/* Label */}
              <p className="text-sm font-medium text-white/75 leading-snug max-w-[150px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
