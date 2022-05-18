// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let areaTriagulo = (base * heigth) / 2;
  return areaTriagulo;
}

// Desafio 3
function splitSentence() {
  // let separaFrases = [];
  // for (let i = 0; i < frase.length; i += 1) {
  //   if (frase[i] !== " ") {

  //   }
  // }
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount() {
  // let quantidadeDeVezes = 0;
  // for (let i = 1; i < numeros.length; i += 1) {
  //   for (let i2 = 0; i2 < numeros.length; i2 += 1)
  //     if (numeros[i2] > numeros[i]) {
  //       quantidadeDeVezes += 1;
  //     }
  // }
  // return quantidadeDeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))) {
    return 'cat2';
  } else if (Math.abs((mouse - cat2)) > Math.abs((mouse - cat1))) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
