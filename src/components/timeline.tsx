import Image from "next/image";
import type { CareerItem } from "@/content/site";
import { Icon } from "./icons";
import { Reveal } from "./motion";
import { Meta } from "./ui";

function Card({ item }: { item: CareerItem }) {
  return (
    <div className="group rounded-card border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-vivid md:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-block rounded-pill bg-accent-soft px-2.5 py-0.5 font-mono text-meta whitespace-nowrap text-accent">
          {item.period}
        </span>
        {item.logos && (
          <span className="-mt-1 -mr-1 flex shrink-0 gap-2">
            {item.logos.map((logo, i) => (
              <span
                key={logo.src}
                className={`flex size-14 items-center justify-center overflow-hidden rounded-control border border-line bg-logo-tile shadow-card transition-transform duration-300 group-hover:-translate-y-0.5 ${
                  i % 2 === 0 ? "group-hover:-rotate-6" : "group-hover:rotate-6"
                }`}
              >
                <Image src={logo.src} alt={logo.alt} width={48} height={48} className="size-12 object-contain" />
              </span>
            ))}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-title-3 font-bold">{item.title}</h3>
      <p className="mt-1 text-body-sm">
        <span className="font-semibold">{item.role}</span>
        <span className="text-ink-muted"> · {item.company}</span>
      </p>
      <p className="mt-3 border-l-2 border-accent-vivid pl-3 text-body-sm text-ink-muted">{item.note}</p>
    </div>
  );
}

/**
 * Linha do tempo em zigue-zague: no desktop os cartões alternam de lado
 * em volta de uma linha tracejada com o ícone de cada fase.
 * No celular vira uma coluna única com a linha à esquerda.
 */
export function Timeline({ items, todayLabel }: { items: CareerItem[]; todayLabel: string }) {
  return (
    <ol className="relative">
      <span aria-hidden className="timeline-line absolute top-0 bottom-0 left-6 w-0.5 md:left-1/2 md:-translate-x-1/2" />
      {items.map((item, i) => {
        const left = i % 2 === 0;
        return (
          <li key={`${item.company}-${item.period}`} className="relative pb-8 last:pb-0 md:pb-4">
            <Reveal className="grid grid-cols-12 items-center gap-4 md:gap-8">
              {/* ícone na linha */}
              <span className="relative z-10 col-span-2 flex justify-start md:order-2 md:col-span-2 md:justify-center">
                <span className="flex size-12 items-center justify-center rounded-pill border-2 border-ink bg-surface transition-transform duration-300 hover:rotate-12 hover:scale-110">
                  <Icon name={item.icon} className="size-8" title={item.company} />
                </span>
              </span>
              {/* cartão: alterna de lado no desktop */}
              <div className={`col-span-10 md:col-span-5 ${left ? "md:order-1" : "md:order-3"}`}>
                <Card item={item} />
              </div>
              {/* espaço vazio do outro lado */}
              <div className={`hidden md:col-span-5 md:block ${left ? "md:order-3" : "md:order-1"}`}>
                {i === 0 && <Meta className="text-accent">{todayLabel}</Meta>}
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
