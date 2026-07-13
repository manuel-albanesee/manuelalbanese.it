import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/lib/data/process-steps";
import { FaqJsonLd } from "@/components/faq-json-ld";

export const metadata: Metadata = {
  title: "Come lavoro",
  description:
    "Il processo in 4 passi, i formati di collaborazione e le risposte alle domande più comuni prima di iniziare un progetto AI o web.",
};

const formats = [
  {
    name: "AI Feasibility Audit",
    line: "Linea AI · offerta d'ingresso",
    description:
      "Una settimana per capire se il tuo caso d'uso ha senso prima di investire in uno sviluppo completo: architettura proposta, stima di costi e rischi, raccomandazione onesta — anche quando la raccomandazione è \"non farlo\".",
    price: "Prezzo fisso, su richiesta",
  },
  {
    name: "Proof of Concept",
    line: "Linea AI",
    description:
      "Un prototipo funzionante sui tuoi dati reali, per validare l'approccio prima dell'impegno su un progetto completo.",
    price: "Prezzo fisso, su richiesta",
  },
  {
    name: "Progetto su misura",
    line: "Linea AI o Web",
    description:
      "Sviluppo completo, dal backend all'interfaccia, con checkpoint frequenti e deliverable tracciati.",
    price: "A preventivo, dopo la call",
  },
  {
    name: "Sito in pacchetto",
    line: "Linea Web",
    description:
      "Perimetro definito, tempi certi, nessuna sorpresa in fattura.",
    price: "A partire da, su richiesta",
  },
];

const faqs = [
  {
    q: "Perché dovrei fidarmi e non pensare che sia \"fuffa AI\"?",
    a: "Non ti chiedo di fidarti sulla parola: researcher è codice pubblico su GitHub, verificabile riga per riga. Ogni progetto che consegno arriva con un audit trail che documenta come è stato validato.",
  },
  {
    q: "Chi mantiene il sistema dopo la consegna?",
    a: "Consegno codice e documentazione pensati per restare comprensibili anche senza di me — non un sistema che solo io posso toccare. Se vuoi un accordo di manutenzione continuativa, se ne parla in fase di offerta.",
  },
  {
    q: "E il GDPR?",
    a: "Per i casi che lo richiedono lavoro con inferenza locale (Ollama) invece di mandare dati sensibili a terzi, ed è uno dei primi punti che affrontiamo nella call di fattibilità.",
  },
  {
    q: "Quanto costa e quanto ci vuole?",
    a: "Dipende dal perimetro — per questo la prima call serve a definirlo prima di parlare di numeri. Per l'AI uso formati a prezzo fisso (audit, PoC) proprio per ridurre l'incertezza iniziale.",
  },
  {
    q: "Dopo la consegna mi lasci solo?",
    a: "No: la documentazione e l'audit trail servono esattamente a questo, a lasciarti un sistema che il tuo team può capire e far evolvere anche senza di me.",
  },
];

export default function ComeLavoroPage() {
  return (
    <main className="flex flex-1 flex-col">
      <FaqJsonLd faqs={faqs} />
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="font-mono text-xs text-ink-2">come lavoro</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Quattro passi, niente sorprese
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-2">
            Lo stesso processo per un audit di fattibilità o per un progetto
            completo: trasparente dall&apos;inizio alla consegna.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t border-border pt-5">
                <span className="font-mono text-sm text-accent">
                  {step.number}
                </span>
                <h2 className="mt-2 font-display text-lg font-semibold">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm text-ink-2">{step.description}</p>
                <p className="mt-4 font-mono text-xs text-ink-2">
                  → {step.deliverable}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Formati di collaborazione
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {formats.map((format) => (
              <div
                key={format.name}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <p className="font-mono text-xs text-ink-2">{format.line}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {format.name}
                </h3>
                <p className="mt-2 text-sm text-ink-2">
                  {format.description}
                </p>
                <p className="mt-4 text-sm font-medium text-accent">
                  {format.price}
                </p>
              </div>
            ))}
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
            Iniziamo con una call di 30 minuti
          </h2>
          <Button href="/contatti" size="lg">
            Prenota una call
          </Button>
        </Container>
      </section>
    </main>
  );
}
