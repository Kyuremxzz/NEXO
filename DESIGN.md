# DESIGN.md — nexo.menu

Sistema visual da landing nexo.menu (cardápio digital do grupo Nexo, Petrolina-PE).
Fonte da verdade: `app/globals.css`. Se este arquivo e o CSS divergirem, o CSS vale e este arquivo deve ser atualizado.

## 1. Visual Theme & Atmosphere

Restaurante de verdade, não startup. Creme quente de papel de cardápio, marrom de madeira e brasa, preto de lousa.
Uma ideia por tela, títulos grandes e curtos, muito respiro. O produto aparece como mockup feito em CSS (celular, tag da mesa, painel do salão), nunca como foto genérica.
O único momento "alto" da página é a logo nexo montada pelo scroll. O resto é quieto.

## 2. Color Palette & Roles

| Token | Hex | Papel |
| --- | --- | --- |
| `--creme` | `#f7efe6` | Fundo base (body, header) e texto sobre marrom/preto |
| `--creme-claro` | `#fdfaf6` | Fundo alternado claro (`.sec-light`), destaque de linha no painel |
| `--creme-escuro` | `#ece2d4` | Fundo alternado escuro (`.sec-tint`, contato) |
| `--creme-hover` | `#efe3d4` | Hover de botão claro |
| `--marrom` | `#6e3c19` | Acento único: botões, números dos passos, ícones, seções de marca (`.sec-brown`) |
| `--marrom-hover` | `#653716` | Hover de botão |
| `--preto` | `#1a1a1a` | Tinta do texto, cartão do piloto, rodapé, moldura dos mockups |
| `--cinza` | `#5b4f45` | Texto secundário (cinza quente, ≥ 7:1 no creme) |
| `--line` | `rgba(26,26,26,.14)` | Linhas só onde são estrutura real (FAQ, formulário, mockups) |

Regras: um acento (marrom). Texto corrido em `--preto`; `--cinza` só para notas. Sobre marrom/preto, o texto é creme com opacidade 0.7–0.86.

## 3. Typography Rules

- **Instrument Serif** (`--serif`), peso 400, normal e itálico: títulos e números das mesas. O itálico em marrom destaca uma expressão no título do hero ("em movimento").
- **Geist** (`--sans`): texto, botões e UI. 600 para ênfase, botões e títulos de itens. Body com tracking -0.005em e antialiasing.

| Classe | Tamanho | Tracking / leading |
| --- | --- | --- |
| `.h1` | `clamp(3.5rem, 6.2vw, 7.75rem)` | -0.025em / 0.95 |
| `.h2xl` | `clamp(2.75rem, 5vw, 5.75rem)` | -0.02em / 0.98 |
| `.h2` | `clamp(2.25rem, 3.6vw, 4.25rem)` | -0.02em / 1 |
| `.h3` | 22px (24px ≥ 900px) | -0.01em / 1.1 |
| `.lead` | `clamp(1.05rem, 1.15vw, 1.3rem)` | -0.01em / 1.5, máx. 38ch (42ch no hero) |
| `.body` | 16px (18px ≥ 900px) | 1.6 |
| `.caption` | 14px | 1.6 |

Títulos com `text-wrap: balance`, parágrafos com `text-wrap: pretty`. Sentence case sempre. Sem caixa alta espaçada. Destaque dentro de título só no hero (itálico marrom).

## 4. Component Stylings

- **Botão** (`.btn`): pílula, fundo marrom, texto creme 600. Hover: `translateY(-2px)` + marrom mais escuro. Press: `scale(.98)`. Tamanhos `.btn-sm` 44px, `.btn-lg` 52–64px. `.btn-light` inverte para creme sobre fundos escuros.
- **Link** (`.lnk`): sublinhado 1px com offset 4px, engrossa para 2px no hover.
- **Pill** (`.pill`): só dentro dos mockups (Mesa 07, Garçom, Conta).
- **Mockups**: celular e placa do hero (`.hs-phone`, `.hs-tag`), cenas dos passos (`.stp-scene`), tablet do painel (`.pn-tablet`). São interface do produto e podem ter borda e linha próprias.
- **Cartão do piloto** (`.pilot`): bloco preto, raio 32px, conteúdo centralizado. É o único bloco centralizado além do CTA final.
- **FAQ**: acordeão com linhas finas (estrutura real de lista).
- **Formulário**: campos 52px, raio 12px, fundo `--creme-claro`, foco marrom.

