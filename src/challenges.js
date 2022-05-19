// Desafio 1 // OK
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } return false;
}

// Desafio 2 // OK
function calcArea(base, heigth) {
  let areaTriagulo = (base * heigth) / 2;
  return areaTriagulo;
}

// Desafio 3 // OK
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4 // OK
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5 // OK
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6 // OK
function highestCount(numeros) {
  let maiorNumero = Math.max(...numeros); // retorna o maior valor de um array
  let quantasVesesAparece = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === maiorNumero) {
      quantasVesesAparece += 1;
    }
  }
  return quantasVesesAparece;
}

// Desafio 7 // OK
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))) { // O Math.abs transforma números em absolutos.
    return 'cat2';
  } else if (Math.abs((mouse - cat2)) > Math.abs((mouse - cat1))) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8 // OK
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

// Desafio 9     //OK
function encode(frase) {
  let fraseArr = frase.split('');

  for (let i = 0; i < fraseArr.length; i += 1) {
    if (fraseArr[i] === 'a') {
      fraseArr[i] = '1';
    } else if (fraseArr[i] === 'e') {
      fraseArr[i] = '2';
    } else if (fraseArr[i] === 'i') {
      fraseArr[i] = '3';
    } else if (fraseArr[i] === 'o') {
      fraseArr[i] = '4';
    } else if (fraseArr[i] === 'u') {
      fraseArr[i] = '5';
    }
  }

  return fraseArr.join(''); // a função .join('') vai retornar o valor sem os parâmetros indicados dentro das aspas.
}

function decode(frase) {  
  let fraseArr = frase.split('');

  for (let i = 0; i < fraseArr.length; i += 1) {
    if (fraseArr[i] === '1') {
      fraseArr[i] = 'a';
    } else if (fraseArr[i] === '2') {
      fraseArr[i] = 'e';
    } else if (fraseArr[i] === '3') {
      fraseArr[i] = 'i';
    } else if (fraseArr[i] === '4') {
      fraseArr[i] = 'o';
    } else if (fraseArr[i] === '5') {
      fraseArr[i] = 'u';
    }
  }

  return fraseArr.join('');
}

// Desafio 10 // OK
function techList(array, string) {
  let resultado = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      resultado.push({ tech: array[i], name: string });
    }
  }
  return resultado.sort(function (a, b){ // Essa função ordena os indices - objetos -, dentro do array tenho parâmetro o valor de uma key.
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
