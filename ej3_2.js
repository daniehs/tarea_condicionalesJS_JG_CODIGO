// Realice un algoritmo para determinar el sueldo semanal de un trabajador
// con base en las horas trabajadas y el pago por hora, considerando que después
// de las 40 horas cada hora se considera como excedente y se paga el doble.
// Construya el diagrama de flujo, el pseudocódigo y el diagrama N/S.

//Entrada: Cantidad horas trabajadas en la semana.
//Variable:cant_horas
//Constante:pago_hora
//Proceso: calculo de salario de acuerdo a las horas trabajadas en 1 semana
//Variable:salario
//Salida: Mensaje con salario a pagar
//Consideracion: se considerara una hora mas el tiempo trasncurrido despues de la hora

let cant_horas = +prompt(
  "Ingrese la cantidad de horas trabajadas en la semana"
);
let costo;
const pago_hora = 50;

if (cant_horas < 40 && cant_horas > 0) {
  if (cant_horas === parseInt(cant_horas)) {
    salario = cant_horas * pago_hora;
  } else {
    salario = (parseInt(cant_horas) + 1) * pago_hora;
  }
  console.log(
    `El trabajador tiene ${cant_horas} trabajadas su salario es de : S/. ${salario}`
  );
} else if (cant_horas > 40) {
  if (cant_horas === parseInt(cant_horas)) {
    salario = 40 * cant_horas + 2 * (cant_horas - 40) * cant_horas;
  } else {
    salario = 40 * cant_horas + 2 * (cant_horas - 40) * cant_horas;
    salario =
      40 * cant_horas + 2 * (parseInt(cant_horas + 1) - 40) * cant_horas;
  }
  console.log(
    `El trabajador tiene ${cant_horas} trabajadas su salario es de : S/. ${salario}`
  );
} else {
  console.log(`Ingrese una cantidad de horas trabajadas validas`);
}

console.log("Fin del programa, hasta pronto! 😷");
