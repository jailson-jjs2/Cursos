const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const section1 = document.querySelector('.emergency-tasks');
section1.style.backgroundColor = 'pink';

const h31 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < h31.length; i += 1) {
  h31[i].style.backgroundColor = 'red';
}

const section2 = document.querySelector('.no-emergency-tasks');
section2.style.backgroundColor = 'blue';

const h32 = document.querySelectorAll('.no-emergency-tasks h3');
for ( i = 0; i < h32.length; i += 1) {
  h32[i].style.backgroundColor = 'black'
}

const rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'rgb(52, 44, 50';