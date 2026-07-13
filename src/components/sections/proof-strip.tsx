import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const items = [
  "ISO/IEC/IEEE 29148",
  "IEEE 1016",
  "GDPR-first",
  "TypeScript",
  "Python",
  "RAG",
  "Ollama",
  "Next.js",
];

export function ProofStrip() {
  return (
    <section className="border-y border-border py-8">
      <Container>
        <ul className="flex flex-wrap justify-center gap-3">
          {items.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
