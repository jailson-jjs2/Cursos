document.getElementById('Dona'); // MEMSO RETORNO Q O DE BAIXO, AQUI PARA ID
document.querySelector('#Dona'); // querySelector tem q usar # SE Ñ FOR TAG, MAS ESSA DA MAIS OPÇÕES

document.querySelector('p'); // RETORNA O PRIMERO p
document.querySelector('.pilotos-sem-titulos p');
document.querySelector('.pilotos-sem-titulos .piloto-f1-atual');
document.querySelector('div');

document.querySelectorAll('div'); // RETORNA TODAS AS DIV EM UM ARRAY
document.querySelectorAll('p');
document.querySelectorAll('p')[0].innerText = 'LENDA'; // ALT O PRIMEIRO
document.querySelectorAll('.piloto-f1-atual').length; // USAR O . RETORNA LISTA
document.querySelectorAll('.pilotos-sem-titulos .piloto-f1-atual');


const conteudoM = document.getElementsByTagName('p')[0].innerText.toUpperCase();