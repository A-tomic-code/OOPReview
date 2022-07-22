import { Punto } from "./Punto";

export class Triangulo {
  v1: Punto;
  v2: Punto;
  v3: Punto;

  constructor(v1: Punto, v2: Punto, v3: Punto) {
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }

  public calcularLongitudLados(p1:Punto, p2:Punto, p3:Punto) : number[]{
    let lengthLados:number[] = [];

    lengthLados.push(p1.calcularDistancia(p2));
    lengthLados.push(p2.calcularDistancia(p3));
    lengthLados.push(p3.calcularDistancia(p1));

    return lengthLados;
  }
}