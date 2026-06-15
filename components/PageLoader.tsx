"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hide = () => setFadeOut(true);

    if (document.readyState === "complete") {
      const timer = setTimeout(hide, 350);
      return () => clearTimeout(timer);
    }

    const onLoad = () => setTimeout(hide, 350);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
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
