"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { getContent, localePath, switchPath, type Lang } from "@/content/i18n";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const saved = document.documentElement.dataset.theme;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </svg>
  );
}

/** Dica que aparece no hover e no foco do teclado (o nome acessível fica no aria-label). */
function Tip({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute top-full right-0 mt-2 rounded-control bg-ink px-2.5 py-1 text-body-sm whitespace-nowrap text-bg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {children}
    </span>
  );
}

/** Botão redondo de tema: lua no claro, sol no escuro. */
function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  // null até montar: o servidor não sabe o tema do visitante.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Lê o tema já aplicado pelo script do <head> (sem piscar).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme());
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = next === "dark" ? toDark : toLight;
  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next;
        localStorage.setItem("theme", next);
        setTheme(next);
      }}
      aria-label={label}
      className="group relative flex size-9 items-center justify-center rounded-pill text-ink-muted transition-colors hover:bg-surface-soft hover:text-ink"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      <Tip>{label}</Tip>
    </button>
  );
}

/** Troca de idioma: mostra o idioma de destino ("EN" no site em português). */
function LangToggle({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const to: Lang = lang === "pt" ? "en" : "pt";
  const { ui } = getContent(lang);
  return (
    <a
      href={switchPath(pathname, to)}
      hrefLang={to === "en" ? "en" : "pt-BR"}
      lang={to === "en" ? "en" : "pt-BR"}
      aria-label={ui.header.switchLangLabel}
      className="group relative flex h-9 min-w-9 items-center justify-center rounded-pill px-2.5 font-mono text-body-sm font-medium text-ink-muted transition-colors hover:bg-surface-soft hover:text-ink"
    >
      {ui.header.switchLang}
      <Tip>{ui.header.switchLangLabel}</Tip>
    </a>
  );
}

/** Topo com menu em pílula: seções, idioma e tema no mesmo grupo. */
export function SiteHeader({ lang, current }: { lang: Lang; current?: string }) {
  const { nav, profile, ui } = getContent(lang);
  const home = localePath(lang);
  // Nas páginas de case, `current` fixa o item ativo; na home, o scroll decide.
  const [active, setActive] = useState<string | null>(current ?? null);

  useEffect(() => {
    if (current) return;
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [current, nav]);

  const controls = (
    <>
      <span aria-hidden className="mx-1 h-5 w-px bg-line" />
      <LangToggle lang={lang} />
      <ThemeToggle toDark={ui.header.toDark} toLight={ui.header.toLight} />
    </>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/80 px-page-x backdrop-blur-md md:px-page-x-lg">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4">
        <Link href={home} className="font-bold tracking-tight">
          {profile.name}
        </Link>

        {/* Desktop: seções + idioma + tema na mesma pílula */}
        <nav
          aria-label={ui.header.sections}
          className="hidden items-center gap-1 rounded-pill border border-line bg-surface/70 p-1 text-body-sm md:flex"
        >
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={`${home}#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-pill px-4 py-1.5 transition-colors duration-300 ${
                  isActive ? "bg-primary text-primary-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          {controls}
        </nav>

        {/* Celular: idioma + tema numa pílula compacta, e o contato em destaque */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center rounded-pill border border-line bg-surface/70 p-1">
            <LangToggle lang={lang} />
            <ThemeToggle toDark={ui.header.toDark} toLight={ui.header.toLight} />
          </div>
          <Link
            href={`${home}#contato`}
            className="rounded-pill bg-primary px-4 py-2 text-body-sm font-semibold text-primary-ink transition-colors hover:bg-accent-vivid hover:text-on-accent"
          >
            {ui.header.contact}
          </Link>
        </div>

        {/* Espaço do lado direito no desktop, para o nome ficar à esquerda e a pílula centralizada */}
        <span aria-hidden className="hidden w-24 md:block" />
      </div>
    </header>
  );
}
