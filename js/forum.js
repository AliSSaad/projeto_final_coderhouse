const submitButton = document.querySelector("input[type='submit']");
        submitButton.addEventListener("click", () => {
          alert("NÃO FOI POSSÍVEL ENVIAR A MENSAGEM! Tópico encerrado.");
          submitButton.preventDefault();
        });