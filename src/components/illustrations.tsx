/**
 * Ilustrações dos cases. Cenas simples montadas com os tokens, para mostrar
 * a ideia de cada projeto sem expor telas ou dados de clientes.
 */
import type { ReactElement } from "react";
import type { Lang } from "@/content/i18n";
import {
  BotIcon,
  ChartIcon,
  ChatIcon,
  DatabaseIcon,
  DumbbellIcon,
  GaugeIcon,
  HeartIcon,
  HouseIcon,
  MailIcon,
  MegaphoneIcon,
  PhoneIcon,
  SparkIcon,
  StethoscopeIcon,
  TargetIcon,
  TasksIcon,
  TrophyIcon,
} from "./icons";

const ink = "stroke-ink";

type ArtProps = { lang?: Lang };

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

/** Como fiz este site: janela do navegador com tokens e código. */
export function SiteArt() {
  return (
    <div className="relative flex h-full min-h-72 items-center justify-center bg-primary-soft p-8">
      <svg viewBox="0 0 320 220" className="w-full max-w-md" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* janela */}
        <rect x="16" y="20" width="288" height="180" rx="16" className={`fill-surface ${ink}`} />
        <path d="M16 50h288" className={ink} />
        <circle cx="36" cy="35" r="5" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
        <circle cx="54" cy="35" r="5" className={`fill-primary ${ink}`} strokeWidth={2} />
        <circle cx="72" cy="35" r="5" className={`fill-surface ${ink}`} strokeWidth={2} />
        {/* paleta de tokens */}
        <rect x="36" y="68" width="34" height="34" rx="8" className={`fill-primary ${ink}`} />
        <rect x="78" y="68" width="34" height="34" rx="8" className={`fill-accent-vivid ${ink}`} />
        <rect x="120" y="68" width="34" height="34" rx="8" className={`fill-primary-soft ${ink}`} />
        <path d="M36 122h118M36 140h90M36 158h104" className="stroke-line" strokeWidth={6} />
        {/* código */}
        <rect x="176" y="68" width="108" height="112" rx="12" className={`fill-primary ${ink}`} />
        <path d="M206 108l-14 16 14 16M254 108l14 16-14 16M238 100l-16 48" className="stroke-primary-ink" strokeWidth={4} />
        <rect x="36" y="172" width="64" height="16" rx="8" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
      </svg>
      <SparkIcon className="sticker tilt-r top-5 right-8 size-12" />
      <GaugeIcon className="sticker tilt-l bottom-5 left-6 size-12" />
    </div>
  );
}

/** Wellhub: contas enterprise segmentadas por tier, com saúde, bem-estar e o troféu de prata. */
export function WellhubArt() {
  return (
    <div className="relative flex h-full min-h-72 items-center justify-center bg-accent-soft p-8">
      <svg viewBox="0 0 320 220" className="w-full max-w-md" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* pirâmide de segmentação por tier */}
        <path d="M160 26 228 120H92Z" className={`fill-primary ${ink}`} />
        <path d="M92 120h136l30 42H62Z" className={`fill-primary-soft ${ink}`} />
        <path d="M62 162h196l26 36H36Z" className={`fill-surface ${ink}`} />
        <text x="160" y="92" textAnchor="middle" fontSize="15" fontWeight="700" className="fill-primary-ink font-mono" stroke="none">KEY</text>
        <text x="160" y="148" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-ink font-mono" stroke="none">TIER 2</text>
        <text x="160" y="186" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-ink font-mono" stroke="none">TIER 3</text>
        {/* contas como pontos */}
        <circle cx="146" cy="104" r="5" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
        <circle cx="174" cy="104" r="5" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
      </svg>
      <TrophyIcon className="sticker tilt-r top-5 right-6 size-16" />
      <HeartIcon className="sticker tilt-l top-6 left-6 size-12" />
      <DumbbellIcon className="sticker tilt-s bottom-6 left-8 size-12" />
      <ChatIcon className="sticker tilt-r right-8 bottom-6 size-12" />
    </div>
  );
}

