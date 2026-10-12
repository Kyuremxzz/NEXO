import { Header, Fab } from "@/components/ScrollChrome";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Logo } from "@/components/Logo";
import {
  BellIcon, BookIcon, ChatIcon, CheckIcon, NfcIcon, PanelIcon, PinIcon,
  PlayIcon, QrCode, RefreshIcon, TagIcon, VideoIcon,
} from "@/components/icons";
import { WA, WA_PILOTO } from "@/lib/config";

const STEPS = [
  { n: "01", t: "Encosta ou aponta", d: "Cada mesa tem uma tag com NFC e QR Code. O cliente abre o cardápio sem baixar nada." },
  { n: "02", t: "Vê o prato de verdade", d: "Vídeos curtos mostram o prato saindo da cozinha. Dá vontade de pedir." },
  { n: "03", t: "Chama sem levantar a mão", d: "Chamar o garçom e pedir a conta chegam na hora no celular do salão." },
];

const INCLUDES = [
  { Icon: BookIcon, t: "Cardápio com a sua marca", d: "Cores, logo e fotos do seu restaurante." },
  { Icon: VideoIcon, t: "Vídeos dos pratos", d: "Filmamos e editamos de 8 a 10 pratos." },
  { Icon: TagIcon, t: "Tag em cada mesa", d: "NFC e QR Code juntos, em acrílico." },
  { Icon: BellIcon, t: "Chamar garçom e pedir a conta", d: "Direto do celular do cliente." },
  { Icon: PanelIcon, t: "Painel do salão", d: "Chamados em tempo real." },
  { Icon: RefreshIcon, t: "Atualizações incluídas", d: "Mudou preço ou prato? Manda no WhatsApp que a gente troca." },
];

const CALLS = [
  { mesa: "07", tipo: "Garçom", tempo: "há 40 s · novo", accent: true },
  { mesa: "12", tipo: "Conta", tempo: "há 2 min" },
  { mesa: "03", tipo: "Garçom", tempo: "há 6 min", done: true },
];

