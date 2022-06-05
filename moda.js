lista1 = [
    1,
    1,
    2,
    3,
    3,
    3,
    4,
    4
]
const lista1Count = {};
lista1.map(
    function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
)
console.log(lista1Count)

// object entries → para convertir el objeto "lista1Count" en un array.
const lista1Array = Object.entries(lista1Count)
console.log(lista1Array)

// metodo .sort para orednarlos de menor a mayor en base al indice
lista1Array.sort(function(elementoA, elementoB){
    return elementoA[1] - elementoB[1];
})
console.log(lista1Array)

//Por último la moda va a estar en el último lugar despúes de ordenarlo porque la modad es elemento que tiene mayor frecuencia.
const moda = lista1Array[lista1Array.length - 1]
console.log(moda)


