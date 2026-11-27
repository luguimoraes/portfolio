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
import { getContent, type Lang } from "@/content/i18n";

/** Home completa; usada em "/" (português) e "/en" (inglês). */
export function HomePage({ lang }: { lang: Lang }) {
  const { aiBlock, career, careerIntro, cases, casesIntro, education, languages, principles, tools, ui } =
    getContent(lang);
  const s = ui.sections;

  return (
    <>
      <ScrollProgress />
      <SiteHeader lang={lang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <About lang={lang} />

        {/* ---------- Projetos ---------- */}
        <Section id="projetos" eyebrow={s.casesEyebrow} title={s.casesTitle} aside={casesIntro}>
          <Stack>
            {cases.map((item, i) => (
              <CaseCard key={item.slug} item={item} index={i} lang={lang} />
            ))}
          </Stack>
        </Section>

        {/* ---------- Como eu trabalho ---------- */}
        <Section id="como-trabalho" eyebrow={s.howEyebrow} title={s.howTitle} soft>
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
        <Section id="ferramentas" eyebrow={s.toolsEyebrow} title={s.toolsTitle} aside={s.toolsAside}>
          <Toolkit lang={lang} />
        </Section>

        {/* ---------- Trajetória ---------- */}
        <Section id="trajetoria" eyebrow={s.careerEyebrow} title={s.careerTitle} center aside={careerIntro}>
          <Timeline items={career} todayLabel={s.today} />
        </Section>

        {/* ---------- Formação ---------- */}
        <Section id="formacao" eyebrow={s.eduEyebrow} title={s.eduTitle} soft>
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
                    ed.status === s.inProgress ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary"
                  }`}
                >
                  {ed.status}
                </span>
              </li>
            ))}
          </Reveal>
          <Reveal className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <Meta>{s.tools}</Meta>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li key={tool}>
                    <Tag>{tool}</Tag>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Meta>{s.languages}</Meta>
              <p className="mt-3 text-body">{languages.join(" · ")}</p>
            </div>
          </Reveal>
        </Section>

        {/* ---------- Contato ---------- */}
        <Contact lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
