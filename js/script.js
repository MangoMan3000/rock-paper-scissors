// Get choice from computer //

function computerPlay() {
    let options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// Determine if player input is better or equal or loses to computer choice //

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a draw!`;
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

// Use game() to run playRound() 5 times //

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i=0; i<5; i++) {
        playRound();
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));