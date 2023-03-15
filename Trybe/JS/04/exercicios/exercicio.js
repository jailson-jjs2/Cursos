let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Chrismas on Bear',
    nota: 'O ultimo MacPatinhas',
    recorrente: 'Sim'
}

console.log('Bem-vinda, ' + info.personagem);

info['recorrente'] = 'Sim';

console.log(info);

const chave = Object.keys(info);
console.log(chave);

const valor = Object.values(info);
console.log(valor);
console.log("");

for (let key in info){ // VAI PERCORRER OS 2 obj E FAZER A COMPARAÇÃO
    if( key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
        console.log('Ambos recorrente');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}


//////////////////////////////////////////////////

let leitor = {
    nome: 'Renata',
    sobrenome: 'Coutinho',
    idade: 40,
    livros: [
        {
            titulo: 'Senhor dos aneis',
            autor: 'Oscar',
            editora: 'Fantasy',
        },
    ],
};

console.log('O livro favorito de ' + leitor.nome + ' é ' + leitor.livros[0].titulo);

leitor.livros.push(
    {
        titulo: 'Harry Potter',
        autor: 'JK Row',
        edidora: 'Rocco',
    }
)

console.log(leitor);

///////////////////////////////////////

let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };

  function customerInfo(order) {
    let end = 'adress';
    let entregador = order.order.delivery.deliveryPerson;
    let cliente = order.name;
    let fone = order.phoneNumber;
    let rua = order.address.street;
    let num = order.address.number;
    let ap = order.address.apartment;

    console.log('Ola, ' + entregador + ', entrega para: ' + cliente + ', Fone: ' + fone + ', R. ' + rua + ', N. ' + num + ', AP ' + ap);
  }
  
  customerInfo(order);
  
  function orderModifier(order) {

    let pedido = Object.keys(order.order.pizza);
    let bebida = order.order.drinks.coke.type;
    let cliente = order.name;
    let pagamento = order.payment;

    cliente = 'Luiz Silva';
    pagamento = 50;

    console.log('Ola, ' + cliente + ', o valor total de seu pedido de ' + pedido + ' e ' + bebida + ', R$ ' + pagamento);
  }
  
  orderModifier(order);

  /////////////////////////////////////////////////////////////////////////////

  let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // lesson3.teste = 'testando'; /// ADD CHAVE E VALOR 

  function addNoite(obj, chave, valor) { 
    obj[chave] = valor;  // ADD CHAVE E VALOR EM UMA FUNÃO
  }
  addNoite(lesson2, 'turno', 'noite');

  console.log(lesson2);

// segunda questão

  function listKey(obj) {
    console.log(Object.keys(obj)); 
  }
listKey(lesson3);

// terceira questao

function tamanhoObj(obj){
 return Object.keys(obj).length
}

console.log (tamanhoObj(lesson3));

// quarta questão

function listValor (obj){
  return Object.values(obj);
}

console.log(listValor(lesson3));

// quinta questão

let allLessons = Object.assign({}, {
  lesson1: lesson1, 
  lesson2: lesson2, 
  lesson3: lesson3,
});

console.log(allLessons);

console.log('---------------------------------------------');

function totalEstudantes (obj){
  let total = 0;

  let chaves = Object.keys(obj);

  for (let index in chaves) {
    total += obj[chaves[index]].numeroEstudantes; // PEGANDO O TOTAL DE ALUNOS
  }
  return total;
}

console.log('Total de alunos: ' + totalEstudantes(allLessons));
console.log("");

// SEXTA QUESTÃO //

function valorPosicaoObj(obj, num){
  return Object.values(obj)[num];
}

console.log(valorPosicaoObj(lesson1, 2));

// setima questão //

function verificarPar(obj, chave, valor) {
  let entrada = Object.entries(obj);
  let verificando = false;
  for (let index in entrada){
    if(entrada[index][0] === chave && entrada[index][1] === valor)
    verificando = true;
  }
  return verificando;
}

console.log(verificarPar(lesson2, 'professor', 'Carlos'));

