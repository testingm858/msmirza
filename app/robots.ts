import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-xi-seven-ll7hbw5vge.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
