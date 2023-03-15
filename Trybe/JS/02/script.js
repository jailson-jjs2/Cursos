let pizzas = ['4 queijos', 'frango', 'carne', 'doce'];
pizzas.push('queijo'); // add na ultima posição
pizzas.sort(); // no log imprime em ordem alfabetica

let teste;
teste = pizzas.indexOf('doce');

console.log(pizzas, pizzas.length);
console.log(teste);

///////////////////////////////////////////////

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');
menu.push('Contato');

console.log(menuServices);
console.log(menu);

/////////////////////////////////////////////

let nomes = ['Jailson', 'Tiago', 'Bel', 'Renata'];
for (let i =0; i < nomes.length; i ++){
    console.log('Ola ' + nomes[i]);
}

////////////////////////////////////////////////

let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros){
    console.log(numero);
}

let nomes2 = ['Jau', 'Tiago', 'Renata', 'Bel'];
for (let nome of nomes2){
    console.log(nome);
}

/////////////////////////////////////////////////
//   AULA GUS //

let lotteryNumbers = [];
let firstGame = [6, 10, 23, 46, 33, 54];
let game = 0;
let hits =[];

for ( let i = 0; i < 6; i ++){
    let randomNumber = Math.ceil(Math.random() * 60);
    if(!lotteryNumbers.includes(randomNumber)){
        lotteryNumbers.push(randomNumber);
    } else {
        i -=1;
    }
    
    for ( let j = 0; j < 6; j ++){
        if( lotteryNumbers[i] == firstGame[j]){
            game++;
            hits.push(lotteryNumbers[i]);
        }
    }
}

console.log(lotteryNumbers);
console.log(firstGame);
console.log(game);
console.log(hits);


///////////////////////////////////
// EXERCICIO //

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let media = 0;
for ( num of numbers){
    console.log(num);

    total += num;

}
media = total / numbers.length;
console.log('Total: ' + total);
console.log('Media: ', media);

if (media > 20){
    console.log('Media > que 20');
} else {
    console.log('Media < que 20');
}

let maiorNumero = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}

console.log('Maior numero: ' + maiorNumero);

/////////////////////////////////////////////


function somarNum(valores2){
    let total = 0;
    for (let index = 0; index < valores2.length; index++) {
        total += valores2[index];
        
    }
    return total;
}


let valores = [1,2,3];

let resultado = somarNum(valores);

console.log(resultado);