const formularioContacto = document.getElementById("formulario-contacto");
const formulario = document.getElementById("formulario-contenedor");
const botonEnviar = document.getElementById("btn-enviar");

const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,20}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^[0-9]{7,15}$/;
const regexMensaje = /^.{5,200}$/;

formularioContacto.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("message");

  if (!regexNombre.test(nombre.value)) {
    nombre.value = "Nombre invalido, intentalo nuevamente."
  }
  if (!regexEmail.test(email.value)) {
    email.value = "E-mail invalido, intentalo nuevamente."
  }
  if (!regexTelefono.test(telefono.value)) {
    telefono.value = "Telefono invalido, intentalo nuevamente."
  }
  if (!regexMensaje.test(mensaje.value)) {
    mensaje.value = "Mensaje invalido, intentalo nuevamente."
  }

  if (
    regexNombre.test(nombre.value) &&
    regexEmail.test(email.value) &&
    regexTelefono.test(telefono.value) &&
    regexMensaje.test(mensaje.value)
  ) {
    formulario.innerHTML = '<h3 class="mensaje-exito">¡Formulario enviado con exito!</h3>';

    const ulDatos = document.createElement("ul");

    const liNombre = document.createElement("li");
    liNombre.textContent = "Nombre: " + nombre.value;

    const liMail = document.createElement("li");
    liMail.textContent = "E-mail: " + email.value;

    const liTelefono = document.createElement("li");
    liTelefono.textContent = "Telefono: " + telefono.value;

    const liMensaje = document.createElement("li");
    liMensaje.textContent = "Mensaje: " + mensaje.value;


    ulDatos.classList.add("lista-datos");
    liNombre.classList.add("item-dato");
    liMail.classList.add("item-dato");
    liTelefono.classList.add("item-dato");
    liMensaje.classList.add("item-dato");


    ulDatos.append(liNombre, liMail, liTelefono, liMensaje);
    formulario.append(ulDatos);
  }
})