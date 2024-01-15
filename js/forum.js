const submitButton = document.querySelector("input[type='submit']");
        submitButton.addEventListener("click", () => {
          alert("ERRO AO ENVIAR MENSAGEM! Tópico encerrado.");
          submitButton.preventDefault();
        });