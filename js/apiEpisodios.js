function armazenarNome(data, a){
    let numeroEpisodio = a;
    let titulo = document.getElementById(`titulo-${numeroEpisodio}`);
    let nomeEpisodio = data;
    titulo.innerHTML = `Episodio ${numeroEpisodio} - ${nomeEpisodio}`;
}

for(let a = 1; a < 15; a++){
    fetch("https://rickandmortyapi.com/api/episode")
    .then(response => response.json())
    .then(data => armazenarNome(data[`results`][a - 1]['name'], a));
}