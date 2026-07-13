import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { footerNav, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-lg font-semibold">
              MA<span className="text-accent">·</span>
            </Link>
            <p className="mt-3 text-sm text-ink-2">{siteConfig.tagline}</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-full border border-border text-ink-2 hover:text-ink"
              >
                <GitHubIcon className="size-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-border text-ink-2 hover:text-ink"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-1">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-2 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-ink-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Manuel Albanese. Tutti i diritti riservati.</p>
          <p>Questo sito è conforme WCAG 2.2 AA. Anche questo è un deliverable.</p>
        </div>
      </Container>
    </footer>
  );
}
