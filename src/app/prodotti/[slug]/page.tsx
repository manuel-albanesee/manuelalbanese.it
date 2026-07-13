import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const isBeta = product.status === "beta";

  return (
    <main className="flex flex-1 flex-col">
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <span className="font-mono text-xs text-ink-2">
            {isBeta ? "private beta" : "in sviluppo"}
          </span>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-accent">
            {product.tagline}
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-2xl">
          <p className="text-lg text-ink-2">{product.description}</p>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2 className="font-mono text-xs text-ink-2">stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {product.stack.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            {isBeta
              ? "Vuoi entrare in private beta?"
              : "Vuoi seguire lo sviluppo?"}
          </h2>
          <p className="max-w-md text-ink-2">
            {isBeta
              ? "Scrivimi per una demo o per discutere l'architettura."
              : "Il codice è privato, ma sono felice di mostrare una demo o parlare dell'architettura."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contatti" size="lg">
              Richiedi una demo
            </Button>
            <Button
              href={product.href}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="lg"
            >
              Vedi la panoramica su GitHub
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
