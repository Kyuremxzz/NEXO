"use client";

import { useEffect, useState } from "react";
import { ChatIcon } from "./icons";
import { Logo } from "./Logo";


export function Header() {
  const scrolled = useScrollState().scrolled;
  return (
    <header className={`hdr${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap hdr-inner">
        <a href="#topo" className="wordmark" aria-label="nexo.menu, voltar ao topo">
          <Logo height={46} priority />
        </a>
        <div className="hdr-right">
          <nav className="hdr-links" aria-label="Seções">
            <a className="navlnk" href="#como">Como funciona</a>
            <a className="navlnk" href="#inclui">O que inclui</a>
            <a className="navlnk" href="#duvidas">Dúvidas</a>
          </nav>
          <a className="btn btn-sm" href="#contato">
            Entre em contato
          </a>
        </div>
      </div>
    </header>
  );
}


function useScrollState() {
  const [state, setState] = useState({ scrolled: false, fab: false });

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 4;
      let fab = false;
      // Aparece depois que o texto do hero sai da tela (o hero não tem mais botão próprio).
      const hero = document.querySelector(".hs-copy");
      if (hero) fab = hero.getBoundingClientRect().bottom < 0;
      // Some perto do CTA final; sem o botão do CTA final, some quando o rodapé entra na tela.
      const fin = document.getElementById("final-cta") ?? document.querySelector(".footer");
      if (fab && fin && fin.getBoundingClientRect().top < window.innerHeight) fab = false;
      setState((s) => (s.scrolled === scrolled && s.fab === fab ? s : { scrolled, fab }));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
