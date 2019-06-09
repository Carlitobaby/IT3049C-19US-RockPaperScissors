"use strict";

const startButton = document.getElementById("startButton");

const nameScreen = document.getElementById("nameScreen");
const gameScreen = document.getElementById("gameScreen");

const gameForm = document.getElementById("gameForm");

const userName = document.getElementById("userName");

const gameScore = document.getElementById("gameScore");

const roundResult = document.getElementById("roundResult");

var userWins = 0;
var computerWins = 0;
var draws = 0;
var round = 0;

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
        round++;
        draws++;
        gameScore.innerHTML = userName.value + ": " + userWins + " - Computer: " + computerWins + '<br> Ties: ' + draws;
        roundResult.innerHTML += "Round " + round + ": Tie round! " + userName.value + " chose: " + userChoice + ", Computer chose: " + computerChoice + '<br>';
        alert(`It's a tie!`);
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        round++;
        computerWins++;
        gameScore.innerHTML = userName.value + ": " + userWins + " - Computer: " + computerWins + '<br> Ties: ' + draws;
        roundResult.innerHTML += "Round " + round + ": Computer Wins! " + userName.value + " chose: " + userChoice + ", Computer chose: " + computerChoice + '<br>';
        alert(`Computer wins!`);
      } else {
        round++;
        userWins++;
        gameScore.innerHTML = userName.value + ": " + userWins + " - Computer: " + computerWins + '<br> Ties: ' + draws;
        roundResult.innerHTML += "Round " + round + ": You Win! " + userName.value + " chose: " + userChoice + ", Computer chose: " + computerChoice + '<br>';
        alert(`You win!`);
      }
    } else if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
        round++;
        computerWins++;
        gameScore.innerHTML = userName.value + ": " + userWins + " - Computer: " + computerWins + '<br> Ties: ' + draws;
        roundResult.innerHTML += "Round " + round + ": Computer Wins! " + userName.value + " chose: " + userChoice + ", Computer chose: " + computerChoice + '<br>';
        alert(`Computer wins!`);
      }else {
        round++;
        userWins++;
        gameScore.innerHTML = userName.value + ": " + userWins + " - Computer: " + computerWins + '<br> Ties: ' + draws;
        roundResult.innerHTML += "Round " + round + ": You Win! " + userName.value + " chose: " + userChoice + ", Computer chose: " + computerChoice + '<br>';
        alert(`You win!`);
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        round++;
        computerWins++;
        gameScore.innerHTML = userName.value + ": " + userWins + " - Computer: " + computerWins + '<br> Ties: ' + draws;
        roundResult.innerHTML += "Round " + round + ": Computer Wins! " + userName.value + " chose: " + userChoice + ", Computer chose: " + computerChoice + '<br>';
        alert(`Computer wins!`);
      } else {
        round++;
        userWins++;
        gameScore.innerHTML = userName.value + ": " + userWins + " - Computer: " + computerWins + '<br> Ties: ' + draws;
        roundResult.innerHTML += "Round " + round + ": You Win! " + userName.value + " chose: " + userChoice + ", Computer chose: " + computerChoice + '<br>';
        alert(`You win!`);
      }
    } 
  };


startButton.addEventListener("click", function (startButtonEvent){

    startButtonEvent.preventDefault();

    if (userName.value === "") {
        alert("Please enter a name!");
        return false 
    } else {
        nameScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
    }

});

gameForm.addEventListener("submit", function(gameSubmitEvent){
    gameSubmitEvent.preventDefault();
    console.log(`computer choice:`, getComputerChoice());
    console.log(`user choice:`, userInput());

    const userChoice = userInput();
    const computerChoice = getComputerChoice();

    console.log(`You chose ${userChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);
    console.log(determineWinner(userChoice, computerChoice));
});