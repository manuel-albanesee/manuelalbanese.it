import Link from "next/link";
import { Container } from "@/components/ui/container";

export function AboutTeaser() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div
          aria-hidden="true"
          className="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xl font-semibold text-accent-ink"
        >
          MA
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold">
            Manuel Albanese
          </h2>
          <p className="mt-2 max-w-xl text-ink-2">
            Sviluppatore full-stack con focus sui sistemi AI. Costruisco
            soluzioni AI di cui ti puoi fidare e applicazioni web complete,
            dal motore all&apos;interfaccia — con la stessa cura e trasparenza
            in entrambi i mondi.
          </p>
          <Link
            href="/chi-sono"
            className="mt-4 inline-block text-sm font-medium text-accent underline underline-offset-4"
          >
            Chi sono →
          </Link>
        </div>
      </Container>
    </section>
  );
}
