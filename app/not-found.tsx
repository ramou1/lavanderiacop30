import Image from "next/image";
import Link from "next/link";
import { BrandPattern } from "@/components/BrandPattern";
import { LOGO_SRC, SITE_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-blue px-6 py-12 text-white">
      <BrandPattern />
      <div className="relative z-10 flex max-w-md flex-col items-center text-center">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Image
            src={LOGO_SRC}
            alt={SITE_NAME}
            width={180}
            height={54}
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <p className="mt-10 text-7xl font-bold text-brand-lime">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Página não encontrada</h1>
        <p className="mt-4 text-base leading-relaxed text-white/75">
          O endereço que você acessou não existe ou foi movido.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-blue transition-opacity hover:opacity-90"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
