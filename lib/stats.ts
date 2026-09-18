const FOUNDED_YEAR = 1977;
const CURRENT_YEAR = new Date().getFullYear();

export const STATS = {
  doctors: "2000+",
  team: "15+",
  founded: FOUNDED_YEAR,
  yearsExperience: `${CURRENT_YEAR - FOUNDED_YEAR}+`,
} as const;
