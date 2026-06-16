"use client";

import { useEffect, useRef, useState } from "react";

const HIDE_DELAY_MS = 350;
const MAX_VISIBLE_MS = 5000;

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const hiddenRef = useRef(false);

  useEffect(() => {
    let hideSoonTimer: ReturnType<typeof setTimeout> | null = null;

    const hide = () => {
      if (hiddenRef.current) return;
      hiddenRef.current = true;
      setFadeOut(true);
    };

    const hideSoon = () => {
      hideSoonTimer = setTimeout(hide, HIDE_DELAY_MS);
    };

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      hideSoon();
    } else {
      window.addEventListener("load", hideSoon, { once: true });
      document.addEventListener("DOMContentLoaded", hideSoon, { once: true });
    }

    const maxTimer = setTimeout(hide, MAX_VISIBLE_MS);

    return () => {
      if (hideSoonTimer) clearTimeout(hideSoonTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", hideSoon);
      document.removeEventListener("DOMContentLoaded", hideSoon);
    };
  }, []);

  useEffect(() => {
    if (!fadeOut) return;

    const timer = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(timer);
  }, [fadeOut]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-brand-blue transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Carregando o site"
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-brand-lime/25 border-t-brand-lime"
        aria-hidden="true"
      />
    </div>
  );
}
