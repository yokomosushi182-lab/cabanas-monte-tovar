import chaletArbol from "../assets/img/chalet-arbol.jpg";
import fachada from "../assets/img/fachada.jpg";
import terraza from "../assets/img/terraza.jpg";
import puerta from "../assets/img/puerta.jpg";
import laguna from "../assets/img/laguna.jpg";
import bromelia from "../assets/img/bromelia.jpg";
import matrimonial from "../assets/img/matrimonial.jpg";
import para4 from "../assets/img/para4.jpg";
import literas from "../assets/img/literas.jpg";
import ventana from "../assets/img/ventana.jpg";
import oveja from "../assets/img/oveja.jpg";
import conejo from "../assets/img/conejo.jpg";
import desayuno from "../assets/img/desayuno.jpg";
import bano from "../assets/img/bano.jpg";
import rincon from "../assets/img/rincon.jpg";
import logo from "../assets/logo.jpg";

export const IMG = {
  "chalet-arbol": chaletArbol,
  fachada,
  terraza,
  puerta,
  laguna,
  bromelia,
  matrimonial,
  para4,
  literas,
  ventana,
  oveja,
  conejo,
  desayuno,
  bano,
  rincon,
  logo,
} as const;

export type ImgKey = keyof typeof IMG;
