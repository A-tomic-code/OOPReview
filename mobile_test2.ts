import { Mobile } from "./Mobile";

let nokia3210 = new Mobile(
  "Nokia3210",
  "3210",
  "Nokia",
  "128MB",
  "Azul",
  false,
  0,
  50
);

let iphone3g = new Mobile(
  "Iphone3g",
  "i3g",
  "Apple",
  "8GB",
  "Negro",
  false,
  0,
  200
);

let galaxy10 = new Mobile(
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

nokia3210.setIs5G(true);
nokia3210.setCameraNumber(4);

console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);

let arr:Mobile[] = [nokia3210, iphone3g, galaxy10];

for(let i = 0; i < arr.length; i++){
  arr[i].print();
}