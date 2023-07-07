var btn = document.getElementById("btn");
btn.addEventListener("click", verificar);
function verificar() {
  var data = new Date(); //Vamos pegar uma nova data
  var ano = data.getFullYear(); //Essa linha pega o ano atual
  var fano = document.getElementById("txtano"); //Pega o ano digitado no input
  var res = document.querySelector("#res");
  if (fano.value.length == 0 || fano.value > ano) {
    //Verificação se o campo está vazio ou se o ano digitado é maior que o atual
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex"); //Pega a escolha nos radio buttons
    var idade = ano - Number(fano.value); //Calcula a idade atual do usuário
    var gênero = ""; //Variável que começa vazia para atribuir valor dependendo do resultado da escolha do usuário nos radio buttons
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      //"Se o primeiro radio button estiver selecionado"
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Dependendo da idade informada, vai carregar uma imagem diferente
        //crianca
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
      //"Se o segundo radio button estiver selecionado"
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Dependendo da idade informada, vai carregar uma imagem diferente
        //crianca
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
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
    img.style.padding = "1rem";
  }
}
