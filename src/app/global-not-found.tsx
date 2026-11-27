import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { RootDocument } from "@/components/root-document";

export const metadata: Metadata = {
  title: "404 · Luis Moraes",
  description: "Página não encontrada · Page not found",
};

export default function GlobalNotFound() {
  return (
    <RootDocument lang="pt">
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-page-x py-section text-center">
        <p className="font-mono text-kpi font-medium text-accent">404</p>
        <h1 className="text-title-1 font-extrabold">Página não encontrada</h1>
        <p className="text-body text-ink-muted" lang="en">
          Page not found
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-pill bg-primary px-5 py-2.5 text-body-sm font-semibold text-primary-ink">
            Voltar ao início
          </Link>
          <Link href="/en" lang="en" className="rounded-pill border border-line px-5 py-2.5 text-body-sm font-semibold">
            Back home
          </Link>
        </div>
      </main>
    </RootDocument>
  );
}
