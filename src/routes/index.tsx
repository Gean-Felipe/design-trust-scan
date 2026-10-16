import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ADDRESS,
  Footer,
  Header,
  INSTAGRAM,
  Lightbox,
  MAPS,
  PHONE,
  useScrollReveal,
  WHATSAPP,
} from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Michelly Ramos — Odontologia estética em Cuiabá, MT" },
      {
        name: "description",
        content:
          "Facetas em resina, lentes de contato dental, clínica geral e próteses sobre implantes em Cuiabá. Atendimento individualizado e humanizado.",
      },
      { property: "og:title", content: "Dra. Michelly Ramos — Odontologia estética em Cuiabá" },
      {
        property: "og:description",
        content:
          "Cuidado odontológico individualizado, atenção aos detalhes e naturalidade do sorriso.",
      },
    ],
  }),
  component: Index,
});

/* ─── Data ──────────────────────────────────────────────────── */

const TREATMENTS: { t: string; d: string }[] = [
  {
    t: "Facetas em resina estratificada",
    d: "Uma abordagem estética que permite trabalhar forma, proporção e aparência dos dentes de acordo com cada caso.",
  },
  {
    t: "Lentes de contato dental",
    d: "Alternativa estética indicada para situações específicas, após avaliação profissional e planejamento individualizado.",
  },
  {
    t: "Clínica geral",
    d: "Cuidados odontológicos voltados à avaliação e à manutenção da saúde bucal.",
  },
  {
    t: "Próteses sobre implantes",
    d: "Planejamento protético individualizado para reabilitação oral, conforme as necessidades clínicas de cada paciente.",
  },
  {
    t: "Avaliação odontológica",
    d: "Um momento para compreender suas necessidades, esclarecer dúvidas e discutir as possibilidades de tratamento.",
  },
  {
    t: "Urgência e emergência odontológica",
    d: "Atendimento para situações que precisam de avaliação odontológica prioritária, conforme a disponibilidade e a orientação da equipe.",
  },
];

const PILLARS = [
  {
    t: "Escuta individualizada",
    d: "Compreender suas expectativas e necessidades antes de discutir as possibilidades de tratamento.",
  },
  {
    t: "Planejamento cuidadoso",
    d: "Explicar as alternativas de forma clara, respeitando as particularidades de cada caso.",
  },
  {
    t: "Atendimento humanizado",
    d: "Oferecer uma experiência acolhedora, com ética, responsabilidade e atenção.",
  },
];

const GALLERY = [
  {
    src: "/images/sorriso_resultado_facetas.jpg",
    alt: "Resultado de tratamento estético — sorriso natural com facetas em resina",
    label: "Resultado clínico",
  },
  {
    src: "/images/antes_depois_caso1.jpg",
    alt: "Comparativo antes e depois de tratamento odontológico estético",
    label: "Antes e depois",
  },
  {
    src: "/images/detalhe_facetas_lateral.jpg",
    alt: "Detalhe lateral de facetas em resina — resultado natural",
    label: "Detalhe do resultado",
  },
  {
    src: "/images/antes_depois_caso2.jpg",
    alt: "Comparativo antes e depois — resultado de tratamento estético",
    label: "Antes e depois",
  },
];

const wa = (t: string) =>
  "https://wa.me/5565993394833?text=" +
  encodeURIComponent(`Olá! Gostaria de saber mais sobre ${t.toLowerCase()}.`);

/* ─── Main component ────────────────────────────────────────── */

