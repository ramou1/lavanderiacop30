"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-blue shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo priority />

        <nav
          className="hidden items-center md:flex"
          aria-label="Navegação principal"
        >
          <ul className="flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-brand-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime lg:text-base"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[57px] z-40 bg-black/50 md:hidden"
            aria-label="Fechar menu"
            onClick={closeMenu}
          />
          <nav
            id="mobile-menu"
            className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-brand-blue shadow-lg md:hidden"
            aria-label="Navegação mobile"
          >
            <ul className="flex flex-col px-4 py-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-brand-lime"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
