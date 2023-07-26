let amigo = {
  nome: "José",
  sexo: "M",
  peso: 85.4,
  engordar(p = 0) {
    // console.log("Engordou");
    amigo.peso += p;
  },
};

amigo.engordar(8);
if (amigo.peso >= 90) {
  console.log(`${amigo.nome}, você está com ${amigo.peso}Kg. Acima do peso!`);
} else {
  console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`);
}
