let numeros = [4, 2, 7, 9, 3];
numeros.push(8);

// for (let posição in numeros) {
//   console.log(`A posição ${posição} tem o valor ${numeros[posição]}`);
// }

for (let posição = 0; posição < numeros.length; posição++) {
  console.log(`A posição ${posição} tem o valor ${numeros[posição]}.`);
}

console.log(numeros.indexOf(3));
