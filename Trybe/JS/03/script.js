let clientesTrybeBanck = ['Jau', 'Bel', 'Re'];

function cumprimentaCliente(cliente){
    return 'Ola, ' + cliente + '. Essa é sua conta do TrybeBank'
}
console.log( cumprimentaCliente(clientesTrybeBanck));

//////////////////////////////////////////////////////

let saldo = 100;

function addValor(valor){
    return saldo + valor;
}
console.log('Saldo: ' + addValor(20));

function subValor(valor){
    return saldo - valor;
}
console.log(subValor(20));

function mulValor(valor){
    return saldo * valor;
}
console.log(mulValor(10));

function divValor(valor){
    return saldo / valor;
}
console.log(divValor(20));

/////////////////////////////////////

let status1 = 'deslogado';

function logarDeslogar(){
    if (status1 == 'deslogado'){
        status1 = 'logado';
    } else {
        status1 = 'deslogado';
    }
}

console.log(status1);

logarDeslogar();

console.log(status1);

////////////////////////////////////////

function sacar (valor, saldo){
    if ( valor >= 1 && saldo >=0){
        if (valor <= saldo){
            return 'Saque realizado: R$ ' + (saldo - valor) + ',00';
        } else {
            return 'Saldo insuficiente : R$ ' + saldo + ',00';
        } 
        
    } else {
        return 'Valor ou Saldo invalido !!';
    }
}

console.log(sacar(-30, 20));


///////////////////////////////////////

//  VIDEO AULA //


let clientesCad = ['Jau', 'Bel', 'Renata', 'Tiago'];
let sorvetes = ['morango', 'creme', 'flocos'];

function sorveteEscolhido(nome, sabor) {
    
  /*  let clienteValido = false;
    let sorveteValido = false;
    
    
    for (let index = 0; index < clientesCad.length; index += 1){
        if( clientesCad[index] === nome){
            clienteValido = true;
        }
    }
    
    for (let index = 0; index < sorvetes.length; index += 1){
        if (sorvetes[index] === sabor){
            sorveteValido = true;
        }
    }
 */   
    if ( clientesCad.includes(nome) && sorvetes.includes(sabor)){
        return "Cliente " + nome + " comrpou sorvete de " + sabor;
    } else {
        return 'ng comprou sorvete';
    }
}

console.log(sorveteEscolhido('Jau', 'creme')); 

/////////////////////////////////////////////////////////////////////

// ADD E REMOVER DO ARRAY //

let cliTrybeBack = ['Ada', 'Jo', 'Gus'];

function addCli(nome) {
    cliTrybeBack.push(nome);
}
addCli('Jau');

function excCli(nome){
    cliTrybeBack.splice(cliTrybeBack.indexOf(nome),1);
}

excCli('Jo');

console.log(cliTrybeBack);

///////////////////////////////////////////////////////////////

// SAQUE //

function validarParametros(valor2, saldo2){
    if (valor2 >=1 && saldo2 >= 0){
        return true;
    } else {
        return false;
    }
}

function verificarSaldo(valor2, saldo2) {
    if (valor2 <= saldo2){
        return true;
    } else{
        return false;
    }
}

function sacar2(valor2, saldo2){
    if (validarParametros (valor2, saldo2) === false){
        return 'Valor ou saldo invalido';
    };
    if(verificarSaldo(valor2, saldo2) === true){
        return 'Saque realizado: ' + (saldo2 - valor2);
    } else {
        return 'Saldo insuficiente: ' + saldo2;
    }
}

console.log(sacar2(10, 100));



////////////////////////////////////////////////

//  AULA GUS //

function maiorEMenorNumero(array) {
    let maior = array[0];
    let menor = array[0];

    for (let index = 1; index < array.length; index += 1){
        if ( array[index] > maior){
            maior = array[index];
        }
        if ( array[index] < menor){
            menor = array[index];
        }

    }
    return `Maior: ${maior} Menor: ${menor}`;
};

console.log (maiorEMenorNumero([1,2,3,4,5]));

/////////////////////////////////////////////////////

// Bubble Sort //

function sortNumbers (array2){
    return array2.sort((a,b) => a - b);
}

console.log(sortNumbers([3,2,4,6,1,99,200]));