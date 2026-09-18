import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumbs: Crumb[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-brand-navy py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Semantic breadcrumb navigation (WCAG 1.3.1) */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs text-white/80">
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-white/50" aria-hidden="true" />
                  )}
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-balance">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
