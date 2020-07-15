// Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura
// amplia (A) y daños a terceros (B). Para el plan A, la cuota
// base es de $1,200, y para el B, de $950. A ambos planes se les carga
// 10% del costo si la persona que conduce tiene por hábito beber alcohol,
// 5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia
// cardiaca o diabetes–, y si tiene más de 40 años, se le carga
// 20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre
// el costo base. Realice diagrama de flujo y diagrama N/S que represente
// el algoritmo para determinar cuánto le cuesta a una persona
// contratar una póliza.

//Entrada: cobertura, alcohol,lentes,enfermedad,mayor40
//Variable:cobertura, alcohol,lentes,enfermedad,mayor40
//constantes monto_base, porcentajes:
//10% costo si bebe alcohol
//5% si utiliza lentes
//5% si padece enfermedad
//20% si tiene mas de 40
//Proceso: calculo del costo de poliza

//Salida: Mensaje con costo de poliza
//Variable: costo_poliza
//Consideracion: se considerara 300 soles de monto base

const monto_base = 300;
let costo_poliza = 0;

let alcohol = prompt(
  "Usted bebe frecuentemente. Contest S para respuesta afirmativa o N para respuesta negativa"
);

let lentes = prompt(
  "Usted usa lentes. Contest S para respuesta afirmativa o N para respuesta negativa"
);

let enfermedad = prompt(
  "¿Usted sufre de alguna enfermedad como diabetes o deficiencia cardiaca?. Contest S para respuesta afirmativa o N para respuesta negativa"
);

let mas40 = prompt(
  "¿Usted tiene 40 años o más?. Contest S para respuesta afirmativa o N para respuesta negativa"
);

if (alcohol === "S") costo_poliza += monto_base * (1 + 0.1);
if (lentes === "S") costo_poliza += monto_base * (1 + 0.05);
if (enfermedad === "S") costo_poliza += monto_base * (1 + 0.05);
if (mas40 === "S") {
  costo_poliza += monto_base * (1 + 0.2);
} else {
  costo_poliza += monto_base * (1 + 0.1);
}

console.log(`El costo de la poliza es de: S/. ${costo_poliza}`)