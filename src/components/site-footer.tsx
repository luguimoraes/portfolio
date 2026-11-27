import { links, nav, profile } from "@/content/site";
import { Meta, Pill } from "./ui";

export function SiteFooter() {
  const elsewhere = [links.whatsapp, links.linkedin, links.github, links.linktree, links.instagram];
  return (
    <footer className="border-t border-line px-page-x pt-16 pb-8 md:px-page-x-lg">
      <div className="mx-auto grid max-w-site gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-title-3 font-bold">{profile.name}</p>
          <p className="mt-2 max-w-sm text-body-sm text-ink-muted">
            {profile.role} · {profile.badge}
          </p>
        </div>
        <nav aria-label="Navegação do rodapé" className="md:col-span-3">
          <Meta>Navegação</Meta>
          <ul className="mt-3 space-y-2 text-body-sm">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`} className="text-ink-muted transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <Meta>Em outros lugares</Meta>
          <ul className="mt-3 space-y-2 text-body-sm">
            {elsewhere.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted transition-colors hover:text-primary"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-site flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-body-sm text-ink-muted">
        <p>
          {profile.fullName} · Desenhado e construído com dados, tokens e IA.
        </p>
        <Pill href="#top" variant="secondary" arrow="up">
          Voltar ao topo
        </Pill>
      </div>
    </footer>
  );
}
