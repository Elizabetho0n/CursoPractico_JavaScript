// Codigo del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado);

function perimetroCuadrado (ladoCuadrado) {
    return ladoCuadrado * 4;
}
// console.log("El perimetro del cuadrado mide:" + perimetroCuadrado);

function areaCuadrado (ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
// console.log("El área del cuadrado mide:" + areaCuadrado);
console.groupEnd("Cuadrados");



// Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 7;
console.log("Los lados del triangulo miden: "
+ ladoTriangulo1
+ "cm, "
+ ladoTriangulo2
+ "cm, "
+ baseTriangulo3
+ "cm.");

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo mide:" + perimetroTriangulo);

function areaTriangulo(lado, altura) {
    return (lado * altura) / 2;
}
// console.log("El área del triangulo mide:" + areaTriangulo);

console.groupEnd("Triangulo");




// Codigo del circulo
console.group("Circulo");
// Radio
const radioCirculo = 4;
console.log("El radio del circulo mide:" + radioCirculo);
// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo mide:" + diametroCirculo);
// PI
const PI = Math.PI;
console.log("PI es:" + PI + "cm");
// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

// console.log("El perimetro del circulo mide:" + perimetroCirculo);
// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// console.log("El área del circulo mide:" + areaCirculo);
console.groupEnd("Circulo");


//Interantuando con el HTML

function calcularPerimetroCuadrado() {
    const input = parseInt(document.getElementById("InputCuadrado").value);
    const perimetro = perimetroCuadrado(input);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input =document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo Isoseles
function calcularAlturaTtriangulo() {
    const ladoUno = Number(document.getElementById("InputLadoUno").value);
    const ladoDos = Number(document.getElementById("InputLadoDos").value);
    const ladoBase = Number(document.getElementById("InputLadoBase").value);
    if (ladoUno === ladoDos) {
        const valorDentroRaiz = ladoDos * ladoDos - ((ladoBase * ladoBase)/4);
        const resultadoAltura = Math.sqrt(valorDentroRaiz);
        alert(resultadoAltura);
    }
    else {
        alert("El valor ingresado no es de un Triángulo isósceles.")
    }
}



