// Get UI Elements by ID

const getInput = document.getElementById("inputChoice");

const outputDestination = document.getElementById("para");

const setValue = document.getElementById("submitValue");

// Generate Random Rock Paper Scissors choice for computer

getComputerChoice = () => {

    const randomVal = Math.floor(Math.random() * 3);

    if (randomVal === 0) {
        return "Rock";
    } else if (randomVal === 1) {
        return "Paper";
    } else if (randomVal === 2) {
        return "Scissors";
    }

}

// Output JS to UI

printOutput = () => {
    outputDestination.innerHTML = getComputerChoice();
}

removeOutput = () => {
    outputDestination.innerHTML = "";
    getInput.setValue = "";
}

setValue.addEventListener("click", printOutput);

setValue.addEventListener("mouseleave", removeOutput);
