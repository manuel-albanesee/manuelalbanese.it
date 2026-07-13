import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const trace = [
  { label: "requirements", detail: "ISO/IEC/IEEE 29148, traceable" },
  { label: "design", detail: "IEEE 1016, every choice anchored" },
  { label: "ai context", detail: "deterministic, fully auditable" },
  { label: "research", detail: "citation-backed, reproducible" },
];

export function Hero() {
  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            AI di cui ti puoi fidare.
            <br />
            Software che consegna risultati.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-2">
            Progetto sistemi AI deterministici e verificabili — RAG, agenti
            LLM, inferenza locale — e li consegno come software completo, dal
            backend all&apos;interfaccia.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contatti" size="lg">
              Prenota una call di 30&apos;
            </Button>
            <Button href="/progetti" variant="secondary" size="lg">
              Vedi i progetti
            </Button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="rounded-2xl border border-border bg-mono-bg p-6 font-mono text-sm"
        >
          <p className="text-ink-2">$ manuel --trace</p>
          <ul className="mt-4 space-y-2">
            {trace.map((line) => (
              <li key={line.label} className="flex gap-3">
                <span className="text-ok">[ok]</span>
                <span className="text-ink-2">
                  <span className="text-ink">{line.label}</span> → {line.detail}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-ink-2">
            $ every system ships with its own audit trail{" "}
            <span className="text-accent">█</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
