"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CONTACT,
  MACHINES,
  PRODUCTS,
  SITE_NAME,
} from "@/lib/constants";

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
  const reviews = [
    {
      initial: "H",
      name: "Humberto Camilo",
      text: "Equipe simpática, ter academia é um diferencial.",
    },
    {
      initial: "C",
      name: "Camila Pappalardo",
      text: "Ótimo atendimento, lugar impecável!",
    },
    {
      initial: "P",
      name: "Priscilla Neri",
      text: "Excelente atendimento e ótima localização.",
    },
    {
      initial: "M",
      name: "Maria Jose Souza",
      text: "Foi maravilhoso",
    },
    {
      initial: "F",
      name: "Francisca Roberlania Souza Ferreira",
      text: "Muito bom.",
    },
    {
      initial: "D",
      name: "Diego Del Rosso",
      text: "Excelente",
    },
  ] as const;
  const [activeReview, setActiveReview] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [desktopProgress, setDesktopProgress] = useState(0);
  const [isDesktopPaused, setIsDesktopPaused] = useState(false);
  const [isDesktopDragging, setIsDesktopDragging] = useState(false);
  const [desktopDragOffset, setDesktopDragOffset] = useState(0);
  const [desktopDragStartX, setDesktopDragStartX] = useState<number | null>(null);
  const desktopAnimationFrameRef = useRef<number | null>(null);
  const desktopLastTimeRef = useRef<number | null>(null);
  const desktopViewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isTouching) return;

    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isTouching, reviews.length]);

  useEffect(() => {
    const speedCardsPerMs = 0.00006;

    const animate = (time: number) => {
      if (desktopLastTimeRef.current === null) {
        desktopLastTimeRef.current = time;
      }

      const delta = time - desktopLastTimeRef.current;
      desktopLastTimeRef.current = time;

      if (!isDesktopPaused) {
        setDesktopProgress((prev) => (prev + delta * speedCardsPerMs) % reviews.length);
      }

      desktopAnimationFrameRef.current = requestAnimationFrame(animate);
    };

    desktopAnimationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (desktopAnimationFrameRef.current !== null) {
        cancelAnimationFrame(desktopAnimationFrameRef.current);
      }
      desktopLastTimeRef.current = null;
    };
  }, [isDesktopPaused, reviews.length]);

  return (
    <>
      <Header />

      <main>
        <section
          id="inicio"
          className="bg-brand-blue px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-lime">
              Bem-vindo
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Suas roupas limpas, com a qualidade da{" "}
              <span className="text-brand-lime">{SITE_NAME}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Lavagem, secagem e passadoria com agilidade e atendimento
              próximo. Localizados no{" "}
              <strong className="text-white">{CONTACT.location}</strong>, em
              São José dos Campos.
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
          className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
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
          id="produtos"
          className="scroll-mt-20 bg-brand-blue px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-brand-lime sm:text-4xl">
                Produtos
              </h2>
              <p className="mt-4 text-lg text-white/85">
                Utilizamos marcas reconhecidas para garantir limpeza, cuidado
                e perfume duradouro nas suas roupas.
              </p>
            </div>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map(({ name, brand }) => (
                <li
                  key={name}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-brand-lime">
                    {name}
                  </h3>
                  <p className="mt-2 text-white/80">
                    Marca: <span className="font-medium text-white">{brand}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="sobre"
          className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-blue sm:text-4xl">
              Sobre nós
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-brand-blue/80 sm:text-lg">
              <p>
                A {SITE_NAME} nasceu para oferecer um serviço de lavanderia
                acessível, confiável e com atendimento humano. Trabalhamos com
                equipamentos modernos e equipe treinada para cuidar das suas
                peças como se fossem nossas.
              </p>
              <p>
                Estamos localizados no <strong>{CONTACT.location}</strong>, em
                São José dos Campos, com prazos combinados e transparência no
                orçamento. Sua satisfação é o que nos move todos os dias.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-brand-blue/10 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-semibold text-brand-blue">
                Nossas máquinas
              </h3>
              <p className="mt-3 text-brand-blue/75">
                Contamos com 4 máquinas de lavagem para atender diferentes
                volumes de roupa:
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {MACHINES.map((machine) => (
                  <li
                    key={machine.size}
                    className="rounded-lg bg-brand-blue/5 px-4 py-5 text-center"
                  >
                    <p className="text-3xl font-bold text-brand-blue">
                      {machine.quantity}x {machine.size}
                    </p>
                    {"highlight" in machine && machine.highlight && (
                      <p className="mt-2 text-sm font-medium text-brand-blue">
                        Máquina GG única em São José dos Campos
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="hotel"
          className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          style={{ backgroundColor: "var(--foreground)" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#7ce75c", fontFamily: "var(--font-body)" }}
                >
                  HOSPEDAGEM
                </p>
                <h2
                  className="mt-4 text-3xl font-bold sm:text-4xl"
                  style={{ color: "#ffffff", fontFamily: "var(--font-title)" }}
                >
                  Hotel Grandsky Urbanova
                </h2>
                <div
                  className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="font-semibold" style={{ color: "#ffffff" }}>
                    4,7
                  </span>
                  <span className="tracking-wide text-amber-400">★★★★★</span>
                  <span style={{ color: "rgba(255,255,255,0.75)" }}>
                    18 avaliações no Google
                  </span>
                </div>
              </div>

              <p
                className="text-base leading-relaxed sm:text-lg"
                style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}
              >
                A lavanderia fica no térreo do próprio hotel, mesma estrutura. Hóspedes deixam as roupas na
                portaria e retiram prontas, sem precisar sair do prédio.
                Comodidade total para quem está hospedado no Grandsky Urbanova.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-2xl md:h-[32rem]">
                <Image
                  src="/assets/images/hotel-grandsky_urbanova-principal.png"
                  alt="Fachada do Hotel Grandsky Urbanova"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4 sm:grid-rows-2">
                <div className="relative h-64 overflow-hidden rounded-2xl sm:h-[15.5rem]">
                  <Image
                    src="/assets/images/hotel-grandsky_urbanova-2.png"
                    alt="Área interna do Hotel Grandsky Urbanova"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-2xl sm:h-[15.5rem]">
                  <Image
                    src="/assets/images/hotel-grandsky_urbanova-3.png"
                    alt="Ambiente do Hotel Grandsky Urbanova"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Academia",
                "Estacionamento",
                "Wi-Fi",
                "Lavanderia",
                "Ar-condicionado",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: "rgba(255,255,255,0.35)",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div
              className="mt-10 overflow-hidden lg:hidden"
              onTouchStart={(event) => {
                setIsTouching(true);
                setTouchStartX(event.touches[0]?.clientX ?? null);
              }}
              onTouchMove={(event) => {
                if (touchStartX === null) return;
                const currentX = event.touches[0]?.clientX ?? touchStartX;
                setDragOffset(currentX - touchStartX);
              }}
              onTouchEnd={() => {
                if (dragOffset <= -50) {
                  setActiveReview((prev) => (prev + 1) % reviews.length);
                } else if (dragOffset >= 50) {
                  setActiveReview(
                    (prev) => (prev - 1 + reviews.length) % reviews.length,
                  );
                }
                setDragOffset(0);
                setTouchStartX(null);
                setIsTouching(false);
              }}
              onTouchCancel={() => {
                setDragOffset(0);
                setTouchStartX(null);
                setIsTouching(false);
              }}
            >
              <div
                className="flex"
                style={{
                  transform: `translateX(calc(${-activeReview * 100}% + ${dragOffset}px))`,
                  transition: isTouching ? "none" : "transform 900ms ease",
                }}
              >
                {reviews.map((review) => (
                  <article
                    key={`${review.initial}-mobile`}
                    className="w-full shrink-0 rounded-2xl border p-6"
                    style={{
                      backgroundColor: "rgba(7,23,109,0.82)",
                      borderColor: "#ffffff",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                        style={{
                          backgroundColor: "#7ce75c",
                          color: "#07176d",
                          fontFamily: "var(--font-title)",
                        }}
                      >
                        {review.initial}
                      </span>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{
                            color: "#ffffff",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {review.name}
                        </p>
                        <span className="text-amber-400">★★★★★</span>
                      </div>
                    </div>
                    <p
                      className="mt-4 text-sm leading-relaxed"
                      style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}
                    >
                      {review.text}
                    </p>
                    <p
                      className="mt-4 text-xs"
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Avaliação no Google
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div
              className="mt-10 hidden overflow-hidden lg:block"
              onMouseEnter={() => setIsDesktopPaused(true)}
              onMouseLeave={() => {
                if (!isDesktopDragging) setIsDesktopPaused(false);
              }}
              onPointerDown={(event) => {
                setIsDesktopDragging(true);
                setIsDesktopPaused(true);
                setDesktopDragStartX(event.clientX);
                setDesktopDragOffset(0);
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                if (!isDesktopDragging || desktopDragStartX === null) return;
                setDesktopDragOffset(event.clientX - desktopDragStartX);
              }}
              onPointerUp={(event) => {
                if (!isDesktopDragging) return;
                const viewportWidth = desktopViewportRef.current?.clientWidth ?? 0;
                const cardWidth = viewportWidth / 3;

                if (cardWidth > 0) {
                  const deltaProgress = desktopDragOffset / cardWidth;
                  setDesktopProgress((prev) => {
                    const next = (prev - deltaProgress) % reviews.length;
                    return next < 0 ? next + reviews.length : next;
                  });
                }

                setDesktopDragOffset(0);
                setDesktopDragStartX(null);
                setIsDesktopDragging(false);
                setIsDesktopPaused(false);
                event.currentTarget.releasePointerCapture(event.pointerId);
              }}
              onPointerCancel={(event) => {
                setDesktopDragOffset(0);
                setDesktopDragStartX(null);
                setIsDesktopDragging(false);
                setIsDesktopPaused(false);
                event.currentTarget.releasePointerCapture(event.pointerId);
              }}
            >
              <div
                ref={desktopViewportRef}
                className="-mx-2 flex"
                style={{
                  transform: `translateX(calc(-${desktopProgress * (100 / 3)}% + ${desktopDragOffset}px))`,
                  cursor: isDesktopDragging ? "grabbing" : "grab",
                }}
              >
                {[...reviews, ...reviews].map((review, index) => (
                  <div key={`${review.initial}-desktop-${index}`} className="w-1/3 shrink-0 px-2">
                    <article
                      className="rounded-2xl border p-6"
                      style={{
                        backgroundColor: "rgba(7,23,109,0.82)",
                        borderColor: "#ffffff",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                          style={{
                            backgroundColor: "#7ce75c",
                            color: "#07176d",
                            fontFamily: "var(--font-title)",
                          }}
                        >
                          {review.initial}
                        </span>
                        <div>
                          <p
                            className="text-sm font-semibold"
                            style={{
                              color: "#ffffff",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {review.name}
                          </p>
                          <span className="text-amber-400">★★★★★</span>
                        </div>
                      </div>
                      <p
                        className="mt-4 text-sm leading-relaxed"
                        style={{ color: "#ffffff", fontFamily: "var(--font-body)" }}
                      >
                        {review.text}
                      </p>
                      <p
                        className="mt-4 text-xs"
                        style={{
                          color: "rgba(255,255,255,0.65)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Avaliação no Google
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
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
      <WhatsAppButton />
    </>
  );
}
