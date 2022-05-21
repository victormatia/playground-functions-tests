// Desafio 11
function generatePhoneNumber() {
  // let newPhoneNumber = [];
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers.length > 11) {
  //     return 'Array com tamanho incorreto.';
  //   } else if (numbers[i] < 0 || numbers[i] > 9) {
  //     return 'não é possível gerar um número de telefone com esses valores'
  //   } else {
  //     newPhoneNumber.push(numbers[i]);
  //   }
  // }

  // return newPhoneNumber.join('');
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 2]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let itIsATriagle = true;
  let itIsNotATriagle = false;

  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)  && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return itIsATriagle;
  } return itIsNotATriagle;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
