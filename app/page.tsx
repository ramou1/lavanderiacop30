"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import {
  WashingMachine,
  Wind,
  type LucideIcon,
} from "lucide-react";

import {
  CONTACT,
  MACHINES,
  PRODUCTS,
  SITE_NAME,
} from "@/lib/constants";

const SERVICES: {
  title: string;
  icon: LucideIcon;
  description: string;
}[] = [
  {
    title: "Lavagem",
    icon: WashingMachine,
    description:
      "Roupas do dia a dia e peças delicadas com produtos de qualidade e cuidado no manuseio.",
  },
  {
    title: "Secagem",
    icon: Wind,
    description:
      "Processo rápido e seguro para você retirar suas peças secas e prontas para usar.",
  }
];

function RevealOnScroll({
  as: Tag = "div",
  className = "",
  style,
  children,
}: {
  as?: "div" | "li";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | HTMLLIElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationClass = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  if (Tag === "li") {
    return (
      <li
        ref={ref as RefObject<HTMLLIElement>}
        style={style}
        className={`transition-all duration-700 ${animationClass} ${className}`}
      >
        {children}
      </li>
    );
  }

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      style={style}
      className={`transition-all duration-700 ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const hotelImages = [
    { src: "/assets/images/hotel-grandsky-principal.jpeg", alt: "Fachada do Hotel Grandsky Urbanova" },
    { src: "/assets/images/hotel-grandsky-1.jpeg", alt: "Área interna da lavanderia do cop30" },
  ];
  const machinesRef = useRef<HTMLDivElement | null>(null);
  const [machinesVisible, setMachinesVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMachinesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
  
    if (machinesRef.current) observer.observe(machinesRef.current);
  
    return () => observer.disconnect();
  }, []);

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
          className="bg-brand-blue px-3 pb-16 pt-24 text-white sm:px-4 sm:pb-20 sm:pt-28 lg:px-5 lg:pb-32 lg:pt-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-10 lg:min-h-[28rem]">
            <div>
              <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Suas roupas sempre limpas, com a qualidade de uma lavanderia profissional, aqui na <span className="text-brand-lime">COP 30</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/85 sm:text-lg">
                Lavagem e secagem com agilidade e atendimento
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

            <HeroSlider />
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

            <ul className="mt-12 grid gap-6 lg:grid-cols-2">
              {SERVICES.map(({ title, icon: Icon, description }, index) => (
                <RevealOnScroll
                  key={title}
                  as="li"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    transitionDelay: `${index * 150}ms`,
                  }}
                  className="flex flex-col rounded-xl border border-brand-blue/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-lime hover:shadow-md"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/5 text-brand-blue">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-brand-blue">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-brand-blue/70">
                    {description}
                  </p>
                </RevealOnScroll>
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
                <RevealOnScroll
                  key={name}
                  as="li"
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-brand-lime">
                    {name}
                  </h3>
                  <p className="mt-2 text-white/80">
                    Marca: <span className="font-medium text-white">{brand}</span>
                  </p>
                </RevealOnScroll>
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
            <div className="mt-6 w-full rounded-xl border border-brand-blue/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="space-y-4 text-base leading-relaxed text-brand-blue/80 sm:text-lg">
                <p>
                  A Lavanderia COP 30 nasceu para oferecer uma solução prática,
                  acessível e confiável para quem valoriza autonomia, comodidade
                  e eficiência no cuidado com suas roupas. Aqui, você mesmo
                  realiza a lavagem e secagem das suas peças, utilizando
                  equipamentos modernos, de alta performance e fáceis de usar,
                  garantindo excelentes resultados em cada ciclo.
                </p>
                <p>
                  Localizada ao lado do Hotel Grand Sky Urbanova, em São José
                  dos Campos, a Lavanderia COP 30 foi pensada para proporcionar
                  uma experiência diferenciada, tanto para hóspedes quanto para
                  moradores da região. Contamos com um ambiente moderno, seguro,
                  aconchegante, climatizado e cuidadosamente projetado para ser
                  agradável e instagramável, tornando o tempo de espera mais
                  confortável e agradável.
                </p>
                <p>
                  Nosso compromisso é oferecer muito mais do que uma lavanderia:
                  queremos proporcionar praticidade, transparência e uma excelente
                  experiência, para que você tenha suas roupas sempre limpas com
                  a qualidade e a conveniência que o seu dia a dia merece.
                </p>
              </div>
            </div>

            <div
              ref={machinesRef}
              className={`mt-10 rounded-xl border border-brand-blue/10 bg-white p-6 shadow-sm sm:p-8 transition-all duration-700 ${
                machinesVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}>
              <h3 className="text-xl font-semibold text-brand-blue">
                Nossas máquinas
              </h3>
              <p className="mt-3 text-brand-blue/75">
                Contamos com 4 máquinas de lavagem para atender diferentes
                volumes de roupa:
              </p>
              <ul className="mt-6 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    size: "P",
                    quantity: 2,
                    kg: "10kg",
                    price: "R$ 13,90",
                    image: "/assets/images/lavadora-p.png",
                    vantagens: [
                      "Ideal para peças do dia a dia",
                      "Até 10kg por ciclo",
                      "Ciclo rápido e econômico",
                      "2 unidades disponíveis",
                    ],
                  },
                  {
                    size: "G",
                    quantity: 1,
                    kg: "14kg",
                    price: "R$ 23,90",
                    image: "/assets/images/lavadora-g.png",
                    vantagens: [
                      "Para volumes maiores",
                      "Até 14kg por ciclo",
                      "Ótimo para roupas de cama",
                      "Ideal para edredons e cobertores de casal",
                      "Ciclo completo e eficiente",
                    ],
                  },
                  {
                    size: "GG",
                    quantity: 1,
                    kg: "22kg",
                    price: "R$ 39,90",
                    image: "/assets/images/lavadora-gg.png",
                    highlight: true,
                    vantagens: [
                      "Única em São José dos Campos",
                      "Até 22kg por ciclo",
                      "Ideal para eedredons e cobertores king",
                      "Máxima capacidade disponível",
                    ],
                  },
                ].map((machine) => (
                  <li
                    key={machine.size}
                    className="flex flex-col rounded-2xl border border-brand-blue/10 bg-white shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
                  >
                    {/* Imagem */}
                    <div className="relative h-72 w-full bg-brand-blue/5">
                      <Image
                        src={machine.image}
                        alt={`Lavadora tamanho ${machine.size}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col gap-4 p-5">

                      {/* Título */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue/50">
                          {machine.quantity > 1 ? `${machine.quantity} unidades` : "1 unidade"}
                        </p>
                        <h4 className="mt-1 text-2xl font-bold text-brand-blue">
                          Tamanho {machine.size}
                        </h4>
                        <p className="mt-1 text-sm text-brand-blue/60">
                          {machine.kg} · <span className="font-semibold text-brand-blue">{machine.price}</span>
                        </p>
                        {machine.highlight && (
                          <span className="mt-2 inline-block rounded-full bg-brand-lime px-3 py-1 text-xs font-semibold text-brand-blue">
                            Única em SJC
                          </span>
                        )}
                      </div>

                      {/* Vantagens */}
                      <ul className="flex flex-col gap-2">
                        {machine.vantagens.map((v) => (
                          <li
                            key={v}
                            className="rounded-lg bg-brand-blue/5 px-4 py-2 text-sm text-brand-blue/80"
                          >
                            {v}
                          </li>
                        ))}
                      </ul>

                    </div>
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
            <div className="max-w-full">
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
              <p
                className="mt-4 text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-body)" }}
              >
                A lavanderia está localizada no térreo do Hotel Grand Sky Urbanova,
                compartilhando a mesma estrutura e proporcionando máxima comodidade
                aos hóspedes. Basta sair do prédio e, em poucos passos, chegar à
                lavanderia para deixar suas roupas e retirá-las prontas posteriormente.
                A proximidade garante um acesso rápido e confortável, permitindo que os
                hóspedes contem com um serviço profissional de lavanderia sem a
                necessidade de grandes deslocamentos durante sua estadia.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div
                className="relative h-64 overflow-hidden rounded-2xl md:h-[32rem] cursor-zoom-in"
                onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}
              >
                <Image
                  src={hotelImages[0].src}
                  alt={hotelImages[0].alt}
                  fill
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div
                className="relative h-64 overflow-hidden rounded-2xl md:h-[32rem] cursor-zoom-in"
                onClick={() => { setLightboxIndex(1); setLightboxOpen(true); }}
              >
                <Image
                  src={hotelImages[1].src}
                  alt={hotelImages[1].alt}
                  fill
                  className="object-cover object-right transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
                onClick={() => setLightboxOpen(false)}
              >
                {/* Botão fechar */}
                <button
                  className="absolute top-5 right-5 text-white text-3xl font-bold z-10 hover:opacity-70 transition-opacity"
                  onClick={() => setLightboxOpen(false)}
                >
                  ✕
                </button>

                {/* Seta esquerda */}
                <button
                  className="absolute left-4 text-white text-4xl font-bold z-10 hover:opacity-70 transition-opacity px-4 py-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev - 1 + hotelImages.length) % hotelImages.length);
                  }}
                >
                  ‹
                </button>

                {/* Imagem ampliada */}
                <div
                  className="relative w-[90vw] h-[80vh] rounded-xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={hotelImages[lightboxIndex].src}
                    alt={hotelImages[lightboxIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Seta direita */}
                <button
                  className="absolute right-4 text-white text-4xl font-bold z-10 hover:opacity-70 transition-opacity px-4 py-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev + 1) % hotelImages.length);
                  }}
                >
                  ›
                </button>

                {/* Indicador de posição */}
                <div className="absolute bottom-5 flex gap-2">
                  {hotelImages.map((_, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: i === lightboxIndex ? "#7ce75c" : "rgba(255,255,255,0.4)" }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Estacionamento",
                "Wi-Fi",
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
          id="localizacao"
          className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 sm:py-20 sm:pb-6 pb-2 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="w-full">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-lime">
                Onde estamos
              </p>
              <h2 className="mt-2 text-3xl font-bold text-brand-blue sm:text-4xl">
                Saiba onde nos encontrar
              </h2>
              <p className="mt-4 w-full text-lg text-brand-blue/75">
                Estamos localizados em fácil acesso na região de Urbanova, em São José dos Campos, SP.
              </p>
            </div>

            <div className="mt-10">
              <RevealOnScroll className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-brand-blue/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d-45.9341!3d-23.2203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4bb3b4b4b4b4%3A0x5bdb0e0e0e0e0e0e!2sAv.%20Shishima%20Hifumi%2C%202828%20-%20Urbanova%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012244-390!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Lavanderia COP 30"
                />
              </RevealOnScroll>
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
            <p className="mt-4 w-full text-lg text-brand-blue/75">
              Tire suas dúvidas. Estamos prontos para atender você.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <RevealOnScroll className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-blue/10">
                <h3 className="font-semibold text-brand-blue">Telefone</h3>
                <a
                  href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                  className="mt-2 block text-brand-blue/80 transition-colors hover:text-brand-blue"
                >
                  {CONTACT.phone}
                </a>
              </RevealOnScroll>
              <RevealOnScroll className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-blue/10">
                <h3 className="font-semibold text-brand-blue">E-mail</h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-2 block break-all text-brand-blue/80 transition-colors hover:text-brand-blue"
                >
                  {CONTACT.email}
                </a>
              </RevealOnScroll>
              <RevealOnScroll className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-blue/10 sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold text-brand-blue">Endereço</h3>
                <p className="mt-2 text-brand-blue/80">{CONTACT.street}</p>
                <p className="text-brand-blue/80">
                  Urbanova, {CONTACT.city} - {CONTACT.state}
                </p>
                <p className="text-brand-blue/80">CEP: {CONTACT.zip}</p>
                <p className="mt-2 text-sm text-brand-blue/60">{CONTACT.hours}</p>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
