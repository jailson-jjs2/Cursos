function soma(valor1, valor2){
    return valor1 + valor2;
}

let total = (soma(2,2));

console.log(total);

////////////////////////////////////

function realParaDolar(real, dolar){
    return real * dolar;
}

let valorReal = 100;
let valorDolar = 5.18;

let moeda = realParaDolar(valorReal, valorDolar);

console.log('R$ ' + moeda);

//////////////////////////////////////

function alerta(){
    return 'ALERTA';
}

console.log(alerta());

////////////////////////////////////

function paraCelsius(fahrenheit){
    return (5/9) * (fahrenheit -32);
}

let fahrenheit = 77;

let tempFParaTempC = paraCelsius(fahrenheit);

console.log(tempFParaTempC + 'C');