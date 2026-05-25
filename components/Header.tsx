import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-blue shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="text-lg font-bold tracking-tight text-brand-lime transition-opacity hover:opacity-90 sm:text-xl"
        >
          {SITE_NAME}
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-brand-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime sm:text-base"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
