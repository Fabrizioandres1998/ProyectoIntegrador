const formularioContacto = document.getElementById("formulario-contacto");

formularioContacto.addEventListener("submit", function (e) {
    e.preventDefault();

    const formulario = document.getElementById("formulario-contenedor");

    // campos
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const mensaje = document.getElementById("mensaje");

    // spans de error
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorTelefono = document.getElementById("error-telefono");
    const errorMensaje = document.getElementById("error-mensaje");

    // regex
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,20}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^\d{3}-\d{3}-\d{4}$/;

    let valid = true;

    // validaciones
    if (!regexNombre.test(nombre.value)) {
        errorNombre.textContent = "Nombre requerido, entre 3 y 20 caracteres.";
        valid = false;
    } else {
        errorNombre.textContent = "";
    }

    if (!regexEmail.test(email.value)) {
        errorEmail.textContent = "E-mail invalido. Debe tener formato ejemplo@dominio.com";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }

    if (!regexTelefono.test(telefono.value)) {
        errorTelefono.textContent = "Telefono invalido. Debe tener formato 123-456-7890";
        valid = false;
    } else {
        errorTelefono.textContent = "";
    }

    if (mensaje.value.length > 250) {
        errorMensaje.textContent = "Mensaje maximo 250 caracteres.";
        valid = false;
    } else {
        errorMensaje.textContent = "";
    }

    if (valid) {
        // mensaje de exito
        const mensajeExito = document.createElement("h3");
        mensajeExito.classList.add("mensaje-exito");
        mensajeExito.textContent = "¡Formulario enviado con exito!";

        // lista de datos enviados
        const ulDatos = document.createElement("ul");
        ulDatos.classList.add("lista-datos");

        const liNombre = document.createElement("li");
        liNombre.textContent = "Nombre: " + nombre.value;

        const liEmail = document.createElement("li");
        liEmail.textContent = "E-mail: " + email.value;

        const liTelefono = document.createElement("li");
        liTelefono.textContent = "Telefono: " + telefono.value;

        ulDatos.append(liNombre, liEmail, liTelefono);

        if (mensaje.value.trim() !== "") {
            const liMensaje = document.createElement("li");
            liMensaje.textContent = "Mensaje: " + mensaje.value;
            ulDatos.appendChild(liMensaje);
        }

        // limpiar formulario y mostrar mensaje + datos
        formulario.innerHTML = "";
        formulario.append(mensajeExito, ulDatos);
    }
});
