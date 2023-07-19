function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(soma(5));

//Se por acaso um dos parâmetros não for passado na chamada, o resultado será mostrado como NaN, porém isso pode ser resolvido definindo os parâmetros n1 e n2 recebendo o valor 0, o que significa que se não for atribuído um valor a eles, o JS vai considerar zero e somar normalmente
