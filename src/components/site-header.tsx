"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/content/site";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const saved = document.documentElement.dataset.theme;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function ThemeToggle() {
  // null até montar: o servidor não sabe o tema do visitante.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Lê o tema já aplicado pelo script do <head> (sem piscar).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme());
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next;
        localStorage.setItem("theme", next);
        setTheme(next);
      }}
      className="rounded-pill px-3 py-2 font-mono text-meta uppercase text-ink-muted transition-colors hover:text-ink"
      aria-label={theme ? `Mudar para tema ${next === "dark" ? "escuro" : "claro"}` : "Mudar tema"}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

/** Topo com menu em pílula que destaca a seção visível. */
export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/80 px-page-x backdrop-blur-md md:px-page-x-lg">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4">
        <a href="#inicio" className="font-bold tracking-tight" onClick={() => setActive(null)}>
          {profile.name}
        </a>

        <nav
          aria-label="Seções"
          className="hidden items-center gap-1 rounded-pill border border-line bg-surface/70 p-1 text-body-sm md:flex"
        >
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-pill px-4 py-1.5 transition-colors duration-300 ${
                  isActive ? "bg-primary text-primary-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contato"
            className="rounded-pill bg-primary px-4 py-2 text-body-sm font-semibold text-primary-ink transition-colors hover:bg-accent-vivid hover:text-on-accent md:hidden"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}
