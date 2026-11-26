import type { ReactNode } from "react";
import { Reveal } from "./motion";

/** Rótulo em mono e caixa alta, no estilo de um KPI. */
export function Meta({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-meta uppercase text-ink-muted ${className}`}>{children}</span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-pill border border-line bg-surface-soft px-3 py-1 font-mono text-meta text-ink-muted transition-colors hover:border-accent-vivid hover:text-accent">
      {children}
    </span>
  );
}

type PillProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverse" | "inverse-outline";
  external?: boolean;
  arrow?: "right" | "up" | "down" | "external";
};

const pillStyles = {
  primary: "bg-primary text-primary-ink hover:bg-accent-vivid hover:text-on-accent",
  secondary: "border border-line bg-surface text-ink hover:border-primary hover:text-primary",
  inverse: "bg-primary-ink text-primary hover:bg-accent-vivid hover:text-on-accent",
  "inverse-outline": "border border-primary-ink text-primary-ink hover:bg-primary-ink hover:text-primary",
};

const arrows = {
  right: { glyph: "→", move: "group-hover:translate-x-1" },
  up: { glyph: "↑", move: "group-hover:-translate-y-1" },
  down: { glyph: "↓", move: "group-hover:translate-y-1" },
  external: { glyph: "↗", move: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5" },
};

/** Botão de ação com seta que se mexe no hover. */
export function Pill({ href, children, variant = "primary", external, arrow }: PillProps) {
  const a = arrows[arrow ?? (external ? "external" : "right")];
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-body-sm font-semibold transition-all ease-out-soft hover:-translate-y-0.5 ${pillStyles[variant]}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span aria-hidden className={`inline-block transition-transform ease-out-soft ${a.move}`}>
        {a.glyph}
      </span>
    </a>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  aside,
  soft = false,
  center = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  aside?: string;
  soft?: boolean;
  center?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-page-x py-section md:px-page-x-lg md:py-section-lg ${soft ? "bg-surface-soft" : ""}`}
    >
      <div className="mx-auto max-w-site">
        <Reveal
          group
          className={
            center
              ? "mx-auto flex max-w-reading flex-col items-center text-center"
              : "grid gap-6 md:grid-cols-12 md:items-end"
          }
        >
          <div className={center ? "" : "md:col-span-7"}>
            <Meta className={`flex items-center gap-3 text-primary ${center ? "justify-center" : ""}`}>
              <span aria-hidden className="h-0.5 w-8 bg-accent-vivid" />
              {eyebrow}
            </Meta>
            <h2 className="mt-3 text-title-1 font-extrabold md:text-display-compact">{title}</h2>
          </div>
          {aside && (
            <p className={`text-body text-ink-muted ${center ? "mt-4" : "md:col-span-5 md:col-start-8"}`}>{aside}</p>
          )}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
