function inverterString(str) {
  let caracteres = str.split("");
  let inicio = 0;
  let fim = caracteres.length - 1;

  while (inicio < fim) {
    let temp = caracteres[inicio];
    caracteres[inicio] = caracteres[fim];
    caracteres[fim] = temp;

    inicio++;
    fim--;
  }

  return caracteres.join("");
}

let minhaString = "Exemplo";

console.log("String original: " + minhaString);

minhaString = inverterString(minhaString);

console.log("String invertida: " + minhaString);
