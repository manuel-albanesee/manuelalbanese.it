"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setOpen(false)}
        >
          MA<span className="text-accent">·</span>
        </Link>

        <nav
          aria-label="Principale"
          className="hidden items-center gap-8 md:flex"
        >
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-ink",
                  active ? "text-ink font-medium" : "text-ink-2",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="/contatti" size="sm">
              Prenota una call
            </Button>
          </div>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Apri il menu"
                className="flex size-9 items-center justify-center rounded-full border border-border text-ink md:hidden"
              >
                <Menu className="size-4" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm md:hidden" />
              <Dialog.Content
                className="fixed inset-0 z-50 flex flex-col p-6 md:hidden"
                aria-describedby={undefined}
              >
                <div className="flex h-16 items-center justify-between">
                  <Dialog.Title asChild>
                    <span className="font-display text-lg font-semibold">
                      MA<span className="text-accent">·</span>
                    </span>
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Chiudi il menu"
                      className="flex size-9 items-center justify-center rounded-full border border-border text-ink"
                    >
                      <X className="size-4" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav
                  aria-label="Principale (mobile)"
                  className="mt-8 flex flex-1 flex-col gap-1"
                >
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-border py-4 font-display text-2xl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <Button href="/contatti" size="lg" onClick={() => setOpen(false)}>
                  Prenota una call
                </Button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