export default function Home() {
  return (
    <div className="page">
      <Header />

      <main id="topo">
        {/* Hero */}
        <section className="sec">
          <div className="wrap g-hero">
            <div className="hero-copy">
              <span className="chip">Cardápio digital · Petrolina</span>
              <h1 className="serif h1 tight">Seu cardápio, com o prato em movimento, em cada mesa.</h1>
              <p className="lead muted">
                O cliente encosta o celular na mesa, vê o vídeo do prato, chama o garçom e pede a conta. A gente
                monta e atualiza tudo para você.
              </p>
              <div className="hero-actions">
                <a id="hero-cta" className="btn btn-lg btn-cta" href={WA}>
                  <ChatIcon size={20} />
                  Quero ver uma demonstração
                </a>
                <a className="lnk strong" href="#como">Ver como funciona ↓</a>
              </div>
              <p className="caption muted">Sem app para baixar. Funciona com NFC e QR Code.</p>
            </div>

            <div className="hero-visual">
              <div
                className="phone"
                role="img"
                aria-label="Celular mostrando a página da Mesa 07 do restaurante Casa Velho Chico: vídeo de 6 segundos do prato Surubim na brasa, com os botões Chamar garçom e Pedir a conta."
              >
                <div className="phone-top">
                  <span className="serif phone-name">Casa Velho Chico</span>
                  <span className="pill pill-dark">Mesa 07</span>
                </div>
                <div className="dish">
                  <div className="dish-media">
                    <span className="play"><PlayIcon size={18} /></span>
                    <span className="dish-tag">vídeo 6s</span>
                  </div>
                  <div className="dish-info">
                    <div className="dish-row">
                      <span>Surubim na brasa</span>
                      <span>R$ 64</span>
                    </div>
                    <div className="dish-desc">Com pirão, arroz de leite e vinagrete.</div>
                  </div>
                </div>
                <div className="phone-bar">
                  <span className="phone-btn">Chamar garçom</span>
                  <span className="phone-btn phone-btn-primary">Pedir a conta</span>
                </div>
              </div>

              <div className="table-tag" role="img" aria-label="Placa de mesa em acrílico com símbolo de NFC e QR Code.">
                <NfcIcon size={28} />
                <QrCode size={64} />
                <span className="table-tag-label">MESA 07</span>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como" className="sec sec-light">
          <div className="wrap">
            <h2 className="serif h2 tight sec-title">Funciona em três toques.</h2>
            <div className="g-3">
              {STEPS.map((s) => (
                <div className="step" key={s.n}>
                  <span className="serif step-n">{s.n}</span>
                  <h3 className="serif h3 tight">{s.t}</h3>
                  <p className="body muted measure-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Painel */}
        <section className="sec sec-roomy sec-brown">
          <div className="wrap g-panel">
            <div className="panel-copy">
              <h2 className="serif h2 tight">Sua equipe vê cada chamado na hora.</h2>
              <p className="body muted measure-md">
                Um painel simples no celular ou tablet do salão mostra qual mesa chamou e o que ela quer.
              </p>
              <p className="caption muted measure-md">
                Cada mesa tem um código próprio e há limite de chamadas, para ninguém chamar o garçom de casa.
              </p>
            </div>
            <div
              className="panel-mock"
              role="img"
              aria-label="Tablet com o painel do salão: Mesa 07 chamou o garçom há 40 segundos, Mesa 12 pediu a conta há 2 minutos, Mesa 03 já foi atendida."
            >
              <div className="panel-head">
                <span className="panel-title">Chamados · Salão</span>
                <span className="panel-count">3 hoje</span>
              </div>
              {CALLS.map((c) => (
                <div
                  key={c.mesa}
                  className={`call${c.accent ? " call-new" : ""}${c.done ? " call-done" : ""}`}
                >
                  <span className="serif call-n">{c.mesa}</span>
                  <span className={`pill ${c.tipo === "Conta" ? "pill-brown" : "pill-dark"}`}>{c.tipo}</span>
                  <span className="call-time">{c.tempo}</span>
                  <span className={`call-btn${c.done ? " call-btn-plain" : ""}`}>Atendido</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que inclui */}
        <section id="inclui" className="sec">
          <div className="wrap">
            <h2 className="serif h2 tight sec-title">Você não mexe em nada. A gente cuida.</h2>
            <div className="g-2">
              {INCLUDES.map(({ Icon, t, d }) => (
                <div className="feature" key={t}>
                  <Icon size={24} className="feature-icon" />
                  <div>
                    <h3 className="feature-title">{t}</h3>
                    <p className="body muted">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="local-card">
              <PinIcon size={24} className="accent" style={{ flex: "none" }} />
              <p className="body">
                <strong>Atendimento de gente daqui.</strong> Estamos em Petrolina e vamos até o seu restaurante.
              </p>
            </div>
          </div>
        </section>

        {/* Piloto */}
        <section className="sec sec-light">
          <div className="wrap">
            <div className="pilot">
              <span className="chip chip-dark">Vagas para restaurante piloto</span>
              <h2 className="serif h2 tight" style={{ maxWidth: "22ch" }}>
                Seja o primeiro restaurante da nexo.menu em Petrolina.
              </h2>
              <p className="body pilot-sub">
                Preço de lançamento em troca do seu depoimento e de mostrarmos o processo nas nossas redes.
              </p>
              <ul className="pilot-list">
                {["Setup completo", "Mensalidade com atualizações incluídas", "Acompanhamento de perto no primeiro mês"].map(
                  (t) => (
                    <li key={t}>
                      <CheckIcon size={20} />
                      {t}
                    </li>
                  ),
                )}
              </ul>
              <a className="btn btn-light btn-lg btn-cta" href={WA_PILOTO} style={{ marginTop: 8 }}>
                <ChatIcon size={20} />
                Quero ser o piloto
              </a>
            </div>
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="sec sec-brown">
          <div className="wrap g-faq">
            <h2 className="serif h2 tight sec-title">Dúvidas comuns.</h2>
            <Faq />
          </div>
        </section>

        {/* CTA final */}
        <section className="sec">
          <div className="wrap final">
            <h2 className="serif h2xl tight">Vamos montar o cardápio do seu restaurante?</h2>
            <p className="caption muted">Respondemos no mesmo dia.</p>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="sec sec-tint">
          <div className="wrap g-faq">
            <div className="contact-copy sec-title">
              <h2 className="serif h2 tight">Entre em contato.</h2>
              <p className="body muted">Preencha o formulário e a gente responde no mesmo dia.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap ftr">
          <div className="ftr-brand">
            <Logo height={28} />
            <span className="muted">Um produto do grupo Nexo · Petrolina, PE</span>
          </div>
          <nav aria-label="Marcas e redes" className="ftr-nav">
            <a className="navlnk" href="#">nexo.tag</a>
            <a className="navlnk" href="#">nexo</a>
            <a className="navlnk" href="#">Instagram</a>
            <a className="navlnk" href="#">YouTube</a>
          </nav>
          <nav aria-label="Legal" className="ftr-nav">
            <a className="navlnk" href="#">Termos de uso</a>
            <a className="navlnk" href="#">Política de privacidade</a>
          </nav>
        </div>
      </footer>

      <Fab />
      <Reveal />
    </div>
  );
}
