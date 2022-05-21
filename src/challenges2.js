// Desafio 11
function generatePhoneNumber(numbers) {

  let newPhoneNumber = [];

  if (numbers.length === 0) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers.length !== 11) { // essa parte da ok
      return 'Array com tamanho incorreto.';
    } else if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }

    let counter = 0;
    for (let secI = 0; secI < numbers.length; secI += 1) { // Esse for conta quantas vezes um numero aparece dentro do array
      if (numbers[secI] === numbers[i]) {
        counter +=1;
      }
    }

    if (counter >= 3) { // essa parte da ok
      return 'não é possível gerar um número de telefone com esses valores'
    } else {
      newPhoneNumber.push(numbers[i])
    }
  }
  return `(${newPhoneNumber[0]}${newPhoneNumber[1]}) ${newPhoneNumber[2]}${newPhoneNumber[3]}${newPhoneNumber[4]}${newPhoneNumber[5]}${newPhoneNumber[6]}-${newPhoneNumber[7]}${newPhoneNumber[8]}${newPhoneNumber[9]}${newPhoneNumber[10]}`;
  // o que tem que retornar (11) 99999-9999
}

// Desafio 12 - OK
function triangleCheck(lineA, lineB, lineC) {
  let itIsATriagle = true;
  let itIsNotATriagle = false;

  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)  && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return itIsATriagle;
  } return itIsNotATriagle;
}

// Desafio 13 - OK
function hydrate(string) {
  let reg = /\d+/g; // isso se chama expressão regular e é utilizada para encontrar um ou  mais digitos dentro de uma string.
  let result = string.match(reg); // utilizamos o .match para encontrar a expressão regular. // result é um array.

  let soma = 0;

  for (let i = 0; i < result.length; i += 1) {
    let convertion = parseInt(result[i]); // o parseInt transforma o em um inteiro.
    soma += convertion;
  }

  if (soma > 1) {
    return `${soma} copos de água`; // esse é o formato de concatenção que o linter gosta
  } return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
