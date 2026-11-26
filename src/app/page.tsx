import { CaseCard } from "@/components/case-card";
import { ScrollProgress } from "@/components/decor";
import { Hero } from "@/components/hero";
import { Icon } from "@/components/icons";
import { AiArt } from "@/components/illustrations";
import { Reveal, Stack } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Timeline } from "@/components/timeline";
import { Meta, Pill, Section, Tag } from "@/components/ui";
import {
  aiBlock,
  career,
  careerIntro,
  cases,
  casesIntro,
  education,
  languages,
  links,
  principles,
  profile,
  tools,
} from "@/content/site";

export default function Home() {
  const otherLinks = [links.github, links.linktree, links.instagram];

  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        {/* ---------- Projetos ---------- */}
        <Section id="projetos" eyebrow="Projetos" title="Trabalhos selecionados" aside={casesIntro}>
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
        <section id="contato" className="px-page-x py-section md:px-page-x-lg md:py-section-lg">
          <Reveal className="relative isolate mx-auto max-w-site overflow-hidden rounded-card bg-primary p-8 text-primary-ink md:p-16">
            <div aria-hidden className="blob blob-a -right-20 -bottom-24 -z-10 size-96 bg-accent-vivid" />
            <Meta className="text-primary-ink opacity-80">Contato</Meta>
            <h2 className="mt-3 max-w-reading text-title-1 font-extrabold md:text-display-compact">Vamos conversar?</h2>
            <p className="mt-4 max-w-reading text-body-lg opacity-90">
              Sobre Customer Success, dados, IA aplicada a CS ou uma troca de ideias. O caminho mais rápido é o
              LinkedIn.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {profile.email && (
                <Pill href={`mailto:${profile.email}`} variant="inverse">
                  E-mail
                </Pill>
              )}
              <Pill href={links.linkedin.href} variant="inverse" external>
                {links.linkedin.label}
              </Pill>
              {otherLinks.map((link) => (
                <Pill key={link.href} href={link.href} variant="inverse-outline" external>
                  {link.label}
                </Pill>
              ))}
            </div>
            <p className="mt-10 font-mono text-meta uppercase opacity-80">{profile.location}</p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
