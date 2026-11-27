import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy, Figure } from "@/content/cases";
import { getContent, localePath, type Lang } from "@/content/i18n";
import { LockChip } from "./case-card";
import { Icon } from "./icons";
import { caseArt } from "./illustrations";
import { CountUp, Reveal } from "./motion";
import { ProcessSteps } from "./process-steps";
import { ToolBadge } from "./tool-badge";
import { Meta } from "./ui";

/** Linha do case: rótulo à esquerda, conteúdo à direita (padrão de leitura). */
function Row({ id, label, children }: { id?: string; label: string; children: ReactNode }) {
  return (
    <Reveal as="section" id={id} className="grid scroll-mt-28 gap-4 md:grid-cols-12 md:gap-8">
      <Meta className="pt-1.5 md:col-span-3">{label}</Meta>
      <div className="md:col-span-9 lg:col-span-8">{children}</div>
    </Reveal>
  );
}

/** Número grande: conta até o valor quando é inteiro; mostra direto quando tem unidade. */
function KpiValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  if (match && match[1].length <= 3) {
    return <CountUp to={Number(match[1])} suffix={match[2]} />;
  }
  return <>{value}</>;
}

function FigureBlock({ figure, lang }: { figure: Figure; lang: Lang }) {
  if (figure.kind === "art") {
    const Art = caseArt[figure.art];
    return (
      <figure className="mt-8">
        <div className="overflow-hidden rounded-card border border-line">
          <Art lang={lang} />
        </div>
        <figcaption className="mt-3 text-body-sm text-ink-muted">{figure.caption}</figcaption>
      </figure>
    );
  }
  return (
    <figure className="mt-8">
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {figure.steps.map((step, i) => (
          <li
            key={step.label}
            className="group relative rounded-card border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-vivid"
          >
            <div className="flex items-center justify-between">
              <Icon name={step.icon} className="size-10 transition-transform duration-300 group-hover:-rotate-6" />
              <span className="font-mono text-meta text-ink-muted">0{i + 1}</span>
            </div>
            <p className="mt-4 font-bold">{step.label}</p>
            <p className="mt-1 text-body-sm text-ink-muted">{step.text}</p>
            {i < figure.steps.length - 1 && (
              <span
                aria-hidden
                className="absolute top-1/2 -right-3 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-pill bg-accent-vivid text-body-sm text-on-accent lg:flex"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-body-sm text-ink-muted">{figure.caption}</figcaption>
    </figure>
  );
}

export function CaseHeader({ item, lang }: { item: CaseStudy; lang: Lang }) {
  const { ui } = getContent(lang);
  const Art = caseArt[item.art];
  return (
    <header className="relative isolate px-page-x pt-10 md:px-page-x-lg md:pt-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-a -top-40 right-0 size-96 bg-accent-vivid" />
        <div className="blob blob-b top-20 -left-32 size-80 bg-primary" />
      </div>
      <div className="mx-auto max-w-site">
        <Link
          href={`${localePath(lang)}#projetos`}
          className="group inline-flex items-center gap-2 text-body-sm text-ink-muted transition-colors hover:text-primary"
        >
          <span aria-hidden className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          {ui.cases.back}
        </Link>

        <div className="stagger mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Meta>{item.meta}</Meta>
            <h1 className="mt-3 text-display-compact font-extrabold md:text-display">{item.title}</h1>
            <p className="mt-4 max-w-reading text-body-lg text-ink-muted">{item.subtitle}</p>
            {item.award && (
              <a
                href={item.award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex max-w-reading items-center gap-4 rounded-card border border-accent-vivid bg-accent-soft p-4 transition-transform hover:-translate-y-0.5"
              >
                <Icon name="trophy" className="size-12 shrink-0" />
                <span>
                  <span className="block font-bold">{item.award.title}</span>
                  <span className="block text-body-sm text-ink-muted">{item.award.detail}</span>
                </span>
                <span aria-hidden className="ml-auto text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            )}
            {item.confidential && (
              <div className="mt-6 flex max-w-reading items-start gap-3 rounded-control border border-line bg-surface/70 p-4 text-body-sm text-ink-muted">
                <LockChip label={ui.cases.internal} />
                <p>{item.confidential}</p>
              </div>
            )}
          </div>
          <dl className="space-y-5 lg:col-span-4 lg:pt-8">
            <div>
              <dt>
                <Meta className="text-primary">{ui.cases.role}</Meta>
              </dt>
              <dd className="mt-1 text-body-sm font-medium">{item.role}</dd>
            </div>
            <div>
              <dt>
                <Meta className="text-primary">{ui.cases.focus}</Meta>
              </dt>
              <dd className="mt-1 text-body-sm font-medium">{item.focus}</dd>
            </div>
          </dl>
        </div>

        <div className="stagger mt-12">
          <div className="overflow-hidden rounded-card border border-line shadow-card">
            <Art lang={lang} />
          </div>
        </div>
      </div>
    </header>
  );
}

export function CaseBody({ item, lang }: { item: CaseStudy; lang: Lang }) {
  const { ui } = getContent(lang);
  const chips = [
    ...(item.steps ? [{ id: "processo", label: ui.cases.process }] : []),
    { id: "impacto", label: ui.cases.impact },
    ...item.sections.map((s) => ({ id: s.id, label: s.label })),
    ...(item.links ? [{ id: "links", label: ui.cases.links }] : []),
  ];

  return (
    <div className="mx-auto max-w-site space-y-20 px-page-x py-section md:space-y-28 md:px-page-x-lg md:py-section-lg">
      {/* Resumo */}
      <Row label={ui.cases.summary}>
        <p className="text-title-2 font-semibold">{item.lead}</p>
        <div className="mt-6 space-y-4 text-body text-ink-muted">
          {item.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mt-8">
          <Meta>{ui.cases.inThisCase}</Meta>
          <ul className="mt-3 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li key={chip.id}>
                <a
                  href={`#${chip.id}`}
                  className="inline-block rounded-pill border border-line bg-surface px-3 py-1 text-body-sm transition-colors hover:border-primary hover:text-primary"
                >
                  {chip.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Row>

      {/* Ferramentas */}
      <Row label={ui.cases.tools}>
        <ul className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li key={tag}>
              <ToolBadge name={tag} />
            </li>
          ))}
        </ul>
      </Row>

      {/* Números */}
      <Reveal
        group
        className={`grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 ${
          item.kpis.length >= 4 ? "lg:grid-cols-4" : item.kpis.length === 3 ? "lg:grid-cols-3" : ""
        }`}
      >
        {item.kpis.map((kpi) => (
          <div key={kpi.label} className="bg-surface p-6 md:p-8">
            <p className="text-kpi font-extrabold text-accent">
              <KpiValue value={kpi.value} />
            </p>
            <p className="mt-3 text-body-sm text-ink-muted">{kpi.label}</p>
          </div>
        ))}
      </Reveal>

      {/* Processo */}
      {item.steps && (
        <Row id="processo" label={ui.cases.process}>
          <h2 className="text-title-1 font-extrabold">{ui.cases.processTitle(item.steps.length)}</h2>
          <div className="mt-8">
            <ProcessSteps
              steps={item.steps}
              hint={ui.cases.stepsHint}
              label={ui.cases.stepsLabel}
              stepOf={item.steps.map((_, i) => ui.cases.stepOf(i + 1, item.steps!.length))}
            />
          </div>
        </Row>
      )}

      {/* Impacto */}
      <Row id="impacto" label={ui.cases.impact}>
        <h2 className="text-title-1 font-extrabold">{item.impact.headline}</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
          {[item.impact.left, item.impact.right].map((box) => (
            <div key={box.label} className="bg-surface p-6">
              <Meta className="text-accent">{box.label}</Meta>
              <p className="mt-2 text-body font-medium">{box.text}</p>
            </div>
          ))}
        </div>
        {item.impact.note && <p className="mt-3 text-body-sm text-ink-muted">{item.impact.note}</p>}
      </Row>

      {/* Seções */}
      {item.sections.map((section) => (
        <Row key={section.id} id={section.id} label={section.label}>
          <h2 className="text-title-1 font-extrabold">{section.title}</h2>
          <div className="mt-5 space-y-4 text-body text-ink-muted">
            {section.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          {section.bullets && (
            <ul className="mt-5 space-y-3">
              {section.bullets.map((b) => (
                <li key={b.slice(0, 24)} className="flex gap-3 text-body">
                  <span aria-hidden className="mt-2.5 size-2 shrink-0 rounded-pill bg-accent-vivid" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {section.quote && (
            <blockquote className="mt-8 border-l-4 border-primary pl-5 text-title-2 font-semibold italic">
              “{section.quote}”
            </blockquote>
          )}
          {section.figure && <FigureBlock figure={section.figure} lang={lang} />}
        </Row>
      ))}

      {/* Links */}
      {item.links && (
        <Row id="links" label={ui.cases.links}>
          <ul className="space-y-3">
            {item.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-body font-semibold text-primary"
                >
                  {link.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Row>
      )}
    </div>
  );
}

export function CaseNav({ prev, next, lang }: { prev?: CaseStudy; next?: CaseStudy; lang: Lang }) {
  const { ui } = getContent(lang);
  return (
    <nav
      aria-label={ui.cases.others}
      className="mx-auto grid max-w-site gap-4 border-t border-line px-page-x py-10 sm:grid-cols-2 md:px-page-x-lg"
    >
      <div>
        {prev && (
          <Link href={localePath(lang, `/cases/${prev.slug}`)} className="group block">
            <Meta>{ui.cases.prev}</Meta>
            <p className="mt-1 text-title-3 font-bold transition-colors group-hover:text-primary">{prev.title}</p>
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {next && (
          <Link href={localePath(lang, `/cases/${next.slug}`)} className="group block">
            <Meta>{ui.cases.next}</Meta>
            <p className="mt-1 text-title-3 font-bold transition-colors group-hover:text-primary">{next.title}</p>
          </Link>
        )}
      </div>
    </nav>
  );
}
