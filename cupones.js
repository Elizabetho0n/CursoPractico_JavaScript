// Versión 1
function precioFinalCupones() {
    //Definiendo variables
    const precioInput = document.getElementById("precioIngresado");
    const precioValue = precioInput.value;
    
    const cuponSelect = document.getElementById("valorCupon");
    const cuponValue = cuponSelect.value;

    // Función
    const porcentajeResidual = 100 - cuponValue;
    const precioFinal = (precioValue * porcentajeResidual) / 100;

    // Escribir en HTML desde JavaScript
    const mostrarPrecio = document.getElementById("mostrarPrecio");
    mostrarPrecio.innerText = "Precio a pagar: " + precioFinal;
}


// Versión 2
const cuponesLista = [
    "Cupón por Navidad: 50%",
    "Cupon por Año Nuevo: 75%",
    "Cupon por tu cumpleaños: 15%"
]

function calcularPrecioFinal() {
    const precioInpu1 = document.getElementById("precioIngresado1");
    const precioValue1 = precioInpu1.value;
    const cuponInput = document.getElementById("nombreCupon");
    const cuponValue = cuponInput.value;

    function calculoCupones(cuponPorcentaje) {
        const porcentajeResidual = 100 - cuponPorcentaje;
        const precioFinal = (precioValue1 * porcentajeResidual) / 100;
        // Escribir en HTML desde JavaScript
        const mostrarPrecioFinal = document.getElementById("mostrarPrecioFinal");
        mostrarPrecioFinal.innerText = "Precio a pagar: " + precioFinal;
    }
    switch (cuponValue) {
        case cuponesLista[0]:
            calculoCupones(50);
            break;
        case cuponesLista[1]:
            calculoCupones(75);
            break;  
        case cuponesLista[2]:
            calculoCupones(15);
            break; 
        default: 
            const mostrarMensaje = document.getElementById("mostrarPrecioFinal");
            mostrarMensaje.innerText = "Ingresa de nuevo.";
            break; 
    }

} 


