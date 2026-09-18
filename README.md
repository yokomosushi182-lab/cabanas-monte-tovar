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

## Fotos

Las fotos en `src/assets/img/` (y el logo en `src/assets/logo.jpg`) son reales, tomadas del
Instagram oficial @chalets_monte_tovar (posts públicos + foto de perfil).

| Archivo | Uso en el sitio |
|---|---|
| `chalet-arbol.jpg` | Hero de Inicio (fachada completa + jardín) |
| `fachada.jpg` | CTA final de Inicio, Eventos (fachada de cerca) |
| `terraza.jpg` | Foto ancha de Inicio (terraza, comedor, parrillera) |
| `puerta.jpg` | Cómo llegar (puerta abierta hacia la terraza) |
| `laguna.jpg` | Jardín y laguna en Inicio, Contacto |
| `matrimonial.jpg` | Cabañita Matrimonial (cama de hierro forjado) |
| `para4.jpg` | Cabañita para 4 (ventana con araucaria) |
| `ventana.jpg` | Cabañita para 6 — B (ventana, araucaria y flores) |
| `literas.jpg` | Cabañita para 6 — A |
| `logo.jpg` | Logo real (header, footer, favicon) |

Para reemplazar cualquiera por una foto más nueva, sobreescribe el archivo (mismo nombre) y
corre `npm run build`. La sección "Jardín y laguna" de Inicio ya no muestra fotos inventadas
de fauna (ovejas, perezosos) — esas nunca fueron reales para esta propiedad; el texto ahora
solo menciona sapitos/lagartijas/bromelias como ambientación, sin fotos que no podamos
respaldar.

## Pendientes

- Confirmar teléfono real para el schema.org (`src/layouts/Layout.astro`, actualmente placeholder).
- Confirmar coordenadas GPS exactas (`src/data/site.ts → SITE.geo`).
- Confirmar dirección/URL final de Instagram y número de WhatsApp.
- Dominio real para `astro.config.mjs → site` y OG tags.
