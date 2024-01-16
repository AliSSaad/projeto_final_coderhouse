const submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener("click", (event) => {
  alert("NÃO FOI POSSÍVEL ENVIAR A MENSAGEM! Chat encerrado.");
  event.preventDefault();
});