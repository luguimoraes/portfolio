/**
 * Imagem de compartilhamento (Open Graph) do site: aparece quando o link é
 * colado no LinkedIn, WhatsApp, Slack etc. Também serve de miniatura para
 * o "Em destaque" do LinkedIn.
 *
 * O ImageResponse não lê Tailwind: ele só aceita estilo inline. Por isso as
 * cores abaixo espelham src/design/tokens.css (tema escuro) e este arquivo
 * fica fora do `npm run design:check`.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { cases } from "@/content/cases";
import { profile } from "@/content/site";

export const alt = `${profile.name} · ${profile.role} · Portfólio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const c = {
  bg: "#070D1C",
  surface: "#0E1730",
  ink: "#E8EEFF",
  muted: "#9EABC9",
  line: "#1F2B4A",
  primary: "#7EA3FF",
  primaryStrong: "#1F4FD6",
  accent: "#FF7A1A",
  onAccent: "#1A0E05",
};

const font = (pkg: string, file: string) => readFile(join(process.cwd(), "node_modules/@fontsource", pkg, "files", file));

export default async function Image() {
  const [jakarta700, jakarta800, jakarta500, plex500, photo] = await Promise.all([
    font("plus-jakarta-sans", "plus-jakarta-sans-latin-700-normal.woff"),
    font("plus-jakarta-sans", "plus-jakarta-sans-latin-800-normal.woff"),
    font("plus-jakarta-sans", "plus-jakarta-sans-latin-500-normal.woff"),
    font("ibm-plex-mono", "ibm-plex-mono-latin-500-normal.woff"),
    readFile(join(process.cwd(), "public/luis.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const award = cases.find((item) => item.award)?.award;

  const chip = (text: string, highlight = false) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 18px",
        borderRadius: 999,
        border: `2px solid ${highlight ? c.accent : c.line}`,
        background: highlight ? "rgba(255,122,26,0.12)" : c.surface,
        color: c.ink,
        fontSize: 22,
        fontWeight: 700,
      }}
    >
      {highlight && <div style={{ width: 12, height: 12, borderRadius: 999, background: c.accent }} />}
      {text}
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: c.bg,
          backgroundImage: `radial-gradient(circle at 8% 0%, rgba(31,79,214,0.55), transparent 45%), radial-gradient(circle at 96% 100%, rgba(255,122,26,0.45), transparent 42%)`,
          fontFamily: "Jakarta",
          color: c.ink,
          padding: "64px 72px",
        }}
      >
        {/* Texto */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "Plex",
                fontSize: 22,
                letterSpacing: 3,
                color: c.muted,
              }}
            >
              <div style={{ width: 14, height: 14, borderRadius: 999, background: c.accent }} />
              PORTFÓLIO
            </div>
            <div style={{ marginTop: 28, fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
              {profile.name}
            </div>
            <div style={{ marginTop: 14, fontSize: 50, fontWeight: 800, letterSpacing: -1.5, color: c.primary }}>
              {profile.role}
            </div>
            <div style={{ marginTop: 22, fontSize: 30, fontWeight: 500, color: c.muted }}>
              Dados, automação e IA aplicada a CS.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {award && chip("Prata · Prêmio ClienteSA 2023", true)}
              {chip(`${cases.length} cases de CS e IA`)}
            </div>
            <div style={{ display: "flex", fontFamily: "Plex", fontSize: 24, color: c.accent }}>
              luguimoraes-portfolio.vercel.app →
            </div>
          </div>
        </div>

        {/* Foto com anéis azul e laranja */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 380 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 360,
              height: 360,
              borderRadius: 999,
              border: `3px dashed ${c.primary}`,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 312,
                height: 312,
                borderRadius: 999,
                border: `8px solid ${c.accent}`,
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- o ImageResponse só aceita <img> */}
              <img src={photoSrc} width={296} height={296} alt="" style={{ objectFit: "cover", transform: "scale(1.06)" }} />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jakarta", data: jakarta500, weight: 500, style: "normal" },
        { name: "Jakarta", data: jakarta700, weight: 700, style: "normal" },
        { name: "Jakarta", data: jakarta800, weight: 800, style: "normal" },
        { name: "Plex", data: plex500, weight: 500, style: "normal" },
      ],
    },
  );
}
