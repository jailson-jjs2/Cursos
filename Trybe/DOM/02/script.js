let ingredienteItems = [
  '500g de fejão',
  '200g de toucinho',
  '5 ovos'
];

//ADD A VARIAVEL O ELEMENTO DA CLASS
let listaDeIngredientes = document.querySelector('.lista-ingred');

//LOOP PARA ADD IGREDIENTEITEMS NO INDEX
for (let index of ingredienteItems){
  //CRIANDO O LI PARA O UL
  let ingredienteItem = document.createElement('li');
  ingredienteItem.innerText = index;
  //ADD O INDEX NO LI FILHO PARA UL PAI
  listaDeIngredientes.appendChild(ingredienteItem);
}

