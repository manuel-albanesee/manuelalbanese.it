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
    slug: "eml-classificator",
    name: "eml_classificator",
    category: "AI",
    year: "2024",
    headline: "Un flusso di smistamento email deterministico, non un modello che tira a indovinare",
    context:
      "Flusso di smistamento email per un contesto enterprise, dove la stessa email doveva sempre produrre lo stesso esito di classificazione — requisito non negoziabile per un processo integrato in altri sistemi a valle.",
    problem:
      "Un classificatore probabilistico standard può cambiare esito sulla stessa email da un run all'altro, rendendo impossibile fidarsi del risultato in un processo aziendale tracciato.",
    solution:
      "Logica di classificazione deterministica e auditabile: ogni decisione è riconducibile a una regola ispezionabile, non a un punteggio di un modello black-box.",
    results: [
      "Stessa email in ingresso, stesso esito in uscita, sempre — nessuna deriva tra run",
      "Ogni classificazione è tracciabile fino alla regola che l'ha determinata",
      "Il processo di smistamento manuale è stato sostituito da un flusso verificabile",
    ],
    stack: ["Python"],
    verification:
      "Logica di classificazione ispezionabile e testata su casi reali prima della messa in produzione, non solo sull'happy path.",
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
  },
];
