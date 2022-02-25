const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnLogin = document.querySelector('#loginBtn');
const btnSubmit = document.querySelector('#submit-btn');
const checkAcordo = document.querySelector('#agreement');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', login);

function submit(evento) {
  if (checkAcordo.value !== 'on') {
    evento.preventDefault();
  }
}
window.onload = function carrega(evento) {
  evento.preventDefault();
  btnSubmit.addEventListener('click', submit);
};
