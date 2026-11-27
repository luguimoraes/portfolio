import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CaseBody, CaseHeader, CaseNav } from "@/components/case-page";
import { ScrollProgress } from "@/components/decor";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cases, getCase, getNeighbors } from "@/content/cases";
import { profile } from "@/content/site";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return {
    title: `${item.title} · ${profile.name}`,
    description: item.subtitle,
    openGraph: { title: item.title, description: item.subtitle, locale: "pt_BR", type: "article" },
  };
}

/** Conteúdo que depende do endereço: fica dentro do Suspense (navegação instantânea). */
async function CaseContent({ params }: { params: PageProps<"/cases/[slug]">["params"] }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();
  const { prev, next } = getNeighbors(slug);
  return (
    <>
      <CaseHeader item={item} />
      <CaseBody item={item} />
      <CaseNav prev={prev} next={next} />
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

export default function CasePage({ params }: PageProps<"/cases/[slug]">) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader current="projetos" />
      <main className="flex-1">
        <Suspense fallback={<CaseSkeleton />}>
          <CaseContent params={params} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
