//formulario de login
const form = document.getElementById('form');

//tela de saudação
const telaHello = document.getElementById('saudacoes');
var telaHelloHidden = true;

//Campo html onde será incluido o hello do país do usuário
const hello = document.getElementById('saudacao');

//Consumindo apis para o ip do usuário e a saudação do país
//SIMULEI A API REALIZANDO A REQUISIÇÃO PELO SERVIDOR, POIS A ORIGINAL BLOQUEAVA NO IFRAME POR CONTA DA FALTA DO CERTIFICADO SSL NA API.
const locale = await fetch('https://www.leorafael.me/api/ip-api').then(
  (response) => response.json()
);
console.log(locale.ip);
const saudacoes = await fetch(
  `https://hellosalut.stefanbohacek.com/?ip=${locale.ip}`
).then((response) => response.json());

//inserindo a saudação do país do usuário no html

///////////////////////////////////////////////////////////////////////////////
//tela de login ficticia
const nome = document.getElementById('inputUsuario');
const senha = document.getElementById('inputSenha');
const btnLogin = document.getElementById('login');

var usuarioLogado = '';
btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (nome.value === '' || senha.value === '') {
    nome.classList.add('border-danger');
    senha.classList.add('border-danger');
    setTimeout(() => {
      nome.classList.remove('border-danger');
      senha.classList.remove('border-danger');
    }, 800);
    return;
  }

  form.hidden = true;
  telaHello.hidden = false;
  telaHelloHidden = false;
  hello.innerHTML = saudacoes.hello + ', ' + nome.value + '!';

  showInfo();
});

///////////////////////////////////////////////////////////////////////////////
//telaHello
const btnLogout = document.getElementById('logout');
const adeus = document.getElementById('adeus');
const adeusMsg = document.getElementById('adeusMsg');
const info = document.getElementById('info');

function showInfo() {
  info.innerHTML = `
    <p><strong>IP usuário:</strong> ${locale.query}</p>
    <p><strong>Cidade:</strong> ${locale.city}</p>
    <p><strong>Região:</strong> ${locale.regionName}</p>
    <p><strong>País:</strong> ${locale.country}</p>
    <p><strong>Longitude:</strong> ${locale.lon}</p>
    <p><strong>Latitude:</strong> ${locale.lat}</p>
  `;
}

/////tela de despedida
btnLogout.addEventListener('click', () => {
  telaHello.hidden = true; //esconde a tela de saudação
  adeus.hidden = false; //mostra a tela de despedida

  adeusMsg.innerHTML = 'Tenha um bom dia, ' + nome.value + '!'; //mostra a mensagem de despedida com o nome do usuário

  setTimeout(() => {
    adeus.hidden = true; //esconde a tela de despedida
    form.hidden = false; //mostra a tela de login
    nome.value = ''; //limpa o campo de nome
    senha.value = ''; //limpa o campo de senha
  }, 2000);
});
