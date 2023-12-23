// Get UI Elements by ID

const getInput = document.getElementById("inputChoice");

const outputDestination = document.getElementById("para");

const setValue = document.getElementById("submitValue");

const setCompOutput = document.getElementById("compChoice");

const setPlayerChoice = document.getElementById("playerChoice");

// Generate Random Rock Paper Scissors choice for computer

getComputerChoice = () => {

    let choice;

    const randomVal = Math.floor(Math.random() * 3);

    if (randomVal === 0) {
        choice = "ROCK";
    } else if (randomVal === 1) {
        choice = "PAPER";
    } else if (randomVal === 2) {
        choice = "SCISSORS";
    }

    return choice;

}

// Save random choice output to constant variable

let computerSelection = getComputerChoice(); 

// Capture User Input

playerSelection = () => {
    return (getInput.value).toUpperCase();
}

// Single Round Game

playRound = (computer, player) => {

    if ((player()==="PAPER") && (computer==="ROCK")){
        return "You Win! Paper beats Rock";
    } else if ((player()==="ROCK") && (computer==="SCISSORS")){
        return "You Win! Rock beats Scissors";
    } else if ((player()==="SCISSORS") && (computer==="PAPER")){
        return "You Win! Scissors beats Paper";
    } else if ((player()===computer)){
        return "It's a tie! Play again";
    } else return "You lose! " + computer + " beats " + player();

}

// Output JS to UI

printOutput = () => {
    setCompOutput.innerHTML = "Computer choice: " + computerSelection;
    setPlayerChoice.innerHTML = "Player choice: " + playerSelection();
    outputDestination.innerHTML = playRound(computerSelection, playerSelection);
}

removeOutput = () => {
    outputDestination.innerHTML = "";
    setCompOutput.innerHTML = "";
    setPlayerChoice.innerHTML = "";
    getInput.value = "";
    computerSelection = getComputerChoice();
}

setValue.addEventListener("click", printOutput);

setValue.addEventListener("mouseleave", removeOutput);
