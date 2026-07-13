import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Manuel Albanese, sviluppatore full-stack con focus sui sistemi AI: perché lavoro in modo deterministico e verificabile, e perché ho scelto di consegnare software completo invece di semplici demo.",
};

export default function ChiSonoPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="pt-16 pb-12 sm:pt-24">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div
            aria-hidden="true"
            className="flex size-20 shrink-0 items-center justify-center rounded-full bg-accent font-display text-2xl font-semibold text-accent-ink"
          >
            MA
          </div>
          <div>
            <p className="font-mono text-xs text-ink-2">chi sono</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Manuel Albanese
            </h1>
            <p className="mt-2 text-lg text-ink-2">
              Full-stack developer · AI engineering
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-2xl space-y-6 text-lg text-ink-2">
          <p>
            Sono uno sviluppatore full-stack con focus sui sistemi AI: progetto
            pipeline RAG, agenti LLM e soluzioni di inferenza locale, e
            costruisco applicazioni web complete dal backend
            all&apos;interfaccia con TypeScript, React, Next.js e Node.
          </p>
          <p>
            Il pezzo di AI che la maggior parte dei team salta è quello su cui
            mi concentro: riproducibilità, tracciabilità e governance. Un
            sistema che funziona in demo ma non si può verificare non è
            pronto per la produzione — per questo ogni progetto che consegno
            è pensato per essere deterministico dove serve determinismo, e
            auditabile sempre.
          </p>
          <p>
            Applico la stessa disciplina alla parte web: niente siti
            consegnati e abbandonati, ma processo, test e documentazione che
            restano comprensibili anche senza di me.
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Il codice, non solo le parole
            </h2>
            <p className="mt-2 max-w-md text-ink-2">
              researcher è pubblico su GitHub — puoi leggerlo prima ancora di
              scrivermi.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-11 items-center justify-center rounded-full border border-border text-ink-2 hover:text-ink"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-11 items-center justify-center rounded-full border border-border text-ink-2 hover:text-ink"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            Parliamo del tuo caso
          </h2>
          <Button href="/contatti" size="lg">
            Prenota una call
          </Button>
        </Container>
      </section>
    </main>
  );
}
