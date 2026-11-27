/**
 * Ícones pequenos de contato, de traço simples, desenhados para o site
 * (não são os logos oficiais das marcas). viewBox 24x24, herdam a cor do texto.
 */
type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Balão de conversa com telefone: WhatsApp. */
export function WhatsAppGlyph({ className = "size-5" }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path d="M9 8.5c0 3.6 2.9 6.5 6.5 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 0 1-2.3-2.3l.8-1-1-2Z" />
    </svg>
  );
}

/** Crachá: LinkedIn. */
export function ProfileGlyph({ className = "size-5" }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10v6M8 7.5v.01M12 16v-3.5a2 2 0 0 1 4 0V16M12 10v6" />
    </svg>
  );
}

/** Código: GitHub. */
export function CodeGlyph({ className = "size-5" }: P) {
  return (
    <svg {...base} className={className}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </svg>
  );
}

/** Corrente: Linktree. */
export function LinkGlyph({ className = "size-5" }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </svg>
  );
}

/** Pasta: cases. */
export function FolderGlyph({ className = "size-5" }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  );
}
