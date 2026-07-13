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
    tagline: "Dà agli assistenti AI di programmazione il contesto giusto, in modo prevedibile",
    description:
      "Si mette tra il tuo assistente AI di programmazione (Claude Code, Copilot) e il modello, e gli passa solo il contesto rilevante per ciò su cui stai lavorando — così le risposte restano pertinenti e coerenti invece di andare a caso. Riga di comando, cruscotto di controllo e pacchetto npm già pronti; lancio in private beta in preparazione.",
    stack: ["TypeScript", "Node"],
    status: "beta",
    href: "https://github.com/manuel-albanesee/contextflow-showcase",
  },
  {
    slug: "specification-documents-ai",
    name: "Specification Documents AI",
    tagline: "Agenti AI che intervistano te e scrivono le specifiche software al posto tuo",
    description:
      "Un'AI ti fa le domande giuste e trasforma le tue risposte in documenti di specifica completi e ordinati: dai requisiti al progetto tecnico, ogni scelta è documentata e collegata al motivo per cui è stata presa. Segue gli standard di settore (ISO/IEC/IEEE 29148, IEEE 1016) senza che tu debba conoscerli.",
    stack: ["Python", "Flask", "LLM"],
    status: "beta",
    href: "https://github.com/manuel-albanesee/specdocs-ai-showcase",
  },
  {
    slug: "socraticengine",
    name: "SocraticEngine",
    tagline: "Un editor di scrittura AI che mette alla prova le tue idee invece di assecondarle",
    description:
      "Non completa le frasi al posto tuo: mette in discussione quello che scrivi. Ti fa domande, ti propone punti di vista diversi e ti spinge a rendere più solide le tue idee. I tuoi testi restano privati, elaborati sul tuo dispositivo. In sviluppo attivo.",
    stack: ["FastAPI", "React", "PostgreSQL"],
    status: "in-sviluppo",
    href: "https://github.com/manuel-albanesee/socraticengine-showcase",
  },
];
