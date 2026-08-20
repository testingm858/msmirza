import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-xi-seven-ll7hbw5vge.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
