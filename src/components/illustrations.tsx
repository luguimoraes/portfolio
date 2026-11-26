/**
 * Ilustrações dos cases. Cenas simples montadas com os tokens, para mostrar
 * a ideia de cada projeto sem expor telas ou dados de clientes.
 */
import { BotIcon, ChartIcon, DatabaseIcon, SparkIcon, TargetIcon } from "./icons";

const ink = "stroke-ink";

/** Skills de CS: agente lendo a carteira e gerando um card de KPI. */
export function SkillsArt() {
  return (
    <div className="relative flex h-full min-h-72 items-center justify-center bg-primary-soft p-8">
      <svg viewBox="0 0 320 220" className="w-full max-w-md" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* cartão de cliente */}
        <rect x="18" y="40" width="128" height="140" rx="14" className={`fill-surface ${ink}`} />
        <circle cx="46" cy="70" r="12" className={`fill-accent-vivid ${ink}`} />
        <path d="M66 64h56M66 76h36" className={ink} />
        <path d="M34 104h96M34 122h80M34 140h90" className="stroke-line" strokeWidth={6} />
        <rect x="34" y="154" width="54" height="14" rx="7" className={`fill-primary ${ink}`} strokeWidth={2} />
        {/* seta */}
        <path d="M156 110h36m-10-10 10 10-10 10" className={ink} />
        {/* card de KPI */}
        <rect x="202" y="52" width="100" height="116" rx="14" className={`fill-surface ${ink}`} />
        <rect x="218" y="122" width="14" height="30" rx="3" className={`fill-primary ${ink}`} strokeWidth={2} />
        <rect x="238" y="102" width="14" height="50" rx="3" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
        <rect x="258" y="86" width="14" height="66" rx="3" className={`fill-primary ${ink}`} strokeWidth={2} />
        <path d="M218 72h52" className={ink} />
      </svg>
      <BotIcon className="sticker tilt-l top-6 left-1/2 size-16 -translate-x-1/2" />
      <SparkIcon className="sticker tilt-r right-6 bottom-6 size-12" />
    </div>
  );
}

/** Clipador: player de live, onda de áudio e prévia indo para o celular. */
export function ClipperArt() {
  return (
    <div className="relative flex h-full min-h-72 items-center justify-center bg-accent-soft p-8">
      <svg viewBox="0 0 320 220" className="w-full max-w-md" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* player */}
        <rect x="14" y="30" width="190" height="120" rx="14" className={`fill-primary ${ink}`} />
        <path d="M96 72v36l30-18Z" className={`fill-surface ${ink}`} />
        <rect x="26" y="40" width="40" height="16" rx="8" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
        {/* onda de áudio */}
        <path
          d="M20 186h14l8-22 10 40 10-52 10 60 10-34 8 8h18l8-18 10 30 8-12h22"
          className="stroke-accent-vivid"
          strokeWidth={4}
        />
        {/* celular com prévia */}
        <rect x="222" y="24" width="84" height="160" rx="16" className={`fill-surface ${ink}`} />
        <rect x="234" y="46" width="60" height="70" rx="8" className={`fill-primary-soft ${ink}`} />
        <path d="M257 72v18l14-9Z" className={`fill-primary ${ink}`} strokeWidth={2} />
        <rect x="234" y="128" width="28" height="14" rx="7" className={`fill-primary ${ink}`} strokeWidth={2} />
        <rect x="266" y="128" width="28" height="14" rx="7" className={`fill-surface ${ink}`} strokeWidth={2} />
      </svg>
    </div>
  );
}

/** Redução de custo: barras descendo até a meta. */
export function CostArt() {
  return (
    <div className="relative flex h-full min-h-72 items-center justify-center bg-surface-soft p-8">
      <svg viewBox="0 0 320 220" className="w-full max-w-md" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M30 190h260" className={ink} />
        <rect x="50" y="50" width="40" height="140" rx="6" className={`fill-primary-soft ${ink}`} />
        <rect x="110" y="72" width="40" height="118" rx="6" className={`fill-primary-soft ${ink}`} />
        <rect x="170" y="92" width="40" height="98" rx="6" className={`fill-primary ${ink}`} />
        <rect x="230" y="112" width="40" height="78" rx="6" className={`fill-accent-vivid ${ink}`} />
        <path d="M60 30 C 120 40, 180 70, 250 92" className={ink} strokeDasharray="2 10" />
        <path d="M238 80l14 13-18 5" className={ink} />
        <rect x="214" y="22" width="80" height="34" rx="17" className={`fill-surface ${ink}`} />
        <text x="254" y="45" textAnchor="middle" fontSize="20" fontWeight="700" className="fill-accent font-mono" stroke="none">
          −5%
        </text>
      </svg>
      <TargetIcon className="sticker tilt-l top-6 left-6 size-14" />
      <ChartIcon className="sticker tilt-r right-8 bottom-6 size-12" />
    </div>
  );
}

/** Mesa de "IA como ferramenta": usada no bloco de IA. */
export function AiArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xs">
      <div className="absolute inset-6 rounded-card border border-line bg-surface shadow-card" />
      <BotIcon className="sticker tilt-l top-10 left-10 size-20" />
      <DatabaseIcon className="sticker tilt-r top-14 right-10 size-16" />
      <SparkIcon className="sticker tilt-s bottom-12 left-1/2 size-16 -translate-x-1/2" />
    </div>
  );
}

export const caseArt = {
  skills: SkillsArt,
  clipper: ClipperArt,
  cost: CostArt,
};

export type CaseArtName = keyof typeof caseArt;
