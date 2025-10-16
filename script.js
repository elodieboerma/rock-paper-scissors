// randomly return rock, paper, or scissors to simulate the computer's turnfunction getComputerChoice()
function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return "rock";
    } else if (choice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// return rock, paper, or scissors depending on what the user inputs
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    // make user input case-insensitive
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    // IF human and computer tie
    if (humanChoice === computerChoice) {
        console.log("Tie! No points for anyone!");
    // IF human choice is rock
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You win! Rock beats paper!");
        } else {
            console.log("You win! Rock beats scissors!");
        }
    // IF human choice is paper
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats paper!");
        } else {
            console.log("You lose! Scissors beat paper!");
        }
    // IF human choice is scissors
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors!");
        } else (computerChoice === "paper") {
            console.log("You win! Scissors beat paper!");
        }
    }
    // based on winner - store winner to a variable
        //console.log message based on winner, ie:
            // console.log("You lose! Paper beats rock!");
        // ++ humanScore or computerScore based on round winner
}