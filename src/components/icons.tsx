/**
 * Ícones de Customer Success no estilo "adesivo": traço escuro grosso,
 * preenchimento em azul e laranja dos tokens. Desenhados para este site.
 * Todos usam viewBox 48x48 e herdam o tamanho pela className.
 */
import type { ReactNode } from "react";

type IconProps = { className?: string; title?: string };

function Svg({ className = "size-12", title, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
}

const ink = "stroke-ink";

/** Painel com barras e linha de tendência. */
export function ChartIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="5" y="7" width="38" height="34" rx="6" className={`fill-surface ${ink}`} />
      <rect x="12" y="25" width="6" height="10" rx="1.5" className={`fill-primary ${ink}`} />
      <rect x="21" y="19" width="6" height="16" rx="1.5" className={`fill-accent-vivid ${ink}`} />
      <rect x="30" y="14" width="6" height="21" rx="1.5" className={`fill-primary ${ink}`} />
    </Svg>
  );
}

/** Headset de atendimento. */
export function HeadsetIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M10 27v-4a14 14 0 0 1 28 0v4" className={ink} />
      <rect x="6" y="25" width="9" height="13" rx="4" className={`fill-accent-vivid ${ink}`} />
      <rect x="33" y="25" width="9" height="13" rx="4" className={`fill-accent-vivid ${ink}`} />
      <path d="M37.5 38c0 4-4 5-9 5" className={ink} />
      <circle cx="26" cy="43" r="2" className={`fill-primary ${ink}`} />
    </Svg>
  );
}

/** Agente de IA. */
export function BotIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M24 6v6" className={ink} />
      <circle cx="24" cy="6" r="3" className={`fill-accent-vivid ${ink}`} />
      <rect x="8" y="12" width="32" height="26" rx="9" className={`fill-primary-soft ${ink}`} />
      <circle cx="18" cy="25" r="3" className={`fill-ink ${ink}`} />
      <circle cx="30" cy="25" r="3" className={`fill-ink ${ink}`} />
      <path d="M19 32.5h10" className={ink} />
      <path d="M4 23v6M44 23v6" className={ink} />
    </Svg>
  );
}

/** Balão de conversa com reticências. */
export function ChatIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path
        d="M8 10h32a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H22l-9 7v-7H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
        className={`fill-surface ${ink}`}
      />
      <circle cx="16" cy="22" r="2" className="fill-primary" />
      <circle cx="24" cy="22" r="2" className="fill-accent-vivid" />
      <circle cx="32" cy="22" r="2" className="fill-primary" />
    </Svg>
  );
}

/** Medidor de NPS. */
export function GaugeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 34a18 18 0 0 1 36 0Z" className={`fill-surface ${ink}`} />
      <path d="M10 34a14 14 0 0 1 7-12.1" className="stroke-accent-vivid" strokeWidth={4} />
      <path d="M31 21.9A14 14 0 0 1 38 34" className="stroke-primary" strokeWidth={4} />
      <path d="M24 34l8-11" className={ink} />
      <circle cx="24" cy="34" r="3" className={`fill-ink ${ink}`} />
    </Svg>
  );
}

/** Base de dados. */
export function DatabaseIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M9 12v24c0 3.3 6.7 6 15 6s15-2.7 15-6V12" className={`fill-primary ${ink}`} />
      <path d="M9 24c0 3.3 6.7 6 15 6s15-2.7 15-6" className={ink} />
      <ellipse cx="24" cy="12" rx="15" ry="6" className={`fill-primary-soft ${ink}`} />
    </Svg>
  );
}

/** Alvo com flecha: meta. */
export function TargetIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="22" cy="26" r="17" className={`fill-surface ${ink}`} />
      <circle cx="22" cy="26" r="11" className={`fill-accent-vivid ${ink}`} />
      <circle cx="22" cy="26" r="4.5" className={`fill-surface ${ink}`} />
      <path d="M22 26 40 8" className={ink} />
      <path d="M34 8h6v6" className={ink} />
    </Svg>
  );
}

/** Brilho de IA. */
export function SparkIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path
        d="M24 5c1.6 9 4.9 12.4 14 14-9.1 1.6-12.4 5-14 14-1.6-9-4.9-12.4-14-14 9.1-1.6 12.4-5 14-14Z"
        className={`fill-accent-vivid ${ink}`}
      />
      <path d="M38 32c.7 3.6 2 5 5.5 5.5-3.5.6-4.8 2-5.5 5.5-.7-3.5-2-4.9-5.5-5.5 3.5-.5 4.8-1.9 5.5-5.5Z" className={`fill-primary ${ink}`} />
    </Svg>
  );
}

/** Caixa de envio: logística. */
export function BoxIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M24 5 41 14v20L24 43 7 34V14Z" className={`fill-accent-soft ${ink}`} />
      <path d="M7 14l17 9 17-9M24 23v20" className={ink} />
      <path d="M15.5 9.5 32.5 18.5" className="stroke-accent-vivid" strokeWidth={4} />
    </Svg>
  );
}

/** Coração com pulso: bem-estar. */
export function HeartIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path
        d="M24 41S6 30.5 6 18a9 9 0 0 1 18-2 9 9 0 0 1 18 2c0 12.5-18 23-18 23Z"
        className={`fill-accent-vivid ${ink}`}
      />
      <path d="M11 23h7l3-5 4 9 3-4h9" className="stroke-surface" strokeWidth={2.5} />
    </Svg>
  );
}

/** Casa com chave: moradia. */
export function HouseIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 22 24 7l18 15" className={ink} />
      <path d="M11 19v22h26V19" className={`fill-primary-soft ${ink}`} />
      <rect x="19" y="28" width="10" height="13" rx="2" className={`fill-accent-vivid ${ink}`} />
    </Svg>
  );
}

