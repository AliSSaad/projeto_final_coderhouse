let logoYoutube = document.getElementsByClassName("esquerda__logoYoutube")[0];
let status_button_youtube = true;
let video1 = document.getElementById("youtubeVideo1");
let video2 = document.getElementById("youtubeVideo2");
let video3 = document.getElementById("youtubeVideo3");
let video4 = document.getElementById("youtubeVideo4");
let video5 = document.getElementById("youtubeVideo5"); 

let descricaoVideo1 = document.getElementById("descricaoVideo1");
let descricaoVideo2 = document.getElementById("descricaoVideo2");
let descricaoVideo3 = document.getElementById("descricaoVideo3");
let descricaoVideo4 = document.getElementById("descricaoVideo4");
let descricaoVideo5 = document.getElementById("descricaoVideo5");

/* logoYoutube.addEventListener("mouseover", () => {
    alert("focus");
}
); */

logoYoutube.addEventListener("click", () => {
    if (status_button_youtube)
    {
        video1.src = "https://www.youtube.com/embed/D9TCmGtiePY?si=ScHSJKVkfJo34dH8";
        descricaoVideo1.innerText = "Season 7's Post-Credit Scenes | Rick and Morty | adult swim" 
        video2.src = "https://www.youtube.com/embed/BSF5yoD-vC4?si=ETB6F8HNHTisB2BY";
        descricaoVideo2.innerText = "Samurai & Shogun (Rick and Morty) | adult swim";
        video3.src = "https://www.youtube.com/embed/K8DaX0FFthc?si=B_O2oJ1ibNUvMD7t";
        descricaoVideo3.innerText = "Morty Resets His Life | Rick and Morty | adult swim";
        video4.src = "https://www.youtube.com/embed/bQo6Q7hNG8Q?si=itCI0sdTyl3sWBf";
        descricaoVideo4.innerText = "Diane is Back? | Rick and Morty | adult swim";
        video5.src = "https://www.youtube.com/embed/I1Q4FQNSb5c?si=5TEiJ7N1wfLHb4TH";
        descricaoVideo5.innerText = "S1-6 Ultimate Timeline | Rick and Morty | adult swim";
        status_button_youtube = false;
    }
    else{
        video1.src = "https://www.youtube.com/embed/ornXZGEFcds?si=dtUZari9d9uoXK7z";
        descricaoVideo1.innerText = "Rick and Morty Exquisite Corpse | Rick and Morty | Adult Swim" 
        video2.src = "https://www.youtube.com/embed/GlI3z641Ou4?si=3Y7TcOEQAywAolWz";
        descricaoVideo2.innerText = "Unity Takes Down The President's Hive Mind Rick and Morty";
        video3.src = "https://www.youtube.com/embed/CmlXb7tTUb8?si=fXINxti4-GIlTu5r";
        descricaoVideo3.innerText = "Inside The Episode: Air Force Wong | Rick and Morty";
        video4.src = "https://www.youtube.com/embed/bNAVgXulsW0?si=hJAHK5SlnFdK3dJl";
        descricaoVideo4.innerText = "Mighty Sorry (Full Song) Rick and Morty | adult swim";
        video5.src = "https://www.youtube.com/embed/OA7jF9mD3PI?si=cfFzFdMz8E6ngbxR";
        descricaoVideo5.innerText = "Battle of the Ricks | Rick and Morty | adult swim";
        status_button_youtube = true;
    }
}
);