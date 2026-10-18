"use client";

import { useEffect, useRef } from "react";
import { BellIcon, NfcIcon, PlayIcon, QrCode } from "@/components/icons";

/**
 * Hero com scroll-scrubbing (desktop). A seção fica presa na tela e o scroll conduz:
 * (0) a frase começa no centro e desliza para a esquerda; o resto do texto aparece;
 * o celular entra deslizando pela direita; depois a história em 3 passos:
 * (1) a placa encosta no celular, (2) o vídeo do prato toca, (3) o garçom é chamado.
 * Rolando para cima, tudo volta. Variáveis 0→1 por etapa e só transform/opacity. Sem libs.
 */
export function HeroScrub() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const stage = root.querySelector<HTMLElement>(".hs-stage")!;
    const title = root.querySelector<HTMLElement>(".hs-title")!;
    const visual = root.querySelector<HTMLElement>(".hs-visual")!;
    const time = root.querySelector<HTMLElement>(".hs-time")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 900px)");
    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
    let raf = 0;

    // Quanto a frase precisa andar para ficar no centro da tela (medido sem transform).
    const measure = () => {
      const s = stage.getBoundingClientRect();
      const t = title.getBoundingClientRect();
      const head = parseFloat(getComputedStyle(stage).paddingTop) || 0;
      root.style.setProperty("--dx", `${s.left + s.width / 2 - (t.left + t.width / 2)}px`);
      root.style.setProperty("--dy", `${s.top + head + (s.height - head) / 2 - (t.top + t.height / 2)}px`);
    };

    const update = () => {
      raf = 0;
      let p = 1;
      if (!reduce.matches) {
        if (desktop.matches) {
          // Seção presa: progresso = quanto da "pista" já foi rolado.
          const r = root.getBoundingClientRect();
          p = clamp(-r.top / (root.offsetHeight - window.innerHeight));
        } else {
          // Celular: sem prender; o progresso acompanha o celular subindo na tela.
          const r = visual.getBoundingClientRect();
          p = clamp((window.innerHeight * 0.9 - r.top) / (window.innerHeight * 0.75));
        }
      }
      const intro = desktop.matches && !reduce.matches; // abertura só no desktop
      const v = {
        p,
        p0: intro ? seg(p, 0.03, 0.18) : 1, // frase: centro -> esquerda
        pc: intro ? seg(p, 0.12, 0.24) : 1, // resto do texto aparece
        pin: intro ? seg(p, 0.18, 0.34) : seg(p, 0, 0.2), // celular desliza para dentro
        p1: intro ? seg(p, 0.36, 0.52) : seg(p, 0.15, 0.4), // placa encosta
        p2: intro ? seg(p, 0.54, 0.72) : seg(p, 0.4, 0.68), // vídeo toca
        p3: intro ? seg(p, 0.76, 0.92) : seg(p, 0.72, 0.95), // garçom chamado
      };
      for (const [k, n] of Object.entries(v)) root.style.setProperty(`--${k}`, n.toFixed(4));
      root.dataset.step = v.p2 === 0 ? "1" : v.p3 === 0 ? "2" : "3";
      time.textContent = `${Math.round(v.p2 * 6)}s`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    const onResize = () => { measure(); onScroll(); };

    measure();
    update();
    document.fonts?.ready.then(onResize); // a fonte muda o tamanho da frase
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className="hs" data-step="1">
      <div className="hs-stage">
        <div className="wrap hs-grid">
          <div className="hs-copy">
            <div className="hs-title">
              <h1 className="serif h1 tight">Seu cardápio <em>em movimento</em>, em cada mesa.</h1>
            </div>
            <p className="lead hs-fade">
              O cliente encosta o celular, vê o prato em vídeo e chama o garçom. A gente monta e atualiza tudo.
            </p>
            <ol className="hs-steps hs-fade" aria-label="Como funciona">
              <li data-n="1">Encosta</li>
              <li data-n="2">Vê o prato</li>
              <li data-n="3">Chama o garçom</li>
            </ol>
          </div>

          <div className="hs-visual">
            <div
              className="hs-device"
              role="img"
              aria-label="Celular encostando na placa da Mesa 07, abrindo o vídeo do prato Surubim na brasa e chamando o garçom."
            >
              <div className="hs-tag">
                <NfcIcon size={22} />
                <QrCode size={64} />
                <span>Mesa 07</span>
              </div>
              <NfcIcon className="hs-waves" size={40} />

              <div className="hs-phone">
                <div className="hs-screen">
                  <div className="hs-top">
                    <span className="serif">Casa Velho Chico</span>
                    <span className="pill pill-dark">Mesa 07</span>
                  </div>
                  <div className="hs-video">
                    <span className="hs-play"><PlayIcon size={18} /></span>
                    <span className="hs-badge">vídeo <span className="hs-time">0s</span></span>
                    <span className="hs-bar"><i /></span>
                  </div>
                  <div className="hs-dish">
                    <div><span>Surubim na brasa</span><span>R$ 64</span></div>
                    <small>Com pirão, arroz de leite e vinagrete.</small>
                  </div>
                  <div className="hs-actions">
                    <span className="hs-btn hs-call">Chamar garçom</span>
                    <span className="hs-btn hs-bill">Pedir a conta</span>
                  </div>
                </div>
              </div>

              <div className="hs-toast" aria-hidden="true">
                <span className="hs-toast-ico"><BellIcon size={18} /></span>
                <span><b>Garçom a caminho</b><small>Mesa 07 · agora</small></span>
              </div>
            </div>
          </div>
        </div>
        <span className="hs-hint" aria-hidden="true">Role para ver ↓</span>
      </div>
    </section>
  );
}
