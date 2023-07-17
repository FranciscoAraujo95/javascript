var btn = document.getElementById("btn");
btn.addEventListener("click", gerar);

var reset = document.getElementById("reset");
reset.addEventListener("click", recarregar);

function recarregar() {
  window.location.reload();
}

function gerar() {
  let txtn = document.getElementById("txtn");
  let num = Number(txtn.value);
  let multiplicador = 1;
  let res = document.getElementById("res");
  for (let c = multiplicador; c <= 10; c++) {
    let resultado = c * num;
    res.innerHTML += `${c} x ${num} = ${resultado} <br>`;
  }
}
res.style.color = "gray";
