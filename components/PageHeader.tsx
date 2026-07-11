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
    <section className="bg-brand-navy py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6 text-xs text-white/60">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3 h-3" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/90 font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
          {title}
        </h1>
        <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

