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
    headline: "Da una domanda a una sintesi con fonti vere, non inventate",
    context:
      "Uno strumento open source che trasforma una domanda di ricerca in una sintesi affidabile, andando a leggere fonti accademiche reali invece di affidarsi alla memoria di un modello AI.",
    problem:
      "Chiesta a un'AI generica, una sintesi della letteratura scientifica suona convincente ma spesso non regge: cita studi che non esistono, fonti che non puoi controllare, e dà risposte diverse ogni volta.",
    solution:
      "Interroga banche dati scientifiche reali — arXiv, PubMed, Semantic Scholar, OpenAlex — e collega ogni affermazione alla fonte da cui viene. Niente passaggi nascosti: puoi risalire a ogni citazione.",
    results: [
      "Ogni affermazione è collegata a una fonte reale che puoi aprire e controllare",
      "Stessa domanda, stesso percorso di ricerca — risultati coerenti, non casuali",
      "L'intero processo è tracciato: nessuna risposta \"magica\" di cui fidarsi alla cieca",
    ],
    stack: ["Python"],
    verification:
      "Il codice è pubblico su GitHub: non devi credermi sulla parola, chiunque può leggere come cerca le fonti e come costruisce le citazioni.",
    externalHref: "https://github.com/manuel-albanesee/researcher",
  },
  {
    slug: "contextflow",
    name: "ContextFlow",
    category: "AI",
    year: "2025",
    headline: "Il tuo assistente AI di programmazione, con il contesto giusto ogni volta",
    context:
      "Prodotto in preparazione per il lancio in private beta: si inserisce tra l'assistente AI di programmazione (Claude Code, Copilot) e il modello per decidere cosa il modello vede a ogni richiesta.",
    problem:
      "Su sessioni lunghe o progetti complessi, gli assistenti AI perdono il filo: rispondono in modo incoerente o dimenticano decisioni prese poco prima, perché il contesto che ricevono è disordinato o eccessivo.",
    solution:
      "Distilla la cronologia di lavoro in una memoria organizzata su più livelli e passa al modello solo ciò che serve per il compito specifico — riga di comando, cruscotto di controllo e pacchetto npm già pronti.",
    results: [
      "Il modello riceve solo il contesto pertinente al compito, non l'intera cronologia",
      "Le decisioni prese in sessioni precedenti restano tracciate e riutilizzabili",
      "Riga di comando, cruscotto di controllo e pacchetto npm pronti in vista della private beta",
    ],
    stack: ["TypeScript", "Node"],
    verification:
      "Panoramica pubblica e architettura discutibili su richiesta: il codice del prodotto resta privato, ma il funzionamento è verificabile a voce o via demo.",
    externalHref: "https://github.com/manuel-albanesee/contextflow-showcase",
  },
  {
    slug: "menudigitale",
    name: "menuDigitale",
    category: "Web",
    year: "2024",
    headline:
      "Una piattaforma di menu digitali che il ristoratore aggiorna da solo, senza sorprese",
    context:
      "Piattaforma di menu digitali per ristoranti: il locale aggiorna piatti, prezzi e allergeni in autonomia, senza dover chiamare uno sviluppatore per ogni modifica.",
    problem:
      "Molti siti per la ristorazione vengono consegnati e poi si rompono al primo cambiamento: aggiorni un prezzo e qualcos'altro smette di funzionare, magari in pieno servizio, senza che nessuno se ne accorga.",
    solution:
      "Un pannello semplice per gestire il menu in autonomia, protezioni di sicurezza sui dati e controlli automatici che verificano il sito prima di ogni aggiornamento — così un ritocco al menu non manda in tilt il resto.",
    results: [
      "Il ristoratore aggiorna il menu da solo, senza dipendere da interventi tecnici",
      "Ogni aggiornamento è controllato in automatico prima di andare online: niente sorprese in pieno servizio",
      "Sicurezza dei dati sistemata prima del lancio, non dopo un problema",
    ],
    stack: ["Next.js", "Sanity"],
    verification:
      "Prima di ogni pubblicazione, controlli automatici ripercorrono i passaggi chiave del sito — dal caricamento del menu all'ordine — così un problema si vede prima del cliente, non dopo.",
    externalHref: "https://github.com/manuel-albanesee/menudigitale-showcase",
  },
];
