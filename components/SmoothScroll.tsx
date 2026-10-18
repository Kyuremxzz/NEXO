"use client";

import { useEffect } from "react";

/**
 * Scroll suave com inércia (Lenis, ~5 KB gzip), no estilo de sites como oryzo.ai.
 * Só suaviza mouse/trackpad; no celular o toque continua nativo.
 * Respeita prefers-reduced-motion e é carregado sob demanda.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { destroy: () => void } | undefined;
    let alive = true;

    import("lenis").then(({ default: Lenis }) => {
      if (!alive) return;
      lenis = new Lenis({
        lerp: 0.08, // quanto menor, mais "macio" (0.07–0.1 é o ponto bom)
        wheelMultiplier: 0.9,
        autoRaf: true,
        // Links #como, #contato etc. também deslizam. O desconto do header já vem do
        // scroll-padding-top do html (globals.css); somar um offset aqui dobraria o espaço.
        anchors: true,
        stopInertiaOnNavigate: true,
        // Deixa caixas com scroll próprio (a mensagem do formulário) rolarem por dentro com a roda.
        allowNestedScroll: true,
      });
    });

    return () => {
      alive = false;
      lenis?.destroy();
    };
  }, []);

  return null;
}
