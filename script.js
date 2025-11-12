const botonDerecha = document.getElementById("boton-derecha");
const botonIzquierda = document.getElementById("boton-izquierda");
const imagen = document.getElementById("imagen");

// al hacer click en el boton derecha
botonDerecha.addEventListener("click", function () {
    if (imagen.src.includes("1.jpg")) {
        imagen.src = "assets/2.jpg";
    } else if (imagen.src.includes("2.jpg")) {
        imagen.src = "assets/3.jpg";
    } else if (imagen.src.includes("3.jpg")) {
        imagen.src = "assets/1.jpg";
    }
});

// al hacer click en el boton izquierda
botonIzquierda.addEventListener("click", function () {
    if (imagen.src.includes("1.jpg")) {
        imagen.src = "assets/3.jpg";
    } else if (imagen.src.includes("2.jpg")) {
        imagen.src = "assets/1.jpg";
    } else if (imagen.src.includes("3.jpg")) {
        imagen.src = "assets/2.jpg";
    }
});
