let numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
};

function romanoParaDecimal (numero) {
    numero = numero.toLowerCase();
    let len = numero.length;
    let soma = numerosRomanos[numero[len - 1]];
    let atual = numerosRomanos[numero[len - 1]];

    for (let i = 2; i <= len; i += 1){
        let prox = numerosRomanos[numero[len - i]];
        if (atual <= prox) {
            soma += prox;
        } else {
            soma -= prox;
        }
        atual = prox;
    }
    return soma;
}

console.log(romanoParaDecimal('IX'));

///////////////////////////////////

let basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  let resultado = {}; // obj vazio para armazenar a contagem de frutas

//Nesse loop, cada elemento do array basket é percorrido e a contagem de cada fruta é armazenada no objeto resultado. A variável fruta recebe o valor do elemento atual e a verificação if(!resultado[fruta]) resultado[fruta] = 0 é feita para garantir que todas as frutas tenham uma entrada no objeto resultado, mesmo que ainda não tenham sido encontradas no array. A linha resultado[fruta] += 1 incrementa a contagem da fruta no objeto.
  for (let i = 0; i < basket.length; i += 1) {
    let fruta = basket[i];
    if(!resultado[fruta]) resultado[fruta] = 0;
    resultado[fruta] += 1;
    console.log(resultado[fruta]);
  }

  
 /*  Nesse loop, é percorrido cada chave do objeto resultado utilizando a sintaxe for (fruta in resultado). Para cada chave (ou seja, cada nome de fruta) é criada uma string texto contendo a contagem e o nome da fruta. A verificação if (resultado[fruta] > 1) texto += 's' é feita para adicionar um "s" no final da palavra "fruta" caso a contagem seja maior do que 1.

  Por fim, a string texto é adicionada ao array soma com a função soma.push(texto).
  
  Ao final do loop, o array soma contém todas as strings de contagem de cada fruta.  */
  let soma = [];

  for (fruta in resultado){
    let texto = `${resultado[fruta]} ${fruta}`;
    if (resultado[fruta] > 1) texto += 's';
    soma.push(texto);
  }

  console.log(`Sua sexta possui: ${soma.join(', ')}.`); // .join para add espaço

///////////////////////////
let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
    let resultado = [];

    for (let i = 0; i < vector.length; i += 1) { // percorre o primeiro array
        let numbers = vector[i];

        for(j = 0; j < numbers.length; j +=1) {  // percorre o segundo array
            let valor = numbers[j];

            if((valor % 2) === 0) {
                resultado.push(valor) // os numeros pares é add no array resultado.
            }
        }
    }
    return resultado;
}

console.log(arrayOfNumbers(vector));

///////////////////////////////////////////

let moradores = {
    blocoUm: [
      {
        nome: 'Luíza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

 console.log('O morador do ' + Object.keys(moradores)[1] + ' de ' + moradores.blocoDois[1].nome + ' ' + moradores.blocoDois[1].sobrenome + ' mora no ' + moradores.blocoDois[1].andar + ', ap ' + moradores.blocoDois[1].apartamento);
 //console.log(Object.keys(moradores)[1]);