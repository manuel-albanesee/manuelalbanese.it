import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { projectsPreview } from "@/lib/data/projects-preview";

export function ProjectsPreviewSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-ink-2">la prova</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Progetti reali, verificabili
            </h2>
          </div>
          <Button href="/progetti" variant="secondary">
            Vedi tutti i progetti
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projectsPreview.map((project) => (
            <Link
              key={project.slug}
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noreferrer" : undefined}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink-2"
            >
              <Badge className="w-fit">{project.category}</Badge>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-2">{project.summary}</p>
              <p className="mt-4 border-t border-border pt-4 text-sm text-ok">
                {project.proof}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs text-ink-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
