// funcion con arrow donde solicita al usuario un número
const solicitarNumero = () => {
  let numero = Number(prompt("Ingrese un número entre 1 y 20:"));
  if (numero >= 1 && numero <= 20) {
    return numero;
  } else {
    console.log("Número fuera del rango");
    return null;
  }
};

const factorial = (n) => {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
};

// for (let i = 1; i <= 10; i++) {
//   let res = 1;
//   for (let j = 1; j <= i; j++) {
//     res = res * j;
//   }
//   console.log("Factorial de " + i + " es: " + res);
// }

const mostrarResultado = (numero) => {
  if (numero === null) return;

  for (let i = 1; i <= numero; i++) {
    console.log(`Tabla de multiplicar del ${i}:`);
    for (let j = 1; j <= numero; j++) {
      console.log(`${j} x ${i} = ${j * i}`);
    }
    console.log(`Factorial de ${i} es: ${factorial(i)}`);
  }


};

const numero = solicitarNumero();
mostrarResultado(numero);
