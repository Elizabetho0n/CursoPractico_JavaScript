// const lista1 = [
//     100,
//     200,
//     600,
//     500,
//     400000000
// ]
function calcularPromedio(lista) {
    const sumarLista = lista.reduce(function(valorAcumulado = 0, valorActual) {
        return valorAcumulado + valorActual;
    })
    const promedio = sumarLista / lista.length;
    return promedio;
}

let mediana;
function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    
    function esPar(valor){
        if (valor % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    if (esPar(lista.length)) {
        //Con estos dos creare una lista nueva 
        const primerElemento = lista[mitadLista]; 
        const segundoElemento = lista[mitadLista - 1];
        
        const medianaCalculo = calcularPromedio([primerElemento, segundoElemento]);
        console.log(calcularPromedio([primerElemento, segundoElemento]))
        mediana =  medianaCalculo;
    } else {
        mediana = lista[mitadLista];
        console.log(mediana)
    }
}
console.log(calcularMediana([500, 400, 500]))






