"use strict";

const startButton = document.getElementById("startButton");

const nameScreen = document.getElementById("nameScreen");
const gameScreen = document.getElementById("gameScreen");

const gameForm = document.getElementById("gameForm");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function userInput() {
   const userChoice = document.getElementById("userValue");
   var result = userChoice.options[userChoice.selectedIndex].value;
   return result;
}

startButton.addEventListener("click", function (startButtonEvent){

    startButtonEvent.preventDefault();

    // console.log(`start button event`);
    
    nameScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");
});

gameForm.addEventListener("submit", function(gameSubmitEvent){
    gameSubmitEvent.preventDefault();
    // console.log(`computer choice:`, getComputerChoice());
    // console.log(`user choice:`, userInput());
});