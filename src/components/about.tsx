import Image from "next/image";
import { about, links, phoneDisplay, profile } from "@/content/site";
import { CodeGlyph, LinkGlyph, ProfileGlyph, WhatsAppGlyph } from "./contact-icons";
import { SparkIcon } from "./icons";
import { Reveal } from "./motion";
import { Meta, Pill } from "./ui";

const contacts = [
  { Glyph: WhatsAppGlyph, label: "WhatsApp", value: phoneDisplay, href: links.whatsapp.href },
  { Glyph: ProfileGlyph, label: "LinkedIn", value: "in/guilhermeluis", href: links.linkedin.href },
  { Glyph: CodeGlyph, label: "GitHub", value: "github.com/luguimoraes", href: links.github.href },
  { Glyph: LinkGlyph, label: "Todos os links", value: "linktr.ee/luguimoraes", href: links.linktree.href },
];

/** Polaroid com fita adesiva, legenda manuscrita e uma figurinha de brilho. */
function Polaroid() {
  return (
    <div className="relative mx-auto w-72 md:w-80">
      <figure className="polaroid relative bg-paper p-4 pb-5 shadow-card">
        {/* fita adesiva */}
        <span aria-hidden className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-3 bg-accent-vivid opacity-60" />
        <div className="relative aspect-square overflow-hidden bg-primary-soft">
          {profile.photo && (
            <Image src={profile.photo} alt={`Foto de ${profile.name}`} fill sizes="20rem" className="scale-140 object-cover" />
          )}
        </div>
        <figcaption className="mt-4 px-1 text-center font-hand text-title-2 leading-tight text-paper-ink">
          {about.caption}
        </figcaption>
      </figure>
      <SparkIcon className="sticker tilt-l -bottom-6 -left-8 size-16" />
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="bg-surface-soft px-page-x py-section md:px-page-x-lg md:py-section-lg">
      <div className="mx-auto grid max-w-site items-center gap-16 lg:grid-cols-12">
        <Reveal group className="lg:col-span-7">
          <Meta className="flex items-center gap-3 text-primary">
            <span aria-hidden className="h-0.5 w-8 bg-accent-vivid" />
            Quem sou eu
          </Meta>
          <h2 className="mt-3 text-title-1 font-extrabold md:text-display-compact">{about.title}</h2>
          <div className="mt-6 max-w-reading space-y-4 text-body-lg text-ink-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {contacts.map(({ Glyph, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-control border border-transparent p-2 transition-colors hover:border-line hover:bg-surface"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-surface text-primary transition-colors group-hover:bg-primary group-hover:text-primary-ink">
                    <Glyph />
                  </span>
                  <span>
                    <span className="block text-body-sm font-bold">{label}</span>
                    <span className="block text-body-sm text-ink-muted">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Pill href="#trajetoria" arrow="down">
              Ver minha trajetória
            </Pill>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5">
          <Polaroid />
        </Reveal>
      </div>
    </section>
  );
}
