var agora = new Date(); //definimos uma variável para captar uma data
var hora = agora.getHours(); //criamos outra variável atribuindo a anterior e puxando o dado desejado
var min = new Date();
var minuto = min.getMinutes();
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`);
if (hora <= 12) {
  console.log("Bom dia!");
} else if (hora <= 18) {
  console.log("Boa tarde!");
} else if (hora <= 23) {
  console.log("Boa noite!");
} else {
  console.log("Boa madrugada");
}
