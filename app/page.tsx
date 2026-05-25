import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const SERVICES = [
  {
    title: "Lavagem",
    description:
      "Roupas do dia a dia e peças delicadas com produtos de qualidade e cuidado no manuseio.",
  },
  {
    title: "Secagem",
    description:
      "Processo rápido e seguro para você retirar suas peças secas e prontas para usar.",
  },
  {
    title: "Passadoria",
    description:
      "Camisas, uniformes e roupas sociais passadas com acabamento impecável.",
  },
  {
    title: "Pacotes",
    description:
      "Planos mensais e pacotes por peso para quem precisa de praticidade e economia.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section
          id="inicio"
          className="bg-brand-blue px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-lime">
              Bem-vindo
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Suas roupas limpas, com a qualidade da{" "}
              <span className="text-brand-lime">{SITE_NAME}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Lavagem, secagem e passadoria com agilidade e atendimento
              próximo. Deixe a roupa suja conosco e ganhe tempo no seu dia.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-lg bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-blue transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
              >
                Fale conosco
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-lime hover:text-brand-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
              >
                Ver serviços
              </a>
            </div>
          </div>
        </section>

        <section
          id="servicos"
          className="scroll-mt-20 bg-background px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">
                Nossos serviços
              </h2>
              <p className="mt-4 text-lg text-brand-blue/75">
                Tudo o que você precisa para manter o guarda-roupa em dia, em
                um só lugar.
              </p>
            </div>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {SERVICES.map(({ title, description }) => (
                <li
                  key={title}
                  className="rounded-xl border border-brand-blue/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-brand-blue">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-brand-blue/70">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="sobre"
          className="scroll-mt-20 bg-brand-blue-light px-4 py-20 text-white sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-lime sm:text-4xl">
              Sobre nós
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-white/90">
              <p>
                A {SITE_NAME} nasceu para oferecer um serviço de lavanderia
                acessível, confiável e com atendimento humano. Trabalhamos com
                equipamentos modernos e equipe treinada para cuidar das suas
                peças como se fossem nossas.
              </p>
              <p>
                Atendemos moradores, comércios e eventos na região da COP 30,
                com prazos combinados e transparência no orçamento. Sua
                satisfação é o que nos move todos os dias.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">
              Contato
            </h2>
            <p className="mt-4 max-w-xl text-lg text-brand-blue/75">
              Tire dúvidas, peça um orçamento ou combine a retirada das suas
              roupas. Estamos prontos para atender você.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-blue/10">
                <h3 className="font-semibold text-brand-blue">Telefone</h3>
                <a
                  href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                  className="mt-2 block text-brand-blue/80 transition-colors hover:text-brand-blue"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-blue/10">
                <h3 className="font-semibold text-brand-blue">E-mail</h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-2 block text-brand-blue/80 transition-colors hover:text-brand-blue"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-blue/10 sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold text-brand-blue">Endereço</h3>
                <p className="mt-2 text-brand-blue/80">{CONTACT.address}</p>
                <p className="mt-2 text-sm text-brand-blue/60">
                  {CONTACT.hours}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
