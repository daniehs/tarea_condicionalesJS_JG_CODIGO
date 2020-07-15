// Cierta empresa proporciona un bono mensual a sus trabajadores, el
// cual puede ser por su antigüedad o bien por el monto de su sueldo
// (el que sea mayor), de la siguiente forma:
// Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
// 20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el
// bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
// de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
// se otorga 15% de su sueldo, para más de $3500. 10%. Realice el
// algoritmo correspondiente para calcular los dos tipos de bono, asignando
// el mayor, y represéntelo con un diagrama de flujo y pseudocódigo.

//Entrada: experiencia y sueldo.
//Variable:experiencia, sueldo,bono
//constantes porcentajes
//20% mayor de 2 años y menor de 5
//30% de 5 años a mas
//25% sueldo menor a 1000
//15% sueldo entre 1000 y menor a 3500
//10% sueldo mayor a 3500
//Proceso: calculo del bono de acuerdo a los porentajes
//Variable:montoe, montos
//Salida: Mensaje con bono a pagar considerando el mas alto de acuerdo al calculo años de experiencia y sueldo
//Variable: montoe o montos cual sea el mayor
//Consideracion: solo se considerara los años de experiencia completos
let monto;
let montoe;
let montos;
const exp2a5 = 0.2;
const exp5amas = 0.3;
const sueldo1 = 0.25;
const sueldo1a3_5 = 0.15;
const sueldoma3_5 = 0.1;

let expriencia = +prompt(
  "Ingrese la cantidad de años de experiencia del trabajador"
);

let sueldo = +prompt("Ingrese el sueldo del trabajador");

//calculo del monto por años de experiencia
if (experiencia >= 2 && experiencia < 5) {
  montoe = sueldo * exp2a5;
} else if (experiencia >= 5) {
  montoe = sueldo * exp5amas;
} else console.log("Ingrese una cantidad de años de experiencia valida");


//calculo del monto por sueldo
if (sueldo <1000) {
  montos = sueldo * sueldo1;
} else if (sueldo >=1000 && sueldo<3500) {
  montos = sueldo * sueldo1a3_5;
} else if (sueldo >=3500) {
  montos = sueldo * sueldoma3_5;
} else console.log("Ingrese una cantidad de sueldo  valida");

if (montoe>montos){
  console.log(`El bono a pagar al trabajador es de S/.${montoe}`);
}else{
  console.log(`El bono a pagar al trabajador es de S/.${montos}`);
}
console.log("Fin del programa, hasta pronto! 😷");
