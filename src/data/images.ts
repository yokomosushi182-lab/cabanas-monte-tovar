import chaletArbol from "../assets/img/chalet-arbol.jpg";
import fachada from "../assets/img/fachada.jpg";
import terraza from "../assets/img/terraza.jpg";
import puerta from "../assets/img/puerta.jpg";
import laguna from "../assets/img/laguna.jpg";
import matrimonial from "../assets/img/matrimonial.jpg";
import para4 from "../assets/img/para4.jpg";
import literas from "../assets/img/literas.jpg";
import ventana from "../assets/img/ventana.jpg";
import logo from "../assets/logo.jpg";

export const IMG = {
  "chalet-arbol": chaletArbol,
  fachada,
  terraza,
  puerta,
  laguna,
  matrimonial,
  para4,
  literas,
  ventana,
  logo,
} as const;

export type ImgKey = keyof typeof IMG;
