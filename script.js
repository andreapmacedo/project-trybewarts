const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const btnLogin = document.querySelector("#loginBtn");

function login() {
    console.log(email.value)
  if(email.value === 'tryber@teste.com' && senha.value === '123456'){
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', login)
