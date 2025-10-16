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
    // IF human choice is rock
        // IF computer choice is rock
            // tie
        // ELSE computer choice is paper
            // human wins - rock beats scissors
        // ELSE computer choice is scissors
            // human wins - rock beats scissors
    // IF human choice is paper
        // IF computer choice is rock
            // computer wins - rock beats paper
        // ELSE computer choice is paper
            // tie
        // ELSE computer choice is scissors
            // computer wins - scissors beat paper
    // IF human choice is scissors
        // IF computer choice is rock
            // computer wins - rock beats scissors
        // ELSE computer choice is paper
            // human wins - scissors beat paper
        // ELSE computer choice is scissors
            // tie
    // based on winner - store winner to a variable
        //console.log message based on winner, ie:
            // console.log("You lose! Paper beats rock!");
        // ++ humanScore or computerScore based on round winner
}