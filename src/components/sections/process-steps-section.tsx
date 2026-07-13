import { Container } from "@/components/ui/container";
import { processSteps } from "@/lib/data/process-steps";

export function ProcessStepsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="font-mono text-xs text-ink-2">come lavoro</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Quattro passi, niente sorprese
        </h2>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="border-t border-border pt-5"
            >
              <span className="font-mono text-sm text-accent">
                {step.number}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-2">{step.description}</p>
              <p className="mt-4 font-mono text-xs text-ink-2">
                → {step.deliverable}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
