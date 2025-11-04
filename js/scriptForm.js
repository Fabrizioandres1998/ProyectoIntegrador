const nombre = document.getElementById ("nombre");
const email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  if (nombre.value.length < 3) {
      alert("Ingrese su nombre (mínimo 3 caracteres)");
    }
  });
