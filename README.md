# Brief de Diseño Web 📋

Formulario web (brief) para conocer lo que un cliente quiere en su nueva página.
Pensado para el rediseño de la web de **INEPCAP / Nepo Security**, pero sirve para
cualquier proyecto. Las respuestas **llegan directo a tu correo**, sin necesidad de
un servidor ni base de datos.

## 📁 Archivos

| Archivo       | Para qué sirve                                      |
| ------------- | --------------------------------------------------- |
| `index.html`  | La página con todas las preguntas del formulario.   |
| `styles.css`  | El diseño (colores, tipografía, responsivo).        |
| `script.js`   | El envío del formulario y los mensajes de éxito.    |

---

## ✉️ Paso 1 — Activar el envío por correo (2 minutos)

El formulario usa **[Web3Forms](https://web3forms.com)**: es gratis y solo necesitas una
"access key".

1. Entra a **https://web3forms.com**.
2. Escribe el correo donde quieres **recibir las respuestas** y presiona *Create Access Key*.
3. Revisa tu correo y **confirma** (te llega un email de Web3Forms).
4. Copia la **Access Key** que te entregan (es un código tipo `a1b2c3d4-....`).
5. Abre `index.html`, busca esta línea (cerca del inicio del formulario):

   ```html
   <input type="hidden" name="access_key" value="TU_ACCESS_KEY_AQUI" />
   ```

   y reemplaza `TU_ACCESS_KEY_AQUI` por tu clave. Guarda el archivo.

¡Listo! A partir de ahí, cada formulario enviado te llega a tu correo. 🎉

> 💡 El plan gratuito de Web3Forms permite 250 envíos al mes, más que suficiente para un brief.

---

## 👀 Paso 2 — Probar la web

- **Rápido:** haz doble clic en `index.html` para abrirlo en el navegador y ver cómo se ve.
- Para probar el envío real, sube la web a internet (siguiente paso).

---

## 🚀 Paso 3 — Publicar la web gratis

Elige la opción que más te acomode:

### Opción A — Netlify (la más fácil, sin cuenta de programador)

1. Entra a **https://app.netlify.com/drop**.
2. Arrastra la carpeta completa del proyecto a la página.
3. En segundos te da un enlace público (ej: `https://tu-brief.netlify.app`) que puedes
   compartir con tu cliente.

### Opción B — GitHub Pages

1. Sube estos archivos a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En *Branch* elige tu rama y la carpeta raíz (`/root`), guarda.
4. En 1–2 minutos tendrás un enlace `https://tuusuario.github.io/desingform/`.

### Opción C — Vercel

1. Entra a **https://vercel.com**, conecta el repositorio y haz *Deploy*.

---

## 🎨 Cómo personalizar

- **Título y textos:** edita el `<header>` y las secciones en `index.html`.
- **Colores:** cambia las variables al inicio de `styles.css` (`--navy`, `--accent`, etc.).
- **Asunto del correo:** edita el campo `subject` en `index.html`.
- **Agregar / quitar preguntas:** copia o borra bloques `<div class="field">` en `index.html`.

---

## ❓ ¿Por qué Web3Forms y no otra cosa?

- No requiere servidor propio ni saber backend.
- Las respuestas llegan ordenadas a tu correo (ideal para un brief).
- Es gratis para este volumen.

Si en el futuro quieres guardar las respuestas en una planilla, Web3Forms también
permite enviarlas a Google Sheets, o se puede cambiar por **Formspree** o **Google Forms**.
