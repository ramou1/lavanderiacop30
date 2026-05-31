import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC, SITE_NAME } from "@/lib/constants";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      href="#inicio"
      className={`inline-flex shrink-0 items-center transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${SITE_NAME} — voltar ao início`}
    >
      <Image
        src={LOGO_SRC}
        alt={SITE_NAME}
        width={160}
        height={48}
        priority={priority}
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
