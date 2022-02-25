const email = document.querySelector(".email");
const senha = document.querySelector(".senha");
const btnLogin = document.querySelector(".btnLogin");
// const btnEmail = document.querySelector(".btnLogin");

function login() {
  if(email.value === 'tryber@teste.com' && senha.value === '123456'){
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }

}
btnLogin.addEventListener('click', login)
