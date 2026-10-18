import { BellIcon, NfcIcon, PlayIcon, QrCode } from "@/components/icons";

/** Seção "Como funciona": 3 cards, cada um com uma cena ilustrada em CSS/SVG. */
export function Steps() {
  return (
    <section id="como" className="sec sec-light">
      <div className="wrap">
        <div className="steps-head">
          <h2 className="serif h2 tight">Três toques na mesa.</h2>
          <p className="caption muted">Sem app, sem cadastro. Funciona em qualquer celular.</p>
        </div>

        <ol className="steps">
          <li className="stp">
            <div className="stp-scene" aria-hidden="true">
              <div className="sc1-plaque">
                <NfcIcon size={22} />
                <QrCode size={52} />
                <span>MESA 07</span>
              </div>
              <NfcIcon className="sc1-waves" size={48} />
              <div className="sc-phone sc1-phone">
                <div className="sc-screen">
                  <div className="sc-bar" style={{ width: "60%" }} />
                  <div className="sc-bar" />
                  <div className="sc-bar" style={{ width: "80%" }} />
                </div>
              </div>
            </div>
            <div className="stp-text">
              <div className="stp-top">
                <span className="stp-n">01</span>
                <h3 className="serif stp-t">Encosta ou aponta</h3>
              </div>
              <p className="body muted">NFC ou QR Code na mesa. Sem baixar nada.</p>
            </div>
          </li>

          <li className="stp">
            <div className="stp-scene" aria-hidden="true">
              <div className="sc-phone sc2-phone">
                <div className="sc-screen">
                  <div className="sc2-video">
                    <span className="sc2-tag">vídeo 6s</span>
                    <span className="sc2-play"><PlayIcon size={16} /></span>
                  </div>
                  <div className="sc2-progress"><i /></div>
                  <div className="sc2-row"><span>Surubim na brasa</span><span>R$ 64</span></div>
                  <div className="sc-bar" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
            <div className="stp-text">
              <div className="stp-top">
                <span className="stp-n">02</span>
                <h3 className="serif stp-t">Vê o prato de verdade</h3>
              </div>
              <p className="body muted">Vídeos curtos do prato saindo da cozinha.</p>
            </div>
          </li>

          <li className="stp">
            <div className="stp-scene" aria-hidden="true">
              <div className="sc3-stack">
                <div className="sc3-toast sc3-back">
                  <span className="sc3-ico"><BellIcon size={18} /></span>
                  <span><b>Mesa 12</b><small>Pediu a conta</small></span>
                  <em>2 min</em>
                </div>
                <div className="sc3-toast sc3-front">
                  <span className="sc3-ico"><BellIcon size={18} /></span>
                  <span><b>Mesa 07</b><small>Chamou o garçom</small></span>
                  <em>agora</em>
                </div>
              </div>
            </div>
            <div className="stp-text">
              <div className="stp-top">
                <span className="stp-n">03</span>
                <h3 className="serif stp-t">Chama sem levantar a mão</h3>
              </div>
              <p className="body muted">Garçom e conta chegam no celular do salão.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
