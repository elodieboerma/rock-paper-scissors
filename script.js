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

// run playRound 5 times, keep track of scores, and declare a winner
function playGame() {
    function playRound(humanChoice,computerChoice) {
        let winner;

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

        // display winner and add one point to the winner's score
        function announceWinner(whoWon) {
            if (whoWon === "human") {
                console.log("You win!");
                humanScore += 1;
            } else if (whoWon === "computer") {
                console.log("Computer wins!");
                computerScore += 1;
            }
            // display score totals
            console.log(`Your score - computer score: ${humanScore} - ${computerScore}`);
        }

        // call announceWinner
        announceWinner(winner);
        
        // determine which of the scores is greater
        // return overall winner & their score (only use these values in 5th round of for-loop)
        if (humanScore === computerScore) {
            return "tie";
        } else if (humanScore > computerScore) {
            return `human ${humanScore}`;
        } else {
            return `computer ${computerScore}`;
        }
    }

    let finalScores;
    
    // loop to play 5 rounds
    for (let i = 1; i <= 5; i++) {
        // print round number, make sure it's easily readable
        console.log(`ROUND ${i}`);

        // get human choice and store to a variable
        let humanSelection = getHumanChoice();
        console.log("Your choice: " + humanSelection);

        // get computer choice
        let computerSelection = getComputerChoice();
        console.log("Computer choice: " + computerSelection);

        // call playRound with human's and computer's choices
        // IF it's the fifth (final) round, store the value returned by playRound to a variable
        if (i === 5) {
            finalScores = playRound(humanSelection,computerSelection);
        } else {
            playRound(humanSelection,computerSelection);
        }
    }

    // declare final winner
    function declareWinner(){
        // log message with overall winner based on return value from playRound()
        if (finalScores === "tie") {
            console.log("It's a tie! I think I've met my match!");
        } else {
            // separate score from winner name (in return value from playRound())
            const num = [];
            num = finalScores.split(" ");
            if (num[0] === "human") {
                console.log(`You win! Score: ${num[1]}`);
            } else {
                console.log(`You lose! Bet you'll never beat me!`);
            }
        }
    }

    declareWinner();
}

// main
playGame();