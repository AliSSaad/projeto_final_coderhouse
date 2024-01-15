const submitButton = document.querySelector("input[type='submit']");
        submitButton.addEventListener("click", () => {
          alert("ERRO AO ENVIAR MENSAGEM! Chat encerrado.");
          submitButton.preventDefault();
        });