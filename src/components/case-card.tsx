import Link from "next/link";
import type { CaseStudy } from "@/content/cases";
import { getContent, localePath, type Lang } from "@/content/i18n";
import { Icon } from "./icons";
import { caseArt } from "./illustrations";
import { ToolBadge } from "./tool-badge";
import { Meta } from "./ui";

/** Selo de projeto confidencial. */
export function LockChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill border border-line px-2.5 py-0.5 font-mono text-meta uppercase text-ink-muted">
      <svg viewBox="0 0 16 16" className="size-3" fill="none" strokeWidth={1.6} aria-hidden>
        <rect x="3" y="7" width="10" height="7" rx="1.5" className="stroke-current" />
        <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" className="stroke-current" />
      </svg>
      {label}
    </span>
  );
}

/** Case em largura total na home: ilustração à esquerda, chamada à direita. */
export function CaseCard({ item, index, lang }: { item: CaseStudy; index: number; lang: Lang }) {
  const { ui } = getContent(lang);
  const Art = caseArt[item.art];
  const href = localePath(lang, `/cases/${item.slug}`);
  return (
    <article className="stack-card group relative mb-10 overflow-hidden rounded-card border border-line bg-surface shadow-card transition-colors hover:border-primary last:mb-0">
      <div className="grid md:grid-cols-12">
        <div className="overflow-hidden md:col-span-7">
          <div className="h-full transition-transform duration-700 ease-out-soft group-hover:scale-105">
            <Art lang={lang} />
          </div>
        </div>

        <div className="flex flex-col gap-5 p-6 md:col-span-5 md:p-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-title-2 font-medium text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Meta>{item.meta}</Meta>
            {item.confidential && <LockChip label={ui.cases.internal} />}
          </div>
          {item.award && (
            <span className="inline-flex items-center gap-2 self-start rounded-pill border border-accent-vivid bg-accent-soft py-1 pr-3 pl-1.5 text-body-sm font-semibold">
              <Icon name="trophy" className="size-6" />
              {item.award.title}
            </span>
          )}
          <h3 className="text-title-2 font-extrabold md:text-title-1">
            {/* O link cobre o cartão inteiro pelo ::after */}
            <Link href={href} className="after:absolute after:inset-0">
              {item.title}
            </Link>
          </h3>
          <p className="text-body text-ink-muted">{item.subtitle}</p>
          <p className="border-l-2 border-accent-vivid pl-4 text-body font-medium">{item.highlight}</p>

          <ul className="flex flex-wrap gap-2" aria-label={ui.cases.tools}>
            {item.tags.map((tag) => (
              <li key={tag}>
                <ToolBadge name={tag} />
              </li>
            ))}
          </ul>

          <span className="mt-auto inline-flex items-center gap-2 pt-2 text-body-sm font-semibold text-primary">
            {ui.cases.read}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
