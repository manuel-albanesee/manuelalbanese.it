import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { caseStudies } from "@/lib/data/case-studies";
import { products } from "@/lib/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/soluzioni-ai",
    "/sviluppo-web",
    "/progetti",
    "/prodotti",
    "/come-lavoro",
    "/chi-sono",
    "/contatti",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = caseStudies.map((project) => ({
    url: `${siteConfig.url}/progetti/${project.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.url}/prodotti/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...productRoutes];
}
