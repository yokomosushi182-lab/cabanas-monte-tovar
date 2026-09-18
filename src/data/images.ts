import chaletArbol from "../assets/img/chalet-arbol.jpg";
import fachada from "../assets/img/fachada.jpg";
import terraza from "../assets/img/terraza.jpg";
import puerta from "../assets/img/puerta.jpg";
import laguna from "../assets/img/laguna.jpg";
import oveja from "../assets/img/oveja.jpg";
import habVerde from "../assets/img/hab-verde.jpg";
import comedor from "../assets/img/comedor.jpg";
import bromelia from "../assets/img/bromelia.jpg";
import literas from "../assets/img/literas.jpg";
import perezoso from "../assets/img/perezoso.jpg";
import sapito from "../assets/img/sapito.jpg";
import pajaro from "../assets/img/pajaro.jpg";

export const IMG = {
  "chalet-arbol": chaletArbol,
  fachada,
  terraza,
  puerta,
  laguna,
  oveja,
  "hab-verde": habVerde,
  comedor,
  bromelia,
  literas,
  perezoso,
  sapito,
  pajaro,
} as const;

export type ImgKey = keyof typeof IMG;
