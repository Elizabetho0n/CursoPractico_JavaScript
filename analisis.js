//El map me va a permitir traerme de la lista solo la propiedad salary
// const colombiaSalarios = colombia.map(function(elemento){
//     return elemento.salary;
// })

//Ahora voy a ordenarlos - usaré sort (es para calcular la mediana y moda).

// const salariosColSorted = colombiaSalarios.sort(function(salaryA, salaryB) {
//     return salaryA - salaryB;
// })

//Para calcular la mediana DEPENDE de si la lista es par o impar
const numeroLista = [
    5, 10, 7, 3, 6, 8
]
function esPar(lista) {
    return (lista % 2 === 0)
}
function calculadoraPromedio(lista) {
    const sumaLista = lista.reduce(function(acc = 0,actual) {
        return acc + actual;        
    })
    const promedio = sumaLista / lista.length;
    return promedio;
}
let mediana;
function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    if(esPar(lista.length)) {
        const elementoPar1 = lista[mitadLista];
        const elementoPar2 = lista[mitadLista - 1];

        const mitadListaPar = calculadoraPromedio([elementoPar2, elementoPar1]);
        mediana = mitadListaPar;
    } else {
        mediana = lista[mitadLista];       
    }
}

console.log(calcularMediana(numeroLista))