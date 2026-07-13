import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Case study reali di sistemi AI e progetti web — con contesto, problema, soluzione e come ogni risultato è stato verificato.",
};

export default function ProgettiPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="font-mono text-xs text-ink-2">progetti</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Progetti reali, verificabili
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-2">
            Ogni case study documenta contesto, problema, soluzione e come il
            risultato è stato verificato — non solo l&apos;esito finale.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/progetti/${project.slug}`}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <Badge>{project.category}</Badge>
                  <span className="font-mono text-xs text-ink-2">
                    {project.year}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold">
                  {project.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-ink-2">
                  {project.headline}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="font-mono text-xs text-ink-2">
                      {tech}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
