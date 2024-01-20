import { activateFavBox } from "./utility.js";

window.addEventListener("DOMContentLoaded", (event) => {
    const animeBtn = document.getElementById('anime');
    const gamesBtn = document.getElementById('games');
    const songsBtn = document.getElementById('songs');

    function animeBtnActive() {
        activateFavBox('anime');
    }

    function gamesBtnActive() {
        activateFavBox('games');
    }

    function songsBtnActive() {
        activateFavBox('songs');
    }

    if (animeBtn) {
      animeBtn.addEventListener('click', animeBtnActive, false);
    }

    if (gamesBtn) {
        gamesBtn.addEventListener('click', gamesBtnActive, false);
    }

    if (songsBtn) {
        songsBtn.addEventListener('click', songsBtnActive, false);
    }
});