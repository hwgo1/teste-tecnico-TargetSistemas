function isFibonacci(num) {
  let a = 0,
    b = 1,
    c;

  while (c <= num) {
    if (c === num) {
      return true;
    }
    c = a + b;
    a = b;
    b = c;
  }

  return false;
}

let numero = parseInt(prompt("Informe um número:"));

if (isFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
