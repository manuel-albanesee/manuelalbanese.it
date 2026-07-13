import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const items = [
  "GDPR-first",
  "Standard ISO/IEEE",
  "AI verificabile",
  "AI in locale",
  "TypeScript",
  "Python",
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
