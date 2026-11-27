import { metrics, toolkit } from "@/content/site";
import { Icon } from "./icons";
import { Reveal } from "./motion";
import { ToolBadge } from "./tool-badge";
import { Meta } from "./ui";

/** Caixa de ferramentas de CS: grupos de ferramentas e as métricas que acompanho. */
export function Toolkit() {
  return (
    <div className="space-y-16">
      <Reveal group className="grid gap-6 lg:grid-cols-3">
        {toolkit.map((group) => (
          <div
            key={group.title}
            className="group flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary md:p-8"
          >
            <Icon name={group.icon} className="size-12 transition-transform duration-300 group-hover:-rotate-6" />
            <h3 className="mt-5 text-title-2 font-extrabold">{group.title}</h3>
            <p className="mt-2 text-body-sm text-ink-muted">{group.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <ToolBadge name={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <div>
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Meta className="text-accent">Métricas que acompanho</Meta>
            <p className="mt-2 text-title-2 font-extrabold">O idioma da carteira</p>
          </div>
          <p className="max-w-md text-body-sm text-ink-muted">
            Retenção, receita e experiência: os indicadores que uso para ler a saúde de cada conta e priorizar a ação.
          </p>
        </Reveal>
        <Reveal as="ul" group className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <li
              key={m.name}
              className="group rounded-card border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-vivid hover:shadow-card"
            >
              <p className="font-mono text-title-2 font-medium text-primary transition-colors group-hover:text-accent">
                {m.name}
              </p>
              <p className="mt-2 text-body-sm text-ink-muted">{m.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
