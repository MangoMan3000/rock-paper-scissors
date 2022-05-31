// Get choice from computer by getting an option from an array //

function computerPlay() {
    let options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// Determine if player input is better or equal or loses to computer choice //

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        displayResults.textContent = `It's a draw`
        return `It's a draw!`;
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        displayResults.textContent = `${computerSelection} beats ${playerSelection}. You LOSE!!!`;
        computerScore += 1;
        computerResult.textContent = `${computerScore}`;
    } else {
        displayResults.textContent = `${playerSelection} beats ${computerSelection}. You WIN!!!`;
        playerScore += 1;
        playerResult.textContent = `${playerScore}`;
    }
}

// Use game() to run playRound() 5 times //
// If playRound results in a win += to count //
// After 5 games, determineWinner to show score //
function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i=0; i<5; i++) {
        switch (playRound(prompt(`Rock, Paper or Scissors?`), computerPlay())) {
            case `It's a draw!`:
                break;
            case `You lose!`:
                computerScore += 1;
                break;
            default:
                playerScore += 1;
        }
    }
    console.log(computerScore);
    console.log(playerScore);
    console.log(determineWinner(playerScore, computerScore));
}

// Function to determine a winner //
function determineWinner(playerScore, computerScore) {
    return (playerScore > computerScore) ? `YOU WIN!!!`
        : (playerScore < computerScore) ? `YOU LOSE!!!`
        : `DRAW`; 
}

const btns = document.querySelectorAll('button');
let computerScore = 0;
let playerScore = 0;

const results = document.querySelector(".results");
const displayResults = document.createElement("div");
results.appendChild(displayResults);


const playerResult = document.getElementById("playerScoreWindow");
playerResult.style.fontSize = "100px";
playerResult.textContent = `${playerScore}`;

const computerResult = document.getElementById("computerScoreWindow");
computerResult.style.fontSize = "100px";
computerResult.textContent = `${computerScore}`;

btns.forEach((button) => {
    button.addEventListener('click', () =>  {
        playRound(button.id, computerPlay());
    });
});