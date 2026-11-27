import { About } from "@/components/about";
import { CaseCard } from "@/components/case-card";
import { Contact } from "@/components/contact";
import { ScrollProgress } from "@/components/decor";
import { Hero } from "@/components/hero";
import { Icon } from "@/components/icons";
import { AiArt } from "@/components/illustrations";
import { Reveal, Stack } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Timeline } from "@/components/timeline";
import { Toolkit } from "@/components/toolkit";
import { Meta, Section, Tag } from "@/components/ui";
import { cases } from "@/content/cases";
import {
  aiBlock,
  career,
  careerIntro,
  casesIntro,
  education,
  languages,
  principles,
  tools,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />

        {/* ---------- Projetos ---------- */}
        <Section id="projetos" eyebrow="Cases" title="Trabalhos selecionados" aside={casesIntro}>
          <Stack>
            {cases.map((item, i) => (
              <CaseCard key={item.slug} item={item} index={i} />
            ))}
          </Stack>
        </Section>

        {/* ---------- Como eu trabalho ---------- */}
        <Section id="como-trabalho" eyebrow="Como eu trabalho" title="Quatro hábitos que levo para cada carteira" soft>
          <Reveal as="ul" group className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li key={p.title} className="group">
                <Icon
                  name={p.icon}
                  className="size-12 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-6"
                />
                <h3 className="mt-5 text-title-3 font-bold">{p.title}</h3>
                <p className="mt-2 text-body-sm text-ink-muted">{p.text}</p>
              </li>
            ))}
          </Reveal>

          {/* IA no dia a dia */}
          <div className="mt-20 grid items-center gap-12 border-t border-line pt-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Meta className="text-accent">{aiBlock.eyebrow}</Meta>
              <p className="mt-3 text-title-1 font-extrabold">{aiBlock.statement}</p>
              <div className="mt-8 hidden lg:block">
                <AiArt />
              </div>
            </Reveal>
            <Reveal as="ul" group className="space-y-8 lg:col-span-7 lg:col-start-6">
              {aiBlock.points.map((point, i) => (
                <li key={point.title} className="grid grid-cols-12 gap-4 border-b border-line pb-8 last:border-0">
                  <span className="col-span-2 font-mono text-title-2 text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <h3 className="text-title-3 font-bold">{point.title}</h3>
                    <p className="mt-1 text-body text-ink-muted">{point.text}</p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>
        </Section>

        {/* ---------- Caixa de ferramentas ---------- */}
        <Section
          id="ferramentas"
          eyebrow="Caixa de ferramentas"
          title="Dados, operação e IA a serviço da carteira"
          aside="As ferramentas e métricas que uso para consultar dados, montar KPIs, segmentar clientes e reter receita."
        >
          <Toolkit />
        </Section>

        {/* ---------- Trajetória ---------- */}
        <Section id="trajetoria" eyebrow="Trajetória" title="Nem tudo começou no Customer Success." center aside={careerIntro}>
          <Timeline items={career} />
        </Section>

        {/* ---------- Formação e ferramentas ---------- */}
        <Section id="formacao" eyebrow="Formação" title="Aprendendo em público" soft>
          <Reveal as="ul" group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {education.map((ed) => (
              <li
                key={ed.title}
                className="flex flex-col rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <Icon name="cap" className="size-10" />
                <Meta className="mt-5">{ed.period}</Meta>
                <h3 className="mt-2 text-title-3 font-bold">{ed.title}</h3>
                <p className="mt-1 text-body-sm text-ink-muted">{ed.school}</p>
                <span
                  className={`mt-auto inline-block self-start rounded-pill px-2.5 py-0.5 pt-1 font-mono text-meta ${
                    ed.status === "Em andamento" ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary"
                  }`}
                >
                  {ed.status}
                </span>
              </li>
            ))}
          </Reveal>
          <Reveal className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <Meta>Ferramentas</Meta>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li key={tool}>
                    <Tag>{tool}</Tag>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Meta>Idiomas</Meta>
              <p className="mt-3 text-body">{languages.join(" · ")}</p>
            </div>
          </Reveal>
        </Section>

        {/* ---------- Contato ---------- */}
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
