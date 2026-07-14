import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Prodotti",
  description:
    "Prodotti AI costruiti da zero, non solo consulenza: ContextFlow, Specification Documents AI e SocraticEngine — la prova che so consegnare software completo.",
};

export default function ProdottiPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="font-mono text-xs text-ink-2">i miei prodotti</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            La prova che so portare un prodotto dal design al lancio
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-2">
            Non solo consulenza: prodotti AI che costruisco, mantengo e porto
            sul mercato io stesso — la stessa disciplina che porto sul tuo
            progetto.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/prodotti/${product.slug}`}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-display text-lg font-semibold">
                    {product.name}
                  </h2>
                  <span className="font-mono text-[10px] text-ink-2">
                    {product.status === "beta" ? "private beta" : "in sviluppo"}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {product.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm text-ink-2">
                  {product.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.stack.map((tech) => (
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
