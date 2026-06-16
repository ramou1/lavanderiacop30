import Image from "next/image";
import { BrandPattern } from "@/components/BrandPattern";
import {
  CONTACT,
  INSTAGRAM_URL,
  LOGO_SRC,
  SITE_NAME,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

const currentYear = new Date().getFullYear();

export default function MaintenancePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-brand-blue px-6 py-12 text-white">
      <BrandPattern />

      <main className="relative z-10 flex w-full max-w-lg flex-1 flex-col items-center justify-center text-center">
        <Image
          src={LOGO_SRC}
          alt={SITE_NAME}
          width={180}
          height={54}
          priority
          className="h-14 w-auto sm:h-16"
        />

        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-lime/35 bg-brand-lime/10 px-4 py-1.5 text-sm font-medium text-brand-lime">
          <span
            className="h-2 w-2 animate-pulse rounded-full bg-brand-lime"
            aria-hidden
          />
          Em manutenção
        </span>

        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{SITE_NAME}</h1>

        <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
          Estamos realizando melhorias no site. Em breve estaremos de volta!
          Enquanto isso, fale conosco pelo WhatsApp ou acompanhe no Instagram.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-blue transition-opacity hover:opacity-90"
          >
            Fale no WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-lime hover:text-brand-lime"
          >
            Seguir no Instagram
          </a>
        </div>
      </main>

      <footer className="relative z-10 w-full max-w-lg border-t border-white/10 pt-6 text-center text-sm text-white/40">
        <p>
          © {currentYear} {SITE_NAME} · {CONTACT.location}
        </p>
      </footer>
    </div>
  );
}
