function exibirAviso(elemento, mensagem) {
  const avisoElemento = elemento.nextElementSibling;
  avisoElemento.textContent = mensagem;
}

function limparAviso(elemento) {
  const avisoElemento = elemento.nextElementSibling;
  avisoElemento.textContent = "";
}

function validarNome() {
  const input = document.getElementById("nome");
  const nome = input.value;
  const regex = /^[a-zA-Z\s]+$/;

  if (nome.length === 0) {
    exibirAviso(input, "Por favor, insira um nome.");
    input.setCustomValidity("Por favor, insira um nome.");
    return false;
  } else if (!regex.test(nome)) {
    exibirAviso(input, "Por favor, insira apenas letras.");
    input.setCustomValidity("Por favor, insira apenas letras");
    return false;
  } else {
    limparAviso(input);
    input.setCustomValidity("");
    return true;
  }
}

function validarMatricula() {
  const input = document.getElementById("matricula");
  let matricula = input.value;

  if (matricula.length === 0) {
    matricula = "FR";
  } else if (!matricula.startsWith("FR")) {
    matricula = "FR" + matricula;
  }

  matricula = matricula.slice(0, 8);

  input.value = matricula;

  if (matricula.length === 0) {
    exibirAviso(input, "Por favor, insira uma matrícula.");
    input.setCustomValidity("Por favor, insira uma matrícula.");
    return false;
  } else if (matricula.length < 8) {
    exibirAviso(input, "Por favor, insira uma matrícula válida.");
    input.setCustomValidity("Por favor, insira uma matrícula válida.");
    return false;
  } else {
    limparAviso(input);
    input.setCustomValidity("");
    return true;
  }
}

function validarCPF() {
  const input = document.getElementById("cpf");
  let cpf = input.value.replace(/\D/g, "");

  if (cpf.length !== 11) {
    exibirAviso(input, "Por favor, insira um CPF válido.");
    input.setCustomValidity("Por favor, insira um CPF válido.");
    return false;
  } else {
    limparAviso(input);
    input.setCustomValidity("");
    return true;
  }

  if (cpf.length >= 3) {
    cpf = cpf.substring(0, 3) + "." + cpf.substring(3);
  }
  if (cpf.length >= 7) {
    cpf = cpf.substring(0, 7) + "." + cpf.substring(7);
  }
  if (cpf.length >= 11) {
    cpf = cpf.substring(0, 11) + "-" + cpf.substring(11);
  }

  input.value = cpf.substring(0, 14);
}

function validarTelefone() {
  const input = document.getElementById("telefone");
  let telefone = input.value.replace(/\D/g, "");

  if (telefone.length < 11 || telefone.length > 12) {
    exibirAviso(input, "Por favor, insira um número válido.");
    input.setCustomValidity("Por favor, insira um número válido.");
    return false;
  } else {
    limparAviso(input);
    input.setCustomValidity("");
    return true;
  }

  if (telefone.length >= 2) {
    telefone = "(" + telefone.substring(0, 2) + ") " + telefone.substring(2);
  }
  if (telefone.length >= 7) {
    telefone = telefone.substring(0, 6) + "." + telefone.substring(6);
  }
  if (telefone.length >= 12) {
    telefone = telefone.substring(0, 11) + "-" + telefone.substring(11);
  }

  input.value = telefone.substring(0, 16);
}

function validarCep() {
  const input = document.getElementById("cep");
  let cep = input.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    exibirAviso(input, "Por favor, insira um CEP válido.");
    input.setCustomValidity("Por favor, insira um CEP válido.");
    return false;
  } else {
    limparAviso(input);
    input.setCustomValidity("");
    return true;
  }

  if (cep.length >= 5) {
    cep = cep.substring(0, 5) + "-" + cep.substring(5);
  }

  input.value = cep.substring(0, 9);
}

function validarRua() {
  const input = document.getElementById("rua");
  const rua = input.value;

  if (rua.length === 0) {
    exibirAviso(input, "Por favor, insira uma rua.");
    input.setCustomValidity("Por favor, insira uma rua.");
    return false;
  } else {
    limparAviso(input);
    input.setCustomValidity("");
    return true;
  }
}

function validarNumero() {
  const input = document.getElementById("numero");
  const numero = input.value;

  if (numero.length === 0) {
    exibirAviso(input, "Por favor, insira um número.");
    input.setCustomValidity("Por favor, insira um número.");
    return false;
  } else {
    limparAviso(input);
    input.setCustomValidity("");
    return true;
  }
}

function validarBairro() {
  const input = document.getElementById("bairro");
  const bairro = input.value;

  if (bairro.length === 0) {
    exibirAviso(input, "Por favor, insira um bairro.");
    input.setCustomValidity("Por favor, insira um bairro.");
    return false;
  } else {
    limparAviso(input);
    input.setCustomValidity("");
    return true;
  }
}

const nomeInput = document.getElementById("nome");
nomeInput.addEventListener("input", validarNome);

const matriculaInput = document.getElementById("matricula");
matriculaInput.addEventListener("input", validarMatricula);

const cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("input", validarCPF);

const telefoneInput = document.getElementById("telefone");
telefoneInput.addEventListener("input", validarTelefone);

const cepInput = document.getElementById("cep");
cepInput.addEventListener("input", validarCep);

const ruaInput = document.getElementById("rua");
ruaInput.addEventListener("input", validarRua);

const numeroInput = document.getElementById("numero");
numeroInput.addEventListener("input", validarNumero);

const bairroInput = document.getElementById("bairro");
bairroInput.addEventListener("input", validarBairro);

function verificarCampos(event) {
  event.preventDefault();
  const nomeValido = validarNome();
  const matriculaValida = validarMatricula();
  const cpfValido = validarCPF();
  const telefoneValido = validarTelefone();
  const cepValido = validarCep();
  const ruaValida = validarRua();
  const numeroValido = validarNumero();
  const bairroValido = validarBairro();

  if (
    nomeValido &&
    matriculaValida &&
    cpfValido &&
    telefoneValido &&
    cepValido &&
    ruaValida &&
    numeroValido &&
    bairroValido
  ) {
    window.location.href = "alunosadicionar.html";
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

// Vincular a função verificarCampos() ao botão "concluir"
const botaoConcluir = document.querySelector("#concluir");
botaoConcluir.addEventListener("click", verificarCampos);
