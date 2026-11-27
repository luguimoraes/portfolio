import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CaseBody, CaseHeader, CaseNav } from "@/components/case-page";
import { ScrollProgress } from "@/components/decor";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getContent, localePath, type Lang } from "@/content/i18n";

type SlugParams = Promise<{ slug: string }>;

/** Os slugs são os mesmos nos dois idiomas. */
export function caseStaticParams() {
  return getContent("pt").cases.map((c) => ({ slug: c.slug }));
}

export async function caseMetadata(lang: Lang, params: SlugParams): Promise<Metadata> {
  const { slug } = await params;
  const { getCase, profile } = getContent(lang);
  const item = getCase(slug);
  if (!item) return {};
  return {
    title: `${item.title} · ${profile.name}`,
    description: item.subtitle,
    alternates: {
      canonical: localePath(lang, `/cases/${slug}`),
      languages: { "pt-BR": `/cases/${slug}`, en: `/en/cases/${slug}` },
    },
    openGraph: {
      title: item.title,
      description: item.subtitle,
      locale: lang === "en" ? "en_US" : "pt_BR",
      type: "article",
    },
  };
}

/** Conteúdo que depende do endereço: fica dentro do Suspense (navegação instantânea). */
async function CaseContent({ lang, params }: { lang: Lang; params: SlugParams }) {
  const { slug } = await params;
  const { getCase, getNeighbors } = getContent(lang);
  const item = getCase(slug);
  if (!item) notFound();
  const { prev, next } = getNeighbors(slug);
  return (
    <>
      <CaseHeader item={item} lang={lang} />
      <CaseBody item={item} lang={lang} />
      <CaseNav prev={prev} next={next} lang={lang} />
    </>
  );
}

function CaseSkeleton() {
  return (
    <div aria-hidden className="mx-auto max-w-site px-page-x pt-14 md:px-page-x-lg">
      <div className="h-4 w-32 rounded-pill bg-surface-soft" />
      <div className="mt-8 h-14 w-2/3 rounded-control bg-surface-soft" />
      <div className="mt-12 h-80 rounded-card bg-surface-soft" />
    </div>
  );
}

export function CaseRoute({ lang, params }: { lang: Lang; params: SlugParams }) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader lang={lang} current="projetos" />
      <main className="flex-1">
        <Suspense fallback={<CaseSkeleton />}>
          <CaseContent lang={lang} params={params} />
        </Suspense>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
