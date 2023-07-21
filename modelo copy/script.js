var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var num = document.getElementById("txtn");
  var tab = document.getElementById("seltab");
  if (num.value.length == 0) {
    alert("Impossível gerar. Por favor digite um número!");
  } else {
    tab.innerHTML = "";
    var n = Number(num.value);
    var c = 1;
    while (c <= 10) {
      var item = document.createElement("option");
      item.innerHTML = `${n} x ${c} = ${n * c}`;
      tab.appendChild(item);
      c++;
    }
  }
});

// var btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", () => {
//   tab.innerHTML = "Não tá dando certo";
//   tab.appendChild(item);
// });
