# Portfolio de Tomás Aladjem Ramallo

Sitio estático con Next.js (App Router), en español e inglés.

## Desarrollo

```bash
npm install
npm run dev
```

## Editar contenido

Todo el texto está en `src/content.ts` (objetos `es` y `en`).
Un proyecto con `hidden: true` se mantiene en el archivo pero no se muestra.
Las imágenes van en `public/img/` y los CV en `public/cv/`.

## Publicar

`npm run build` genera el sitio en `out/`.

GitHub Pages: sube este proyecto a un repo llamado `Samot2003.github.io`,
y en Settings → Pages elige "GitHub Actions" como fuente. El workflow de
`.github/workflows/deploy.yml` publica en cada push a `main`.
Si lo subes a otro repo (p. ej. `portfolio`), añade `basePath: "/portfolio"` en `next.config.ts`.
