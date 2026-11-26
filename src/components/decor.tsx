/** Fundo da abertura: duas formas desfocadas em movimento. */
export function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="blob blob-a -top-32 -left-24 size-96 bg-primary" />
      <div className="blob blob-b top-24 -right-16 size-80 bg-accent-vivid" />
    </div>
  );
}

/** Barra fina no topo que acompanha a leitura da página. */
export function ScrollProgress() {
  return (
    <div
      aria-hidden
      className="scroll-progress fixed inset-x-0 top-0 z-20 h-1 bg-accent-vivid"
    />
  );
}
