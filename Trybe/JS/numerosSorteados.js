//Sorteio dos números
let lotteryNumbers = [];
let firstGame = [];

function generateLotteryNumbers (quantity, maxNumber, array) {
  for (let index = 0; index < quantity; index += 1) {
    let randomNumber = Math.ceil(Math.random() * maxNumber);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    } else {
      index -= 1;
    }
  }
}

generateLotteryNumbers(6, 60, lotteryNumbers);
generateLotteryNumbers(6, 60, firstGame);

// Comparação do sorteio com o meu jogo
let numberOfHits = 0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
    if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
      numberOfHits += 1;
      hits.push(lotteryNumbers[indexLottery]);
    }
  }
}

function lang(exp, lng) {
  const dictionary = {
    en: {
      'Números sorteados': 'Result:',
      'Jogo': 'Game',
      'Quantidade de acertos': 'Number of Wins',
      
    }
  }
  if (dictionary.hasOwnProperty(lng) && dictionary[lng].hasOwnProperty(exp)){
    return dictionary[lng][exp];
  } else {
    return exp;
  }
  //optional chaining - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining
//   return dictionary?.[lng]?.[exp] || exp;
}

// Mostra os resultados
const language = 'en';
console.log(`${lang('Números sorteados', language)}:`, lotteryNumbers);
console.log(`${lang('Jogo', language)}:`, firstGame);
console.log(`${lang('Quantidade de acertos', language)}:`, numberOfHits);
console.log(`${lang('Números acertados', language)}:`, hits);