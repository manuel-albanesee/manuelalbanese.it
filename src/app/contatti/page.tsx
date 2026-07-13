import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Prenota una call di 30 minuti o scrivimi su LinkedIn: rispondo entro 24h lavorative, senza impegno.",
};

export default function ContattiPage() {
  const hasCalCom = siteConfig.calComHandle.length > 0;

  return (
    <main className="flex flex-1 flex-col">
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="font-mono text-xs text-ink-2">contatti</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Parliamo del tuo caso
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-2">
            30 minuti, nessun impegno, risposta onesta — anche se la
            risposta è &quot;non fa per te&quot;.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-6 lg:grid-cols-3">
          {hasCalCom ? (
            <div className="overflow-hidden rounded-2xl border border-border lg:col-span-2">
              <iframe
                src={`https://cal.com/${siteConfig.calComHandle}?embed=true`}
                title="Prenota una call con Manuel Albanese"
                loading="lazy"
                className="h-[720px] w-full"
              />
            </div>
          ) : (
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-ink-2 lg:col-span-2"
            >
              <div>
                <p className="font-mono text-xs text-ink-2">
                  01 · canale primario
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold">
                  Scrivimi su LinkedIn
                </h2>
                <p className="mt-4 max-w-md text-ink-2">
                  Raccontami in due righe il tuo caso: rispondo entro 24h
                  lavorative e, se ha senso, fissiamo una call di 30 minuti.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-medium text-accent">
                <LinkedInIcon className="size-4" />
                Apri LinkedIn
              </span>
            </a>
          )}

          <div className="flex flex-col gap-6">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink-2"
            >
              <div>
                <p className="font-mono text-xs text-ink-2">
                  {hasCalCom ? "02 · canale diretto" : "02 · alternativa"}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold">
                  LinkedIn
                </h2>
                <p className="mt-2 text-sm text-ink-2">
                  Per chi preferisce annusare il profilo prima di scrivere.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <LinkedInIcon className="size-4" />
                Apri LinkedIn
              </span>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink-2"
            >
              <div>
                <p className="font-mono text-xs text-ink-2">03 · il codice</p>
                <h2 className="mt-2 font-display text-lg font-semibold">
                  GitHub
                </h2>
                <p className="mt-2 text-sm text-ink-2">
                  researcher è pubblico: leggi il codice prima di scrivermi.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <GitHubIcon className="size-4" />
                Apri GitHub
              </span>
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
