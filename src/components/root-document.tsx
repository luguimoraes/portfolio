import type { Metadata } from "next";
import { Caveat, IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { getContent, localePath, type Lang } from "@/content/i18n";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

// Só para a legenda manuscrita da polaroid.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const SITE_URL = "https://luguimoraes-portfolio.vercel.app";

/** Metadados da raiz de cada idioma, com o link para a versão no outro idioma. */
export function rootMetadata(lang: Lang): Metadata {
  const { ui, profile } = getContent(lang);
  return {
    // Endereço oficial: usado para montar o link absoluto da imagem de compartilhamento.
    metadataBase: new URL(SITE_URL),
    title: ui.meta.title,
    description: ui.meta.description,
    alternates: {
      canonical: localePath(lang),
      languages: { "pt-BR": "/", en: "/en" },
    },
    openGraph: {
      title: ui.meta.title,
      description: profile.headline,
      locale: lang === "en" ? "en_US" : "pt_BR",
      type: "website",
    },
  };
}

// Aplica o tema salvo antes da pintura, para a página não piscar.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

/** <html> e <body> de cada idioma: fontes, idioma correto e script de tema. */
export function RootDocument({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html
      lang={lang === "en" ? "en" : "pt-BR"}
      className={`${jakarta.variable} ${plexMono.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {/* Este componente é o layout raiz dos dois idiomas; <head> aqui é o do App Router. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* type muda no cliente para o React não avisar sobre <script> (guia "Preventing Flash" do Next) */}
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
