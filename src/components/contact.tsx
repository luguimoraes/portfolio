import { contact, links, profile } from "@/content/site";
import { CodeGlyph, ProfileGlyph, WhatsAppGlyph } from "./contact-icons";
import { Reveal } from "./motion";

/** Balão de conversa com três pontinhos "digitando". */
function TypingBubble() {
  return (
    <div aria-hidden className="relative">
      <div className="flex items-center gap-2 rounded-card rounded-bl-control bg-surface px-7 py-6 shadow-card">
        {[0, 1, 2].map((i) => (
          <span key={i} className="typing-dot size-3 rounded-pill bg-primary" />
        ))}
      </div>
      {/* rabinho do balão */}
      <span className="absolute -bottom-2 left-3 size-5 rotate-45 bg-surface" />
    </div>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-pill px-5 py-3 text-body-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";

export function Contact() {
  return (
    <section id="contato" className="px-page-x py-section md:px-page-x-lg md:py-section-lg">
      <Reveal className="mx-auto flex max-w-site flex-col items-center gap-10 md:flex-row md:justify-center md:gap-16">
        <TypingBubble />

        <div className="w-full max-w-lg">
          <h2 className="text-title-1 font-extrabold md:text-display-compact">{contact.title}</h2>
          <p className="mt-4 text-body-lg text-ink-muted">{contact.text}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={links.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} bg-whatsapp text-on-whatsapp shadow-card hover:shadow-none sm:col-span-2`}
            >
              <WhatsAppGlyph className="size-5 transition-transform group-hover:-rotate-12" />
              Chamar no WhatsApp
            </a>
            <a
              href={links.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-line bg-surface hover:border-primary hover:text-primary`}
            >
              <ProfileGlyph />
              LinkedIn
            </a>
            <a
              href={links.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-line bg-surface hover:border-primary hover:text-primary`}
            >
              <CodeGlyph />
              GitHub
            </a>
          </div>
          <p className="mt-6 font-mono text-meta uppercase text-ink-muted">
            {profile.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
