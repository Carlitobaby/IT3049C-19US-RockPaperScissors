"use strict";

const startButton = document.getElementById("startButton");

const nameScreen = document.getElementById("nameScreen");
const gameScreen = document.getElementById("gameScreen");

startButton.addEventListener("click", function (startButtonEvent){

    startButtonEvent.preventDefault();

    // console.log(`something`);
    
    nameScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");
});
