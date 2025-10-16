function getComputerChoice() {
    // randomly return rock, paper, or scissors to simulate the computer's turn
    let choice = Math.random();
    if (choice <= 0.33) {
        return "rock";
    } else if (choice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // returns rock, paper, or scissors depending on what the user inputs
    let choice = prompt("Rock, paper, or scissors?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;