import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTASection() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl font-display text-3xl font-semibold sm:text-4xl">
          Parliamo del tuo caso
        </h2>
        <p className="max-w-md text-ink-2">
          30 minuti, nessun impegno, risposta onesta — anche se la risposta è
          &quot;non fa per te&quot;.
        </p>
        <Button href="/contatti" size="lg">
          Prenota una call
        </Button>
      </Container>
    </section>
  );
}
