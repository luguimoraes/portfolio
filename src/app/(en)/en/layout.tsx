import "../../globals.css";
import { RootDocument, rootMetadata } from "@/components/root-document";

export const metadata = rootMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
