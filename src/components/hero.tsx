import Image from "next/image";
import { links, profile } from "@/content/site";
import { Ambient } from "./decor";
import {
  BotIcon,
  ChartIcon,
  ChatIcon,
  DatabaseIcon,
  GaugeIcon,
  HeadsetIcon,
  SparkIcon,
  TargetIcon,
} from "./icons";
import { Meta, Pill } from "./ui";

function Portrait() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");
  return (
    <div className="absolute inset-16 overflow-hidden rounded-pill border-4 border-ink bg-primary-soft shadow-card md:inset-20">
      {profile.photo ? (
        <Image
          src={profile.photo}
          alt={`Foto de ${profile.name}`}
          fill
          sizes="(min-width: 768px) 18rem, 14rem"
          className="object-cover"
          priority
        />
      ) : (
        <div aria-hidden className="flex size-full items-center justify-center font-mono text-display font-medium text-primary">
          {initials}
        </div>
      )}
    </div>
  );
}

/** Foto com texto girando em volta e ícones de CS flutuando. */
function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md">
      <svg viewBox="0 0 300 300" className="orbit-text absolute inset-0 size-full" aria-hidden>
        <defs>
          <path id="orbit-path" d="M150,150 m-122,0 a122,122 0 1,1 244,0 a122,122 0 1,1 -244,0" />
        </defs>
        <text className="fill-ink font-mono" fontSize="14" fontWeight="500">
          <textPath href="#orbit-path" textLength="764" lengthAdjust="spacing">
            {profile.orbit}
          </textPath>
        </text>
      </svg>
      <Portrait />
      <ChartIcon className="sticker tilt-l top-0 left-1/4 size-14" />
      <ChatIcon className="sticker tilt-r top-6 right-2 size-14" />
      <HeadsetIcon className="sticker tilt-s top-1/2 -left-2 size-14" />
      <GaugeIcon className="sticker tilt-r top-1/2 -right-3 size-14" />
      <BotIcon className="sticker tilt-l bottom-2 left-4 size-14" />
      <DatabaseIcon className="sticker tilt-s right-10 bottom-0 size-12" />
      <SparkIcon className="sticker tilt-r -top-2 right-1/3 size-10" />
      <TargetIcon className="sticker tilt-l bottom-1/4 -left-6 size-10" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative isolate px-page-x pt-12 md:px-page-x-lg md:pt-20">
      <Ambient />
      <div className="mx-auto grid max-w-site items-center gap-12 lg:grid-cols-12">
        <div className="stagger lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-3 py-1.5 text-body-sm">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping-soft rounded-pill bg-accent-vivid" />
              <span className="relative inline-flex size-2 rounded-pill bg-accent-vivid" />
            </span>
            {profile.badge}
          </span>
          <h1 className="mt-6 text-display-compact font-extrabold md:text-display">
            Oi, eu sou o {profile.firstName}.
            <span className="block text-primary">{profile.role}.</span>
          </h1>
          <p className="mt-6 max-w-reading text-body-lg text-ink-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill href="#projetos" arrow="down">
              Ver projetos
            </Pill>
            <Pill href={links.linkedin.href} variant="secondary" external>
              Ver LinkedIn
            </Pill>
          </div>
        </div>

        <div className="stagger lg:col-span-5">
          <Orbit />
        </div>
      </div>

      {/* Faixa: onde trabalhei e o que estou estudando */}
      <div className="stagger mx-auto mt-16 grid max-w-site gap-8 border-t border-line pt-8 pb-section md:grid-cols-2 md:pb-section-lg">
        <div>
          <Meta>Onde trabalhei</Meta>
          <p className="mt-2 text-body">{profile.workedAt.join(" · ")}</p>
        </div>
        <div>
          <Meta>Estudando agora</Meta>
          <p className="mt-2 text-body">{profile.studying.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
