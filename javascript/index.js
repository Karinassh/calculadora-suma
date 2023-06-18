const formulario = document.getElementById("formulario");
const primerNumero = document.getElementById("primer-numero");
const segundoNumero = document.getElementById("segundo-numero");
const resultado = document.getElementById("valor-resultado");
const alerta = document.getElementById("alerta");
const contenedorMensajeAlerta = document.querySelector(".mensaje-alerta")
let valorPrimerNumero;
let valorSegundoNumero;

formulario.addEventListener("submit", function(e) {

    // Evita la acción por defecto del submit de un formulario (recargar página)
    e.preventDefault();

    if(primerNumero.value === "" || segundoNumero.value === "") {
        alerta.classList.add("mostrar-alerta");
        contenedorMensajeAlerta.innerHTML = "No pueden ir campos vacios";
        resultado.innerHTML = "";
    } else {
        // Obtener los valores de los inputs del formulario y transformarlos a number
        valorPrimerNumero = parseInt(primerNumero.value);
        valorSegundoNumero = parseInt(segundoNumero.value);

        // Mostrar resultado de la operacion al usuario
        resultado.innerHTML = valorPrimerNumero + valorSegundoNumero;

        // Reiniciar alerta
        alerta.classList.remove("mostrar-alerta");
        contenedorMensajeAlerta.innerHTML = "";

        // Reiniciar los inputs
        primerNumero.value = "";
        segundoNumero.value = "";
    }
});