/** Ápex Bloom: médico, campanhas e sessões semanais de resultado. */
export function ApexArt({ lang = "pt" }: ArtProps) {
  return (
    <div className="relative flex h-full min-h-72 items-center justify-center bg-primary-soft p-8">
      <svg viewBox="0 0 320 220" className="w-full max-w-md" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* celular com post de campanha */}
        <rect x="24" y="24" width="96" height="172" rx="16" className={`fill-surface ${ink}`} />
        <rect x="38" y="48" width="68" height="60" rx="8" className={`fill-accent-soft ${ink}`} />
        <path d="M72 64v28M58 78h28" className="stroke-accent-vivid" strokeWidth={6} />
        <path d="M38 124h52M38 140h40" className="stroke-line" strokeWidth={6} />
        <path d="M44 166c0-6 8-10 12-4 4-6 12-2 12 4 0 7-12 12-12 12s-12-5-12-12Z" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
        {/* relatório semanal */}
        <rect x="144" y="40" width="152" height="140" rx="14" className={`fill-surface ${ink}`} />
        <text x="160" y="66" fontSize="12" fontWeight="600" className="fill-ink font-mono" stroke="none">{lang === "en" ? "WEEK" : "SEMANA"}</text>
        <path d="M160 160 196 128 222 142 276 92" className="stroke-primary" strokeWidth={4} />
        <path d="M262 92h14v14" className="stroke-primary" strokeWidth={4} />
        <path d="M160 166h120" className={ink} />
      </svg>
      <StethoscopeIcon className="sticker tilt-l top-5 right-6 size-16" />
      <MegaphoneIcon className="sticker tilt-r bottom-5 left-1/2 size-12" />
      <PhoneIcon className="sticker tilt-s top-6 left-4 size-10" />
    </div>
  );
}

