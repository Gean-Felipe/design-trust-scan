import { Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";

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

/* ─── Scroll Reveal Hook ────────────────────────────────────── */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ─── Assinatura ────────────────────────────────────────────── */
export function Signature({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none select-none">
      <span className="font-serif text-2xl tracking-tight">Dra. Michelly Ramos</span>
      <span
        className={`mt-1 text-[0.65rem] tracking-[0.18em] uppercase ${light ? "text-ink-muted" : "text-muted-foreground"}`}
      >
        Odontologia estética
      </span>
    </span>
  );
}

/* ─── Header ────────────────────────────────────────────────── */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-background/95 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "border-border/40 bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" aria-label="Dra. Michelly Ramos — início">
          <Signature />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
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
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>
      {/* Mobile menu */}
      <div
        id="menu-movel"
        className={`overflow-hidden transition-all duration-400 ease-in-out lg:hidden ${
          open ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="Menu"
        role="navigation"
      >
        <div className="border-t border-border bg-background px-6 pb-8 pt-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-4 font-serif text-2xl transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink mt-6 w-full justify-center"
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─── Footer ────────────────────────────────────────────────── */
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
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-accent">Contato</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
              >
                WhatsApp (65) 99339-4833
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
              >
                Instagram @dramichellyramos
              </a>
            </li>
            <li>
              <Link
                to="/privacidade"
                className="text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
              >
                Política de privacidade
              </Link>
            </li>
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

/* ─── Lightbox ──────────────────────────────────────────────── */
export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <button className="lightbox-close" onClick={onClose} aria-label="Fechar imagem">
        ✕
      </button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
