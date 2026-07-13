import { Hero } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { ServiceCards } from "@/components/sections/service-cards";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section";
import { ProductsStrip } from "@/components/sections/products-strip";
import { ProcessStepsSection } from "@/components/sections/process-steps-section";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ProofStrip />
      <ServiceCards />
      <ProjectsPreviewSection />
      <ProductsStrip />
      <ProcessStepsSection />
      <AboutTeaser />
      <CTASection />
    </main>
  );
}
