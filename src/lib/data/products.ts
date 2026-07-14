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
    tagline: "Meno tempo perso a ripetere il contesto agli assistenti AI, più risposte giuste alla prima",
    description:
      "Si mette tra il tuo assistente AI di programmazione (Claude Code, Copilot) e il modello, e gli passa solo il contesto rilevante per ciò su cui stai lavorando — così le risposte restano pertinenti e coerenti invece di andare a caso, e il team smette di ricontrollare a mano quello che l'AI ha frainteso. Riga di comando, cruscotto di controllo e pacchetto npm già pronti; lancio in private beta in preparazione.",
    stack: ["TypeScript", "Node"],
    status: "beta",
    href: "https://github.com/manuel-albanesee/contextflow-showcase",
  },
  {
    slug: "specification-documents-ai",
    name: "Specification Documents AI",
    tagline: "Specifiche software pronte in ore invece che in settimane di riunioni, senza dover essere tu l'esperto di standard",
    description:
      "Un'AI ti fa le domande giuste e trasforma le tue risposte in documenti di specifica completi e ordinati: dai requisiti al progetto tecnico, ogni scelta è documentata e collegata al motivo per cui è stata presa. Segue gli standard di settore (ISO/IEC/IEEE 29148, IEEE 1016) senza che tu debba conoscerli — meno rilavorazioni a valle perché il team di sviluppo parte da un documento che tutti interpretano allo stesso modo.",
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
