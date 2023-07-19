let num = [5, 8, 2, 9, 3]; //Vetor num
// num[5] = 6; //Pego o indice 5 do vetor e atribuo o valor 6
num.sort(); //Retorna o array em forma crescente (em caso de números)
num.push(1); //Joga um valo pra ultima posição do vetor
num.length; //Retorna quantos elementos existem no array
console.log(num);
console.log(`O vetor tem ${num.length} elementos.`);
console.log(`A primeiro valor do vetor é ${num[0]}.`);

let pos = num.indexOf(9);
if (pos == -1) {
  console.log("Valor não foi encontrado.");
} else {
  console.log(`O valor 8 está na posição ${pos}`);
}
