// Alerta de chat encerrado ao tentar enviar mensagem
const submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener("click", (event) => {
  alert("NÃO FOI POSSÍVEL ENVIAR A MENSAGEM! Chat encerrado.");
  event.preventDefault();
});

// Alerta ao tentar criar um topico novo
const form = document.querySelector(".forum__topico");
form.addEventListener("submit", (e) => {
  const titulo = document.querySelector("#titulo").value;
  if (titulo === "") {
    alert("O título do tópico é obrigatório.");
    e.preventDefault();
  }
});