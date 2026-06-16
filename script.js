// ===== Año dinámico en el footer =====
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("briefForm");
const submitBtn = document.getElementById("submitBtn");
const errorBox = document.getElementById("formError");
const successPanel = document.getElementById("successPanel");

/**
 * Convierte el formulario en un objeto limpio.
 * Los checkboxes con el mismo "name" se agrupan en un texto separado por comas
 * para que el correo se lea ordenado.
 */
function serializeForm(formEl) {
  const data = {};
  const formData = new FormData(formEl);

  for (const [key, value] of formData.entries()) {
    if (key === "botcheck") continue; // honeypot, no lo enviamos
    if (data[key] !== undefined) {
      data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
    } else {
      data[key] = value;
    }
  }

  Object.keys(data).forEach((k) => {
    if (Array.isArray(data[k])) data[k] = data[k].join(", ");
  });

  return data;
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
  errorBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorBox.hidden = true;

  // Validación nativa del navegador (campos required)
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Honeypot: si está marcado, probablemente es un bot
  if (form.querySelector('[name="botcheck"]').checked) return;

  const data = serializeForm(form);

  // Aviso si todavía no se configuró la access key
  if (data.access_key === "TU_ACCESS_KEY_AQUI" || !data.access_key) {
    showError(
      "⚠️ Falta configurar la clave de envío (access_key). Revisa el archivo index.html y el README para activar el correo."
    );
    return;
  }

  submitBtn.classList.add("is-loading");
  submitBtn.disabled = true;
  submitBtn.querySelector(".btn__text").textContent = "Enviando...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      form.hidden = true;
      successPanel.hidden = false;
      successPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      throw new Error(result.message || "No se pudo enviar el formulario.");
    }
  } catch (err) {
    showError(
      "Hubo un problema al enviar el formulario: " +
        err.message +
        ". Vuelve a intentarlo en unos segundos."
    );
  } finally {
    submitBtn.classList.remove("is-loading");
    submitBtn.disabled = false;
    submitBtn.querySelector(".btn__text").textContent = "Enviar formulario";
  }
});
