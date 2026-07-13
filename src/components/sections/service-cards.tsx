import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function ServiceCards() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-6 lg:grid-cols-5">
        <Link
          href="/soluzioni-ai"
          className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-ink-2 lg:col-span-3"
        >
          <div>
            <p className="font-mono text-xs text-ink-2">01 · linea primaria</p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              Soluzioni AI
            </h2>
            <p className="mt-4 max-w-md text-ink-2">
              Sistemi AI progettati per essere affidabili e verificabili:
              puoi sempre controllare da dove arriva ogni risposta, invece di
              fidarti di una scatola nera che spera di avere ragione.
            </p>
          </div>
          <span className="mt-8 inline-flex items-center gap-2 font-medium text-accent">
            Scopri le soluzioni AI
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>

        <Link
          href="/sviluppo-web"
          className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-ink-2 lg:col-span-2"
        >
          <div>
            <p className="font-mono text-xs text-ink-2">02 · linea secondaria</p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              Sviluppo Web
            </h2>
            <p className="mt-4 text-ink-2">
              Siti e web-app costruiti da zero — veloci, curati e affidabili,
              con la stessa disciplina di consegna dei progetti AI.
            </p>
          </div>
          <span className="mt-8 inline-flex items-center gap-2 font-medium text-accent">
            Scopri lo sviluppo web
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </Container>
    </section>
  );
}
