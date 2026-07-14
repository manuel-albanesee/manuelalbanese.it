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
      "Trasforma una domanda di ricerca in una sintesi affidabile, collegando ogni affermazione a fonti accademiche reali — arXiv, PubMed, Semantic Scholar, OpenAlex.",
    proof:
      "Codice pubblico su GitHub: ogni citazione è reale e verificabile, niente fonti inventate",
    stack: ["Python"],
    href: "/progetti/researcher",
  },
  {
    slug: "contextflow",
    name: "ContextFlow",
    category: "AI",
    summary:
      "Si inserisce tra il tuo assistente AI di programmazione e il modello, passandogli solo il contesto giusto per il compito su cui stai lavorando.",
    proof: "Riga di comando, cruscotto di controllo e pacchetto npm già pronti, in vista della private beta",
    stack: ["TypeScript", "Node"],
    href: "/progetti/contextflow",
  },
  {
    slug: "menudigitale",
    name: "menuDigitale",
    category: "Web",
    summary:
      "Piattaforma di menu digitali per ristoranti: il locale aggiorna piatti e prezzi in autonomia, con la sicurezza dei dati sistemata dall'inizio.",
    proof:
      "Controlli automatici verificano il sito prima di ogni aggiornamento — niente sorprese in servizio",
    stack: ["Next.js", "Sanity"],
    href: "/progetti/menudigitale",
  },
];
