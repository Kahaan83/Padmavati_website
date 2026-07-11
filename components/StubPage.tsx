import Link from "next/link";
import { Construction } from "lucide-react";

interface StubPageProps {
  title: string;
  subtitle: string;
  pageName: string;
}

export default function StubPage({ title, subtitle, pageName }: StubPageProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 bg-neutral-surface">
      {/* Page header */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary">{title}</h1>
        <p className="text-lg text-neutral-mid max-w-lg mx-auto">{subtitle}</p>
      </div>

      {/* Coming soon card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-10 flex flex-col items-center text-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
          <Construction className="w-8 h-8 text-brand-primary" />
        </div>
        <div>
          <p className="text-xl font-semibold text-neutral-dark mb-1">
            Coming in Phase 2
          </p>
          <p className="text-sm text-neutral-mid">
            The <strong>{pageName}</strong> page is under construction. Check
            back soon or reach out to us directly.
          </p>
        </div>
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 bg-brand-primary hover:bg-brand-navy text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
