import chaletArbol from "../assets/img/chalet-arbol.jpg";
import fachada from "../assets/img/fachada.jpg";
import terraza from "../assets/img/terraza.jpg";
import puerta from "../assets/img/puerta.jpg";
import laguna from "../assets/img/laguna.jpg";
import bromelia from "../assets/img/bromelia.jpg";
import verde from "../assets/img/verde.jpg";
import amarilla from "../assets/img/amarilla.jpg";
import roja from "../assets/img/roja.jpg";
import azul from "../assets/img/azul.jpg";
import azulDetalle from "../assets/img/azul-detalle.jpg";
import ventana from "../assets/img/ventana.jpg";
import oveja from "../assets/img/oveja.jpg";
import conejo from "../assets/img/conejo.jpg";
import desayuno from "../assets/img/desayuno.jpg";
import bano from "../assets/img/bano.jpg";
import rincon from "../assets/img/rincon.jpg";
import jardinFrontal from "../assets/img/jardin-frontal.jpg";
import parrillera from "../assets/img/parrillera.jpg";
import vistaPanoramica from "../assets/img/vista-panoramica.jpg";
import mesaJardin from "../assets/img/mesa-jardin.jpg";
import porcheDesayuno from "../assets/img/porche-desayuno.jpg";
import logo from "../assets/logo.jpg";

export const IMG = {
  "chalet-arbol": chaletArbol,
  fachada,
  terraza,
  puerta,
  laguna,
  bromelia,
  verde,
  amarilla,
  roja,
  azul,
  "azul-detalle": azulDetalle,
  ventana,
  oveja,
  conejo,
  desayuno,
  bano,
  rincon,
  "jardin-frontal": jardinFrontal,
  parrillera,
  "vista-panoramica": vistaPanoramica,
  "mesa-jardin": mesaJardin,
  "porche-desayuno": porcheDesayuno,
  logo,
} as const;

export type ImgKey = keyof typeof IMG;
