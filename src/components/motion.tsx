"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Revela o conteúdo quando ele entra na tela.
 * group = true anima os filhos diretos em sequência.
 */
export function Reveal({
  children,
  as: Tag = "div",
  group = false,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  group?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${group ? "reveal-group" : "reveal"} ${className}`}>
      {children}
    </Tag>
  );
}

/** Conta de 0 até o valor quando o número aparece na tela. */
export function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let frame = 0;
    el.textContent = `0${suffix}`;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(eased * to)}${suffix}`;
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, suffix, duration]);

  // O HTML do servidor já traz o valor final: sem JS, o número aparece certo.
  return (
    <span ref={ref}>
      {to}
      {suffix}
    </span>
  );
}

/**
 * Pilha de cartões: cada cartão gruda no topo e encolhe um pouco
 * conforme o próximo sobe por cima dele.
 */
export function Stack({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const cards = Array.from(root.children) as HTMLElement[];
    let frame = 0;

    const update = () => {
      frame = 0;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const cardTop = card.getBoundingClientRect().top;
        const nextTop = next.getBoundingClientRect().top;
        const height = card.offsetHeight || 1;
        // 0 quando o próximo ainda está longe; 1 quando já cobriu este cartão.
        const shrink = Math.min(Math.max(1 - (nextTop - cardTop) / height, 0), 1);
        card.style.setProperty("--shrink", shrink.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={`stack ${className}`}>
      {children}
    </div>
  );
}
