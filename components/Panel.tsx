import { BellIcon, CheckIcon, TagIcon } from "@/components/icons";

const CALLS = [
  { mesa: "07", tipo: "Garçom", tempo: "agora", state: "new" },
  { mesa: "12", tipo: "Conta", tempo: "há 2 min", state: "open" },
  { mesa: "03", tipo: "Garçom", tempo: "há 6 min", state: "done" },
] as const;

const FACTS = [
  { Icon: BellIcon, t: "Chega na hora, sem atualizar a tela" },
  { Icon: TagIcon, t: "Cada mesa tem seu próprio código" },
  { Icon: CheckIcon, t: "Limite de chamadas: ninguém chama de casa" },
];

/** Seção "Painel do salão": texto + tablet com os chamados chegando. */
export function Panel() {
  return (
    <section className="sec sec-roomy sec-brown pn">
      <div className="wrap pn-grid">
        <div className="pn-copy">
          <span className="chip chip-dark">Painel</span>
          <h2 className="serif h2 tight">Cada chamado aparece na hora.</h2>
          <p className="body muted measure-md">
            No celular ou tablet: qual mesa chamou e o que ela quer.
          </p>
          <ul className="pn-facts">
            {FACTS.map(({ Icon, t }) => (
              <li key={t}>
                <span className="pn-fact-ico"><Icon size={18} /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="pn-stage">
          <div
            className="pn-tablet"
            role="img"
            aria-label="Tablet com o painel do salão: Mesa 07 chamou o garçom agora, Mesa 12 pediu a conta há 2 minutos, Mesa 03 já foi atendida."
          >
            <div className="pn-screen">
              <div className="pn-head">
                <span className="pn-title">Chamados · Salão</span>
                <span className="pn-live"><i />ao vivo</span>
              </div>
              {CALLS.map((c) => (
                <div key={c.mesa} className={`pn-row pn-${c.state}`}>
                  <span className="serif pn-n">{c.mesa}</span>
                  <span className="pn-info">
                    <span className={`pill ${c.tipo === "Conta" ? "pill-brown" : "pill-dark"}`}>{c.tipo}</span>
                    <span className="pn-time">{c.tempo}</span>
                  </span>
                  <span className="pn-btn">{c.state === "done" ? "Atendido ✓" : "Atender"}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pn-toast" aria-hidden="true">
            <span className="pn-toast-ico"><BellIcon size={18} /></span>
            <span><b>Mesa 07</b><small>Chamou o garçom</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}
