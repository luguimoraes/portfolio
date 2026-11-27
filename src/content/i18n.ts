// Ponto único de acesso ao conteúdo por idioma.
// Português fica na raiz do site (/); inglês em /en.
import * as ptCases from "./cases";
import * as enCases from "./en/cases";
import * as enSite from "./en/site";
import * as ptSite from "./site";

export type Lang = "pt" | "en";
export const langs: Lang[] = ["pt", "en"];

const pt = { ...ptSite, ...ptCases };
export type Content = typeof pt;
// O TypeScript confere aqui que o inglês tem a mesma estrutura do português.
const en: Content = { ...enSite, ...enCases };

export function getContent(lang: Lang): Content {
  return lang === "en" ? en : pt;
}

/** Caminho no idioma pedido: "/cases/x" vira "/en/cases/x" em inglês. */
export function localePath(lang: Lang, path = "/") {
  if (lang === "pt") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** Caminho equivalente no outro idioma, a partir do caminho atual. */
export function switchPath(pathname: string, to: Lang) {
  const base = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localePath(to, base);
}
