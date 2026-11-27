import { CaseRoute, caseMetadata, caseStaticParams } from "@/components/case-route";

export function generateStaticParams() {
  return caseStaticParams();
}

export function generateMetadata({ params }: PageProps<"/en/cases/[slug]">) {
  return caseMetadata("en", params);
}

export default function Page({ params }: PageProps<"/en/cases/[slug]">) {
  return <CaseRoute lang="en" params={params} />;
}
