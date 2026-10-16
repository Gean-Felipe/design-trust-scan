import { createFileRoute } from "@tanstack/react-router";
import {
  ADDRESS,
  Footer,
  Header,
  INSTAGRAM,
  MAPS,
  PHONE,
  PhotoSlot,
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

const wa = (t: string) =>
  "https://wa.me/5565993394833?text=" +
  encodeURIComponent(`Olá! Gostaria de saber mais sobre ${t.toLowerCase()}.`);

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section id="inicio" className="scroll-mt-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-0 lg:px-10 lg:pb-28 lg:pt-20">
            <div className="flex flex-col justify-center lg:col-span-6 lg:pr-12">
              <p className="eyebrow flex items-center gap-4 text-muted-foreground">
                <span className="hairline" /> Odontologia estética · Cuiabá, MT
              </p>
              <h1 className="mt-8 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
                Seu sorriso, com a naturalidade
                <br className="hidden sm:block" /> que faz sentido{" "}
                <em className="text-accent">para você.</em>
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
            <div className="relative lg:col-span-6">
              <div className="absolute -left-6 top-10 hidden h-[85%] w-px bg-accent/60 lg:block" />
              <PhotoSlot 
                src="/images/retrato_fundo_preto.jpeg"
                className="aspect-[3/4] w-full bg-ink lg:ml-auto lg:w-[92%]"
              />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="dra-michelly" className="scroll-mt-20 bg-paper">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
            <PhotoSlot
              src="/images/image_principal.jpeg"
              className="aspect-[3/4] lg:col-span-5"
            />
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow text-accent">A Dra. Michelly</p>
              <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
                Cuidado que começa em ouvir.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-foreground/85">
                Cada sorriso tem características, necessidades e expectativas próprias. Meu
                compromisso é oferecer um atendimento próximo e responsável, compreendendo o que
                cada paciente busca e apresentando possibilidades de tratamento com clareza e
                cuidado.
              </p>
              <p className="mt-6 border-l border-accent pl-5 font-serif text-xl italic text-muted-foreground">
                Planejamento individualizado, atenção aos detalhes e respeito à naturalidade de cada
                sorriso.
              </p>
              <a href="#tratamentos" className="btn-line mt-10">
                Conheça os tratamentos
              </a>
            </div>
          </div>
        </section>

        {/* Tratamentos */}
        <section id="tratamentos" className="scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-12">
              <h2 className="text-4xl leading-tight sm:text-5xl lg:col-span-6">
                Tratamentos pensados
                <br />
                para o seu sorriso.
              </h2>
              <p className="self-end text-muted-foreground lg:col-span-5 lg:col-start-8">
                Cada tratamento começa com uma avaliação individual, para compreender suas
                necessidades e identificar as possibilidades de cuidado mais adequadas.
              </p>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-12">
              <article className="lg:col-span-7">
                <PhotoSlot label="Foto clínica autorizada" className="aspect-[16/10]" />
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
              <article className="flex flex-col justify-end bg-secondary p-8 lg:col-span-5 lg:p-12">
                <span className="font-serif text-5xl text-foreground/40">02</span>
                <h3 className="mt-6 text-3xl">{TREATMENTS[1]!.t}</h3>
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

            <ul className="mt-20 border-t border-border">
              {TREATMENTS.slice(2).map((x, i) => (
                <li
                  key={x.t}
                  className="group grid gap-3 border-b border-border py-8 md:grid-cols-12 md:items-baseline"
                >
                  <span className="font-serif text-xl text-accent md:col-span-1">0{i + 3}</span>
                  <h3 className="text-2xl transition-colors group-hover:text-accent md:col-span-4">
                    {x.t}
                  </h3>
                  <p className="text-muted-foreground md:col-span-5">{x.d}</p>
                  <a
                    href={wa(x.t)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold md:col-span-2 md:text-right hover:text-accent"
                  >
                    Saiba mais →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Resultados */}
        <section id="resultados" className="scroll-mt-20 bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent">Resultados</p>
              <h2 className="mt-5 text-4xl sm:text-5xl">Detalhes que fazem a diferença.</h2>
              <p className="mt-6 text-muted-foreground">
                Cada sorriso tem características próprias. Conheça alguns registros do trabalho
                desenvolvido no consultório.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
              <PhotoSlot
                label="Caso 1"
                className="col-span-2 aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto"
              />
              <PhotoSlot label="Caso 2" className="aspect-square md:col-span-5 md:aspect-[5/3]" />
              <PhotoSlot label="Caso 3" className="aspect-square md:col-span-5 md:aspect-[5/3]" />
              <PhotoSlot label="Caso 4" className="col-span-2 aspect-[16/7] md:col-span-12" />
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Registros reais publicados mediante autorização dos pacientes. Resultados variam
              conforme cada caso.
            </p>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="hairline" />
                <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">
                  Um atendimento que respeita você.
                </h2>
              </div>
              <ol className="lg:col-span-7 lg:col-start-6">
                {PILLARS.map((p, i) => (
                  <li
                    key={p.t}
                    className="grid gap-4 border-t border-ink-foreground/15 py-10 sm:grid-cols-[4rem_1fr]"
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

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="grid items-end gap-10 border-y border-accent/50 py-16 lg:grid-cols-12">
              <h2 className="text-4xl leading-tight sm:text-6xl lg:col-span-7">
                Vamos conversar sobre <em className="text-accent">o seu sorriso?</em>
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

        {/* Contato */}
        <section id="contato" className="scroll-mt-20 bg-secondary">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5">
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
                      className="hover:text-accent"
                    >
                      {ADDRESS}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-foreground/60">Telefone e WhatsApp</dt>
                  <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                    <a href={PHONE} className="hover:text-accent">
                      (65) 99339-4833
                    </a>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-accent"
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
                      className="hover:text-accent"
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
            <div className="lg:col-span-7">
              <iframe
                title="Mapa do consultório"
                src="https://www.google.com/maps?q=Rua+Quarenta+e+Quatro,+30,+CPA+III,+Cuiab%C3%A1,+MT,+78058-448&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0 grayscale"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
