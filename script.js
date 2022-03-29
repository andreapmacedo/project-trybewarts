const form = document.querySelector('#evaluation-form');
const headerEmail = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnLogin = document.querySelector('#loginBtn');
const btnSubmit = document.querySelector('#submit-btn');
const checkAcordo = document.querySelector('#agreement');
const txaComent = document.querySelector('#textarea');
btnSubmit.disabled = true;

function login() {
  if (headerEmail.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', login);

function toAble() {
  btnSubmit.disabled = !checkAcordo.checked;
}

function countCharacter(event) {
  const left = 500 - event.target.value.length; // (sem o event) txaComent.value.length
  const counter = document.querySelector('#counter');
  counter.innerText = left;
}

function getFamily() {
  const selectedFamily = document.getElementsByName('family');
  for (let index = 0; index < selectedFamily.length; index += 1) {
    if (selectedFamily[index].checked) {
      return selectedFamily[index].value;
    }
  }
  return '';
}

function getTechs() {
  const selectedTechs = document.getElementsByName('techs');
  const techs = [];
  for (let index = 0; index < selectedTechs.length; index += 1) {
    if (selectedTechs[index].checked) {
      techs.push(selectedTechs[index].value);
    }
  }
  return techs.join(', ');
}

function getAvaliation() {
  const selectedRate = document.getElementsByName('rate');
  for (let index = 0; index < selectedRate.length; index += 1) {
    if (selectedRate[index].checked) {
      return selectedRate[index].value;
    }
  }
  return '';
}

function createForm() {
  const nameInput = document.getElementById('input-name').value;
  const lastnameInput = document.getElementById('input-lastname').value;
  const fullName = [nameInput, lastnameInput].join(' ');
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const comment = document.getElementById('textarea').value;
  const formQuest = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  const formResponse = [fullName, email, house, getFamily(), getTechs(), getAvaliation(), comment];
  form.innerHTML = '';
  for (let index = 0; index < formQuest.length; index += 1) {
    const listInformation = document.createElement('p');
    listInformation.innerText = `${formQuest[index]}: ${formResponse[index]}`;
    form.appendChild(listInformation);
  }
}

window.onload = function carrega(event) {
  event.preventDefault();
  checkAcordo.addEventListener('click', toAble);
  txaComent.addEventListener('keyup', countCharacter);
  btnSubmit.addEventListener('click', createForm);
};
