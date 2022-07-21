import { Mobile } from "./Mobile";
import { MobileLibrary } from "./MobileLibrary";

let nokia3210: Mobile = new Mobile(
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

let iphonexr: Mobile = new Mobile(
  "iPhone XR",
  "XR",
  "Apple",
  "128GB",
  "rojo",
  false,
  1,
  450
);

let todos: Mobile[] = [iphone3g, iphonexr, nokia3210, galaxy10];

let miLibrary = new MobileLibrary('miLibrary', 'miCasa', todos);


console.log(miLibrary.getName());
console.log(miLibrary.geLocation());
console.log(miLibrary.getMobiles());
console.log(miLibrary.getTotalPrice());
console.log('------------------------------');
miLibrary.printLibrary();
