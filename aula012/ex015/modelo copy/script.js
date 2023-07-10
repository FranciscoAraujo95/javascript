var btn = document.getElementById("btn");
btn.addEventListener("click", verificar);

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fano.value.length == 0 || fano > ano) {
    alert(`[ERRO] Verifique os dados e tente novamente!`);
  } else {
    var idade = ano - Number(fano.value);
    var fsex = document.getElementsByName("radsex");
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 12) {
        //criança
        img.setAttribute("src", "img/crianca-h.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "img/jovem-h.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "img/adulto-h.png");
      } else {
        //idoso
        img.setAttribute("src", "img/idoso-h.png");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 12) {
        //criança
        img.setAttribute("src", "img/crianca-m.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "img/jovem-m.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "img/adulto-m.png");
      } else {
        //idoso
        img.setAttribute("src", "img/idoso-m.png");
      }
    }
  }
  img.style.padding = "1rem";
  res.style.textAlign = "center";
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  res.appendChild(img);
}

var rld = document.getElementById("rld");
rld.addEventListener("click", recarregar);
function recarregar() {
  window.location.reload();
}
