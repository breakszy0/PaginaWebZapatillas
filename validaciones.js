// Validación RUN
function validarRUN(run) {
  return /^[0-9]{7,9}[0-9Kk]$/.test(run);
}

// Validación correo permitido
function validarCorreo(correo) {
  const dominios = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
  return dominios.some(d => correo.endsWith(d));
}

// Formulario registro
const formRegistro = document.getElementById("formRegistro");
formRegistro.addEventListener("submit", function (e) {
  e.preventDefault();

  const run = document.getElementById("run").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const direccion = document.getElementById("direccion").value.trim();

  let valido = true;

  if (!validarRUN(run)) {
    document.getElementById("run").classList.add("is-invalid");
    valido = false;
  } else {
    document.getElementById("run").classList.remove("is-invalid");
  }

  if (!validarCorreo(correo)) {
    document.getElementById("correo").classList.add("is-invalid");
    valido = false;
  } else {
    document.getElementById("correo").classList.remove("is-invalid");
  }

  if (valido) {
    alert("¡Te registraste correctamente! Ya puedes disfrutar de la tienda.");
    formRegistro.reset();
  }
});