const precio = 120;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

// Primero tenemos que traer el ID del elemento y guardarlo en una variable para poder trabajar con él.
function calcularPrecioConDescuento() {
    //Variables
    const precioInput = document.getElementById("precioSinDescuento");
    const precioValue = precioInput.value; 

    const descuentoInput = document.getElementById("descuentoPorcentual");
    const descuentoValue = descuentoInput.value;

    //Operación matematica
    const porcentajeDescontado = 100 - descuentoValue;
    const precioFinal = (precioValue * porcentajeDescontado) / 100;
    
    //Para escribir en HTML desde JavaScript
    const respuestaEnTexto = document.getElementById("ResultadoP");
    respuestaEnTexto.innerText = "El precio a pagar actual es: " + precioFinal + ".";

}

