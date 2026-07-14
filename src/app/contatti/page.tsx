import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Prenota una call di 30 minuti su Calendly, scrivimi via email o su LinkedIn: rispondo entro 24h lavorative, senza impegno.",
};

export default function ContattiPage() {
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
          <div className="flex flex-col gap-3 lg:col-span-2">
            <p className="font-mono text-xs text-ink-2">01 · canale primario</p>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src={siteConfig.calendlyUrl}
                title="Prenota una call con Manuel Albanese"
                loading="lazy"
                className="h-[720px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink-2"
            >
              <div>
                <p className="font-mono text-xs text-ink-2">02 · alternativa</p>
                <h2 className="mt-2 font-display text-lg font-semibold">
                  Email
                </h2>
                <p className="mt-2 text-sm text-ink-2">
                  Per chi preferisce scrivere due righe senza aprire un
                  calendario.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <EmailIcon className="size-4" />
                Scrivimi
              </span>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink-2"
            >
              <div>
                <p className="font-mono text-xs text-ink-2">03 · alternativa</p>
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
                <p className="font-mono text-xs text-ink-2">04 · il codice</p>
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
