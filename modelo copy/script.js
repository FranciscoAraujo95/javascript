const rld = document.getElementById('rld');
rld.addEventListener('click', () => {
  window.location.reload();
});

let num = document.getElementById('txtn');
let sel = document.getElementById('sel');
let vetor = [];

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  if (num.value.length == 0) {
    alert('Número inválido!');
  } else {
    var n = Number(num.value);
    if (n < 1 || n > 100) {
      alert('Número inválido!');
    } else {
      var item = document.createElement('option');
      item.innerHTML = `Número ${n} adicionado.`;
      sel.appendChild(item);
      vetor.push(n);

      var final = document.getElementById('final');
      final.addEventListener('click', () => {
        if (num.value.length == 0) {
          alert('Adicione um número primeiro.');
        } else {
          var p = document.createElement('p');
          var res = document.getElementById('res');
          p.innerHTML = `O total de números adicionados foi de ${vetor.length} <br> <br>`;
          p.innerHTML += `Os números adicionados foram ${vetor} <br> <br>`;
          res.appendChild(p);
        }
      });
    }
  }
});
