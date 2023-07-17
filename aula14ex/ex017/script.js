//Função para gerar a tabuada. Utilizei arrow functions para praticar mas é bom ter noção do nome pra saber exatamente o que essa função anônima faz
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let txtn = document.getElementById("txtn");
  let num = Number(txtn.value);
  let multiplicador = 1;
  let res = document.getElementById("res");
  res.innerHTML = "";
  for (let c = multiplicador; c <= 10; c++) {
    let resultado = c * num;
    res.innerHTML += `${num} x ${c} = ${resultado} <br>`;
  }
});

//Função pra recarregar a página. Também com arrow function
var reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  window.location.reload();
});

res.style.color = "gray";
