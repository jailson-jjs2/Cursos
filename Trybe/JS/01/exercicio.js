let a = 5;
let b = 3;
maiorValor = 0;

if( a > b){
    maiorValor = a;
} else {
    maiorValor = b;
}
console.log('Maior valor entre 2 numeros')
console.log(maiorValor);
console.log('--------------------------------');

/////////////////////////////

let x = 1;
let y = 2;
let z = 6;
valorMaior = 0;

if( x > y && x > z){
    valorMaior = x;
} 
else if (y > x && y > z){
    valorMaior = y;
}
else{
    valorMaior = z;
}

console.log('Maior valor entre 3 numeros')
console.log(valorMaior);
console.log('--------------------------------');

///////////////////////////////////////////

let valor = 0;
console.log('Ver negativo ou positivo')
if( valor < 0){
    console.log('Negativo');
}
else if (valor > 0){
    console.log('Positivo');
}
else{
    console.log('Zero');
}
console.log('--------------------------------');
/////////////////////////////////////////
console.log('Triangulo')

let a1 = 430;
let a2 = 50;
let a3 = 100;
let triangulo;

if ( a1 < 0 || a2 < 0 || a3 < 0){
    console.log('Angulo invalido');
}

else if ( a1 + a2 + a3 == 180){
    triangulo =  true;
}
else {
    triangulo =  false;
}

console.log(triangulo);
console.log('--------------------------------');
/////////////////////////////////////////

console.log('Movimento Xadrez')
let peca = 'REI';

switch (peca.toLowerCase()){
    case 'cavalo':
        console.log('movimento em L');
        break;
    case 'bisbo':
        console.log('movimento em diagonal');
        break;
    case 'peao':
        console.log('movimento de 1 casa pra frente');
        break;
    case 'rei':
        console.log('movimento de 1 casa');
        break;
    case 'rainha':
        console.log('movimento qualquer lugar');
        break;        
    default:
    console.log('sem movimento');
}

console.log('--------------------------------');
/////////////////////////////////////////

console.log('Valor da Nota');

let valorNota = 50;
let minhaNota;

if (valorNota < 0 || valorNota > 100){
    minhaNota = ('Nota Invalida');
}
else if( valorNota >= 90){
    minhaNota = 'A';
}
else if( valorNota >= 80){
    minhaNota = 'B';
}
else if( valorNota >= 70){
    minhaNota = 'C';
}
else if( valorNota >= 60){
    minhaNota = 'D';
}
else if( valorNota >= 50){
    minhaNota = 'E';
} else{
    minhaNota = 'F';
}
console.log(minhaNota);

console.log('--------------------------------');
/////////////////////////////////////////

let aa = 1;
let bb = 2;
let cc = 3;

if ( aa % 2 == 0 || bb % 2 == 0 || cc % 2 == 0){
    console.log(true);
}
else{
    console.log(false);    
}
console.log('--------------------------------');
/////////////////////////////////////////

let custo = 10;
let vendaProd = 15;
let lucro;
imposto = 0.2;
valorCustoTotal = custo + (custo * imposto);
lucro = vendaProd - valorCustoTotal;

console.log(lucro);

console.log('--------------------------------');
/////////////////////////////////////////

let salarioBruto = 4500.10;
let inss;
let ir;
let salDes;
let descontoInss;
let descontoIr;
let parcela;

if( salarioBruto > 0 && salarioBruto<= 1556.94){
    inss = 0.08;
    descontoInss = salarioBruto * inss;
}else if ( salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    inss = 0.09;
    descontoInss = salarioBruto * inss;
}else if ( salarioBruto > 2594.92 && salarioBruto < 5189.82 ){
    inss = 0.11;
    descontoInss = salarioBruto * inss;
} else{
    descontoInss = 570.88;
}

if( salarioBruto > 0 && salarioBruto <= 1903.98){
    ir = 0;
}else if ( salarioBruto > 1903.98 && salarioBruto <= 2826.65){
    ir = 0.075;
    parcela = 142.80;
    descontoIr = (salarioBruto * ir) + parcela
}else if(salarioBruto > 2826.65 && salarioBruto <= 3751.05){
    ir = 0.15;
    parcela = 354.80;
    descontoIr = (salarioBruto * ir) + parcela
}else if ( salarioBruto > 3751.05 && salarioBruto <= 4664.68){
    ir = 0.225;
    parcela = 636.13;
    descontoIr = (salarioBruto * ir) + parcela
} else {
    ir = 0.275;
    parcela = 869.36;
    descontoIr = (salarioBruto * ir) + parcela
}

console.log(salDes = salarioBruto - descontoInss - descontoIr);