export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "beta" | "in-sviluppo";
  href: string;
};

export const products: Product[] = [
  {
    slug: "contextflow",
    name: "ContextFlow",
    tagline: "Orchestratore di contesto deterministico per assistenti AI",
    description:
      "Proxy stateless tra IDE (Claude Code, Copilot) e LLM che compone system prompt effimeri a partire da una memoria distillata gerarchicamente (piramide L0→L3) e regole di contesto per modulo. CLI, dashboard di audit e packaging npm già costruiti — in preparazione il lancio in private beta.",
    stack: ["TypeScript", "Node"],
    status: "beta",
    href: "https://github.com/manuel-albanesee/contextflow-showcase",
  },
  {
    slug: "specification-documents-ai",
    name: "Specification Documents AI",
    tagline: "Agenti AI che intervistano e producono specifiche formali",
    description:
      "Agenti AI conducono interviste strutturate per produrre specifiche software formali: dai requisiti a un Functional Specification Document conforme ISO/IEC/IEEE 29148 con Requirements Traceability Matrix, dal design tecnico a una Software Design Description IEEE 1016 con tracciabilità completa.",
    stack: ["Python", "Flask", "LLM"],
    status: "beta",
    href: "https://github.com/manuel-albanesee/specdocs-ai-showcase",
  },
  {
    slug: "socraticengine",
    name: "SocraticEngine",
    tagline: "Editor di co-scrittura AI che mette alla prova le idee",
    description:
      "Non completa il testo: lo mette in discussione. Dialettica socratica, lenti filosofiche e attrito intellettuale strutturato, con embedding zero-knowledge lato client. In sviluppo attivo.",
    stack: ["FastAPI", "React", "PostgreSQL"],
    status: "in-sviluppo",
    href: "https://github.com/manuel-albanesee/socraticengine-showcase",
  },
];
