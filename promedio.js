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
const listaNumbers = [100,200,300,400,500];
const sumaTotal =  listaNumbers.reduce(function(valorAnterior = 0, valorActual){
    console.log(valorAnterior, valorActual)
    return valorAnterior + valorActual;    
});

console.log(sumaTotal)