/** QuintoAndar: tarefas canceladas viram tarefas certas, com e-mail automático. */
export function QuintoAndarArt({ lang = "pt" }: ArtProps) {
  return (
    <div className="relative flex h-full min-h-72 items-center justify-center bg-surface-soft p-8">
      <svg viewBox="0 0 320 220" className="w-full max-w-md" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* lista antes */}
        <rect x="20" y="36" width="112" height="148" rx="14" className={`fill-surface ${ink}`} />
        <text x="36" y="62" fontSize="12" fontWeight="600" className="fill-ink-muted font-mono" stroke="none">{lang === "en" ? "BEFORE" : "ANTES"}</text>
        <path d="M36 82l10 10M46 82 36 92M36 112l10 10M46 112l-10 10M36 142l5 5 9-11" className="stroke-accent-vivid" strokeWidth={3.5} />
        <path d="M60 87h56M60 117h56M60 146h56" className="stroke-line" strokeWidth={6} />
        {/* seta com template */}
        <path d="M144 110h34m-10-10 10 10-10 10" className={ink} />
        {/* lista depois */}
        <rect x="188" y="36" width="112" height="148" rx="14" className={`fill-surface ${ink}`} />
        <text x="204" y="62" fontSize="12" fontWeight="600" className="fill-primary font-mono" stroke="none">{lang === "en" ? "AFTER" : "DEPOIS"}</text>
        <path d="M204 86l5 5 9-11M204 116l5 5 9-11M204 146l5 5 9-11" className="stroke-primary" strokeWidth={3.5} />
        <path d="M228 87h56M228 117h56M228 146h56" className="stroke-line" strokeWidth={6} />
      </svg>
      <HouseIcon className="sticker tilt-l top-4 left-6 size-14" />
      <MailIcon className="sticker tilt-r right-6 bottom-5 size-14" />
      <TasksIcon className="sticker tilt-s top-5 right-1/3 size-11" />
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

/** Polaroid do "Sobre mim": a mesa de trabalho de um CSM, em vez de foto. */
export function DeskArt({ title }: { title: string }) {
  return (
    <svg viewBox="0 0 300 300" className="size-full" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" role="img">
      <title>{title}</title>
      {/* parede e mesa */}
      <rect width="300" height="300" className="fill-primary-soft" />
      <circle cx="238" cy="62" r="34" className="fill-accent-soft" />
      <path d="M0 222h300v78H0Z" className="fill-surface-soft" />
      <path d="M0 222h300" className={ink} />
      {/* notebook com painel */}
      <path d="M70 108h150a8 8 0 0 1 8 8v98H62v-98a8 8 0 0 1 8-8Z" className={`fill-surface ${ink}`} />
      <path d="M44 214h202l-10 16H54Z" className={`fill-line ${ink}`} />
      <rect x="80" y="126" width="56" height="34" rx="6" className={`fill-primary-soft ${ink}`} strokeWidth={2} />
      <path d="M88 152v-6M98 152v-12M108 152v-9M118 152v-18M128 152v-14" className="stroke-primary" strokeWidth={4} />
      <path d="M148 160a22 22 0 0 1 44 0" className={ink} strokeWidth={2.5} />
      <path d="M152 160a18 18 0 0 1 8-14.8" className="stroke-accent-vivid" strokeWidth={5} />
      <path d="M180 145.2a18 18 0 0 1 8 14.8" className="stroke-primary" strokeWidth={5} />
      <path d="M170 160l9-12" className={ink} strokeWidth={2.5} />
      <path d="M82 178h104M82 194h70" className="stroke-line" strokeWidth={6} />
      <circle cx="204" cy="186" r="9" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
      {/* caneca com vapor */}
      <path d="M244 176h30v34a8 8 0 0 1-8 8h-14a8 8 0 0 1-8-8Z" className={`fill-accent-vivid ${ink}`} />
      <path d="M274 184h6a8 8 0 0 1 0 16h-6" className={ink} />
      <path className="steam stroke-ink" d="M252 164c-4-6 4-8 0-14M266 164c-4-6 4-8 0-14" strokeWidth={2.5} />
      {/* post-it */}
      <g transform="rotate(-8 34 120)">
        <rect x="14" y="98" width="50" height="50" rx="3" className={`fill-accent-soft ${ink}`} strokeWidth={2} />
        <text x="39" y="122" textAnchor="middle" fontSize="12" fontWeight="700" className="fill-accent font-mono" stroke="none">NPS</text>
        <path d="M30 134l6-6 5 4 8-9" className="stroke-primary" strokeWidth={3} />
      </g>
      {/* headset sobre a mesa */}
      <path d="M22 250a26 26 0 0 1 52 0" className={ink} strokeWidth={4} />
      <rect x="14" y="246" width="14" height="22" rx="6" className={`fill-primary ${ink}`} strokeWidth={2} />
      <rect x="68" y="246" width="14" height="22" rx="6" className={`fill-primary ${ink}`} strokeWidth={2} />
      {/* brilhos */}
      <path d="M118 46c1.4 7.6 4.2 10.6 12 12-7.8 1.4-10.6 4.4-12 12-1.4-7.6-4.2-10.6-12-12 7.8-1.4 10.6-4.4 12-12Z" className={`fill-accent-vivid ${ink}`} strokeWidth={2} />
      <path d="M160 72c.8 4 2.3 5.6 6.4 6.4-4.1.8-5.6 2.4-6.4 6.4-.8-4-2.3-5.6-6.4-6.4 4.1-.8 5.6-2.4 6.4-6.4Z" className="fill-primary" stroke="none" />
    </svg>
  );
}

const arts = {
  skills: SkillsArt,
  clipper: ClipperArt,
  cost: CostArt,
  site: SiteArt,
  wellhub: WellhubArt,
  apex: ApexArt,
  quintoandar: QuintoAndarArt,
};

export type CaseArtName = keyof typeof arts;

/** Todas as ilustrações aceitam o idioma (só algumas têm texto dentro). */
export const caseArt: Record<CaseArtName, (props: ArtProps) => ReactElement> = arts;

