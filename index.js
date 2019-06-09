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
    const userPick = document.getElementById("userValue");
    const userResult = userPick.options[userPick.selectedIndex].value;
    return userResult;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } else if (userChoice === 'paper'){
      if (compterChoice === 'scissors') {
        return 'Computer wins!';
      }else {
        return 'You win!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } 
  };


startButton.addEventListener("click", function (startButtonEvent){

    startButtonEvent.preventDefault();

    console.log(`start button event`);
    
    nameScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");
});

gameForm.addEventListener("submit", function(gameSubmitEvent){
    gameSubmitEvent.preventDefault();
    console.log(`computer choice:`, getComputerChoice());
    console.log(`user choice:`, userInput());

    const userChoice = userInput();
    const computerChoice = getComputerChoice();

    console.log(`You chose ${userChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);
    console.log(determineWinner(userChoice,computerChoice));
});