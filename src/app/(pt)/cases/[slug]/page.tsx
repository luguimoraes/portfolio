import { CaseRoute, caseMetadata, caseStaticParams } from "@/components/case-route";

export function generateStaticParams() {
  return caseStaticParams();
}

export function generateMetadata({ params }: PageProps<"/cases/[slug]">) {
  return caseMetadata("pt", params);
}

export default function Page({ params }: PageProps<"/cases/[slug]">) {
  return <CaseRoute lang="pt" params={params} />;
}
