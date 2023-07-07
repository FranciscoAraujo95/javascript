var img = window.document.getElementById('imagem');
var msg = window.document.getElementById('msg');
function carregar() {
  var hour = new Date();
  var hora = hour.getHours();
  var min = new Date();
  var minuto = min.getMinutes();
  var body = window.document.body;
  msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`;

  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'img/manha.png';
    body.style.background = 'green';
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    img.src = 'img/tarde.png';
    body.style.background = 'orange';
  } else {
    // BOA NOITE
    img.src = 'img/noite.png';
    body.style.background = 'darkblue';
  }
}

var btnDia = document.getElementById('btn-dia');
btnDia.addEventListener('click', dia);
function dia() {
  document.body.style.background = 'green';
  img.src = 'img/manha.png';
  msg.innerHTML = 'Esse é o período da manhã.';
}

var btnTarde = document.getElementById('btn-tarde');
btnTarde.addEventListener('click', tarde);
function tarde() {
  document.body.style.background = 'orange';
  img.src = 'img/tarde.png';
  msg.innerHTML = 'Esse é o período da tarde.';
}

var btnNoite = document.getElementById('btn-noite');
btnNoite.addEventListener('click', noite);
function noite() {
  document.body.style.background = 'darkblue';
  img.src = 'img/noite.png';
  msg.innerHTML = 'Esse é o período da noite.';
}
