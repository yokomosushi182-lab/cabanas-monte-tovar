# Cabañas Monte Tovar

Sitio estático (Astro + Tailwind v4) para la posada de 4 cabañitas en la Colonia Tovar, Aragua.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Listo para desplegar en Vercel o Netlify sin configuración adicional (salida estática en `dist/`).

## Fotos: reemplazar los placeholders

Las 13 fotos en `src/assets/img/` son **placeholders reales de stock** (Pexels, con la misma
estética alpina/Tirolesa), no las fotos que enviaste por chat — no hay forma de guardar
imágenes pegadas en el chat directamente a disco, así que se usaron equivalentes reales
mientras tanto.

Para poner tus fotos reales, reemplaza estos archivos (mismo nombre, cualquier resolución
razonable ≥1200px de ancho) y vuelve a correr `npm run build`:

| Archivo | Uso en el sitio |
|---|---|
| `chalet-arbol.jpg` | Hero de Inicio |
| `fachada.jpg` | CTA final de Inicio, Eventos |
| `terraza.jpg` | Foto ancha de Inicio |
| `puerta.jpg` | Cabañita para 6 — B, Cómo llegar |
| `laguna.jpg` | Contacto |
| `oveja.jpg` | Vecinos (ovejitas) |
| `hab-verde.jpg` | Cabañita Matrimonial |
| `comedor.jpg` | Cabañita para 4 |
| `bromelia.jpg` | Galería |
| `literas.jpg` | Cabañita para 6 — A |
| `perezoso.jpg` | Vecinos (perezosos) |
| `sapito.jpg` | Vecinos (sapitos) |
| `pajaro.jpg` | Vecinos (pájaros) |

## Pendientes

- Confirmar teléfono real para el schema.org (`src/layouts/Layout.astro`, actualmente placeholder).
- Confirmar coordenadas GPS exactas (`src/data/site.ts → SITE.geo`).
- Confirmar dirección/URL final de Instagram y número de WhatsApp.
- Dominio real para `astro.config.mjs → site` y OG tags.
