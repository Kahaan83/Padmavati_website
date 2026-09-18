import type { Metadata } from "next";
import type { ReactNode } from "react";
import { STATS } from "@/lib/stats";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    `Browse our work — doctor files, brochures, logos and more for ${STATS.doctors} healthcare clients.`,
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