function Index() {
  useScrollReveal();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* ═══════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════ */}
        <section id="inicio" className="scroll-mt-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-0 lg:px-10 lg:pb-28 lg:pt-20">
            <div className="flex flex-col justify-center lg:col-span-6 lg:pr-12 reveal-left">
              <p className="eyebrow flex items-center gap-4 text-muted-foreground">
                <span className="hairline" /> Odontologia estética · Cuiabá, MT
              </p>
              <h1 className="mt-8 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
                Seu sorriso, com a naturalidade
                <br className="hidden sm:block" /> que faz sentido{" "}
                <em className="text-accent not-italic">para você.</em>
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Cuidado odontológico individualizado, atenção aos detalhes e tratamentos planejados
                para valorizar o seu sorriso com equilíbrio e naturalidade.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ink">
                  Agendar minha avaliação <span aria-hidden>→</span>
                </a>
                <a href="#dra-michelly" className="btn-line">
                  Conheça a Dra. Michelly
                </a>
              </div>
            </div>
            <div className="relative lg:col-span-6 reveal-right">
              <div className="absolute -left-6 top-10 hidden h-[85%] w-px bg-accent/60 lg:block" />
              <div className="aspect-[3/4] w-full overflow-hidden lg:ml-auto lg:w-[92%] img-zoom">
                <img
                  src="/images/retrato_fundo_preto.jpeg"
                  alt="Dra. Michelly Ramos — Cirurgiã-dentista especialista em odontologia estética"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SOBRE — A DRA. MICHELLY
        ═══════════════════════════════════════════════════════ */}
        <section id="dra-michelly" className="scroll-mt-20 bg-paper">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
            <div className="lg:col-span-5 reveal-left">
              <div className="aspect-[3/4] overflow-hidden img-zoom">
                <img
                  src="/images/image_principal.jpeg"
                  alt="Dra. Michelly Ramos em retrato profissional"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 reveal-right">
              <p className="eyebrow text-accent">A Dra. Michelly</p>
              <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
                Cuidado que começa<br /> em ouvir.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-foreground/85">
                Cada sorriso tem características, necessidades e expectativas próprias. Meu
                compromisso é oferecer um atendimento próximo e responsável, compreendendo o que
                cada paciente busca e apresentando possibilidades de tratamento com clareza e
                cuidado.
              </p>
              <p className="mt-6 border-l-2 border-accent pl-5 font-serif text-xl italic text-muted-foreground">
                Planejamento individualizado, atenção aos detalhes e respeito à naturalidade de cada
                sorriso.
              </p>
              <a href="#tratamentos" className="btn-line mt-10">
                Conheça os tratamentos
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            TRATAMENTOS
        ═══════════════════════════════════════════════════════ */}
        <section id="tratamentos" className="scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            {/* Cabeçalho da seção */}
            <div className="grid gap-8 lg:grid-cols-12 reveal">
              <div className="lg:col-span-6">
                <p className="eyebrow flex items-center gap-4 text-muted-foreground">
                  <span className="hairline" /> Tratamentos
                </p>
                <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
                  Tratamentos pensados
                  <br />
                  para o seu sorriso.
                </h2>
              </div>
              <p className="self-end text-muted-foreground lg:col-span-5 lg:col-start-8">
                Cada tratamento começa com uma avaliação individual, para compreender suas
                necessidades e identificar as possibilidades de cuidado mais adequadas.
              </p>
            </div>

            {/* Cards destaque */}
            <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Card 01 — Facetas em resina */}
              <article className="lg:col-span-7 treatment-card reveal">
                <div className="aspect-[16/10] overflow-hidden img-zoom">
                  <img
                    src="/images/sorriso_resultado_facetas.jpg"
                    alt="Resultado de facetas em resina estratificada — sorriso natural e harmônico"
                    className="h-full w-full object-cover object-[center_60%]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-[auto_1fr]">
                  <span className="font-serif text-5xl text-accent">01</span>
                  <div>
                    <h3 className="text-3xl">{TREATMENTS[0]!.t}</h3>
                    <p className="mt-3 max-w-lg text-muted-foreground">{TREATMENTS[0]!.d}</p>
                    <a
                      href={wa(TREATMENTS[0]!.t)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-line mt-4"
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </article>

              {/* Card 02 — Lentes de contato dental */}
              <article className="flex flex-col bg-secondary p-8 lg:col-span-5 lg:p-12 treatment-card reveal">
                <div className="mb-8 overflow-hidden img-zoom">
                  <img
                    src="/images/antes_depois_caso2.jpg"
                    alt="Comparativo antes e depois — resultado de tratamento estético dental"
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/4", objectPosition: "center 40%" }}
                    loading="lazy"
                  />
                </div>
                <span className="font-serif text-5xl text-foreground/30">02</span>
                <h3 className="mt-4 text-3xl">{TREATMENTS[1]!.t}</h3>
                <p className="mt-3 text-foreground/75">{TREATMENTS[1]!.d}</p>
                <a
                  href={wa(TREATMENTS[1]!.t)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line mt-6 self-start"
                >
                  Saiba mais
                </a>
              </article>
            </div>

            {/* Lista de tratamentos restantes */}
            <ul className="mt-20 border-t border-border reveal">
              {TREATMENTS.slice(2).map((x, i) => (
                <li
                  key={x.t}
                  className="group grid gap-3 border-b border-border py-8 transition-colors md:grid-cols-12 md:items-baseline"
                >
                  <span className="font-serif text-xl text-accent md:col-span-1">0{i + 3}</span>
                  <h3 className="text-2xl transition-colors duration-300 group-hover:text-accent md:col-span-4">
                    {x.t}
                  </h3>
                  <p className="text-muted-foreground md:col-span-5">{x.d}</p>
                  <a
                    href={wa(x.t)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold transition-colors duration-300 md:col-span-2 md:text-right hover:text-accent"
                  >
                    Saiba mais →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            RESULTADOS — GALERIA
        ═══════════════════════════════════════════════════════ */}
        <section id="resultados" className="scroll-mt-20 bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="max-w-2xl reveal">
              <p className="eyebrow text-accent">Resultados</p>
              <h2 className="mt-5 text-4xl sm:text-5xl">Detalhes que fazem a diferença.</h2>
              <p className="mt-6 text-muted-foreground">
                Cada sorriso tem características próprias. Conheça alguns registros do trabalho
                desenvolvido no consultório.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6 reveal-stagger">
              {/* Caso principal — grande */}
              <button
                className="col-span-2 md:col-span-7 md:row-span-2 img-zoom cursor-zoom-in overflow-hidden reveal"
                onClick={() => setLightbox(GALLERY[0]!)}
                aria-label={`Ampliar: ${GALLERY[0]!.alt}`}
              >
                <div className="relative h-full">
                  <img
                    src={GALLERY[0]!.src}
                    alt={GALLERY[0]!.alt}
                    className="h-full w-full object-cover object-[center_55%]"
                    style={{ aspectRatio: "4/3" }}
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 eyebrow bg-background/85 px-3 py-2 text-muted-foreground text-[0.6rem]">
                    {GALLERY[0]!.label}
                  </span>
                </div>
              </button>

              {/* Caso 2 */}
              <button
                className="md:col-span-5 img-zoom cursor-zoom-in overflow-hidden reveal"
                onClick={() => setLightbox(GALLERY[1]!)}
                aria-label={`Ampliar: ${GALLERY[1]!.alt}`}
              >
                <div className="relative h-full">
                  <img
                    src={GALLERY[1]!.src}
                    alt={GALLERY[1]!.alt}
                    className="h-full w-full object-cover object-center"
                    style={{ aspectRatio: "5/3" }}
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 eyebrow bg-background/85 px-3 py-2 text-muted-foreground text-[0.6rem]">
                    {GALLERY[1]!.label}
                  </span>
                </div>
              </button>

              {/* Caso 3 */}
              <button
                className="md:col-span-5 img-zoom cursor-zoom-in overflow-hidden reveal"
                onClick={() => setLightbox(GALLERY[2]!)}
                aria-label={`Ampliar: ${GALLERY[2]!.alt}`}
              >
                <div className="relative h-full">
                  <img
                    src={GALLERY[2]!.src}
                    alt={GALLERY[2]!.alt}
                    className="h-full w-full object-cover object-center"
                    style={{ aspectRatio: "5/3" }}
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 eyebrow bg-background/85 px-3 py-2 text-muted-foreground text-[0.6rem]">
                    {GALLERY[2]!.label}
                  </span>
                </div>
              </button>

              {/* Caso 4 — panorâmico */}
              <button
                className="col-span-2 md:col-span-12 img-zoom cursor-zoom-in overflow-hidden reveal"
                onClick={() => setLightbox(GALLERY[3]!)}
                aria-label={`Ampliar: ${GALLERY[3]!.alt}`}
              >
                <div className="relative">
                  <img
                    src={GALLERY[3]!.src}
                    alt={GALLERY[3]!.alt}
                    className="w-full object-cover object-center"
                    style={{ aspectRatio: "16/7" }}
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 eyebrow bg-background/85 px-3 py-2 text-muted-foreground text-[0.6rem]">
                    {GALLERY[3]!.label}
                  </span>
                </div>
              </button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Registros reais publicados mediante autorização dos pacientes. Resultados variam
              conforme cada caso.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            DIFERENCIAIS
        ═══════════════════════════════════════════════════════ */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4 reveal-left">
                <span className="hairline" />
                <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">
                  Um atendimento que respeita você.
                </h2>
              </div>
              <ol className="lg:col-span-7 lg:col-start-6 reveal-stagger">
                {PILLARS.map((p, i) => (
                  <li
                    key={p.t}
                    className="grid gap-4 border-t border-ink-foreground/15 py-10 sm:grid-cols-[4rem_1fr] reveal"
                  >
                    <span className="eyebrow pt-2 text-accent">0{i + 1}</span>
                    <div>
                      <h3 className="text-3xl">{p.t}</h3>
                      <p className="mt-3 max-w-md leading-relaxed text-ink-muted">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════════════════ */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid items-end gap-10 border-y border-accent/50 py-16 lg:grid-cols-12 reveal">
              <h2 className="text-4xl leading-tight sm:text-6xl lg:col-span-7">
                Vamos conversar sobre <em className="text-accent not-italic">o seu sorriso?</em>
              </h2>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="text-muted-foreground">
                  Agende uma avaliação e conheça as possibilidades de cuidado para as suas
                  necessidades.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink mt-8"
                >
                  Falar com a equipe pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CONTATO
        ═══════════════════════════════════════════════════════ */}
        <section id="contato" className="scroll-mt-20 bg-secondary">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5 reveal-left">
              <p className="eyebrow text-foreground/60">Localização e contato</p>
              <h2 className="mt-5 text-4xl">Consultório Odontológico Dra. Michelly Ramos</h2>
              <dl className="mt-10 space-y-7">
                <div>
                  <dt className="eyebrow text-foreground/60">Endereço</dt>
                  <dd className="mt-2">
                    <a
                      href={MAPS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-accent"
                    >
                      {ADDRESS}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-foreground/60">Telefone e WhatsApp</dt>
                  <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                    <a href={PHONE} className="transition-colors duration-300 hover:text-accent">
                      (65) 99339-4833
                    </a>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 transition-colors duration-300 hover:text-accent"
                    >
                      Abrir WhatsApp
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-foreground/60">Instagram</dt>
                  <dd className="mt-2">
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-accent"
                    >
                      @dramichellyramos
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-foreground/60">Horários</dt>
                  <dd className="mt-2 text-foreground/75">
                    Consulte os horários de atendimento com a equipe pelo WhatsApp.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-7 reveal-right">
              <iframe
                title="Mapa do consultório — Dra. Michelly Ramos, Cuiabá, MT"
                src="https://www.google.com/maps?q=Rua+Quarenta+e+Quatro,+30,+CPA+III,+Cuiab%C3%A1,+MT,+78058-448&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
