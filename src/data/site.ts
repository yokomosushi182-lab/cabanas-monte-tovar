export const SITE = {
  name: "Cabañas Monte Tovar",
  domain: "https://cabanasmontetovar.com",
  whatsappNumber: "5492944157182",
  instagram: "https://www.instagram.com/chalets_monte_tovar",
  instagramHandle: "@chalets_monte_tovar",
  addressLocality: "Colonia Tovar",
  addressRegion: "Aragua",
  addressCountry: "VE",
  geo: { lat: 10.3966, lng: -67.2894 },
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/cabanitas/", label: "Cabañitas" },
  { href: "/galeria/", label: "Galería" },
  { href: "/como-llegar/", label: "Cómo llegar" },
  { href: "/eventos/", label: "Eventos" },
  { href: "/contacto/", label: "Contacto" },
];

export type Cabin = {
  slug: string;
  name: string;
  summary: string;
  beds: string;
  capacity: string;
  features: string[];
  image: string;
};

export const CABINS: Cabin[] = [
  {
    slug: "matrimonial",
    name: "Cabañita Matrimonial",
    summary:
      "La más íntima de las cuatro: perfecta para una pareja que quiere niebla, café de la mañana y silencio de montaña.",
    beds: "1 cama matrimonial",
    capacity: "Hasta 2 personas",
    features: ["Baño privado", "Terraza con vista al monte", "Cafetera y agua caliente"],
    image: "matrimonial",
  },
  {
    slug: "para-4",
    name: "Cabañita para 4",
    summary:
      "Para familias chicas o dos parejas de amigos. Suficiente espacio para desempacar sin pisarse.",
    beds: "2 camas (una matrimonial, una doble)",
    capacity: "Hasta 4 personas",
    features: ["Baño privado", "Ropa de cama incluida", "A pasos de la parrillera"],
    image: "para4",
  },
  {
    slug: "para-6-a",
    name: "Cabañita para 6 — A",
    summary:
      "Con literas para los más chicos y una cama grande para los papás. La preferida de los grupos con niños.",
    beds: "1 cama matrimonial + literas para 4",
    capacity: "Hasta 6 personas",
    features: ["Baño privado", "Literas de madera", "Pet friendly"],
    image: "literas",
  },
  {
    slug: "para-6-b",
    name: "Cabañita para 6 — B",
    summary:
      "Hermana de la anterior, con la misma capacidad y su propia vista distinta del valle.",
    beds: "1 cama matrimonial + literas para 4",
    capacity: "Hasta 6 personas",
    features: ["Baño privado", "Literas de madera", "Pet friendly"],
    image: "ventana",
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
