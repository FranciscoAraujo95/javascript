var btn = document.getElementById('btn');
btn.addEventListener('click', contar);
btn.style.cursor = 'pointer';

var rld = document.getElementById('rld');
rld.addEventListener('click', recarregar);
rld.style.cursor = 'pointer';
rld.style.color = 'gray';

function recarregar() {
  window.location.reload();
}

function contar() {
  let ini = document.getElementById('txti');
  let fim = document.getElementById('txtf');
  let passo = document.getElementById('txtp');
  let res = document.getElementById('res');
  res.innerHTML = 'Contando: <br>';
  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert('[ERRO] Faltam dados!');
    res.innerHTML = 'Impossível contar';
  } else {
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      alert('Passo inválido! Considerando PASSO 1');
      p = 1;
    }
    if (i < f) {
      //contagem crescente
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      //contagem decrescente
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
