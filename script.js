// Get UI Elements by ID

const getInput = document.getElementById("inputChoice");

const outputDestination = document.getElementById("para");

const setValue = document.getElementById("submitValue");

const setCompOutput = document.getElementById("compChoice");

const setPlayerChoice = document.getElementById("playerChoice");

// Generate Random Rock Paper Scissors choice for computer

getComputerChoice = () => {

    const randomVal = Math.floor(Math.random() * 3);

    if (randomVal === 0) {
        return "ROCK";
    } else if (randomVal === 1) {
        return "PAPER";
    } else if (randomVal === 2) {
        return "SCISSORS";
    }

}

// Capture User Input

playerSelection = () => {
    return (getInput.value).toUpperCase();
}

// Single Round Game

game = () => {

    if ((playerSelection()==="PAPER") && (getComputerChoice()==="ROCK")){
        return "You Win! Paper beats Rock";
    } else if ((playerSelection()==="ROCK") && (getComputerChoice()==="SCISSORS")){
        return "You Win! Rock beats Scissors";
    } else if ((playerSelection()==="SCISSORS") && (getComputerChoice()==="PAPER")){
        return "You Win! Scissors beats Paper";
    } else if (playerSelection()===getComputerChoice()){
        return "It's a tie! Play again";
    } else return "You lose! " + getComputerChoice() + " beats " + playerSelection();

// This code is not working, need to fix

}

// Output JS to UI

printOutput = () => {
    outputDestination.innerHTML = game();
    setCompOutput.innerHTML = "Computer choice: " + getComputerChoice();
    setPlayerChoice.innerHTML = "Player choice: " + playerSelection();
}

// removeOutput = () => {
//     outputDestination.innerHTML = "";
//     setCompOutput.innerHTML = "";
//     setPlayerChoice.innerHTML = "";
//     getInput.value = "";
// }

setValue.addEventListener("click", printOutput);

// setValue.addEventListener("mouseleave", removeOutput);
