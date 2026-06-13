# O.T.R.A — Web oficial

Proyecto base para la web de la banda **O.T.R.A**.  
Abre la carpeta `otra-website/` en VS Code y edita los archivos según las instrucciones de abajo.

---

## Estructura de archivos

```
otra-website/
├── index.html          ← Contenido principal (textos, conciertos, etc.)
├── css/
│   ├── variables.css   ← COLORES y fuentes — edita aquí para cambiar la estética
│   ├── base.css        ← Estilos globales y botones
│   ├── nav.css         ← Navegación
│   ├── hero.css        ← Sección hero (pantalla inicial)
│   ├── about.css       ← Sección "La banda"
│   ├── music.css       ← Discografía
│   ├── shows.css       ← Fechas de conciertos
│   └── contact.css     ← Contacto y redes
├── js/
│   └── main.js         ← Interacciones (menú móvil, animaciones, scroll)
└── assets/
    └── fonts/          ← Aquí puedes poner fuentes locales si las tienes
```

---

## ¿Qué puedo cambiar fácilmente?

### Colores (css/variables.css)
Abre `css/variables.css` y cambia los valores de las variables:
- `--color-red` → cambia el color de acento de toda la web
- `--color-cream` → texto principal
- `--color-muted` → texto secundario

### Textos e información (index.html)
Busca los comentarios `<!-- EDITA: ... -->` en el `index.html`.  
Te indican exactamente qué líneas tocar:

- **Tagline** del hero
- **Bio** de la banda
- **Canciones** en cada release
- **Fechas** de conciertos (duplica o borra `<li class="show-item">`)
- **Email** y links de redes sociales

### Añadir un concierto
Copia este bloque en `index.html` dentro de `<ul class="shows-list">`:

```html
<li class="show-item">
  <span class="show-date">DD Mes AAAA</span>
  <div class="show-info">
    <span class="show-venue">Nombre del local</span>
    <span class="show-city">Ciudad</span>
  </div>
  <a href="URL_ENTRADAS" class="show-ticket">Entradas</a>
</li>
```

### Añadir un lanzamiento
Copia este bloque en `index.html` dentro de `<div class="music-grid">`:

```html
<div class="release">
  <div class="release-year">2025</div>
  <div class="release-title">Nombre del disco</div>
  <div class="release-type">Album · 10 canciones</div>
  <ul class="release-tracks">
    <li>Canción 1</li>
    <li>Canción 2</li>
  </ul>
  <a href="https://open.spotify.com/..." class="release-link">Escuchar →</a>
</div>
```

---

## Cómo verlo en el navegador

### Opción 1 — Live Server (recomendada)
1. Instala la extensión **Live Server** en VS Code
2. Clic derecho en `index.html` → **Open with Live Server**
3. Se abre en el navegador y se recarga solo al guardar

### Opción 2 — Abrir directamente
Abre el archivo `index.html` directamente en tu navegador (arrastra el archivo).

---

## Cómo subir la web a internet (hosting)

Opciones gratuitas y sencillas:
- **Netlify**: arrastra la carpeta a [netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages**: sube el código a un repositorio de GitHub y activa Pages
- **Vercel**: conecta tu repositorio de GitHub

---

## Consejos para usar con GitHub Copilot / Codex en VS Code

- Describe qué quieres cambiar en comentarios antes del código, Copilot lo sugerirá
- Ejemplo: escribe `/* Añadir sección de galería de fotos */` y deja que Copilot complete
- Los archivos CSS están separados por sección para que sea más fácil encontrar lo que quieres tocar
