import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header } from "@/components/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade — Dra. Michelly Ramos" },
      { name: "description", content: "Como o site do Consultório Odontológico Dra. Michelly Ramos trata as informações dos visitantes." },
      { property: "og:title", content: "Política de privacidade — Dra. Michelly Ramos" },
      { property: "og:description", content: "Informações sobre privacidade do site do consultório." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-24">
        <p className="eyebrow text-accent">Privacidade</p>
        <h1 className="mt-5 text-5xl">Política de privacidade</h1>
        <div className="mt-10 space-y-6 leading-relaxed text-foreground/85">
          <p>Este site é institucional e não possui formulários, cadastro ou área de login. Não coletamos dados pessoais diretamente por meio dele.</p>
          <p>Ao clicar nos botões de contato, você é direcionado ao WhatsApp, ao Instagram ou ao Google Maps, serviços de terceiros com políticas de privacidade próprias.</p>
          <p>O mapa incorporado é fornecido pelo Google e pode utilizar cookies conforme as regras desse serviço.</p>
          <p>Dúvidas sobre o tratamento de dados podem ser enviadas à equipe pelo WhatsApp (65) 99339-4833.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
