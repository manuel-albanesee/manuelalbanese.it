import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaqJsonLd } from "@/components/faq-json-ld";

export const metadata: Metadata = {
  title: "Sviluppo Web",
  description:
    "Siti e web-app costruiti da zero con TypeScript, React e Next.js — perimetro chiaro, tempi certi, test veri, nessuna sorpresa dopo la consegna.",
};

const painsIntro =
  "I preventivi delle web agency restano opachi, con voci che spuntano solo a lavoro già iniziato. Il sito viene consegnato e poi abbandonato, senza nessuno che lo mantenga davvero. Si perde tempo in email ripetitive per chiarire cose che dovevano essere chiare fin dall'inizio. E troppo spesso il progetto arriva senza controlli: funziona finché nessuno lo tocca, poi si rompe in silenzio.";

const solutionPoints = [
  {
    title: "Perimetro fisso, prezzo chiaro",
    detail:
      "Sai cosa ricevi e quando, prima di iniziare — pacchetti \"a partire da\", non preventivi a sorpresa.",
  },
  {
    title: "Controllato prima della consegna",
    detail:
      "Controlli automatici verificano il sito prima che lo veda il primo cliente, così i problemi emergono prima del lancio, non dopo la prima segnalazione.",
  },
  {
    title: "Un progetto che resta comprensibile",
    detail:
      "Codice e documentazione pensati per restare gestibili anche senza di me, non un sistema che solo io posso toccare.",
  },
];

const techDetails = [
  {
    q: "Stack tecnico",
    a: "TypeScript, React e Next.js per il sito, un pannello di gestione contenuti dove serve aggiornare in autonomia, e protezioni di sicurezza sui dati quando il progetto lo richiede.",
  },
  {
    q: "Qualità e controlli",
    a: "Controlli automatici verificano sia la logica sia i percorsi che l'utente compie davvero sul sito — la stessa cura che metto nei sistemi AI, portata sul web.",
  },
  {
    q: "Cosa succede dopo la consegna",
    a: "Documentazione chiara e codice leggibile: se vuoi un accordo di manutenzione continuativa se ne parla in fase di offerta, ma il progetto non dipende dalla mia disponibilità futura.",
  },
];

const faqs = [
  {
    q: "Quanto costa un sito?",
    a: "Dipende dal perimetro — per questo uso pacchetti con scope definito e prezzo \"a partire da\", chiariti nella prima call prima di parlare di numeri esatti.",
  },
  {
    q: "Quanto tempo serve?",
    a: "Per un sito a pacchetto, l'obiettivo è settimane, non mesi — tempi concordati prima di iniziare, non stimati a lavoro in corso.",
  },
  {
    q: "Mi lasci solo dopo la consegna?",
    a: "No: ricevi codice e documentazione pensati per essere gestiti anche da altri, non un sistema chiuso che solo io posso toccare.",
  },
];

export default function SviluppoWebPage() {
  return (
    <main className="flex flex-1 flex-col">
      <FaqJsonLd faqs={faqs} />
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <Badge>linea secondaria</Badge>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Un sito che lavora per te, non un progetto abbandonato dopo la
            consegna
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-2">
            Siti e web-app costruiti da zero con TypeScript, React e
            Next.js — stessa disciplina di consegna dei progetti AI.
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
          <p className="mt-4 max-w-2xl text-lg text-ink-2">{painsIntro}</p>
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
              Prova: menuDigitale
            </h2>
            <p className="mt-2 max-w-md text-ink-2">
              Piattaforma di menu digitali per ristoranti: il locale aggiorna
              il menu da solo, con la sicurezza dei dati a posto e ogni
              aggiornamento controllato prima di andare online.
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
          <div className="mt-6 max-w-md rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-lg font-semibold">
              Sito in pacchetto
            </h3>
            <p className="mt-2 text-sm text-ink-2">
              Perimetro definito, tempi certi, nessuna sorpresa in fattura.
            </p>
            <p className="mt-4 text-sm font-medium text-accent">
              A partire da, su richiesta
            </p>
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
            Raccontami il tuo progetto
          </h2>
          <p className="max-w-md text-ink-2">
            30 minuti, nessun impegno, risposta onesta sui tempi.
          </p>
          <Button href="/contatti" size="lg">
            Prenota una call
          </Button>
        </Container>
      </section>
    </main>
  );
}
