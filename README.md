# Portfólio · Luis Moraes

Site pessoal feito em Next.js, React, TypeScript e Tailwind CSS.

## Onde mexer

| O que mudar | Arquivo |
|---|---|
| Textos, cases, trajetória, links | `src/content/site.ts` |
| Cores, fontes, espaços, raios | `src/design/tokens.css` |
| Foto | coloque em `public/` e preencha `photo` em `src/content/site.ts` |

## Regras do Design System

- A paleta padrão do Tailwind está desligada: só existem as cores dos tokens.
- `npm run design:check` barra cor solta (#hex, rgb) e valor arbitrário (`w-[37px]`) nos componentes.
- Tema claro e escuro trocam só os tokens e seguem o sistema do visitante.

## Comandos

```bash
npm run dev     # roda em http://localhost:3000
npm run check   # design:check + lint + build
```
