import { Mobile } from "./Mobile";

let nokia3210:Mobile = new Mobile(
  "Nokia3210",
  "3210",
  "Nokia",
  "128MB",
  "Azul",
  false,
  0,
  50
);


let iphone3g: Mobile = new Mobile(
  "Iphone3g",
  "i3g",
  "Apple",
  "8GB",
  "Negro",
  false,
  0,
  200
);

let galaxy10: Mobile = new Mobile(
  "Galaxy 10",
  "GT-I900",
  "Samsung",
  "16GB",
  "Negro",
  false,
  0,
  250
);
  
  console.log(nokia3210);
  console.log(iphone3g);
  console.log(galaxy10);
  
  nokia3210.is5g = true; //ahora falla porque he cambiado los atributos de la clase
  nokia3210.cameraNumber = 4;  //a privados

   console.log(nokia3210);
   console.log(iphone3g);
   console.log(galaxy10);

 
