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
    let winner;
    
    // display winner and add one point to the winner's score
    function announceWinner(whoWon) {
        if (whoWon === "human") {
            // console.log("You lose! Paper beats rock!");
            console.log("You win!")
            humanScore += 1;
        } else {
            console.log("Computer wins!")
            computerScore += 1;
        }
        // display score totals
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer's score: ${computerScore}`);
    }

    // IF human and computer tie
    if (humanChoice === computerChoice) {
        console.log("Tie! No points for anyone!");
    // IF human choice is rock
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            winner = "human";
            /*console.log("You win! Rock beats paper!");*/
        } else {
            winner = "human";
        }
    // IF human choice is paper
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            winner = "computer";
        } else {
            winner = "computer";
        }
    // IF human choice is scissors
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            winner = "computer";
        } else { 
            winner = "human";
        }
    }
}

// get human choice and store to a variable
let humanSelection = getHumanChoice();
console.log(humanSelection);

// get computer choice
let computerSelection = getComputerChoice();
console.log(computerSelection);

// call playRound with human's and computer's choices
playRound(humanSelection,computerSelection);