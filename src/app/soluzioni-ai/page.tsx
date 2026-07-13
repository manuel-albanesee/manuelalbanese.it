import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaqJsonLd } from "@/components/faq-json-ld";

export const metadata: Metadata = {
  title: "Soluzioni AI",
  description:
    "Pipeline RAG, agenti LLM e inferenza locale progettati per essere deterministici, verificabili e conformi agli standard — non un black-box che spera di avere ragione.",
};

const pains = [
  "Il chatbot risponde cose inventate ai vostri clienti, e nessuno se ne accorge finché non è tardi",
  "I costi delle API AI sono imprevedibili e crescono senza controllo",
  "I dati sensibili finiscono su servizi di terzi, con problemi GDPR non affrontati",
  "Nessuno in azienda può spiegare perché il sistema ha dato quella risposta",
];

const solutionPoints = [
  {
    title: "RAG con citazioni obbligatorie",
    detail:
      "Se la fonte non c'è, il sistema dice \"non lo so\" — non inventa. Ogni risposta è tracciabile fino al documento di origine.",
  },
  {
    title: "Risultati ripetibili dove serve",
    detail:
      "Stesso dato in ingresso, stesso risultato in uscita: dove servono decisioni affidabili — smistare, estrarre, decidere — il sistema non deve mai improvvisare.",
  },
  {
    title: "Inferenza locale con Ollama",
    detail:
      "Quando i dati non possono uscire dal perimetro aziendale, il modello gira dentro il perimetro.",
  },
];

const techDetails = [
  {
    q: "Standard e conformità",
    a: "Requisiti tracciati secondo ISO/IEC/IEEE 29148, design documentato secondo IEEE 1016. Non è burocrazia: è quello che rende un sistema AI auditabile da chi non l'ha costruito.",
  },
  {
    q: "Stack tecnico",
    a: "Python e TypeScript per le pipeline, Ollama per l'inferenza locale, architetture RAG con retrieval verificabile, agenti LLM con guardrail espliciti.",
  },
  {
    q: "Come verifico il mio lavoro",
    a: "Ogni sistema tiene traccia di cosa fa: risultati ripetibili, decisioni documentate e prove su casi reali prima della consegna, non solo negli scenari più semplici.",
  },
];

const faqs = [
  {
    q: "Partiamo già con un progetto completo?",
    a: "No — si parte con un AI Feasibility Audit a prezzo fisso: una settimana per capire se il caso d'uso ha senso, con una raccomandazione onesta anche quando è \"non fatelo\".",
  },
  {
    q: "I nostri dati restano nostri?",
    a: "Dove serve, uso inferenza locale con Ollama invece di mandare dati sensibili a servizi di terzi. Ne parliamo esplicitamente nella call iniziale.",
  },
  {
    q: "Come faccio a fidarmi che il sistema funzioni davvero?",
    a: "Non devi fidarti sulla parola: researcher è codice pubblico su GitHub, e ogni progetto arriva con un audit trail che documenta come è stato validato.",
  },
];

export default function SoluzioniAiPage() {
  return (
    <main className="flex flex-1 flex-col">
      <FaqJsonLd faqs={faqs} />
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <Badge>linea primaria</Badge>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Sistemi AI che puoi verificare, non a cui devi credere sulla
            parola
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-2">
            Pipeline RAG, agenti LLM e inferenza locale progettati per essere
            deterministici, verificabili e conformi agli standard.
          </p>
          <div className="mt-8">
            <Button href="/contatti" size="lg">
              Prenota una call di 30&apos;
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Il problema
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {pains.map((pain) => (
              <li
                key={pain}
                className="rounded-2xl border border-border bg-surface p-5 text-ink-2"
              >
                {pain}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            La soluzione
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {solutionPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-display text-lg font-semibold">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-ink-2">{point.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Dettaglio tecnico
          </h2>
          <div className="mt-6 space-y-3">
            {techDetails.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-surface p-5"
              >
                <summary className="cursor-pointer list-none font-display font-semibold marker:content-none">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-ink-2">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Prova: researcher
            </h2>
            <p className="mt-2 max-w-md text-ink-2">
              Una pipeline di ricerca open source che collega ogni risposta a
              fonti reali e controllabili — codice pubblico, non solo
              promesse.
            </p>
          </div>
          <Button href="/progetti" variant="secondary">
            Vedi i progetti
          </Button>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Formati & prezzi
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">
                AI Feasibility Audit
              </h3>
              <p className="mt-2 text-sm text-ink-2">
                1 settimana, prezzo fisso. Report di fattibilità con
                architettura proposta e raccomandazione onesta.
              </p>
              <p className="mt-4 text-sm font-medium text-accent">
                Prezzo fisso, su richiesta
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">
                Proof of Concept
              </h3>
              <p className="mt-2 text-sm text-ink-2">
                Prototipo funzionante sui vostri dati reali, per validare
                l&apos;approccio.
              </p>
              <p className="mt-4 text-sm font-medium text-accent">
                Prezzo fisso, su richiesta
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">
                Progetto su misura
              </h3>
              <p className="mt-2 text-sm text-ink-2">
                Sviluppo completo con checkpoint frequenti e deliverable
                tracciati.
              </p>
              <p className="mt-4 text-sm font-medium text-accent">
                A preventivo, dopo la call
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Domande frequenti
          </h2>
          <dl className="mt-8 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-t border-border pt-5">
                <dt className="font-display text-lg font-semibold">
                  {faq.q}
                </dt>
                <dd className="mt-2 max-w-2xl text-ink-2">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            Portami il tuo caso d&apos;uso
          </h2>
          <p className="max-w-md text-ink-2">
            Ti dico se ha senso — 30 minuti, nessun impegno.
          </p>
          <Button href="/contatti" size="lg">
            Prenota una call
          </Button>
        </Container>
      </section>
    </main>
  );
}
