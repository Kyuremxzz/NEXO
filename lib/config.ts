// Troque pelo número real (DDI + DDD + número, só dígitos).
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA = waLink("Olá.");
export const WA_PILOTO = waLink("Olá! Vi a nexo.menu e quero ser o restaurante piloto.");
