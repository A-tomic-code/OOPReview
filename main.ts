import { Punto } from "./Punto";
import { Triangulo } from "./Triangulo";

let punto = new Punto(1, 1);
let punto2 = new Punto(2, 1);
let punto3 = new Punto(4, 5);
let punto4 = new Punto(-1, 2);
let punto5 = new Punto(-2, -5);
let punto6 = new Punto(5, -4);

console.log("-----------------------");
console.log("--------PUNTOS---------");
console.log("-----------------------");

console.log(punto.distanciaAlOrigen());
console.log(punto.calcularDistancia(punto2));
console.log(punto.calcularCuadrante());
console.log(punto6.calcularMasCercano([punto, punto2, punto3, punto4, punto5]));

console.log("-----------------------");
console.log("-------TRIANGULO-------");
console.log("-----------------------");

let triangulo = new Triangulo(punto, punto2, punto3);

console.log(triangulo.calcularLongitudLados(punto, punto2, punto3));
