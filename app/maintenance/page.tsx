export default function MaintenancePage() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between px-6 py-12"
      style={{ background: "#07176d" }}
    >
      <main className="flex w-full max-w-lg flex-1 flex-col items-center justify-center text-center">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden>
          <rect
            x="10"
            y="28"
            width="60"
            height="44"
            rx="3"
            fill="#07e75c"
            fillOpacity="0.15"
            stroke="#07e75c"
            strokeWidth="2"
          />
          <rect
            x="18"
            y="36"
            width="10"
            height="10"
            rx="1.5"
            fill="#07e75c"
            fillOpacity="0.7"
          />
          <rect
            x="35"
            y="36"
            width="10"
            height="10"
            rx="1.5"
            fill="#07e75c"
            fillOpacity="0.7"
          />
          <rect
            x="52"
            y="36"
            width="10"
            height="10"
            rx="1.5"
            fill="#07e75c"
            fillOpacity="0.7"
          />
          <rect
            x="18"
            y="52"
            width="10"
            height="10"
            rx="1.5"
            fill="#07e75c"
            fillOpacity="0.7"
          />
          <rect
            x="52"
            y="52"
            width="10"
            height="10"
            rx="1.5"
            fill="#07e75c"
            fillOpacity="0.7"
          />
          <rect
            x="32"
            y="50"
            width="16"
            height="22"
            rx="2"
            fill="#07e75c"
            fillOpacity="0.9"
          />
          <polygon
            points="40,6 43.5,16.5 55,16.5 45.5,23 49,33.5 40,27 31,33.5 34.5,23 25,16.5 36.5,16.5"
            fill="#07e75c"
          />
        </svg>

        <span
          className="mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
          style={{
            color: "#07e75c",
            backgroundColor: "rgba(7,231,92,0.12)",
            borderColor: "rgba(7,231,92,0.35)",
          }}
        >
          <span
            className="h-2 w-2 animate-pulse rounded-full"
            style={{ backgroundColor: "#07e75c" }}
            aria-hidden
          />
          Em breve
        </span>

        <h1 className="mt-6 text-3xl font-bold text-white">Grand Sky Urbanova</h1>

        <p className="mt-4 max-w-md text-base text-white/60">
          Nosso site está sendo preparado com muito cuidado. Enquanto isso, nos
          acompanhe no Instagram!
        </p>

        <a
          href="https://www.instagram.com/INSTAGRAM_DO_CLIENTE"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#db2777] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Seguir no Instagram
        </a>
      </main>

      <footer className="w-full max-w-lg border-t border-white/[0.12] pt-6 text-center text-sm text-white/30">
        © 2026 Grand Sky Urbanova · Todos os direitos reservados
      </footer>
    </div>
  );
}
