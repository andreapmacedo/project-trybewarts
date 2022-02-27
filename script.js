const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnLogin = document.querySelector('#loginBtn');
const btnSubmit = document.querySelector('#submit-btn');
const checkAcordo = document.querySelector('#agreement');
const txaComent = document.querySelector('#textarea');
btnSubmit.disabled = true;

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', login);

function toAble() {
  if (checkAcordo.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
function countCharacter(event) {
  const left = 500 - event.target.value.length; // (sem o event) txaComent.value.length
  const counter = document.querySelector('#counter');
  counter.innerText = left;
}

window.onload = function carrega(evento) {
  evento.preventDefault();
  checkAcordo.addEventListener('click', toAble);
  txaComent.addEventListener('keyup', countCharacter);
};
