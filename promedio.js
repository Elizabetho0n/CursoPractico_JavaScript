// function calculadoraPromedio(lista) {
//     let suma = 0;
//     for(let i = 0; i < lista.length; i++) {
//         suma = suma + lista[i];
//     }
//     const promedioLista = suma / lista.length;
//     console.log(promedioLista)
// }
// calculadoraPromedio([1,3,50,7])


//Acumulador o total
//Current o valorActual
const numbers = [
    {name: "Juan", motivacion: "viajar", salario: 500},
    {name: "Martha", motivacion: "viajar", salario: 500}
];
const sumaElementos =  numbers.reduce(function(Accumulador, current){
    console.log(Accumulador, current.salario)
    return Accumulador + current.salario    
}, 0);

console.log(sumaElementos)





