import type { CaseStudy } from "@/content/site";
import { caseArt } from "./illustrations";
import { Meta, Tag } from "./ui";

/** Case em largura total: ilustração à esquerda, história à direita. */
export function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  const Art = caseArt[item.art];
  return (
    <article className="stack-card group mb-10 overflow-hidden rounded-card border border-line bg-surface shadow-card last:mb-0">
      <div className="grid md:grid-cols-12">
        <div className="overflow-hidden md:col-span-7">
          <div className="h-full transition-transform duration-700 ease-out-soft group-hover:scale-105">
            <Art />
          </div>
        </div>

        <div className="flex flex-col gap-5 p-6 md:col-span-5 md:p-10">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-title-2 font-medium text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Meta>{item.context}</Meta>
          </div>
          <h3 className="text-title-2 font-extrabold md:text-title-1">{item.title}</h3>
          <p className="text-body text-ink-muted">{item.summary}</p>
          <p className="border-l-2 border-accent-vivid pl-4 text-body font-medium">{item.highlight}</p>

          <details className="group/details text-body-sm">
            <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-semibold text-primary">
              Problema e o que eu fiz
              <span aria-hidden className="transition-transform group-open/details:rotate-90">
                →
              </span>
            </summary>
            <dl className="mt-4 space-y-3 text-ink-muted">
              <div>
                <dt>
                  <Meta>Problema</Meta>
                </dt>
                <dd className="mt-1">{item.problem}</dd>
              </div>
              <div>
                <dt>
                  <Meta>O que fiz</Meta>
                </dt>
                <dd className="mt-1">{item.whatIDid}</dd>
              </div>
            </dl>
          </details>

          <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Ferramentas">
            {item.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
