//Nombre Usuario
let nombreUsuario = prompt(
  "Hi!✋ Bienvenido a PhoneStore 📱, por favor ingrese su nombre de usuario"
);
// variables Globales de conteo y de total
let precioTotal = 0;
let cantProducto = 0;
const calcularPrecio = (precio) => {
  precioTotal = precioTotal + precio;
};
let compra = prompt(
  "Hola ✋" +
    nombreUsuario +
    " " +
    "Por favor ingrese el numero que corresponda al producto que deseas adquirir: \n 1) Samsung galaxy (2023)📱----> $20987\n 2) Samsung a73📱 -----> $40555 \n 3) Samsung 45x📱 ------> $50323 \n 4) Samsung j43📱 ----> $75600 \n 5) Samsung 34st📱 -------> $123000 \n 0) 📥 Salir  c) 💸Desea finalizar su compra?"
);
while (compra != "0" && compra != "c") {
  switch (compra) {
    case "1":
      alert("Usted a agregado Samsung Galaxy (2023)📱");
      calcularPrecio(20987);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "2":
      alert("Usted a agregado Samsung a73📱 ");
      calcularPrecio(40555);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "3":
      alert("Usted a agregado samsung 45x 📱");
      calcularPrecio(50323);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "4":
      alert("Usted a agregado samsung j43 📱 ");
      calcularPrecio(75600);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    case "5":
      alert("Usted a agregado samsung 34st 📱");
      calcularPrecio(123000);
      console.log(precioTotal);
      cantProducto++;
      console.log(cantProducto);
      break;
    default:
      alert("el numero ingresado es incorrecto");
      break;
  }
  if (cantProducto == 1) {
    alert(
      "Usted agrego : " +
        cantProducto +
        "producto al carrito de compras \n" +
        "El precio total es de : $ " +
        precioTotal
    );
  } else if (cantProducto > 1) {
    alert(
      "Usted agrego : " +
        cantProducto +
        "productos al carrito de compras \n" +
        "El precio total es de : $ " +
        precioTotal
    );
  } else {
    alert("Su carrito de compras esta vacio");
  }
  compra = prompt(
    "Hola " +
      nombreUsuario +
      " " +
      "Por favor ingrese el numero que corresponda al producto que deseas adquirir:\n 1) Samsung galaxy 📱(2023)----> $20987\n 2) Samsung a73 📱-----> $40555 \n 3) Samsung 45x 📱------> $50323 \n 4) Samsung j43📱 ----> $75600 \n 5) Samsung 34st 📱 -------> $123000 \n 0)📥 Salir c) 💸Desea finalizar su compra? "
  );
}

if (compra == "c") {
  // variables utiles para Mostrar Indiv al usuario
  let intereses = 0;
  let precioConInteres = 0;
  let valorXCuota = 0;
  // funciones utiles para metodos de pago
  const interes = (porcentaje) => {
    intereses = precioTotal * porcentaje;
    return intereses;
  };
  const valorConTrjeta = (porcentaje) => {
    precioConInteres = precioTotal + interes(porcentaje);

    return precioConInteres;
  };
  const valorCuota = (cantCuotas) => {
    valorXCuota = precioConInteres / cantCuotas;
    return valorXCuota;
  };
  const valorCuotaSinInteres = (cantCuotas) => {
    valorXCuota = precioTotal / cantCuotas;
    return valorXCuota;
  };
  //metodo de pago
  const visaCredito = (cantCuotas) => {
    switch (cantCuotas) {
      //en un pago
      case "1":
        alert(
          "Usted eligio abonar en 1 cuota con Visa Credito 💳 \n TOTAL : " +
            precioTotal
        );
        console.log(precioTotal);
        break;
      case "2":
        valorConTrjeta(0.04);
        valorCuota(2);
        alert(
          " El monto que debe abonar es de : $ " +
            precioConInteres +
            "\n con un interes de : " +
            intereses +
            "\n en dos cutas de : $ " +
            valorXCuota
        );
        console.log(precioConInteres);
        console.log(valorXCuota);
        console.log(intereses);
        break;
      case "3":
        valorConTrjeta(0.06);
        valorCuota(3);
        alert(
          "El monto que debe abonar es de : $" +
            precioConInteres +
            "\n con un interes de : " +
            intereses +
            "\n en tres cutas de : $ " +
            valorXCuota
        );
        console.log(precioConInteres);
        console.log(valorXCuota);
        console.log(intereses);
        break;
      default:
        break;
    }
  };
  const mastercard = (cantCuotas) => {
    switch (cantCuotas) {
      //en un pago
      case "1":
        alert(
          "Usted eligio abonar en 1 cuota con Mastercard 💳 \n TOTAL : " +
            precioTotal
        );
        console.log(precioTotal);
        break;
      case "2":
        valorCuotaSinInteres(2);
        alert(
          "El monto que debe abonar es de : $" +
            precioTotal +
            "\n en dos cutas de : $ " +
            valorXCuota
        );
        console.log(precioTotal);
        console.log(valorXCuota);
        break;
      case "3":
        valorCuotaSinInteres(3);
        alert(
          "El monto que debe abonar es de : $" +
            precioTotal +
            "\n en tres cutas de : $ " +
            valorXCuota
        );
        console.log(precioTotal);
        console.log(valorXCuota);
        break;
      default:
        break;
    }
  };
  let metodo = prompt(
    "El monto actual es de : $" +
      precioTotal +
      "Elija el meodo de pago :\n" +
      "1)Trasferencia (10% descuento) 🏛 \n 2) Visa Credito 💳 (2 a 3 cuotas con interes) \n 3) Mastercard 💳 (llevando mas de 3 productos hasta 3 cuotas sin interes S) ↩ salir )"
  );
  console.log("ustede eligio    " + metodo);
  console.log(cantProducto);

  switch (metodo) {
    case "1":
      let transferencia = precioTotal - interes(0.1);
      alert(
        "El monto total es de : $ " +
          precioTotal +
          " al cual le aplicamos un 10% de descuento" +
          "\n el monto a abonar es de : $" +
          transferencia +
          "\n y su decuento fue de :  $" +
          intereses
      );
      console.log(transferencia);
      console.log(precioTotal);
      break;
    case "2":
      console.log("elegi visa");
      let cantCuotas = prompt(
        "Seleccione en cuantas cuotas desea realizar el pago :\n 1) 1 cuota sin interes  \n 2) 2 cuotas con interes \n 3) 3 cuotas con interes"
      );
      visaCredito(cantCuotas);
      console.log("elegi visa");
      break;
    case "3":
      console.log("elegi masters");
      if (cantProducto > 3) {
        let cantCuotas = prompt(
          "Usted lleva mas de 3 produtos por lo tanto puede :\n 1) 1 cuota sin interes \n 2) 2 cuotas sin interes \n 3) 3 cuotas sin interes"
        );
        mastercard(cantCuotas);
      } else {
        let cantCuotas = prompt(
          "Seleccione en cuantas cuotas desea realizar el pago :\n 1) 1 cuota sin interes \n 2) 2 cuotas con interes \n 3) 3 cuotas con interes"
        );
        visaCredito(cantCuotas);
      }
      break;
    default:
      break;
  }
}

//calcular interes

// metodos de pagos
// visa credito
