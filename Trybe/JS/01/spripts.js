let age = 20;
let nome = 'jau';
age = 30;
const sexo = 'macho';
console.log(age, nome, sexo);

let patientInfo = {
    firstName:'ana',
    lastName:'silva',
};

let base = 5;
let heigth = 8;
let area = base * heigth;

console.log(area);

let perimeter = base + heigth;

console.log(perimeter);

/////////////////////////////

let nota = 80;
if ( nota >= 80){
    console.log ('Parabnens');
}
else if (nota < 80 && nota >=60){
    console.log ('Lista de espera');
}
else {
    console.log ('Reprovado');
}

///////////////////////////

let currentHour = 4;
let message;

if (currentHour >=22){
    message = 'ñ pode comer';
}
else if( currentHour >= 18 && currentHour < 22){
    message = 'pode jantar';
}
else if ( currentHour >=14 && currentHour < 18){
    message = 'lanche da tarde';
}
else if ( currentHour >= 11 && currentHour < 14 ){
    message = 'Almoço';
}
else if ( currentHour >= 4 && currentHour < 11){
    message = 'cafe';
}
console.log (message);

/////////////////////////////////////////////

let faixaEtaria = 'adulto';

switch (faixaEtaria){
    case 'adolescente':
        console.log('consulte a classificação do filme');
        break;
    case 'adulto':
        console.log('A pessoa adulta é classificadas para ver o filme');
        break;
    default:
    console.log('so pode ver filmes livres');    
}
//-------------------------------------------

let mes = 'outubro';
let estacaoDoAno = '?';

switch (mes){
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;   
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
        break;             
}
console.log(estacaoDoAno);
///////////////////////////////////////
//// AULA GUS //////////////////////
console.log('--------------------------')
console.log('Aula Gus')

const round = 2; //Entre 1 e 16
let money = 1200;
const killWeapon = 'Knife'; //'Knife', 'AWP', 'Desert Eagle', 'Molotov', 'MP7'. 
const win = true; //false
const howWin = 'Eliminando'; //'Eliminando', 'Tempo esgotado', 'Bomb has been planted', 'Bomb has been defused', 'Bomb explode'.
const defuseBomb = true; //false
const bombDetonate = false; //true

if (round === 1 || round === 16) {
  money = 800;
} else if (win === true && (howWin === 'Eliminando' || howWin === 'Tempo esgotado')) {
  money += 3250;
} else if (win === true && (howWin === 'Bomb has been planted')) {
  money += 3550;
} else if (win === true && (howWin === 'Bomb has been defused' || howWin === 'Bomb explode')) {
  money += 3500;
} 

if(round != 1 && round != 16){
  switch (killWeapon) {
    case 'Knife':
      money += 1500;
      break;
    case 'AWP':
      money += 100;
      break;
    case 'Desert Eagle':
      money += 300;
      break;
    case 'Molotov':
      money += 300;
      break;
    case 'MP7':
      money += 600;
      break;
  
    default:
      console.log('Arma não encontrada.');
      break;
  }
}

console.log('Money: $' + money);