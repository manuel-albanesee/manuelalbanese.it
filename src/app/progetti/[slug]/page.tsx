import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaqJsonLd } from "@/components/faq-json-ld";
import { caseStudies } from "@/lib/data/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.headline,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col">
      <FaqJsonLd faqs={project.faqs} />
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <div className="flex items-center gap-3">
            <Badge>{project.category}</Badge>
            <span className="font-mono text-xs text-ink-2">
              {project.year}
            </span>
          </div>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.headline}
          </h1>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-mono text-xs text-ink-2">contesto</h2>
            <p className="mt-2 text-ink-2">{project.context}</p>
          </div>
          <div>
            <h2 className="font-mono text-xs text-ink-2">problema</h2>
            <p className="mt-2 text-ink-2">{project.problem}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            La soluzione
          </h2>
          <p className="mt-4 max-w-2xl text-ink-2">{project.solution}</p>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Come funziona
          </h2>
          <p className="mt-4 max-w-2xl text-ink-2">{project.howItWorks}</p>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Risultati
          </h2>
          <p className="mt-4 max-w-2xl text-ink-2">{project.results}</p>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-mono text-xs text-ink-2">stack</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
            {project.externalHref && (
              <Button href={project.externalHref} variant="secondary">
                Vedi il codice
              </Button>
            )}
          </div>

          <details className="group mt-10 rounded-2xl border border-border bg-surface p-5">
            <summary className="cursor-pointer list-none font-display font-semibold marker:content-none">
              ▸ Come l&apos;abbiamo verificato
            </summary>
            <p className="mt-3 text-sm text-ink-2">{project.verification}</p>
          </details>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Domande frequenti
          </h2>
          <div className="mt-6 space-y-3">
            {project.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-border bg-surface p-5"
              >
                <summary className="cursor-pointer list-none font-display font-semibold marker:content-none">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm text-ink-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            Hai un problema simile?
          </h2>
          <Button href="/contatti" size="lg">
            Prenota una call
          </Button>
        </Container>
      </section>
    </main>
  );
}
