(document.body.childNodes); // childNodes PARA MOSTRAR TODOS OS ELEMENTOS DENTRO DO html.
(document.body.children); // AQUI PARA MOSTRAR OS ELEMENTOS DENTRO DO body.

// ABAIXO APENAS MOSTRANDO O ACESSO.
/* document.body.childNodes[1].innerText = 'Trocando texto no body, p';
document.body.childNodes[1].innerHTML = 'TB troca o conteudo';
document.body.childNodes[1].textContent = 'Trocando conteudo tb'; */

/*  
document.getElementById
document.getElementsByName
document.getElementsByTagName
document.getElementsByClassName
*/
// ALTERANDO VALOR DO id titulo USA getElementsByTagName
document.getElementsByClassName('cor-texto')[0].innerText = 'Trocando o Titulo com .getEl..';
document.getElementsByName('textoDiv')[0].innerHTML = 'Trocando texto div';

//ADICIONANDO VALOR NO FORM
document.getElementsByName('text_usuario')[0].value = 'jaja';

//ALTERANDO PELA TAG
document.getElementsByTagName('p')[0].innerText = 'alterando texto do p';

document.getElementsByTagName('p')[1].innerText = 'Trocando o valor do segundo P';

document.getElementsByClassName('cor-texto')[1].textContent = 'trocando texto do h2';