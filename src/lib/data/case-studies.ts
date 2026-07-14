export type CaseStudy = {
  slug: string;
  name: string;
  category: "AI" | "Web";
  year: string;
  headline: string;
  context: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
  verification: string;
  externalHref?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "researcher",
    name: "researcher",
    category: "AI",
    year: "2025",
    headline: "Da idea a sintesi con citazioni verificabili, in una pipeline riproducibile",
    context:
      "Pipeline open source personale per trasformare una domanda di ricerca in una sintesi affidabile, interrogando fonti accademiche invece di affidarsi alla sola memoria di un LLM.",
    problem:
      "Chiedere a un LLM generico una sintesi di letteratura scientifica produce risposte plausibili ma spesso non verificabili: citazioni inventate, fonti non controllabili, risultati diversi ad ogni run.",
    solution:
      "Una pipeline deterministica che interroga arXiv, PubMed, Semantic Scholar e OpenAlex, ancora ogni affermazione a una citazione reale e traccia l'intero processo di ricerca — nessun passaggio è una black-box.",
    results: [
      "Ogni run è riproducibile: stesso input, stesso percorso di ricerca",
      "Ogni affermazione nella sintesi è ancorata a una citazione verificabile",
      "L'intero processo è tracciato — nessuna sintesi \"magica\" senza percorso ispezionabile",
    ],
    stack: ["Python"],
    verification:
      "Il codice è pubblico su GitHub: non c'è bisogno di crederci sulla parola, si può leggere la logica di retrieval e citazione riga per riga.",
    externalHref: "https://github.com/manuel-albanesee/researcher",
  },
  {
    slug: "contextflow",
    name: "ContextFlow",
    category: "AI",
    year: "2025",
    headline: "Un orchestratore di contesto deterministico per assistenti AI, non un prompt magico",
    context:
      "Prodotto in preparazione per il lancio in private beta: un proxy stateless che si inserisce tra IDE (Claude Code, Copilot) e LLM per gestire il contesto in modo riproducibile invece che affidarsi a system prompt statici o a memoria ad hoc.",
    problem:
      "Gli assistenti AI perdono coerenza di contesto tra sessioni e moduli: il prompt cresce senza controllo, la memoria non è tracciabile e ogni sessione riparte da zero o si affida a un contesto non verificabile.",
    solution:
      "Il proxy compone system prompt effimeri a partire da una memoria distillata gerarchicamente (piramide L0→L3) e da regole di contesto specifiche per modulo — CLI, dashboard di audit e packaging npm già costruiti.",
    results: [
      "Contesto iniettato in ogni richiesta LLM è ricostruibile e auditabile, non un prompt opaco",
      "Memoria distillata su più livelli (L0→L3) invece di un unico blob non strutturato",
      "CLI, dashboard di audit e packaging npm pronti in vista della private beta",
    ],
    stack: ["TypeScript", "Node"],
    verification:
      "Panoramica pubblica e architettura discutibili su richiesta: codice del prodotto commerciale privato, ma il design è verificabile a voce o via demo.",
    externalHref: "https://github.com/manuel-albanesee/contextflow-showcase",
  },
  {
    slug: "menudigitale",
    name: "menuDigitale",
    category: "Web",
    year: "2024",
    headline: "Una piattaforma di menu digitali consegnata con test veri, non solo promesse",
    context:
      "Piattaforma di menu digitali per ristoranti: gestione contenuti in autonomia da parte del cliente, senza dover passare da sviluppo per ogni modifica al menu.",
    problem:
      "I siti/web-app per la ristorazione vengono spesso consegnati senza test, con il rischio che una modifica al menu rompa qualcosa in produzione senza che nessuno se ne accorga.",
    solution:
      "CMS headless per la gestione autonoma dei contenuti, hardening di sicurezza (log di audit, policy di trust sui proxy) e una suite di test end-to-end completa prima di ogni rilascio.",
    results: [
      "Copertura di test end-to-end con Vitest e Playwright, non solo unit test isolati",
      "Gestione contenuti autonoma per il cliente, senza dipendenza da interventi di sviluppo",
      "Hardening di sicurezza applicato prima della messa in produzione, non dopo un incidente",
    ],
    stack: ["Next.js", "Sanity"],
    verification:
      "Ogni rilascio passa dalla suite Vitest + Playwright prima di raggiungere la produzione.",
    externalHref: "https://github.com/manuel-albanesee/menudigitale-showcase",
  },
];
