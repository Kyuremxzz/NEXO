"use client";

import { useEffect, useState } from "react";
import { ChatIcon } from "./icons";
import { Logo } from "./Logo";
import { WA } from "@/lib/config";

/** Sticky header + floating WhatsApp button (mobile), both driven by scroll. */
export function Header() {
  const scrolled = useScrollState().scrolled;
  return (
    <header className={`hdr${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap hdr-inner">
        <a href="#topo" className="wordmark" aria-label="nexo.menu, voltar ao topo">
          <Logo height={46} />
        </a>
        <div className="hdr-right">
          <nav className="hdr-links" aria-label="Seções">
            <a className="navlnk" href="#como">Como funciona</a>
            <a className="navlnk" href="#inclui">O que inclui</a>
            <a className="navlnk" href="#duvidas">Dúvidas</a>
          </nav>
          <a className="btn btn-sm" href="#contato">
            <ChatIcon size={18} />
            Entre em contato
          </a>
        </div>
      </div>
    </header>
  );
}

export function Fab() {
  const { fab } = useScrollState();
  if (!fab) return null;
  return (
    <div className="fabwrap">
      <a className="btn btn-fab" href={WA}>
        <ChatIcon size={20} />
        Falar
      </a>
    </div>
  );
}

function useScrollState() {
  const [state, setState] = useState({ scrolled: false, fab: false });

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 4;
      let fab = false;
      const hero = document.getElementById("hero-cta");
      if (hero) fab = hero.getBoundingClientRect().bottom < 0;
      const fin = document.getElementById("final-cta");
      if (fab && fin && fin.getBoundingClientRect().top < window.innerHeight) fab = false;
      setState((s) => (s.scrolled === scrolled && s.fab === fab ? s : { scrolled, fab }));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
