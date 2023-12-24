export const siteConfig = {
  name: "Klas",
  url:
    process.env.NODE_ENV !== "development"
      ? "https://tryklas.vercel.app"
      : "http://localhost:3000",
  ogImage: "../app/opengraph-image.jpg",
  description: "Free Online Teaching Tool: Live Classes, Community | Klas.",
  links: {
    twitter: "https://twitter.com/klas_hq",
    instagram: "https://www.instagram.com/tryklas/",
    linkedin: "https://www.linkedin.com/company/tryklas",
  },
};

export type SiteConfig = typeof siteConfig;
