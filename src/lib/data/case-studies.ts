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
  howItWorks: string[];
  faqs: { q: string; a: string }[];
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
      "Chiesta a un'AI generica, una sintesi della letteratura scientifica suona convincente ma spesso non regge: cita studi che non esistono, fonti che non puoi controllare, e dà risposte diverse ogni volta. In un contesto di ricerca o decisionale, questo non è un dettaglio: è la differenza tra fidarsi e dover ricontrollare tutto a mano.",
    solution:
      "Interroga banche dati scientifiche reali — arXiv, PubMed, Semantic Scholar, OpenAlex — e collega ogni affermazione alla fonte da cui viene. Niente passaggi nascosti: puoi risalire a ogni citazione, e la stessa domanda ripetuta segue lo stesso percorso di ricerca invece di produrre un risultato diverso ogni volta.",
    results: [
      "Ogni affermazione è collegata a una fonte reale che puoi aprire e controllare",
      "Stessa domanda, stesso percorso di ricerca — risultati coerenti, non casuali",
      "L'intero processo è tracciato: nessuna risposta \"magica\" di cui fidarsi alla cieca",
    ],
    howItWorks: [
      "Formuli una domanda di ricerca in linguaggio naturale",
      "La pipeline interroga arXiv, PubMed, Semantic Scholar e OpenAlex per fonti pertinenti",
      "Ogni affermazione della sintesi finale viene ancorata alla fonte da cui proviene",
      "L'intero percorso di ricerca resta tracciato in un log ispezionabile",
    ],
    faqs: [
      {
        q: "Come evita di inventare le citazioni?",
        a: "Non genera testo prima di aver trovato la fonte: ogni affermazione nella sintesi finale è ancorata a un risultato reale delle banche dati interrogate, non il contrario.",
      },
      {
        q: "Perché questo è open source e gli altri progetti no?",
        a: "researcher è un progetto personale, non un prodotto commerciale: ha senso tenerlo aperto perché la fiducia nel metodo si costruisce leggendo il codice, non a parole.",
      },
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
      "Su sessioni lunghe o progetti complessi, gli assistenti AI perdono il filo: rispondono in modo incoerente o dimenticano decisioni prese poco prima, perché il contesto che ricevono è disordinato o eccessivo. Il risultato è tempo perso a ripetere le stesse spiegazioni o a correggere risposte fuori bersaglio.",
    solution:
      "Distilla la cronologia di lavoro in una memoria organizzata su più livelli e passa al modello solo ciò che serve per il compito specifico, invece dell'intera cronologia grezza — riga di comando, cruscotto di controllo e pacchetto npm già pronti.",
    results: [
      "Il modello riceve solo il contesto pertinente al compito, non l'intera cronologia",
      "Le decisioni prese in sessioni precedenti restano tracciate e riutilizzabili",
      "Riga di comando, cruscotto di controllo e pacchetto npm pronti in vista della private beta",
    ],
    howItWorks: [
      "Il proxy si inserisce tra il tuo assistente AI di programmazione (Claude Code, Copilot) e il modello",
      "Distilla la cronologia di lavoro in una memoria organizzata su più livelli",
      "A ogni richiesta compone un contesto specifico per il modulo su cui stai lavorando",
      "CLI e dashboard di audit mostrano esattamente cosa è stato passato al modello e perché",
    ],
    faqs: [
      {
        q: "Sostituisce l'assistente AI che uso già?",
        a: "No: si inserisce come proxy tra l'assistente che già usi e il modello, non lo sostituisce.",
      },
      {
        q: "Quando sarà disponibile?",
        a: "CLI, dashboard e packaging npm sono già pronti: sto preparando il lancio in private beta.",
      },
    ],
    stack: ["TypeScript", "Node"],
    verification:
      "Panoramica pubblica e architettura discutibili su richiesta: il codice del prodotto resta privato, ma il funzionamento è verificabile a voce o via demo.",
    externalHref: "https://github.com/manuel-albanesee/contextflow-showcase",
  },
  {
    slug: "specification-documents-ai",
    name: "Specification Documents AI",
    category: "AI",
    year: "2025",
    headline: "Specifiche software complete, senza dover essere tu l'esperto di standard",
    context:
      "Prodotto in beta privata: agenti AI conducono un'intervista strutturata e trasformano le risposte in documenti di specifica pronti da condividere con un team di sviluppo.",
    problem:
      "Scrivere una specifica software conforme agli standard di settore richiede tempo ed esperienza che in azienda spesso manca: il risultato è o nessuna specifica, o un documento incompleto che ogni sviluppatore interpreta a modo suo, con costi di rilavorazione a valle.",
    solution:
      "Un'AI fa le domande giuste al posto di un business analyst e trasforma le risposte in un Functional Specification Document conforme ISO/IEC/IEEE 29148 con Requirements Traceability Matrix, e in una Software Design Description IEEE 1016 con tracciabilità completa dal requisito alla scelta tecnica.",
    results: [
      "Ogni requisito è tracciato fino alla decisione di design che lo soddisfa, non solo elencato",
      "Il documento segue standard di settore riconosciuti, senza che tu debba conoscerli",
      "Da intervista a documento pronto in ore, non settimane di riunioni",
    ],
    howItWorks: [
      "Rispondi a un'intervista strutturata guidata dall'AI sul progetto da specificare",
      "Il sistema traduce le risposte in requisiti tracciabili, uno per uno",
      "Genera il Functional Specification Document (ISO/IEC/IEEE 29148) con Requirements Traceability Matrix",
      "Genera la Software Design Description (IEEE 1016) collegata agli stessi requisiti",
    ],
    faqs: [
      {
        q: "Serve conoscere questi standard per usarlo?",
        a: "No: rispondi a domande in linguaggio naturale, è il sistema a occuparsi della conformità a ISO/IEC/IEEE 29148 e IEEE 1016.",
      },
      {
        q: "Perché il codice non è pubblico?",
        a: "È un prodotto commerciale in fase di lancio: architettura ed esempio di documento generato sono discutibili su richiesta, il codice resta privato come per gli altri prodotti in beta.",
      },
    ],
    stack: ["Python", "Flask", "LLM"],
    verification:
      "Panoramica pubblica e architettura discutibili su richiesta: il codice del prodotto resta privato, ma un documento generato reale è mostrabile su richiesta.",
    externalHref: "https://github.com/manuel-albanesee/specdocs-ai-showcase",
  },
  {
    slug: "socraticengine",
    name: "SocraticEngine",
    category: "AI",
    year: "2025",
    headline: "Un editor che mette alla prova le tue idee, non le completa e basta",
    context:
      "Prodotto in sviluppo attivo: un editor di scrittura assistito da AI pensato per chi scrive per ragionare — saggi, tesi, argomentazioni — non per chi vuole solo riempire una pagina più in fretta.",
    problem:
      "Gli editor AI generici completano le frasi e assecondano quello che stai già scrivendo: comodo per la velocità, ma non aiuta a capire se un'argomentazione regge davvero, e rischia di appiattire il pensiero invece di metterlo alla prova.",
    solution:
      "Invece di completare il testo, il sistema lo mette in discussione: propone controargomentazioni, lenti filosofiche diverse e domande scomode nei punti dove il ragionamento è più debole. I testi restano privati grazie a un'architettura di embedding zero-knowledge lato client.",
    results: [
      "Ogni argomentazione debole riceve una controdomanda mirata, non un completamento compiacente",
      "I testi non lasciano mai il dispositivo in chiaro: l'embedding è zero-knowledge lato client",
      "Pensato per chi scrive per ragionare, non per chi vuole solo riempire una pagina",
    ],
    howItWorks: [
      "Scrivi il tuo testo nell'editor come faresti in un qualsiasi word processor",
      "Il sistema individua i passaggi argomentativi più deboli",
      "Ricevi domande e controargomentazioni mirate su quei passaggi, non correzioni generiche",
      "Rivedi il testo con attrito intellettuale reale, non con autocompletamento",
    ],
    faqs: [
      {
        q: "È un correttore di bozze o un generatore di testo?",
        a: "Nessuno dei due: non scrive al posto tuo e non corregge la forma, mette in discussione il contenuto del tuo ragionamento.",
      },
      {
        q: "I miei testi restano privati?",
        a: "Sì: l'embedding avviene lato client con un'architettura zero-knowledge, non il testo in chiaro sul server.",
      },
    ],
    stack: ["FastAPI", "React", "PostgreSQL"],
    verification:
      "Panoramica pubblica su richiesta: il codice resta privato mentre il prodotto è in sviluppo attivo, ma l'architettura zero-knowledge è discutibile in una demo.",
    externalHref: "https://github.com/manuel-albanesee/socraticengine-showcase",
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
      "Molti siti per la ristorazione vengono consegnati e poi si rompono al primo cambiamento: aggiorni un prezzo e qualcos'altro smette di funzionare, magari in pieno servizio, senza che nessuno se ne accorga fino al reclamo di un cliente.",
    solution:
      "Un pannello semplice per gestire il menu in autonomia, protezioni di sicurezza sui dati e controlli automatici che verificano il sito prima di ogni aggiornamento — così un ritocco al menu non manda in tilt il resto.",
    results: [
      "Il ristoratore aggiorna il menu da solo, senza dipendere da interventi tecnici",
      "Ogni aggiornamento è controllato in automatico prima di andare online: niente sorprese in pieno servizio",
      "Sicurezza dei dati sistemata prima del lancio, non dopo un problema",
    ],
    howItWorks: [
      "Il ristoratore aggiorna piatti, prezzi e allergeni dal pannello, senza intervento tecnico",
      "Ogni modifica passa da controlli automatici prima di andare online",
      "I dati sensibili sono protetti da policy di sicurezza e log di audit",
      "Il cliente finale vede sempre il menu aggiornato, mai una versione rotta",
    ],
    faqs: [
      {
        q: "Serve competenza tecnica per aggiornare il menu?",
        a: "No: il pannello è pensato per essere usato da chi gestisce il locale, non da uno sviluppatore.",
      },
      {
        q: "Cosa succede se un aggiornamento rompe qualcosa?",
        a: "I controlli automatici lo intercettano prima della pubblicazione: un problema si vede prima del cliente, non dopo.",
      },
    ],
    stack: ["Next.js", "Sanity"],
    verification:
      "Prima di ogni pubblicazione, controlli automatici ripercorrono i passaggi chiave del sito — dal caricamento del menu all'ordine — così un problema si vede prima del cliente, non dopo.",
    externalHref: "https://github.com/manuel-albanesee/menudigitale-showcase",
  },
];
