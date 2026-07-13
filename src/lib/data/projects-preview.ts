export type ProjectPreview = {
  slug: string;
  name: string;
  category: "AI" | "Web";
  summary: string;
  proof: string;
  stack: string[];
  href: string;
  external?: boolean;
};

export const projectsPreview: ProjectPreview[] = [
  {
    slug: "researcher",
    name: "researcher",
    category: "AI",
    summary:
      "Pipeline deterministica che trasforma un'idea in una sintesi con citazioni verificabili, interrogando arXiv, PubMed, Semantic Scholar e OpenAlex.",
    proof: "Ogni run è riproducibile e completamente tracciato — codice pubblico, verificabile riga per riga",
    stack: ["Python"],
    href: "https://github.com/manuel-albanesee/researcher",
    external: true,
  },
  {
    slug: "eml-classificator",
    name: "eml_classificator",
    category: "AI",
    summary:
      "Classificatore email deterministico per un flusso di smistamento enterprise: stessa email in ingresso, stesso esito in uscita, sempre.",
    proof: "Logica di classificazione tracciabile e auditabile, non un modello black-box",
    stack: ["Python"],
    href: "/progetti",
  },
  {
    slug: "menudigitale",
    name: "menuDigitale",
    category: "Web",
    summary:
      "Piattaforma di menu digitali per ristoranti: CMS headless, hardening di sicurezza (log di audit, proxy trust policy) e suite di test completa.",
    proof: "Copertura Vitest + Playwright end-to-end, non solo happy path",
    stack: ["Next.js", "Sanity"],
    href: "/progetti",
  },
];
