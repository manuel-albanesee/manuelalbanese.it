export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <p className="font-mono text-sm text-ink-2">manuelalbanese.it — in costruzione</p>
      <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        AI di cui ti puoi fidare.
        <br />
        Software che consegna risultati.
      </h1>
      <p className="max-w-xl text-lg text-ink-2">
        Il rebuild è in corso — fase per fase. Segui i progressi su{" "}
        <a
          href="https://github.com/manuel-albanesee/manuelalbanese.it"
          className="text-accent underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </main>
  );
}
