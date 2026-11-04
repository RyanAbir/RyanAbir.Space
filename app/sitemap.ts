import type { MetadataRoute } from "next";
import { caseStudies } from "../data/work";
import { SITE_URL } from "../lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((c) => ({ url: `${SITE_URL}/work/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
