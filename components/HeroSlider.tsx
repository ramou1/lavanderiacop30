"use client";

import Image from "next/image";
import { useState } from "react";

const HERO_IMAGES = [
  {
    src: "/assets/images/ambiente-lavanderia-urbanova-01.png",
    alt: "Ambiente da lavanderia COP 30",
  },
  {
    src: "/assets/images/ambiente-lavanderia-urbanova-02.png",
    alt: "Máquinas de lavagem da lavanderia COP 30",
  },
  {
    src: "/assets/images/ambiente-lavanderia-urbanova-03.png",
    alt: "Espaço interno da lavanderia COP 30",
  },
] as const;

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((current) => (current - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  const goNext = () =>
    setIndex((current) => (current + 1) % HERO_IMAGES.length);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 sm:aspect-[16/9]">
      <Image
        key={HERO_IMAGES[index].src}
        src={HERO_IMAGES[index].src}
        alt={HERO_IMAGES[index].alt}
        fill
        priority={index === 0}
        className="object-cover"
      />

      <button
        type="button"
        onClick={goPrev}
        aria-label="Imagem anterior"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-blue/70 text-2xl text-white transition-colors hover:bg-brand-lime hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Próxima imagem"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-blue/70 text-2xl text-white transition-colors hover:bg-brand-lime hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
      >
        ›
      </button>
    </div>
  );
}
