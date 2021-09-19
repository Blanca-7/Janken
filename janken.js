// CPU randomly generates & prints rock, paper, scissors
function computerPlay() {
  var generation = Math.floor(Math.random() * 3);
  if (generation == 0) {
    return "Rock";
  } else if (generation == 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

// declaring variables for function below
var playerSelection;
var computerSelection;
var playerScore = 0;
var cpuScore = 0;
var scoreValuePlayer = 0;
var scoreValueCpu = 0;

//game();

// game() function asks and converts user-input and invokes playRound()
// function game() {
//   computerSelection = computerPlay();
//   playerSelection = prompt(
//     "Type either: Rock, Paper or Scissors" // Prompt for user input
//   ).toLowerCase();
//   var firstLetter = playerSelection[0].toUpperCase(); // toUpperCase first letter only
//   playerSelection = firstLetter + playerSelection.slice(1); // Slicing back rest of string
//   console.log(playRound(playerSelection, computerSelection)); //calls playRound() with assigned parameters
// }

// // scoreCounter  THE LOGIC THAT PLAYS UNTIL EITHER PLAYR OR CPU REACHES 3 POINTS
function gameTracker() {
  if (scoreValuePlayer >= 4) {
    gameWon.textContent = "Game Finished! You won the game !";
  } else if (scoreValueCpu >= 4) {
    gameLost.textContent = "Game Finished! You lost the game !";
  }
}

//single round of Janken
function playRound(playerSelection, computerSelection) {
  console.log(`User: ${playerSelection}`);
  console.log(`Cpu:  ${computerSelection}`);

  if (playerSelection == computerSelection) {
    scoreValuePlayer = playerScore;
    scoreValueCpu = cpuScore;
    result.textContent = `It's a tie! ${computerSelection} to ${playerSelection}`;
    scoreCount.textContent = `Score: ${playerScore} to ${cpuScore}`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    scoreValuePlayer += ++playerScore;
    result.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
    scoreCount.textContent = `Score:  ${playerScore} to ${cpuScore}`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Scissors")
  ) {
    scoreValueCpu += ++cpuScore;
    result.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
    scoreCount.textContent = `Score:  ${playerScore} to ${cpuScore}`;
  }
  gameTracker();
}

const rockBtn = document.querySelector("#rock");

rockBtn.addEventListener("click", (rock) => {
  playRound("Rock", computerPlay());
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", (paper) => {
  playRound("Paper", computerPlay());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", (scissors) => {
  playRound("Scissors", computerPlay());
});

const container = document.createElement("div");
document.body.appendChild(container);

const result = document.createElement("p");
container.appendChild(result);

const scoreCount = document.createElement("p");
container.appendChild(scoreCount);

const gameWon = document.createElement("h4");
gameWon.style.color = "green";
container.appendChild(gameWon);

const gameLost = document.createElement("h4");
gameLost.style.color = "red";
container.appendChild(gameLost);

// const lineBreak = document.createElement("p");
// document.body.appendChild(lineBreak);