## 5. Layout Principles

- Container `.wrap`: até 1600px de conteúdo + gutter `clamp(24px, 6vw, 120px)`.
- Espaço de seção `--section-space: clamp(96px, 12vw, 200px)`; título → conteúdo `--title-space`.
- Ritmo de fundos: creme → creme-claro → marrom → creme → creme-claro → marrom → creme → creme-escuro → preto. Sem linhas divisórias entre seções.
- Alinhado à esquerda por padrão. Centralizado só no piloto e no CTA final.
- Grades: hero 1.15/0.85, painel 45/55 (mock à esquerda), inclui 5/7 (título sticky à esquerda), FAQ e contato 1/2.

## 6. Depth & Elevation

Sombras só no que "flutua", sempre tingidas de marrom:
- `--sombra-flutua`: `0 56px 112px -40px rgba(74,38,12,.5)` (celular).
- `--sombra-leve`: `0 24px 48px -28px rgba(74,38,12,.45)` (tag da mesa, FAB).
- Header rolado: sombra curta marrom, sem linha.
- Painel sobre marrom: `rgba(30,14,4,.6)`.

Nada em repouso leva sombra. Sem glow, sem glass, sem blur.

## 7. Do's and Don'ts

**Faça**
- Uma ideia por seção: título ≤ 8 palavras, descrição ≤ 2 linhas.
- Mostrar o produto com os mockups em CSS.
- Animar só `transform` e `opacity`, no máximo um efeito por seção, ligado ao scroll.
- Respeitar `prefers-reduced-motion`: tudo estático e legível.

**Não faça**
- Eyebrow/chip acima do título, rótulo em caixa alta, numeração decorativa (01/02/03 só nos passos, que são sequência real).
- Grade de cards iguais com ícone em cima.
- Gradientes decorativos (exceção: o brilho marrom de canto na seção da logo).
- Partículas, cursor customizado, fundo animado em loop, 3D, vídeo pesado.
- Uma segunda biblioteca fazendo o que o CSS ou outra lib já faz.

## 8. Responsive Behavior

- Mobile primeiro. Breakpoints: 520px (painel compacto), 768px (formulário em 2 colunas, features em 2 colunas, links do header, botões com largura automática), 900px (grades de 2 colunas, passos em 3, rodapé em linha, FAB some).
- Tipografia fluida com `clamp()`.
- Hero (`HeroScrub`): no desktop, a seção tem 360vh e o palco fica preso; o scroll grava `--p0…--p3` (0 a 1) e o CSS anima a abertura (frase no centro → esquerda), a entrada do celular e os 3 passos. Abaixo de 900px, sem pin: os passos andam conforme o celular sobe. Com `reduced-motion`, estado final direto.
- FAB do WhatsApp só no mobile, entre o CTA do hero e o CTA final (`#hero-cta` / `#final-cta`).
- Alvos de toque ≥ 44px.

## 9. Agent Prompt Guide

> Landing nexo.menu: creme `#f7efe6`, marrom `#6e3c19` como acento único, preto `#1a1a1a` para texto. Instrument Serif 400 nos títulos (grandes, tracking negativo; itálico marrom só no destaque do hero), Geist no texto. Uma ideia por seção, títulos curtos, muito respiro, alinhado à esquerda. Produto mostrado por mockups em CSS. Sombras só tingidas de marrom e só no que flutua. Sem eyebrows, sem caixa alta, sem cards iguais com ícone, sem gradientes decorativos. Movimento só com transform/opacity, guiado pelo scroll, no máximo um por seção.
