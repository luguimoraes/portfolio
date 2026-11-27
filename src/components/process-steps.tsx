"use client";

import { useState } from "react";
import type { ProcessStep } from "@/content/cases";

/** Etapas do processo: toque em uma etapa para ler os detalhes. */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  const [open, setOpen] = useState(0);
  const step = steps[open];

  return (
    <div className="rounded-card border border-line bg-surface p-4 shadow-card md:p-6">
      <p className="px-2 text-body-sm text-ink-muted">Toque em uma etapa para ler os detalhes.</p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5" role="tablist" aria-label="Etapas do processo">
        {steps.map((s, i) => {
          const active = i === open;
          return (
            <li key={s.title} role="presentation">
              <button
                type="button"
                role="tab"
                id={`step-tab-${i}`}
                aria-selected={active}
                aria-controls="step-panel"
                onClick={() => setOpen(i)}
                className={`flex h-full w-full flex-col gap-2 rounded-control border p-4 text-left transition-all duration-300 ${
                  active
                    ? "border-primary bg-primary text-primary-ink"
                    : "border-line bg-surface-soft hover:-translate-y-0.5 hover:border-primary"
                }`}
              >
                <span
                  className={`flex size-7 items-center justify-center rounded-pill font-mono text-meta ${
                    active ? "bg-accent-vivid text-on-accent" : "bg-surface text-ink"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="text-body-sm font-bold">{s.title}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div
        id="step-panel"
        role="tabpanel"
        aria-labelledby={`step-tab-${open}`}
        key={open}
        className="stagger mt-4 grid gap-4 rounded-control bg-surface-soft p-5 md:grid-cols-12 md:p-6"
      >
        <div className="md:col-span-4">
          <p className="font-mono text-meta uppercase text-accent">
            Etapa {open + 1} de {steps.length}
          </p>
          <p className="mt-2 text-title-3 font-bold">{step.title}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {step.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-pill border border-line bg-surface px-2.5 py-0.5 font-mono text-meta text-ink-muted"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-body text-ink-muted md:col-span-8">{step.text}</p>
      </div>
    </div>
  );
}
