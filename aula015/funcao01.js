function parimp(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

let res = parimp(15);
console.log(`Este número é ${res}.`);
