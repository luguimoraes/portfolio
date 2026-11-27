/**
 * Selo de ferramenta: um ícone genérico desenhado para o tipo da ferramenta
 * (planilha, BI, banco, chamado...) e o nome escrito. Não usa logos de marca.
 */
type Glyph = "sheet" | "chart" | "db" | "ticket" | "chat" | "slides" | "crm" | "board" | "cycle" | "spark" | "code" | "metric";

const glyphByTool: Record<string, Glyph> = {
  "Google Sheets": "sheet",
  Excel: "sheet",
  "Looker Studio": "chart",
  "Power BI": "chart",
  Metabase: "chart",
  Dashboards: "chart",
  PostgreSQL: "db",
  SQL: "db",
  "Queries de KPI": "db",
  Jira: "ticket",
  Zendesk: "chat",
  WhatsApp: "chat",
  "Bots de atendimento": "chat",
  Telegram: "chat",
  "Google Slides": "slides",
  CRM: "crm",
  SenseData: "crm",
  Trello: "board",
  Asana: "board",
  DMAIC: "cycle",
  Scrum: "cycle",
  "Metodologia ágil": "cycle",
  "Green Belt": "cycle",
  Claude: "spark",
  Lovable: "spark",
  Python: "code",
  "Next.js": "code",
  "Tailwind CSS": "code",
  Vercel: "code",
  ffmpeg: "code",
  Streamlink: "code",
  "Tiering de clientes": "board",
  "Segmentação": "cycle",
  "Playbooks de retenção": "crm",
};

function GlyphSvg({ glyph }: { glyph: Glyph }) {
  const ink = "stroke-ink";
  const common = { fill: "none", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<Glyph, React.ReactNode> = {
    sheet: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" className={`fill-surface ${ink}`} />
        <path d="M3 9h18M3 15h18M9 3v18" className={ink} />
        <rect x="9" y="9" width="6" height="6" className="fill-accent-vivid" />
      </>
    ),
    chart: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" className={`fill-surface ${ink}`} />
        <path d="M7 17v-4M12 17V8M17 17v-6" className="stroke-primary" strokeWidth={3} />
      </>
    ),
    db: (
      <>
        <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" className={`fill-primary ${ink}`} />
        <ellipse cx="12" cy="6" rx="7" ry="3" className={`fill-primary-soft ${ink}`} />
      </>
    ),
    ticket: (
      <>
        <path d="M3 7a2 2 0 0 0 0 4v6h18v-6a2 2 0 0 1 0-4V5H3Z" className={`fill-primary-soft ${ink}`} />
        <path d="M14 5v12" className={ink} strokeDasharray="2 2" />
      </>
    ),
    chat: (
      <>
        <path d="M4 5h16v11H10l-4 3v-3H4Z" className={`fill-surface ${ink}`} />
        <circle cx="9" cy="10.5" r="1" className="fill-primary" />
        <circle cx="15" cy="10.5" r="1" className="fill-accent-vivid" />
      </>
    ),
    slides: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" className={`fill-accent-soft ${ink}`} />
        <path d="M10 8v5l4-2.5Z" className="fill-accent-vivid" />
        <path d="M12 17v3M8 20h8" className={ink} />
      </>
    ),
    crm: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" className={`fill-surface ${ink}`} />
        <circle cx="9" cy="10" r="2.5" className={`fill-accent-vivid ${ink}`} />
        <path d="M5.5 17a3.5 3.5 0 0 1 7 0M15 9h3M15 13h3" className={ink} />
      </>
    ),
    board: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" className={`fill-surface ${ink}`} />
        <rect x="6" y="6" width="4" height="9" rx="1" className="fill-primary" />
        <rect x="14" y="6" width="4" height="6" rx="1" className="fill-accent-vivid" />
      </>
    ),
    cycle: (
      <>
        <path d="M19 12a7 7 0 0 1-12 5M5 12a7 7 0 0 1 12-5" className={ink} />
        <path d="M17 3v4h-4M7 21v-4h4" className="stroke-accent-vivid" />
      </>
    ),
    spark: (
      <path d="M12 3c.8 4.5 2.5 6.2 7 7-4.5.8-6.2 2.5-7 7-.8-4.5-2.5-6.2-7-7 4.5-.8 6.2-2.5 7-7Z" className={`fill-accent-vivid ${ink}`} />
    ),
    code: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" className={`fill-primary ${ink}`} />
        <path d="M9 10l-2 2 2 2M15 10l2 2-2 2" className="stroke-primary-ink" />
      </>
    ),
    metric: (
      <>
        <path d="M4 17a8 8 0 0 1 16 0Z" className={`fill-surface ${ink}`} />
        <path d="M12 17l4-5" className={ink} />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden {...common}>
      {paths[glyph]}
    </svg>
  );
}

export function ToolBadge({ name }: { name: string }) {
  const glyph = glyphByTool[name] ?? "metric";
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface py-1 pr-3 pl-1.5 text-body-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-vivid">
      <span className="flex size-7 items-center justify-center rounded-pill bg-surface-soft">
        <GlyphSvg glyph={glyph} />
      </span>
      {name}
    </span>
  );
}
