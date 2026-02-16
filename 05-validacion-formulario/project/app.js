const form = document.getElementById("registroEvento");

const nombreEl = document.getElementById("nombre");
const correoEl = document.getElementById("correo");
const telefonoEl = document.getElementById("telefono");
const fechaEl = document.getElementById("fecha");
const horaEl = document.getElementById("hora");
const archivoEl = document.getElementById("archivo");

const successMsg = document.getElementById("success-msg");

// Helpers UI
function setError(id, msg) {
    document.getElementById(id).textContent = msg;
}
function clearError(id) {
    setError(id, "");
}
function clearAllMessages() {
    successMsg.textContent = "";
    [
        "error-nombre",
        "error-correo",
        "error-telefono",
        "error-intereses",
        "error-horario",
        "error-fecha",
        "error-hora",
        "error-archivo",
    ].forEach(clearError);
}

// Validaciones
function validateNombre(nombre) {
    // Letras (incluye tildes) + espacios
    const re = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/;
    if (!nombre.trim()) return "El nombre es obligatorio.";
    if (nombre.trim().length < 3) return "El nombre debe tener al menos 3 caracteres.";
    if (!re.test(nombre.trim())) return "El nombre solo debe contener letras y espacios.";
    return "";
}

function validateCorreo(correo) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!correo.trim()) return "El correo es obligatorio.";
    if (!re.test(correo.trim())) return "Ingresa un correo válido (ej. usuario@dominio.com).";
    return "";
}

function validateTelefono(telefono) {
    const clean = telefono.replace(/\s+/g, "");
    const re = /^\d{10,15}$/; // 10 a 15 dígitos
    if (!clean) return "El teléfono es obligatorio.";
    if (!re.test(clean)) return "El teléfono debe tener solo números (10 a 15 dígitos).";
    return "";
}

function validateIntereses() {
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    if (intereses.length === 0) return "Selecciona al menos un interés.";
    return "";
}

function validateHorario() {
    const horario = document.querySelector('input[name="horario"]:checked');
    if (!horario) return "Selecciona un horario.";
    return "";
}

function validateFecha(fechaStr) {
    if (!fechaStr) return "Selecciona una fecha.";
    // Evitar fechas pasadas (comparación por día)
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const fecha = new Date(`${fechaStr}T00:00:00`);
    if (fecha < hoy) return "La fecha no puede ser en el pasado.";
    return "";
}

function validateHora(horaStr) {
    if (!horaStr) return "Selecciona una hora.";
    return "";
}

function validateHoraVsHorario(horaStr) {
    const horario = document.querySelector('input[name="horario"]:checked');
    if (!horario || !horaStr) return ""; // si falta algo, otra validación ya lo cubre

    const [hh, mm] = horaStr.split(":").map(Number);
    const minutos = hh * 60 + mm;

    const rangos = {
        "mañana": [6 * 60, 11 * 60 + 59],   // 06:00 - 11:59
        "tarde": [12 * 60, 17 * 60 + 59],  // 12:00 - 17:59
        "noche": [18 * 60, 23 * 60 + 59],  // 18:00 - 23:59
    };

    const [min, max] = rangos[horario.value];
    if (minutos < min || minutos > max) {
        return `La hora no coincide con el horario "${horario.value}".`;
    }
    return "";
}

function validateArchivo(file) {
    if (!file) return ""; // opcional

    const allowed = ["application/pdf", "image/jpeg", "image/png"];
    const maxBytes = 2 * 1024 * 1024; // 2MB

    if (!allowed.includes(file.type)) {
        return "Formato inválido. Usa PDF, JPG o PNG.";
    }
    if (file.size > maxBytes) {
        return "El archivo supera 2MB.";
    }
    return "";
}

// Evento submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearAllMessages();

    const nombre = nombreEl.value;
    const correo = correoEl.value;
    const telefono = telefonoEl.value;
    const fecha = fechaEl.value;
    const hora = horaEl.value;
    const archivo = archivoEl.files[0];

    let ok = true;

    const eNombre = validateNombre(nombre);
    if (eNombre) { setError("error-nombre", eNombre); ok = false; }

    const eCorreo = validateCorreo(correo);
    if (eCorreo) { setError("error-correo", eCorreo); ok = false; }

    const eTelefono = validateTelefono(telefono);
    if (eTelefono) { setError("error-telefono", eTelefono); ok = false; }

    const eIntereses = validateIntereses();
    if (eIntereses) { setError("error-intereses", eIntereses); ok = false; }

    const eHorario = validateHorario();
    if (eHorario) { setError("error-horario", eHorario); ok = false; }

    const eFecha = validateFecha(fecha);
    if (eFecha) { setError("error-fecha", eFecha); ok = false; }

    const eHora = validateHora(hora);
    if (eHora) { setError("error-hora", eHora); ok = false; }

    const eHoraHorario = validateHoraVsHorario(hora);
    if (eHoraHorario) { setError("error-hora", eHoraHorario); ok = false; }

    const eArchivo = validateArchivo(archivo);
    if (eArchivo) { setError("error-archivo", eArchivo); ok = false; }

    if (!ok) return;

    // Éxito: aquí podrías enviar a un servidor con fetch()
    successMsg.textContent = "Registro exitoso. ¡Gracias por registrarte!";
    form.reset();
});