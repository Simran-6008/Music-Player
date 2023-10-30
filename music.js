let click = document.querySelector("#clickAfter");
let clickPre = document.querySelector("#clickBefore");
let music = document.querySelector(".music");
let image = document.querySelector(".image");

let i = 0;
const imgContainer = [
    "http:images/barfi1.jpeg",
    "http:images/nagma.jpeg",
    "http:images/humdard.jpeg"];
//console.log(imgContainer);

const musicContainer = [
    "songs/Aashiyan - Barfi 128 Kbps.mp3",
    "songs/Ek Pyar Ka Naghma Hai - Shor 128 Kbps.mp3",
    "songs/Humdard.mp3",
];
//console.log(musicContainer)
click.addEventListener("click", () => {
    i++;
    if (i > 2) i = 0;
    music.setAttribute("src", musicContainer[i]);
    image.setAttribute("src", imgContainer[i]);
});
clickPre.addEventListener("click", () => {
    i--;
    if (i < 0) i = 2;
    music.setAttribute("src", musicContainer[i]);
    image.setAttribute("src", imgContainer[i]);
});
