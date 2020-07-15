// Condicionales
// El 14 de febrero una persona desea comprarle un regalo al ser querido
// que más aprecia en ese momento, su dilema radica en qué regalo
// puede hacerle, las alternativas que tiene son las siguientes:
// Regalo Costo
// Tarjeta $10.00 o menos
// Chocolates $11.00 a $100.00
// Flores $101.00 a $250.00
// Anillo Más de $251.00
// Se requiere un diagrama de flujo con el algoritmo que ayude a determinar
// qué regalo se le puede comprar a ese ser tan especial por el
// día del amor y la amistad.

//Entrada: Cantidad dinero disponible.
//Variable:cant_dinero
//Salida: Mensaje de regalo que puede comprar (console.log)
//Consideración el algoritmo dira que regalo comprar en base a la cantidad de dinero disponible
//considerando solo un regalo de acuerdo al presupuesto

let cant_dinero = +prompt("Ingrese la cantidad de dinero disponible:");

if (cant_dinero <= 10 && cant_dinero > 0) {
  console.log(
    `Debes comprar una TARJETA cuyo costo varia entre 10 dolares o menos`
  );
} else if (cant_dinero >= 11 && cant_dinero <= 100) {
  console.log(
    `Debes comprar CHOCOLATES cuyo costo varia entre 11 dolares o menos`
  );
} else if (cant_dinero >= 101 && cant_dinero <= 250) {
  console.log(
    `Debes comprar CHOCOLATES cuyo costo varia entre 101 dolares a 250`
  );
} else if (cant_dinero >= 251) {
  console.log(`Debes comprar un ANILLO que varia entre 10 dolares o menos`);
} else {
  console.log(`Ingrese una cantidad de dinero valida`);
}

console.log("Fin del programa, hasta pronto! 😷");
