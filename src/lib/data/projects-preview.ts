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
    href: "/progetti/researcher",
  },
  {
    slug: "contextflow",
    name: "ContextFlow",
    category: "AI",
    summary:
      "Orchestratore di contesto deterministico per assistenti AI: proxy stateless che compone system prompt effimeri da una memoria distillata gerarchicamente (piramide L0→L3).",
    proof: "CLI, dashboard di audit e packaging npm già costruiti — codice ispezionabile, non un prompt magico",
    stack: ["TypeScript", "Node"],
    href: "/progetti/contextflow",
  },
  {
    slug: "menudigitale",
    name: "menuDigitale",
    category: "Web",
    summary:
      "Piattaforma di menu digitali per ristoranti: CMS headless, hardening di sicurezza (log di audit, proxy trust policy) e suite di test completa.",
    proof: "Copertura Vitest + Playwright end-to-end, non solo happy path",
    stack: ["Next.js", "Sanity"],
    href: "/progetti/menudigitale",
  },
];
