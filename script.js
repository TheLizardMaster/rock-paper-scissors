// Get UI elements by ID

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const outputDestination = document.getElementById("para");
const setScore = document.getElementById("score");

// Win counters for each game

let compWins = 0;

let playerWins = 0;

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

// playerSelection = () => {
//     return "ROCK";
// }

let playerSelection = "";


// Main game function

playRound = (computer, player) => {

    if ((player==="PAPER") && (computer==="ROCK")){
        playerWins ++;
        return "You Win! Paper beats Rock";
    } else if ((player==="ROCK") && (computer==="SCISSORS")){
        playerWins ++;
        return "You Win! Rock beats Scissors";
    } else if ((player==="SCISSORS") && (computer==="PAPER")){
        playerWins ++;
        return "You Win! Scissors beats Paper";
    } else if ((player===computer)){
        return "It's a tie! Play again";
    } else {
        compWins ++;
        return "You lose! " + computer + " beats " + player;
    }

}

// Where and how to output JS to UI

printOutput = () => {
    outputDestination.innerText = playRound(computerSelection, playerSelection);
    setScore.innerText = `${playerWins} vs ${compWins}`;
}

removeOutput = () => {
    outputDestination.innerText = "";
    computerSelection = getComputerChoice();
}

// Trigger output functions

rock.addEventListener("click", () => playerSelection = "ROCK");
paper.addEventListener("click", () => playerSelection = "PAPER");
scissors.addEventListener("click", () => playerSelection = "SCISSORS");

rock.addEventListener("click", printOutput);
rock.addEventListener("mouseleave", removeOutput);
paper.addEventListener("click", printOutput);
paper.addEventListener("mouseleave", removeOutput);
scissors.addEventListener("click", printOutput);
scissors.addEventListener("mouseleave", removeOutput);