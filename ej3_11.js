// Se les dará un bono por antigüedad a los empleados de una tienda.
// Si tienen un año, se les dará $100; si tienen 2 años, $200, y así
// sucesivamente hasta los 5 años. Para los que tengan más de 5, el
// bono será de $1000. Realice un algoritmo y represéntelo mediante
// el diagrama de flujo, el pseudocódigo y diagrama N/S que permita
// determinar el bono que recibirá un trabajador.

//Entrada: antiguedad.
//Variable:antiguedad
//constantes bonos
//mayor o igual a 1 año y menor a 2: $100
//mayor o igual a 2 años y menor a 3: $200
//mayor o igual a 3 años y menor a 4: $300
//mayor o igual a 4 años y menor a 5: $400

//Proceso: calculo del bono de acuerdo a la antiguedad
//Variable:bono
//Salida: Mensaje con bono a pagar considerando la antiguedad
//Variable: monto
//

let bono = 0;

let antiguedad = +prompt(
  "Ingrese la cantidad de años de experiencia del trabajador"
);

//calculo del monto por años de experiencia
if (antiguedad > 0 && antiguedad < 5) {
  bono = 100 * parseInt(antiguedad);
  console.log(`El bono a pagar al trabajador es de S/.${bono}`);
} else if (antiguedad >= 5) {
  bono = 1000;
  console.log(`El bono a pagar al trabajador es de S/.${bono}`);
} else {
  console.log("Ingrese un año de antiguedad valido");
}

console.log("Fin del programa, hasta pronto! 😷");
