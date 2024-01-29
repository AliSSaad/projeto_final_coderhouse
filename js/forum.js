// Alerta de chat encerrado ao tentar enviar mensagem
const submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener("click", (event) => {
  alert("NÃO FOI POSSÍVEL ENVIAR A MENSAGEM! Chat encerrado.");
  event.preventDefault();
});

// Alerta para a criacao do tópico
const form = document.querySelector(".forum__topico");
form.addEventListener("submit", (e) => {
  const titulo = document.querySelector("#titulo").value;
  const texto = document.querySelector("textarea[name='texto']").value;

  // Verifica se o título está vazio
  if (titulo === "") {
    alert("O título do tópico é obrigatório.");
    e.preventDefault();
    return;
  }

  // Verifica se o texto está vazio
  if (texto === "") {
    alert("O texto do tópico é obrigatório.");
    e.preventDefault();
    return;
  }

  // Verifica se o título já existe
  const url = `/forum/topicos/verificar-titulo?titulo=${titulo}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        alert(data.mensagem);
        e.preventDefault();
      } else {
        // Verifica se o tópico pode ser criado
        const urlCriar = `/forum/topicos/criar?titulo=${titulo}&texto=${texto}`;
        fetch(urlCriar)
          .then((response) => response.json())
          .then((data) => {
            if (data.erro) {
              alert(data.mensagem);
              e.preventDefault();
            }
          });
      }
    });
});
