export const SITE = {
  name: "Cabañas Monte Tovar",
  domain: "https://montetovar.kentolab.com",
  whatsappNumber: "5492944157182",
  instagram: "https://www.instagram.com/chalets_monte_tovar",
  instagramHandle: "@chalets_monte_tovar",
  addressLocality: "Colonia Tovar",
  addressRegion: "Aragua",
  addressCountry: "VE",
  geo: { lat: 10.3965947, lng: -67.2794065 },
  googleMapsUrl: "https://maps.app.goo.gl/jwabcZ1SqKQc2Ljz8",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/cabanas/", label: "Cabañas" },
  { href: "/galeria/", label: "Galería" },
  { href: "/como-llegar/", label: "Cómo llegar" },
  { href: "/eventos/", label: "Eventos" },
  { href: "/contacto/", label: "Contacto" },
];

export type Cabin = {
  slug: string;
  name: string;
  capacity: string;
  features: string[];
  image: string;
};

export const CABINS: Cabin[] = [
  {
    slug: "verde",
    name: "Cabaña Verde",
    capacity: "2 personas, adaptable hasta 4",
    features: ["Baño privado", "Sábanas de algodón egipcio", "Toallas Kalosh"],
    image: "verde",
  },
  {
    slug: "amarilla",
    name: "Cabaña Amarilla",
    capacity: "De 4 a 6 personas",
    features: [
      "Baño privado",
      "Chimenea",
      "Porche independiente con comedor",
      "Área de parrillera y jardín",
      "Sábanas de algodón egipcio",
      "Toallas Kalosh",
    ],
    image: "amarilla",
  },
  {
    slug: "azul",
    name: "Cabaña Azul",
    capacity: "Hasta 4 personas",
    features: ["Baño privado", "Sábanas de algodón egipcio", "Toallas Kalosh"],
    image: "azul",
  },
  {
    slug: "roja",
    name: "Cabaña Roja",
    capacity: "Hasta 6 personas",
    features: ["Baño privado", "Sábanas de algodón egipcio", "Toallas Kalosh"],
    image: "roja",
  },
];

export type SeasonEvent = {
  slug: string;
  name: string;
  dates: string;
  location: string;
  description: string;
  status: "próximo" | "pasado";
};

export const EVENTS: SeasonEvent[] = [
  {
    slug: "oktoberfest-2026",
    name: "Oktoberfest Colonia Tovar",
    dates: "8 al 11 de octubre, 2026",
    location: "Hotel Freiburg — a 5 minutos de Monte Tovar",
    description:
      "La fiesta grande del año en la Colonia: cerveza artesanal, música bávara en vivo y las calles vestidas de gala. Nos quedamos a 5 minutos caminando de todo, así que reservas con nosotros y llegas a la fiesta sin pensar en el regreso.",
    status: "próximo",
  },
];
