// El dueño de un estacionamiento requiere un diagrama de flujo con
// el algoritmo que le permita determinar cuánto debe cobrar por el
// uso del estacionamiento a sus clientes. Las tarifas que se tienen son
// las siguientes:
// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.

//Entrada: Cantidad tiempo transcurrido en el estacionamiento.
//Variable:cant_tiempo
//Proceso: calculo de tarifa de acuerdo a las horas en el estacionamiento
//Variable:costo
//Salida: Mensaje con costo total por el servicio de estacionamiento
//Consideracion: la cantidad de tiempo debe ser en horas, luego de transcurrido la hora se cobrara una siguiente hora asi se haya pasado 1 minuto

let cant_tiempo = +prompt(
  "Ingrese la cantidad de tiempo en el estacionamiento del vehiculo"
);
let costo;
const tarif2 = 5;
const tarif3 = 4;
const tarif5 = 3;
const tarif10 = 2;

if (cant_tiempo <= 2 && cant_tiempo > 0) {
  if (cant_tiempo === parseInt(cant_tiempo)) {
    costo = cant_tiempo * tarif2;
  } else {
    costo = (parseInt(cant_tiempo) + 1) * tarif2;
  }
  console.log(`La tarifa es de: ${costo}`);
} else if (cant_tiempo > 2 && cant_tiempo <= 5) {
  if (cant_tiempo === parseInt(cant_tiempo)) {
    costo = 2 * tarif2 + (cant_tiempo - 2) * tarif3;
  } else {
    costo = 2 * tarif2 + (parseInt(cant_tiempo - 2) + 1) * tarif3;
  }
  console.log(`La tarifa es de: ${costo}`);
} else if (cant_tiempo > 5 && cant_tiempo <= 5) {
  if (cant_tiempo === parseInt(cant_tiempo)) {
    costo = 2 * tarif2 + 3 * tarif3 + (cant_tiempo - 5) * tarif5;
  } else {
    costo = 2 * tarif2 + 3 * tarif3 + (parseInt(cant_tiempo - 5) + 1) * tarif5;
  }
  console.log(`La tarifa es de: ${costo}`);
} else if (cant_tiempo > 10) {
  if (cant_tiempo === parseInt(cant_tiempo)) {
    costo = 2 * tarif2 + 3 * tarif3 + 5 * tarif5 + (cant_tiempo - 10) * tarif10;
  } else {
    costo =
      2 * tarif2 +
      3 * tarif3 +
      5 * tarif5 +
      (parseInt(cant_tiempo - 10) + 1) * tarif10;
  }
  console.log(`La tarifa es de: ${costo}`);
} else {
  console.log(`Ingrese una cantidad de horas validas`);
}

console.log("Fin del programa, hasta pronto! 😷");
