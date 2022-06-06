// import se coloca al inicio.
import { colombia } from "./salarios.js";

//El map me va a permitir traerme de la lista solo la propiedad salary
const colombiaSalarios = colombia.map(function(elemento){
    return elemento.salary;
});

//Ahora voy a ordenarlos - usaré sort (es para calcular la mediana y moda).

const salariosColSorted = colombiaSalarios.sort(function(salaryA, salaryB) {
    return salaryA - salaryB;
});

//Para calcular la mediana DEPENDE de si la lista es par o impar

function esPar(lista) {
    return (lista % 2 === 0);
};
function calculadoraPromedio(lista) {
    const sumaLista = lista.reduce(function(acc = 0,actual) {
        return acc + actual;
    })
    const promedio = sumaLista / lista.length;
    return promedio;
};

function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    if(esPar(lista.length)) {
        const elementoPar1 = lista[mitadLista];
        const elementoPar2 = lista[mitadLista - 1];

        const mitadListaPar = calculadoraPromedio([elementoPar2, elementoPar1]);
        return mitadListaPar;

    } else {
        const mitadListaImpar = lista[mitadLista];
        return mitadListaImpar;
    }
};

// Vamos a crear una variable para guardar la formula general del calculo de la mediana. Recuerda que además trabajamos con una lista ordenada por eso usamos sort().
//Metodo slice y splice:
// formula promedio → (valor * (100 - %))/100 

const sliceStart = parseInt((salariosColSorted.length * (100 - 10))/100);
const sliceEnd = salariosColSorted.length;
const salariosDelTop10 = salariosColSorted.slice(sliceStart, sliceEnd);
 

const medianaGeneral = calcularMediana(salariosColSorted);
const medianaDelTop10 = calcularMediana(salariosDelTop10);

console.log (medianaGeneral, medianaDelTop10);

