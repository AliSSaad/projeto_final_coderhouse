function armazenarNome(data, a){
    let numeroEpisodio = a;
    let titulo = document.getElementById(`titulo-${numeroEpisodio}`);
    console.log(titulo.id)
    let nomeEpisodio = data;
    if (numeroEpisodio >=12){
        titulo.innerHTML = `Episodio ${numeroEpisodio - 11} - ${nomeEpisodio}`;
    }
    else if (numeroEpisodio < 12){
        titulo.innerHTML = `Episodio ${numeroEpisodio} - ${nomeEpisodio}`;
    }
}

for(let a = 1; a < 21; a++){
    fetch("https://rickandmortyapi.com/api/episode")
    .then(response => response.json())
    .then(data => armazenarNome(data[`results`][a - 1]['name'], a));
}