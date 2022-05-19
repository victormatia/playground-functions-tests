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
function splitSentence(frase) {
  return frase.split(" ");
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
function highestCount(numeros) {
  let maiorNumero = Math.max(...numeros);
  let quantasVesesAparece = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === maiorNumero) {
      quantasVesesAparece += 1;
    }
  }
  return quantasVesesAparece;
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
function fizzBuzz(numeros) {
  let resultado = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if ((numeros[i] % 3) === 0 && (numeros[i] % 5) > 0) {
      resultado.push('fizz');
    } else if ((numeros[i] % 5) === 0 && (numeros[i] % 3) > 0) {
      resultado.push('buzz');
    } else if ((numeros[i] % 3) === 0 && (numeros[i] % 5) === 0) {
      resultado.push('fizzBuzz');
    } else {
      resultado.push('bug!')
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  let fraseArr = frase.split("");
  let novoArr = [];

  for (let i = 0; i < fraseArr.length; i += 1) {
    if (fraseArr[i] === 'a') {
      novoArr.push('1');
    } else if (fraseArr[i] === 'e') {
      novoArr.push('2');
    } else if (fraseArr[i] === 'i') {
      novoArr.push('3');
    } else if (fraseArr[i] === 'o') {
      novoArr.push('4');
    } else if (fraseArr[i] === 'u') {
      novoArr.push('5');
    } else {
      novoArr.push(fraseArr[i]);
    }
    return novoArr;
  }
}

function decode() {
  // for (let i = 0; i < frase.length; i += 1) {
  //   if (frase[i] === '1') {
  //     frase[i] = 'a';
  //   } else if (frase[i] === '2') {
  //     frase[i] = 'e';
  //   } else if (frase[i] === '3') {
  //     frase[i] = 'i';
  //   } else if (frase[i] === '4') {
  //     frase[i] = 'o';
  //   } else if (frase[i] === '5') {
  //     frase[i] = 'u';
  //   }
  // }
  // return frase;
}

// Desafio 10
function techList(array, string) {
  let resultado = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      resultado.push({ tech: array[i], name: string });
    }
  }
  return resultado.sort(function (a, b){ 
    if (a.tech > b.tech) {
      return 1;
    } else {
      return -1;
    } 
  });
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
