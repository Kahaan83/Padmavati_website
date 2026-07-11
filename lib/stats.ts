export const STATS = {
  customers: "2000+",
  doctors: "2000+",
  team: "15+",
  founded: 1977,
  yearsExperience: () => `${new Date().getFullYear() - 1977}+`,
} as const;
