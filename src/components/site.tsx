import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const WHATSAPP =
  "https://wa.me/5565993394833?text=" +
  encodeURIComponent("Olá! Gostaria de obter informações e agendar uma avaliação odontológica.");
export const INSTAGRAM = "https://www.instagram.com/dramichellyramos/";
export const PHONE = "tel:+5565993394833";
export const ADDRESS = "Rua Quarenta e Quatro, 30 — Setor IV, CPA III, Cuiabá — MT, CEP 78058-448";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua Quarenta e Quatro, 30, CPA III, Cuiabá, MT, 78058-448");

const NAV = [
  { href: "/#inicio", label: "Início" },
  { href: "/#dra-michelly", label: "A Dra. Michelly" },
  { href: "/#tratamentos", label: "Tratamentos" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#contato", label: "Contato" },
];

export function Signature({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-serif text-2xl tracking-tight">Dra. Michelly Ramos</span>
      <span className={`mt-1 text-[0.65rem] tracking-[0.18em] uppercase ${light ? "text-ink-muted" : "text-muted-foreground"}`}>
        Odontologia estética
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" aria-label="Dra. Michelly Ramos — início">
          <Signature />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/80 transition-colors hover:text-accent">
              {n.label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ink">
            Agendar avaliação
          </a>
        </nav>
        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav id="menu-movel" className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden" aria-label="Menu">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/60 py-4 font-serif text-2xl">
              {n.label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ink mt-6 w-full justify-center">
            Agendar avaliação
          </a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Signature light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">{ADDRESS}</p>
        </div>
        <div>
          <p className="eyebrow text-accent">Navegação</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-ink-muted hover:text-ink-foreground">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-accent">Contato</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground">WhatsApp (65) 99339-4833</a></li>
            <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink-foreground">Instagram @dramichellyramos</a></li>
            <li><Link to="/privacidade" className="text-ink-muted hover:text-ink-foreground">Política de privacidade</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-ink-muted lg:px-10">
          © {new Date().getFullYear()} Consultório Odontológico Dra. Michelly Ramos · Cuiabá, MT
        </p>
      </div>
    </footer>
  );
}

/** Espaço reservado para fotografia real ainda não fornecida. */
export function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`photo-slot relative flex items-end ${className}`} role="img" aria-label={label}>
      <span className="eyebrow m-5 bg-background/85 px-3 py-2 text-muted-foreground">{label}</span>
    </div>
  );
}
