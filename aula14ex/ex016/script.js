var btn = document.getElementById("btn");
btn.addEventListener("click", contar);

function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("[ERRO] Faltam dados!!");
  } else {
    alert("TUDO OK!");
  }
}
