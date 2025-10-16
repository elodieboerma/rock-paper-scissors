function getComputerChoice() {
    // randomly return rock, paper, or scissors; use Math.random(); NO arrays necessary for this game; test using console.log()/devtools
    let choice = Math.random();
    if (choice <= 0.33) {
        return "rock";
    } else if (choice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice());