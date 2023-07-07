var msg = document.getElementById("msg");
var msg2 = document.getElementById("msg2");
var img = document.getElementById("img");

function carregar() {
  var hour = new Date();
  var hora = hour.getHours();
  var min = new Date();
  var minuto = min.getMinutes();

  msg.innerHTML = ` Agora são exatamente ${hora} horas e ${minuto} minutos.`;

  if (hora >= 0 && hora <= 12) {
    img.src = "img/manha.png";
    msg2.innerHTML = "Neste momento é dia.";
    document.body.style.background = "limegreen";
  } else if (hora <= 18) {
    img.src = "img/tarde.png";
    msg2.innerHTML = "Neste momento é tarde.";
    document.body.style.background = "orange";
  } else {
    img.src = "img/noite.png";
    msg2.innerHTML = "Neste momento é noite.";
    document.body.style.background = "darkblue";
  }
}

var btnDia = document.getElementById("btn-dia");
btnDia.addEventListener("click", dia);
function dia() {
  img.src = "img/manha.png";
  msg.innerHTML = "Período da manhã.";
  msg.style.color = "green";
  msg2.innerHTML = "Neste momento é dia.";
  msg2.style.color = "green";
  document.body.style.background = "limegreen";
}

var btnTarde = document.getElementById("btn-tarde");
btnTarde.addEventListener("click", tarde);
function tarde() {
  img.src = "img/tarde.png";
  msg.innerHTML = "Período da tarde.";
  msg.style.color = "#d39014";
  msg2.innerHTML = "Neste momento é tarde.";
  msg2.style.color = "#d39014";
  document.body.style.background = "#ffc400";
}

var btnNoite = document.getElementById("btn-noite");
btnNoite.addEventListener("click", noite);
function noite() {
  img.src = "img/noite.png";
  msg.innerHTML = "Período da noite.";
  msg.style.color = "darkblue";
  msg2.innerHTML = "Neste momento é noite.";
  msg2.style.color = "darkblue";
  document.body.style.background = "darkblue";
}

var rld = document.getElementById("rld");
rld.addEventListener("click", recarregar);
function recarregar() {
  window.location.reload();
}
