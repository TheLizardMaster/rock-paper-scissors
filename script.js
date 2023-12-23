// Get UI Elements by ID

const getInput = document.getElementById("inputChoice");

const outputDestination = document.getElementById("para");

const setValue = document.getElementById("submitValue");

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

userChoice = () => {
    return (getInput.value).toUpperCase();
}

// Output JS to UI

printOutput = () => {
    outputDestination.innerHTML = getComputerChoice() + " " + userChoice();
}

removeOutput = () => {
    outputDestination.innerHTML = "";
    getInput.value = "";
}

setValue.addEventListener("click", printOutput);

setValue.addEventListener("mouseleave", removeOutput);
