// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide:" + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide:" + areaCuadrado);
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

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perimetro del triangulo mide:" + perimetroTriangulo);

const areaTriangulo = (ladoTriangulo1 * alturaTriangulo) / 2;
console.log("El área del triangulo mide:" + areaTriangulo);

console.groupEnd("Triangulo");




// Codigo del circulo
console.group("Circulo");
// Radio
const radioCirculo = 4;
console.log("El radio del circulo mide:" + radioCirculo);
// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide:" + diametroCirculo);
// PI
const PI = Math.PI;
console.log("PI es:" + PI + "cm");
// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo mide:" + perimetroCirculo);
// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo mide:" + areaCirculo);
console.groupEnd("Circulo");