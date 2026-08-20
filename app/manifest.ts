import type { MetadataRoute } from "next";
import { personalInfo } from "@/data/personal";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.fullName} — ${personalInfo.title}`,
    short_name: personalInfo.firstName,
    description: personalInfo.bio,
    start_url: "/",
    display: "standalone",
    background_color: "#08090a",
    theme_color: "#10b981",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
