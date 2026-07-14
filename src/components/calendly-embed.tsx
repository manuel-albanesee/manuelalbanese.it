"use client";

import { useState } from "react";

export function CalendlyEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[560px] w-full overflow-hidden rounded-2xl border border-border sm:h-[640px] lg:h-[700px]">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface">
          <div className="size-6 animate-spin rounded-full border-2 border-border border-t-accent" />
          <p className="text-sm text-ink-2">Carico il calendario…</p>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        loading="eager"
        onLoad={() => setLoaded(true)}
        className="h-full w-full"
      />
    </div>
  );
}
