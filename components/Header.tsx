"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { NAV_LINKS } from "@/lib/constants";

function HeaderSocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <InstagramIcon />
      <WhatsAppIcon />
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed top-0 z-50 w-full font-[family-name:var(--font-title)] transition-all duration-300 ${
        scrolled
          ? "bg-brand-blue/95 shadow-md backdrop-blur-sm"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-3 py-3 sm:px-4 lg:px-5">
        <Logo priority />

        <div className="hidden items-center gap-2 md:flex">
          <nav aria-label="Navegação principal">
            <ul className="flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded-md px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-brand-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime lg:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <HeaderSocialLinks className="ml-2 border-l border-white/15 pl-2" />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <HeaderSocialLinks />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime"
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
            className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-brand-blue/95 shadow-lg backdrop-blur-sm md:hidden"
            aria-label="Navegação mobile"
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-3 py-3 sm:px-4 lg:px-5">
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
