import type { Metadata } from "next";

import { STATS } from "@/lib/stats";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    `Browse our work — doctor files, brochures, logos and more for ${STATS.doctors} healthcare clients.`,
};

export { default } from "./page";

