# manuelalbanese.it — Analisi strategica per il rifacimento del sito portfolio

```
 ███╗   ███╗ █████╗    ██╗████████╗
 ████╗ ████║██╔══██╗   ██║╚══██╔══╝
 ██╔████╔██║███████║   ██║   ██║      manuelalbanese.it
 ██║╚██╔╝██║██╔══██║   ██║   ██║      AI Engineering · Web Development
 ██║ ╚═╝ ██║██║  ██║██╗██║   ██║      — un sito che vende, non un CV online —
 ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝   ╚═╝
```

> **Documento di lavoro** — v1.0 · 13 luglio 2026
> Analisi completa: posizionamento, target, conversione, architettura, UX/UI, SEO, stack tecnico, roadmap.

---

## Indice

1. [Executive summary](#1-executive-summary)
2. [Audit dello stato attuale](#2-audit-dello-stato-attuale)
3. [Posizionamento e brand](#3-posizionamento-e-brand)
4. [Target e personas](#4-target-e-personas)
5. [Strategia di conversione](#5-strategia-di-conversione)
6. [Architettura dell'informazione](#6-architettura-dellinformazione)
7. [Wireframe](#7-wireframe)
8. [UX/UI e design system](#8-uxui-e-design-system)
9. [Contenuti e copywriting](#9-contenuti-e-copywriting)
10. [SEO](#10-seo)
11. [Stack tecnico](#11-stack-tecnico)
12. [Performance budget](#12-performance-budget)
13. [Misurazione e KPI](#13-misurazione-e-kpi)
14. [Roadmap](#14-roadmap)
15. [Rischi e mitigazioni](#15-rischi-e-mitigazioni)
16. [Prossimi passi immediati](#16-prossimi-passi-immediati)

---

## 1. Executive summary

**Il problema.** Il sito attuale (`PortfolioReplit`, SPA React generata da template Replit, deploy su Netlify) non svolge nessuna funzione commerciale, e oggi è **irraggiungibile in modo sicuro**: il certificato TLS del dominio custom non è configurato — chi visita `manuelalbanese.it` da GitHub o LinkedIn vede un **errore di sicurezza del browser**. Il danno è doppio: zero conversioni e credibilità negativa (un ingegnere che vende affidabilità con un sito rotto).

**L'opportunità.** Il profilo GitHub è appena stato riposizionato con una tesi forte e differenziante — *"AI systems you can trust: deterministic, auditable, standards-compliant"* — sostenuta da prova concreta: due prodotti commerciali in lancio (ContextFlow, Specification Documents AI), un prodotto in sviluppo (SocraticEngine), una pipeline open source (researcher) e un portafoglio di lavori web per clienti reali (menuDigitale, portfolio per professionisti, landing per PMI). Manca il pezzo centrale del funnel: **un sito che trasformi questa credibilità in richieste di contatto**.

**Cosa costruiamo.** Un sito bilingue (IT prima, EN in fase 2), statico-first, velocissimo, con due linee d'offerta chiare:

- **Soluzioni AI** (linea primaria): pipeline RAG, agenti LLM, inferenza locale/privacy-first, AI governance e documentazione conforme agli standard.
- **Sviluppo web** (linea secondaria): siti e web-app Next.js orientati al risultato.

Ogni pagina spinge verso un'unica azione: **prenotare una call conoscitiva di 30 minuti**.

**Risultato atteso.** Da "link rotto" a macchina di lead generation misurabile: obiettivo 2–5% di conversione visita→call entro 3 mesi dal lancio, posizionamento organico su keyword transazionali italiane a bassa concorrenza ("sviluppo pipeline RAG", "integrazione AI azienda", "chatbot aziendale su misura").

---

## 2. Audit dello stato attuale

### 2.1 Sito attuale (manuelalbanese.it)

| Aspetto | Stato | Gravità |
|---|---|---|
| **TLS/dominio** | Cert Netlify copre solo `*.netlify.app` → errore browser su apex e www | 🔴 Critico |
| **Stack** | SPA Vite/React da template Replit (`package.json` si chiama ancora `rest-express`) | 🟠 Alto |
| **SEO** | Rendering client-side, nessun contenuto indicizzabile di valore | 🔴 Critico |
| **Posizionamento** | Nessuna offerta, nessun prezzo, nessuna CTA commerciale | 🔴 Critico |
| **Prova sociale** | Nessun case study strutturato, nessuna metrica | 🟠 Alto |
| **Dipendenze** | ~70 dipendenze (Drizzle, Neon, SendGrid, express-session…) per un sito vetrina | 🟡 Medio |

**Verdetto: non si ristruttura, si ricostruisce.** Il costo di recupero della SPA Replit supera il costo di un rebuild pulito, e nel frattempo il dominio va sistemato *subito* (vedi [§16](#16-prossimi-passi-immediati)) perché ogni giorno di errore TLS brucia visite provenienti da GitHub e LinkedIn.

### 2.2 Presenza digitale complessiva

```
                    OGGI                                DOMANI
        ┌─────────────────────────┐        ┌─────────────────────────────┐
        │ LinkedIn ──┐            │        │ LinkedIn ──┐                │
        │ GitHub ────┼──► ⚠ TLS   │        │ GitHub ────┼──► SITO ──► 📞 │
        │ Passaparola┘   ERROR    │        │ SEO ───────┤   (hub di      │
        │                         │        │ Passaparola┘   conversione) │
        └─────────────────────────┘        └─────────────────────────────┘
          Ogni canale è un vicolo            Ogni canale converge su un
          cieco: il traffico muore           hub che qualifica e converte
```

- **GitHub** (`manuel-albanesee`): ✅ appena sistemato — profilo README con tesi chiara, showcase repo pubblici per i prodotti privati (contextflow-showcase, specdocs-ai-showcase, socraticengine-showcase), repo open source `researcher`. È il canale di credibilità tecnica.
- **LinkedIn**: canale primario per il target business italiano; oggi punta a un sito rotto.
- **Asset non sfruttati**: l'esperienza enterprise sui layer di entity extraction (progetti TT_*), il classificatore email deterministico (`eml_classificator`), la piattaforma menuDigitale — materiale eccellente per case study anonimizzati.

### 2.3 Cosa c'è da vendere (inventario asset)

| Asset | Tipo | Ruolo nel sito |
|---|---|---|
| **ContextFlow** | Prodotto (private beta) | Prova di competenza AI + potenziale lead "prodotto" |
| **Specification Documents AI** | Prodotto | Prova della tesi "standards-compliant" (ISO/IEC/IEEE 29148, IEEE 1016) |
| **SocraticEngine** | Prodotto | Prova di ampiezza (UX AI non convenzionale, E2EE zero-knowledge) |
| **researcher** | Open source | Prova pubblica e verificabile della tesi "deterministic & traceable" |
| **eml_classificator, TT_*** | Progetti enterprise | Case study AI "in produzione" (anonimizzati se serve) |
| **menuDigitale, portfolio clienti, GMB Italia** | Lavori web | Case study linea web + prova di affidabilità di consegna |

---

## 3. Posizionamento e brand

### 3.1 La tesi

Il mercato AI italiano è saturo di promesse e povero di garanzie. Le aziende hanno due paure: **"l'AI si inventa le cose"** e **"i miei dati finiscono chissà dove"**. Il posizionamento attacca esattamente queste due paure:

> **Costruisco sistemi AI di cui ti puoi fidare: deterministici, verificabili, conformi agli standard — e che restano padroni dei tuoi dati.**

È lo stesso posizionamento del profilo GitHub (coerenza totale tra i canali), ed è difendibile perché ogni parola ha una prova:

- *deterministici* → researcher (run riproducibili, trace JSONL), eml_classificator
- *verificabili* → ContextFlow (audit dashboard, contesto riproducibile)
- *conformi agli standard* → SpecDocs AI (ISO/IEC/IEEE 29148, IEEE 1016)
- *padroni dei tuoi dati* → inferenza locale con Ollama, architetture zero-knowledge (SocraticEngine)

### 3.2 Gerarchia dell'offerta

```
                        ┌──────────────────────────────┐
                        │   MANUEL ALBANESE            │
                        │   AI Engineering che si fida │
                        └──────────────┬───────────────┘
               ┌───────────────────────┼───────────────────────┐
               ▼                       ▼                       ▼
   ┌───────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
   │ 🧠 SOLUZIONI AI       │  │ 🌐 SVILUPPO WEB    │  │ 📦 PRODOTTI        │
   │ (linea primaria)      │  │ (linea secondaria) │  │ (prova + revenue)  │
   ├───────────────────────┤  ├────────────────────┤  ├────────────────────┤
   │ · Pipeline RAG        │  │ · Siti e web-app   │  │ · ContextFlow      │
   │ · Agenti LLM          │  │   Next.js/React    │  │ · SpecDocs AI      │
   │ · Inferenza locale    │  │ · E-commerce/CMS   │  │ · SocraticEngine   │
   │   (privacy/GDPR)      │  │ · Landing che      │  │                    │
   │ · AI audit &          │  │   convertono       │  │ I prodotti vendono │
   │   governance          │  │                    │  │ i servizi e i      │
   │ · Specifiche formali  │  │                    │  │ servizi vendono    │
   │   (ISO/IEEE)          │  │                    │  │ i prodotti.        │
   └───────────────────────┘  └────────────────────┘  └────────────────────┘
```

**Regola di gerarchia visiva**: l'AI occupa il 70% dello spazio narrativo, il web il 30%. Il web non va nascosto — è ciò che rende credibile "ti consegno un sistema *finito*, non un notebook Jupyter" — ma non deve diluire il posizionamento AI.

### 3.3 Tagline (opzioni)

| # | IT | EN | Note |
|---|---|---|---|
| A ✅ | **AI di cui ti puoi fidare. Software che consegna risultati.** | *AI you can trust. Software that delivers.* | Consigliata: tesi + concretezza |
| B | Sistemi AI deterministici, verificabili, tuoi. | Deterministic, auditable AI — that you own. | Più tecnica, ottima per hero EN |
| C | Dal requisito al codice al documento: AI senza sorprese. | From requirements to code to documents: AI without surprises. | Riprende il README GitHub |

### 3.4 Tono di voce

- **Diretto e concreto**: numeri, standard, nomi di tecnologie. Mai "innovativo", "rivoluzionario", "sinergia".
- **Onesto sui limiti**: dire dove l'AI *non* serve costruisce più fiducia di dieci promesse. Una sezione "Quando NON ti serve l'AI" è un pattern di conversione, non un autogol.
- **Da pari a pari col tecnico, chiaro col non tecnico**: ogni pagina servizio ha un livello "business" (risultato) e un livello "tecnico" (come, espandibile).

---

## 4. Target e personas

### Persona 1 — "Il CTO prudente" (target primario, linea AI)

| | |
|---|---|
| **Chi** | CTO / founder tecnico di PMI software, software house o startup italiana (5–50 dev) |
| **Trigger** | Il board/i clienti chiedono "l'AI"; i primi esperimenti interni hanno prodotto demo fragili |
| **Dolori** | Allucinazioni in produzione, costi API imprevedibili, dati sensibili verso terzi, nessuna tracciabilità |
| **Obiezioni** | "I consulenti AI vendono fuffa" · "Poi chi lo mantiene?" · "GDPR?" |
| **Cosa deve vedere** | Case study con metriche, architetture disegnate, opzione inferenza locale, codice vero su GitHub |
| **CTA** | Call tecnica di 30 min — "portami il tuo caso d'uso, ti dico se ha senso" |

### Persona 2 — "L'imprenditore concreto" (linea web + AI applicata)

| | |
|---|---|
| **Chi** | Titolare di PMI, studio professionale o attività locale (ristorazione, servizi) |
| **Trigger** | Sito vecchio/inesistente, concorrenti più visibili, curiosità su "AI per l'azienda" |
| **Dolori** | Preventivi opachi delle web agency, siti consegnati e abbandonati, tempo perso in email ripetitive |
| **Obiezioni** | "Quanto costa?" · "Quanto ci vuole?" · "Poi mi lasci solo?" |
| **Cosa deve vedere** | Lavori fatti (menuDigitale, portfolio clienti), processo in 4 passi, fasce di prezzo "a partire da" |
| **CTA** | Call/WhatsApp — massima riduzione dell'attrito |

### Persona 3 — "Il dev che valuta" (linea prodotti)

| | |
|---|---|
| **Chi** | Sviluppatore/tech lead che usa AI coding assistant o deve produrre specifiche formali |
| **Trigger** | Arriva da GitHub, da un post o dalla ricerca di tool (context management, FSD/RTM) |
| **Cosa deve vedere** | Pagina prodotto pulita, docs, demo, come entrare in beta |
| **CTA** | Iscrizione beta / richiesta demo — è anche un canale indiretto di consulenza |

**Implicazione di design**: la home deve smistare le tre personas entro il primo viewport senza costringere nessuna a leggere contenuti pensati per le altre. Da qui la struttura a due porte ("Soluzioni AI" / "Sviluppo web") + strip prodotti.

---

## 5. Strategia di conversione

### 5.1 Il funnel

```
  ACQUISIZIONE            ENGAGEMENT                 CONVERSIONE          POST
 ─────────────       ──────────────────────      ─────────────────      ──────
  LinkedIn ────┐                                                        
  GitHub ──────┤      ┌──────────────────┐       ┌───────────────┐     ┌─────┐
  SEO (IT) ────┼───►  │ HOME             │  ───► │ 📞 CALL 30'   │ ──► │ 💼  │
  Referral ────┘      │  ├─► Servizio AI │       │ (Cal.com)     │     │ Job │
                      │  ├─► Servizio Web│  ───► ├───────────────┤     └─────┘
                      │  ├─► Case study  │       │ ✉ Email/Form  │        │
                      │  └─► Prodotti    │       │ 💬 LinkedIn   │        ▼
                      └──────────────────┘       └───────────────┘   Case study
                             ▲                                       + referral
                             │                                           │
                             └───────────────────────────────────────────┘
                                        il ciclo si autoalimenta
```

### 5.2 Gerarchia delle CTA

1. **Primaria — "Prenota una call di 30 minuti"** (Cal.com embed): zero attrito, zero form lunghi, l'utente sceglie lo slot. Presente in hero, fine di ogni pagina servizio, fine di ogni case study, footer.
2. **Secondaria — form email breve** (3 campi: nome, email, messaggio): per chi non vuole una call. Risposta promessa entro 24h lavorative.
3. **Terziaria — LinkedIn / GitHub**: per chi vuole "annusare" prima. Vanno bene: alimentano il retargeting mentale.

**Anti-pattern da evitare**: chatbot sul sito (ironico ma controproducente se non perfetto), pop-up, newsletter chiesta al primo contatto, form a 10 campi, "richiedi preventivo" senza contesto.

### 5.3 Leve di fiducia (in ordine di potenza)

1. **Case study con numeri** — "classificazione email: da 40 min/giorno a 3, con audit trail completo" vale più di qualunque aggettivo.
2. **Codice pubblico verificabile** — link diretti a `researcher` e agli showcase: *"non credermi sulla parola: leggi il codice"*.
3. **Standard nominati** — ISO/IEC/IEEE 29148, IEEE 1016, WCAG, GDPR: parole che il CTO prudente riconosce.
4. **Processo trasparente** — "Come lavoro" in 4 passi con deliverable espliciti per passo.
5. **Prezzi indicativi** — fasce "a partire da" sui servizi web e formati fissi per l'AI (audit a prezzo fisso, PoC a prezzo fisso, sviluppo a progetto). Mostrare i prezzi qualifica i lead e scoraggia i perditempo.
6. **Testimonianze** — da raccogliere dai clienti passati (azione in roadmap, [§14](#14-roadmap)).

### 5.4 Offerta d'ingresso (riduce il rischio percepito)

- **Linea AI**: "**AI Feasibility Audit**" — 1 settimana, prezzo fisso, deliverable: report di fattibilità con architettura proposta, stima costi/rischi e raccomandazione onesta (anche "non fatelo"). È il prodotto-civetta perfetto per il CTO prudente: rischio limitato, valore immediato, e naturale upsell verso il progetto.
- **Linea web**: "**Sito in 3 settimane**" — pacchetto chiaro con perimetro fisso e prezzo "a partire da".

---

## 6. Architettura dell'informazione

### 6.1 Sitemap

```
manuelalbanese.it
│
├── /                        HOME — smistamento personas + prova + CTA
│
├── /soluzioni-ai            LANDING LINEA AI (pagina di vendita completa)
│   ├── /soluzioni-ai/rag-e-knowledge-base     ─┐
│   ├── /soluzioni-ai/agenti-llm                │ pagine servizio SEO,
│   ├── /soluzioni-ai/ai-locale-e-privacy       │ una per keyword cluster
│   └── /soluzioni-ai/audit-e-governance       ─┘
│
├── /sviluppo-web            LANDING LINEA WEB
│
├── /progetti                INDICE CASE STUDY (filtrabile: AI / Web)
│   └── /progetti/[slug]     CASE STUDY (template fisso, vedi §9.2)
│
├── /prodotti                STRIP PRODOTTI
│   ├── /prodotti/contextflow
│   ├── /prodotti/specification-documents-ai
│   └── /prodotti/socraticengine
│
├── /come-lavoro             PROCESSO + FAQ + prezzi indicativi
├── /chi-sono                BIO orientata al cliente (non un CV)
├── /contatti                CAL.COM EMBED + form + canali diretti
│
├── /blog                    (fase 3 — motore SEO di lungo periodo)
│
└── /en/...                  (fase 2 — mirror EN delle pagine core)
```

**Profondità massima: 2 click da qualsiasi pagina alla CTA.** Ogni pagina è una landing autonoma (il traffico SEO/social non entra dalla home).

### 6.2 Navigazione

- **Header** (sticky, leggero): Soluzioni AI · Sviluppo Web · Progetti · Prodotti · Chi sono — e a destra, staccato, il bottone **[Prenota una call]**.
- **Footer**: ripete la nav + contatti diretti + GitHub/LinkedIn + P.IVA e note legali (privacy GDPR).
- **Breadcrumb** solo su case study e pagine servizio di secondo livello (aiuta SEO e orientamento).

---

## 7. Wireframe

### 7.1 Home — above the fold (desktop)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  MA·  Soluzioni AI  Sviluppo Web  Progetti  Prodotti  Chi sono  [Prenota ▸]│
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   AI di cui ti puoi fidare.                        ┌────────────────────┐  │
│   Software che consegna risultati.                 │  (visual tecnico:  │  │
│                                                    │  diagramma animato │  │
│   Progetto sistemi AI deterministici e             │  di una pipeline   │  │
│   verificabili — RAG, agenti LLM, inferenza        │  RAG con trace     │  │
│   locale — e li consegno come software             │  che si illumina)  │  │
│   completo, dal backend all'interfaccia.           │                    │  │
│                                                    │  niente stock      │  │
│   [ Prenota una call di 30' ]  [ Vedi i progetti ] │  photo, niente     │  │
│                                                    │  robot 🤖          │  │
│                                                    └────────────────────┘  │
│   ─────────────────────────────────────────────────────────────────────   │
│   ISO/IEC/IEEE 29148 · IEEE 1016 · GDPR-first · TypeScript · Python ·      │
│   RAG · Ollama · Next.js        ← proof strip, non carosello di loghi     │
└────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Home — struttura completa

```
┌─ HERO ──────────────────────┐  tesi + 2 CTA + proof strip
├─ LE DUE PORTE ──────────────┤  card "Soluzioni AI" (grande) +
│                             │  card "Sviluppo web" (media)
│  ┌───────────────┐ ┌──────┐ │  → smistano le personas 1 e 2
│  │ 🧠 SOLUZIONI  │ │ 🌐   │ │
│  │    AI         │ │ WEB  │ │
│  └───────────────┘ └──────┘ │
├─ PROVA: 3 CASE STUDY ───────┤  card con METRICA in evidenza
│  [risultato] [risultato]    │  → "vedi tutti i progetti"
├─ PRODOTTI ──────────────────┤  strip: ContextFlow · SpecDocs · Socratic
│                             │  → "costruisco prodotti AI miei:
│                             │     la tua garanzia che so consegnare"
├─ COME LAVORO ───────────────┤  4 passi orizzontali, deliverable espliciti
│  ①──────②──────③──────④    │
├─ CHI SONO (breve) ──────────┤  foto vera + 3 righe + link bio
├─ CTA FINALE ────────────────┤  "Parliamo del tuo caso: 30 minuti,
│  [ Prenota una call ]       │   nessun impegno, risposta onesta."
└─ FOOTER ────────────────────┘
```

### 7.3 Pagina servizio AI (template)

```
┌──────────────────────────────────────────────┐
│ H1: risultato per il cliente                 │   es. "Una knowledge base
│ sottotitolo: come, in una riga               │   che risponde solo con i
│ [Prenota call]                               │   TUOI documenti — e cita
├──────────────────────────────────────────────┤   le fonti."
│ IL PROBLEMA (PAS: pain, 3-4 righe)           │
├──────────────────────────────────────────────┤
│ LA SOLUZIONE — diagramma architettura        │   ← visual tecnico, non
│ + 3 bullet di beneficio                      │     illustrazione astratta
├──────────────────────────────────────────────┤
│ ▸ Dettaglio tecnico (accordion, per P1)      │   stack, pattern, standard
├──────────────────────────────────────────────┤
│ CASE STUDY correlato (1 card con metrica)    │
├──────────────────────────────────────────────┤
│ FORMATI & PREZZI: Audit fisso / PoC fisso /  │
│ Progetto su misura                           │
├──────────────────────────────────────────────┤
│ FAQ (3-5, incluse le obiezioni di §4)        │
├──────────────────────────────────────────────┤
│ CTA: [Prenota una call di 30']               │
└──────────────────────────────────────────────┘
```

### 7.4 Mobile (regole)

```
┌─────────────────┐   · CTA "Prenota" sempre raggiungibile:
│ MA·        ☰ 📞 │     icona telefono nell'header mobile
│                 │   · hero: titolo → 2 righe testo → CTA
│  AI di cui ti   │     (il visual scende sotto la CTA)
│  puoi fidare.   │   · card impilate, mai caroselli
│                 │   · target touch ≥ 44px
│  [Prenota call] │   · menu full-screen con le stesse 5 voci
│                 │     + CTA in fondo
│  ┌───────────┐  │
│  │ visual    │  │
│  └───────────┘  │
└─────────────────┘
```

---

## 8. UX/UI e design system

### 8.1 Direzione visiva: "laboratorio, non agenzia"

L'estetica deve *dimostrare* la tesi (precisione, trasparenza, ingegneria) senza fare cosplay da hacker. Riferimenti di tono: Linear, Vercel, Stripe docs — puliti, tecnici, leggibili.

- **Tema chiaro di default** (il target business legge meglio e si fida di più), **dark mode supportata** via `prefers-color-scheme` + toggle (il target dev la cerca — e i prodotti sono per dev).
- **Un solo accento cromatico forte** su base neutra. Gli elementi "tecnici" (metriche, stack, trace) usano il monospace come firma visiva.
- **Niente**: stock photo, robot, cervelli luminosi, particelle fluttuanti, glassmorphism gratuito.

### 8.2 Palette (light / dark)

| Token | Light | Dark | Uso |
|---|---|---|---|
| `--bg` | `#FAFAF8` | `#0C0E12` | sfondo pagina (bianco caldo, non #FFF) |
| `--surface` | `#FFFFFF` | `#14171D` | card, superfici |
| `--ink` | `#16181D` | `#E8EAED` | testo primario (contrasto ≥ 12:1) |
| `--ink-2` | `#4B5563` | `#9AA3AF` | testo secondario (≥ 7:1) |
| `--accent` | `#0B5FFF` | `#5B8CFF` | CTA, link, focus (≥ 4.5:1 su bg) |
| `--accent-ink` | `#FFFFFF` | `#0C0E12` | testo su accento |
| `--ok` | `#0A7D4F` | `#4ADE80` | metriche positive nei case study |
| `--mono-bg` | `#F1F2EE` | `#1A1E26` | blocchi codice/trace |

Tutte le coppie testo/sfondo devono superare **WCAG 2.2 AA** (verifica automatica in CI con axe).

### 8.3 Tipografia

| Ruolo | Font | Note |
|---|---|---|
| Display/H1-H2 | **Space Grotesk** | continuità col sito attuale, carattere tecnico ma caldo |
| Testo | **Inter** (variable) | leggibilità, i18n, numeri tabulari per le metriche |
| Mono | **JetBrains Mono** | metriche, stack, snippet, "firma da ingegnere" |

Scala modulare 1.250 (Major Third): 16 → 20 → 25 → 31 → 39 → 49px. Line-height 1.6 sul body, max-width testo **68ch**.

### 8.4 Componenti chiave (inventario)

`Header` · `Hero` · `ProofStrip` · `ServiceCard` (2 varianti: primaria AI, secondaria Web) · `CaseStudyCard` (con slot metrica) · `MetricBadge` · `ProductCard` · `ProcessSteps` · `TechAccordion` (dettaglio per P1) · `PriceBand` · `FAQ` (con schema.org) · `CTASection` · `CalEmbed` · `ContactForm` · `Footer` · `LangSwitch` · `ThemeToggle`

### 8.5 Motion e micro-interazioni

- Animazioni **funzionali, mai decorative**: reveal on scroll sobrio (fade+8px, 200ms), il diagramma hero che si "accende" segmento per segmento (racconta la pipeline).
- `prefers-reduced-motion` rispettato ovunque (coerente col brand "accessibile e conforme").
- Budget: nessuna libreria motion > 20KB; CSS transitions dove basta, altrimenti Motion One / Framer Motion con lazy import.

### 8.6 Accessibilità (WCAG 2.2 AA come feature di marketing)

Un sito che vende "standards-compliant" **deve** essere conforme lui stesso — e va detto nel footer: *"Questo sito è conforme WCAG 2.2 AA. Anche questo è un deliverable."*

Checklist minima: landmark semantici, skip-link, focus visibile custom, contrasto verificato, form con label ed errori descrittivi, alt text sensati, navigazione completa da tastiera, `lang` corretto per pagina (it/en), heading gerarchici, test con screen reader su hero e form.

---

## 9. Contenuti e copywriting

### 9.1 Formula per le pagine di vendita: PAS + prova

1. **Pain** — il problema con le parole del cliente ("il chatbot risponde cose inventate ai vostri clienti").
2. **Agitate** — il costo del problema (fiducia, tempo, GDPR, figuracce).
3. **Solve** — la soluzione con il *meccanismo* ("RAG con citazioni obbligatorie: se la fonte non c'è, il sistema dice 'non lo so'").
4. **Prova** — case study/metrica/codice.
5. **CTA** — call 30'.

### 9.2 Template case study (fisso, MDX)

```
[Cliente/settore] · [Linea: AI|Web] · [Anno]
┌─────────────────────────────────────────┐
│ H1: risultato in una frase con numero   │
│                                         │
│ CONTESTO      chi, cosa, vincoli (3 r.) │
│ PROBLEMA      il pain misurabile        │
│ SOLUZIONE     architettura + diagramma  │
│ RISULTATI     2-4 metriche in evidenza  │  ← MetricBadge
│ STACK         badge tecnologie          │
│ ▸ Come l'abbiamo verificato (audit,     │  ← la firma differenziante:
│   test, trace) — accordion              │    OGNI case study mostra
│                                         │    la parte di verifica
│ CTA: "Hai un problema simile?"          │
└─────────────────────────────────────────┘
```

Primi 6 case study (ordine di scrittura): ① eml_classificator (AI, metriche forti) → ② menuDigitale (Web, prodotto completo) → ③ researcher (AI open source, link al codice) → ④ TT_* entity extraction (AI enterprise, anonimizzato) → ⑤ portfolio cliente (Web, veloce da scrivere) → ⑥ SpecDocs AI (ponte servizi↔prodotti).

### 9.3 Strategia bilingue

- **Fase 1: solo italiano.** Il mercato di vendita servizi è IT; l'inglese a metà fa danno.
- **Fase 2: EN per home, soluzioni-ai, prodotti, 3 case study.** I prodotti hanno mercato globale; `hreflang` corretto, URL `/en/...`.
- Il *codice* e i nomi tecnici restano in inglese anche nella versione IT (è la lingua del settore, e il target P1 lo apprezza).

### 9.4 Chi sono (regola)

Non un CV: una pagina che risponde a "posso fidarmi di questa persona?" — foto vera, percorso in 5 righe, perché lavoro così (determinismo, audit), cosa faccio quando non lavoro (1 riga, umanizza), link a GitHub/LinkedIn. Niente elenco di 40 tecnologie.

---

## 10. SEO

### 10.1 Keyword cluster (IT, per pagina)

| Pagina | Cluster | Concorrenza |
|---|---|---|
| /soluzioni-ai/rag-e-knowledge-base | "sviluppo RAG", "chatbot documenti aziendali", "knowledge base AI" | Bassa 🟢 |
| /soluzioni-ai/agenti-llm | "agenti AI per aziende", "automazione con LLM", "sviluppo agenti llm" | Bassa 🟢 |
| /soluzioni-ai/ai-locale-e-privacy | "AI on-premise", "LLM locale azienda", "AI GDPR", "ollama aziende" | Molto bassa 🟢 |
| /soluzioni-ai/audit-e-governance | "AI audit", "AI act compliance sviluppo", "governance AI" | Media 🟡 |
| /sviluppo-web | "sviluppatore next.js freelance", "sviluppo web app su misura" | Media 🟡 |
| /prodotti/* | brand keyword (contextflow, ecc.) + "context management claude code" ecc. | — |

Le keyword AI transazionali in italiano sono **ancora poco presidiate**: chi cerca "sviluppo pipeline RAG" in italiano trova agenzie generaliste. Finestra di opportunità reale, da occupare prima che si chiuda.

### 10.2 SEO tecnica

- **SSG per tutto** (contenuti nel repo, rendering statico): TTFB minimo, indicizzazione perfetta — l'esatto contrario della SPA attuale.
- Metadata per pagina, **OG image generate** (template con titolo + metrica per i case study).
- **Schema.org**: `Person` + `ProfessionalService` (home), `Service` (pagine servizio), `SoftwareApplication` (prodotti), `FAQPage` (FAQ), `BreadcrumbList`.
- `sitemap.xml`, `robots.txt`, canonical, `hreflang` it/en (fase 2), redirect 301 dalle vecchie URL.
- **Il fix DNS/TLS è il primo intervento SEO**: oggi il dominio è di fatto de-indicizzabile.

---

## 11. Stack tecnico

### 11.1 Scelte e motivazioni

| Livello | Scelta | Perché |
|---|---|---|
| Framework | **Next.js 15 (App Router), TypeScript** | SSG-first, immagine/font optimization, coerenza col posizionamento (è lo stack che vendo) |
| Styling | **Tailwind CSS 4 + shadcn/ui** | velocità, design token in CSS vars (palette §8.2), componenti accessibili di base |
| Contenuti | **MDX nel repo** (`content/`) | i contenuti sono di Manuel: versionati in git, zero CMS da mantenere, typesafe con Zod frontmatter. Un CMS (Sanity) si aggiunge solo se/quando servirà delegare |
| i18n | **next-intl** | routing `/en`, messaggi tipizzati, fase 2 senza refactor |
| Booking | **Cal.com embed** | CTA primaria; open source, coerente col brand |
| Form | **Resend** + server action + honeypot/rate-limit | niente SendGrid/backend dedicato |
| Analytics | **Plausible** (o Umami self-hosted) | cookieless → **niente cookie banner** (attrito in meno, coerenza GDPR-first) |
| Hosting | **Vercel** (in alternativa: fix del setup Netlify) | preview deploy, edge, zero ops. Il dominio va comunque riconfigurato |
| Test | **Vitest + Playwright + axe-core** | smoke E2E su form/booking, a11y in CI — "testato" fa parte del brand |
| CI | **GitHub Actions** | lint, typecheck, test, Lighthouse CI con budget (§12) |

### 11.2 Struttura repo prevista

```
manuelalbanese.it/
├── ANALISI.md                  ← questo documento
├── docs/                       decisioni (ADR), guida contenuti
├── content/
│   ├── it/{servizi,progetti,prodotti}/*.mdx
│   └── en/...                  (fase 2)
├── src/
│   ├── app/[locale]/...        route App Router
│   ├── components/             inventario §8.4
│   ├── lib/                    content loader (Zod), seo, analytics
│   └── styles/                 token, tema light/dark
├── public/
├── tests/                      e2e + a11y
└── .github/workflows/          ci.yml, lighthouse.yml
```

---

## 12. Performance budget

Il sito di chi vende "sistemi efficienti" deve essere *dimostrativamente* veloce. Budget vincolanti in CI (Lighthouse CI fallisce la build se sforati):

| Metrica | Budget | Note |
|---|---|---|
| LCP | **< 1.8s** (4G, Moto G) | hero senza immagini bloccanti, font `display: swap` + preload |
| CLS | **< 0.05** | dimensioni riservate per ogni media |
| INP | **< 150ms** | JS iniziale minimo |
| JS iniziale | **< 120KB gz** | Cal.com e motion caricati lazy |
| Peso pagina home | **< 500KB** | immagini AVIF/WebP |
| Lighthouse | **≥ 95** su tutte e 4 le categorie | Performance, A11y, Best Practices, SEO |

---

## 13. Misurazione e KPI

### KPI primari (review mensile)

| KPI | Baseline | Target 3 mesi | Target 6 mesi |
|---|---|---|---|
| Call prenotate / mese | 0 | 4+ | 8+ |
| Conversione visita → call | — | ≥ 2% | ≥ 3.5% |
| Contatti qualificati totali (call+form) | ~0 | 6+ | 12+ |
| Keyword in top 10 (cluster §10.1) | 0 | 3 | 8 |

### Eventi da tracciare (Plausible custom events)

`cta_hero_click` · `cal_booking_started` · `cal_booking_completed` · `form_submitted` · `case_study_read` (scroll 80%) · `product_beta_signup` · `outbound_github` · `outbound_linkedin` — più proprietà `linea=ai|web` per capire quale offerta tira.

**Regola**: ogni modifica al sito dopo il lancio si giudica su questi numeri, non sul gusto.

---

## 14. Roadmap

```
 FASE 0 · EMERGENZA (subito, < 1 giorno)
 ██ Fix DNS/TLS dominio ── il link su GitHub/LinkedIn deve smettere di dare errore
 ██ Redirect temporaneo a una pagina decente (anche minimale) se serve

 FASE 1 · MVP CHE VENDE (settimane 1-3)
 ████████ Setup repo, CI, design token, componenti base
 ████████ Home + /soluzioni-ai + /sviluppo-web + /contatti (Cal.com attivo)
 ████████ 3 case study (eml_classificator, menuDigitale, researcher)
 ████████ /come-lavoro con prezzi indicativi · SEO tecnica completa
 ▶ LANCIO: si va online con questo. Il resto è iterazione.

 FASE 2 · PROFONDITÀ (settimane 4-6)
 ██████ 4 pagine servizio AI (SEO) · /prodotti + 3 pagine prodotto
 ██████ Case study 4-6 · /chi-sono · versione EN delle pagine core
 ██████ Raccolta testimonianze dai clienti passati (email diretta, 2 righe)

 FASE 3 · MOTORE ORGANICO (dal mese 2, continuativo)
 ████ Blog tecnico (1 articolo/2 settimane: RAG, determinismo, AI locale)
 ████ Lead magnet "AI Readiness Checklist" · OG image automatiche
 ████ Iterazioni guidate dai KPI (§13)
```

**Definition of done — Fase 1**: dominio ok · Lighthouse ≥95 · booking funzionante testato E2E · 3 case study con metriche · eventi analytics attivi · WCAG AA verificato · OG/metadata su ogni pagina.

---

## 15. Rischi e mitigazioni

| Rischio | Prob. | Impatto | Mitigazione |
|---|---|---|---|
| Perfezionismo → lancio infinito | Alta | Alto | Fase 1 con scope chiuso: si lancia in 3 settimane, punto |
| Case study bloccati da NDA/anonimizzazione | Media | Alto | Anonimizzare settore+metriche; in parallelo puntare su researcher (pubblico) |
| Prezzi pubblici percepiti come vincolo | Media | Medio | Fasce "a partire da" + formati fissi solo per audit/PoC |
| Doppio posizionamento AI+web diluisce | Media | Medio | Gerarchia 70/30 rigida (§3.2); il web non compare nell'hero |
| Tempo di Manuel conteso coi prodotti | Alta | Medio | Il sito vende anche i prodotti: stessa energia, due ritorni |
| SEO lenta a produrre risultati | Alta | Basso | La conversione in Fase 1 arriva da LinkedIn/GitHub/referral; la SEO è rendita successiva |

---

## 16. Prossimi passi immediati

1. ⚠️ **Fix dominio (oggi)**: configurare il certificato per `manuelalbanese.it` + `www` (Netlify: aggiungere il custom domain e provisionare Let's Encrypt; o spostare il DNS su Vercel). Verificare con `curl -I https://manuelalbanese.it`.
2. **Validare questo documento**: tagline (§3.3), prezzi sì/no (§5.3), nome dei formati d'offerta (§5.4).
3. **Prenotare i contenuti minimi**: 30 minuti per raccogliere le metriche vere di eml_classificator e menuDigitale (servono numeri reali per i case study).
4. **Kickoff Fase 1**: scaffolding Next.js in questo repo (branch `develop`), design token da §8.2, primo deploy su URL di staging.

---

```
        ┌────────────────────────────────────────────────┐
        │  "Il sito è il primo deliverable che un         │
        │   potenziale cliente vede: deve essere          │
        │   costruito come i sistemi che vendo —          │
        │   veloce, verificabile, senza sorprese."        │
        └────────────────────────────────────────────────┘
```
