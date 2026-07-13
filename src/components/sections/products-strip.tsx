import Link from "next/link";
import { Container } from "@/components/ui/container";
import { products } from "@/lib/data/products";

export function ProductsStrip() {
  return (
    <section className="border-y border-border bg-mono-bg py-20 sm:py-28">
      <Container>
        <p className="font-mono text-xs text-ink-2">i miei prodotti</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Costruisco prodotti AI miei: la tua garanzia che so consegnare
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink-2"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">
                  {product.name}
                </h3>
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
  );
}
