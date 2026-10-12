"use client";

import { useState } from "react";

const FAQ = [
  { q: "O cliente precisa baixar algum aplicativo?", a: "Não. A página abre direto no navegador, pelo NFC ou pelo QR Code." },
  { q: "E se o celular do cliente não tiver NFC?", a: "Toda tag tem também um QR Code, que funciona em qualquer câmera." },
  { q: "Preciso de algum equipamento?", a: "Só um celular ou tablet no salão para receber os chamados." },
  { q: "Quem atualiza o cardápio?", a: "A gente. Você manda a mudança pelo WhatsApp e nós atualizamos." },
  { q: "Alguém pode trocar o link da tag?", a: "Não. A tag é gravada com um link da Nexo e travada contra regravação." },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={item.q}>
            <h3>
              <button
                className="faq-q"
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            {isOpen && (
              <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq-a">
                <p className="body muted">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