/** Capacete de obra: engenharia. */
export function HelmetIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M9 32a15 15 0 0 1 30 0Z" className={`fill-accent-vivid ${ink}`} />
      <path d="M20 17.8V12h8v5.8" className={`fill-accent-vivid ${ink}`} />
      <rect x="5" y="32" width="38" height="6" rx="3" className={`fill-primary ${ink}`} />
    </Svg>
  );
}

/** Megafone: marketing. */
export function MegaphoneIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M8 20h8l18-10v28L16 28H8Z" className={`fill-primary-soft ${ink}`} />
      <path d="M12 28l3 11h6l-3-11" className={`fill-accent-vivid ${ink}`} />
      <path d="M40 19v10" className={ink} />
    </Svg>
  );
}

/** Lâmpada: mentoria e ideias. */
export function BulbIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path
        d="M17 31a13 13 0 1 1 14 0v4H17Z"
        className={`fill-accent-vivid ${ink}`}
      />
      <path d="M18 40h12M20 44h8" className={ink} />
      <path d="M24 31v-8l-4-3M24 23l4-3" className={ink} />
    </Svg>
  );
}

/** Celular com coração: redes sociais. */
export function PhoneIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="12" y="4" width="24" height="40" rx="5" className={`fill-surface ${ink}`} />
      <path d="M21 9h6" className={ink} />
      <path
        d="M24 30s-6-3.4-6-7.4a3.2 3.2 0 0 1 6-1.4 3.2 3.2 0 0 1 6 1.4c0 4-6 7.4-6 7.4Z"
        className={`fill-accent-vivid ${ink}`}
        strokeWidth={2}
      />
    </Svg>
  );
}

/** Graduação. */
export function CapIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 18 24 9l20 9-20 9Z" className={`fill-primary ${ink}`} />
      <path d="M12 22v10c0 3 5.4 6 12 6s12-3 12-6V22" className={`fill-primary-soft ${ink}`} />
      <path d="M44 18v12" className={ink} />
      <circle cx="44" cy="32" r="2.5" className={`fill-accent-vivid ${ink}`} />
    </Svg>
  );
}

/** Troféu de prata: prêmio. */
export function TrophyIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M15 7h18v10a9 9 0 0 1-18 0Z" className={`fill-line ${ink}`} />
      <path d="M15 11H8a6 6 0 0 0 7 7M33 11h7a6 6 0 0 1-7 7" className={ink} />
      <path d="M24 26v8" className={ink} />
      <rect x="15" y="34" width="18" height="8" rx="2" className={`fill-primary ${ink}`} />
      <path d="M21 12l2 2 4-4" className="stroke-primary" strokeWidth={2.5} />
    </Svg>
  );
}

/** Estetoscópio: saúde. */
export function StethoscopeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 6v12a8 8 0 0 0 16 0V6" className={ink} />
      <path d="M20 26v6a8 8 0 0 0 16 0v-4" className={ink} />
      <circle cx="36" cy="24" r="5" className={`fill-accent-vivid ${ink}`} />
      <circle cx="12" cy="6" r="2.5" className={`fill-ink ${ink}`} />
      <circle cx="28" cy="6" r="2.5" className={`fill-ink ${ink}`} />
    </Svg>
  );
}

/** Envelope com raio: e-mail automático. */
export function MailIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="5" y="11" width="38" height="28" rx="5" className={`fill-surface ${ink}`} />
      <path d="M6 13l18 14 18-14" className={ink} />
      <path d="M38 4l-5 9h6l-5 9" className="stroke-accent-vivid" strokeWidth={3} />
    </Svg>
  );
}

/** Haltere: bem-estar. */
export function DumbbellIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="17" width="7" height="14" rx="2" className={`fill-primary ${ink}`} />
      <rect x="11" y="13" width="6" height="22" rx="2" className={`fill-accent-vivid ${ink}`} />
      <rect x="31" y="13" width="6" height="22" rx="2" className={`fill-accent-vivid ${ink}`} />
      <rect x="37" y="17" width="7" height="14" rx="2" className={`fill-primary ${ink}`} />
      <path d="M17 24h14" className={ink} strokeWidth={4} />
    </Svg>
  );
}

/** Lista de tarefas com uma cancelada e outras feitas. */
export function TasksIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="7" y="5" width="34" height="38" rx="6" className={`fill-surface ${ink}`} />
      <path d="M14 15l3 3 5-6M14 27l3 3 5-6" className="stroke-primary" strokeWidth={3} />
      <path d="M14 35l6 6M20 35l-6 6" className="stroke-accent-vivid" strokeWidth={3} />
      <path d="M27 15h8M27 27h8M27 38h8" className={ink} />
    </Svg>
  );
}

export const iconMap = {
  chart: ChartIcon,
  headset: HeadsetIcon,
  bot: BotIcon,
  chat: ChatIcon,
  gauge: GaugeIcon,
  database: DatabaseIcon,
  target: TargetIcon,
  spark: SparkIcon,
  box: BoxIcon,
  heart: HeartIcon,
  house: HouseIcon,
  helmet: HelmetIcon,
  megaphone: MegaphoneIcon,
  bulb: BulbIcon,
  phone: PhoneIcon,
  cap: CapIcon,
  trophy: TrophyIcon,
  stethoscope: StethoscopeIcon,
  mail: MailIcon,
  dumbbell: DumbbellIcon,
  tasks: TasksIcon,
};

export type IconName = keyof typeof iconMap;

export function Icon({ name, className, title }: IconProps & { name: IconName }) {
  const Component = iconMap[name];
  return <Component className={className} title={title} />;
}
