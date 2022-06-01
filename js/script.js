// Get choice from computer by getting an option from an array //

function computerPlay() {
    let options = ['Rock','Paper','Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// Determine if player input is better or equal or loses to computer choice //

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        displayResults.textContent = `It's a draw`
        return `It's a draw!`;
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        displayResults.textContent = `${computerSelection} beats ${playerSelection}. You LOSE!!!`;
        computerScore += 1;
        computerResult.textContent = `${computerScore}`;
    } else {
        displayResults.textContent = `${playerSelection} beats ${computerSelection}. You WIN!!!`;
        playerScore += 1;
        playerResult.textContent = `${playerScore}`;
    }
}

// First to reach 5 wins //

function checkWinner (playerScore, computerScore){
    if (computerScore == 5 || playerScore == 5) {
        if (computerScore > playerScore) {
            displayResults.textContent = `You lost to the computer! \n To play again, make another selection!`;
        } else {
            displayResults.textContent = `You beat the computer! \n To play again, make another selection!`;
        }
    }
}

const btns = document.querySelectorAll('button');
let computerScore = 0;
let playerScore = 0;

const body = document.querySelector("body");
const displayResults = document.createElement("div");
body.appendChild(displayResults);

const playerResult = document.getElementById("playerScoreWindow");
playerResult.style.fontSize = "100px";
playerResult.textContent = `${playerScore}`;

const computerResult = document.getElementById("computerScoreWindow");
computerResult.style.fontSize = "100px";
computerResult.textContent = `${computerScore}`;

// On button press, check if someone has won in the previous game, play a round, if someone won this round, let them know and tell them to play another by selecting again//

btns.forEach((button) => {
    button.addEventListener('click', () =>  {
        if (computerScore == 5 || playerScore == 5) {
            computerScore = 0;
            computerResult.textContent = `${computerScore}`;
            playerScore = 0;
            playerResult.textContent = `${playerScore}`;
        };
        playRound(button.id, computerPlay());
        checkWinner(playerScore, computerScore);
    });
});

