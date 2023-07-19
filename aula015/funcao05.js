let vetor = [2, 5, 8, 3, 7, 1];

for (var posição = 0; posição < vetor.length; posição++) {
  console.log(`A posição ${posição} tem o valor ${vetor[posição]}.`);
}

var agora = new Date();
var horas = agora.getHours();
var minutos = agora.getMinutes();
var segundos = agora.getSeconds();

console.log(
  `Agora são ${horas} horas e ${minutos} minutos e ${segundos} segundos.`
);

var soma = (x, y) => {
  return x + y;
};
console.log(`O resultado da soma é igual ${soma(13, 7)}.`);

var multiplicação = (x, y) => {
  return x * y;
};
console.log(`O resultado da multiplicação entre é ${multiplicação(7, 9)}.`);
