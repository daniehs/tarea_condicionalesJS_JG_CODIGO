// Realice un algoritmo y represéntelo mediante el diagrama de flujo,
// el pseudocódigo y el diagrama N/S que permitan determinar qué
// paquete se puede comprar una persona con el dinero que recibirá
// en diciembre, considerando lo siguiente:
// • Paquete A. Si recibe $50,000 o más se comprará una televisión,
// un modular, tres pares de zapatos, cinco camisas y cinco pantalones.
// • Paquete B. Si recibe menos de $50,000 pero más (o igual) de
// $20,000, se comprará una grabadora, tres pares de zapatos,
// cinco camisas y cinco pantalones.
// • Paquete C. Si recibe menos de $20,000 pero más (o igual) de
// $10,000, se comprará dos pares de zapatos, tres camisas y tres
// pantalones.
// • Paquete D. Si recibe menos de $10,000, se tendrá que conformar
// con un par de zapatos, dos camisas y dos pantalones.


//Entrada: Cantidad dinero disponible.
//Variable:cant_dinero
//Salida: Mensaje de paquete que debe comprar (console.log)
//Consideración el algoritmo dira que paquete comprar en base a la cantidad de dinero disponible
//considerando solo un paquete de acuerdo al presupuesto

if (cant_dinero < 10000 && cant_dinero > 0) {
  console.log(
    `Debes comprar el PAQUETE D que contiene un par de zapatos, dos camisas y dos pantalones`
  );
} else if (cant_dinero >= 10000 && cant_dinero < 20000) {
  console.log(
    `Debes comprar el PAQUETE C que contiene dos pares de zapatos, tres camisas y tres pantalones`
  );
} else if (cant_dinero >= 20000 && cant_dinero < 50000) {
  console.log(
    `Debes comprar el PAQUETE B que contiene una grabadora, tres pares de zapatos, cinco camisas y cinco pantalones`
  );
} else if (cant_dinero > 50000 ) {
  console.log(
    `Debes comprar el PAQUETE A que contiene una televisión modular, tres pares de zapatos, cinco camisas y cinco pantalones`
  );
} else {
  console.log(`Ingrese una cantidad de dinero valida`);
}

console.log("Fin del programa, hasta pronto! 😷");
