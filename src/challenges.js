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
function encode() {

  // function converteFrase(frase) {
  //   var fraseArr =[];
  //   for(let letras of frase) {
  //     fraseArr.push(letras)
  //   }
  //   return fraseArr;
  // }

  // for (let i = 0; i < frase.length; i += 1) {
  //   if (fraseArr[i] === 'a') {
  //     fraseArr[i] = '1';
  //   }
  // }
}

// console.log(encode('ola mundo'));

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

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
