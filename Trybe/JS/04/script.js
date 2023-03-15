let diasDaSemana = {
    1: 'domingo',
    2: 'segunda-feira',
    3: 'terça-feira',
    4: 'quarta-feira',
    5: 'quinta-feira',
    6: 'sexta-feira',
    7: 'sábado',
  };
  
  //diasDaSemana.1; // SyntaxError: Unexpected number FUNCIONARIA SE FOSSE LETRA NO LUGAR DO NUMERO.
  console.log(diasDaSemana['1']); // domingo

  /////////////////////////////////////////////////

  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

  ///////////////////////////////////////////////////////////

  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99 , PODEDNDO USAR usuario.id
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

  /////////////////////////////////////////////////////////////////////
  // PEGANDO array DENTRO DE UM objeto //

  let moradores = [
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
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luíza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey
//////////////////////////////////////////////////

let cantor = {
    nome: 'Jailson',
    sobreNome: 'Joventino',  // CHAVE E VALOR, OU PROPRIEDADES
    apelido: 'Jaja',
    idade: '40',
    esporte: 'volei',
    endereco: {
      estado: 'PB',
      cidade: 'João Pessoa'
    }
};

console.log(cantor.nome);
console.log(cantor['apelido']);

cantor['sexo'] = 'M'; // ADD PROPRIEDADE

console.log(cantor);

console.log(cantor.endereco.cidade);


///////////////////////////////////////////////////
// USANDO O for in //

const pizzas = {
  sabor: 'queijo',
  preco: 20.00,
  tamanho: 'M'
};
for (let chave in pizzas) {
  console.log(chave);
}
console.log(pizzas);

const pizzasDoces = ['morango', 'leite', 'morango'];
for (let chave in pizzasDoces){
  console.log(chave, pizzasDoces[chave]);
}

// for in USADO EM OBJETOS //

let food1 = ['hambúrguer', 'bife', 'acarajé'];
for (let value in food1) { // INDICE
  console.log(value);
};
let food = ['hambúrguer', 'bife', 'acarajé'];
for (let value of food) { // VALOR
  console.log(value);
};


let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let nome in names){
  console.log('ola ' + names[nome]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let carro in car){
  console.log(carro, car[carro]);
}

//////////////////////////////////////

// FUNÇÃO PARA ADD propriedade NO obj ////

const cliente = {
  primeiroNome: 'Roberto',
  idade: 22,
  trabalho: 'professor',
};

cliente.sobrenome = 'Silva';
console.log(cliente);

function addPropriedade(obj, chave, valor){
  obj[chave] = valor;
};

addPropriedade(cliente, 'cidade', 'Jampa');
console.log(cliente);

/////////////////////////////////////////////

const estudade = {
}

function addDadosEstudante(obj, chave, valor) { /// ADD CHAVE VALOR  PELA FUNÇÃO
  obj[chave] = valor;
}

addDadosEstudante(estudade, 'nome', 'Renata');
console.log(estudade);

// object.keys //

let programasTV = {
  nome: 'MTV',
  genero: 'musica',
  horario: '20:00h',
  class: 'livre'
};

console.log(Object.keys (programasTV));
console.log(Object.values (programasTV));

for (valor in programasTV) {
  console.log(programasTV[valor]);
}

function dadosProg(tv) {
  let arrayDados = Object.keys(tv);
  for (let index in arrayDados){
    console.log(arrayDados[index] + ' info ' + tv[arrayDados[index]]); // PEGANDO chave E valor.
  }
}

dadosProg(programasTV);

// Object.values //

let student = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskill: 'Ótimo',
};

function listSkillsValuesWithValues(student) {
  return Object.values(student);
}

console.log(listSkillsValuesWithValues(student));

// Object.entries //

let countries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};
let pairKeyValue = Object.entries(countries);
console.log(pairKeyValue);

for (index in pairKeyValue) { // for PERCORRE O obj
  console.log('------------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
}

//////////////////////////////////////

let animal = {
  nome: 'Toto',
  idade: 5,
  comida: 'ração'
};

let chaves = Object.keys(animal);
console.log(chaves);                      // chave

let valores = Object.values(animal);
console.log(valores);                     // valor

let chaveValor = Object.entries(animal);
console.log(chaveValor);                  // os 2 dados

///////////////////////////////////////////////////
// Object assign

let person = {
  name: 'Roberto',
};

let lastName = {
  lastName: 'Silva',
};

console.log(person);

let clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


let person = {
  name:'Roberto',
};

let lastname = {
  lastName: 'Silva',
};

let newPerson = Object.assign({},person,lastname);
newPerson.name = 'Gilberto';    // A VARIAVEL RECEBEU OS 2 OBJ
console.log(newPerson);
console.log(person);


let top3Albums = {
  1: 'Nightfall in Middle-Earth',
  2: 'Imaginations from the Other Side',
  3: 'Somewhere Far Beyond',
};

console.log(Object.entries(top3Albums));


