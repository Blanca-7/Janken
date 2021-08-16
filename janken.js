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

game();

// game() function asks and converts user-input and invokes playRound()
function game() {
  computerSelection = computerPlay();
  playerSelection = prompt(
    "Type either: Rock, Paper or Scissors" // Prompt for user input
  ).toLowerCase();
  var firstLetter = playerSelection[0].toUpperCase(); // toUpperCase first letter only
  playerSelection = firstLetter + playerSelection.slice(1); // Slicing back rest of string
  console.log(playRound(playerSelection, computerSelection)); //calls playRound() with assigned parameters
}

// scoreCounter
function gameTracker() {
  if (scoreValuePlayer >= 4 || scoreValueCpu >= 4) {
    console.log("Game Finished!");
  } else {
    game();
  }
}

//single round of Janken
function playRound(playerSelection, computerSelection) {
  console.log(`User: ${playerSelection}`);
  console.log(`Cpu:  ${computerSelection}`);

  if (playerSelection == computerSelection) {
    scoreValuePlayer = playerScore;
    scoreValueCpu = cpuScore;
    console.log(`\n It's a tie! Score: ${playerScore} to ${cpuScore}`);
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    scoreValuePlayer += ++playerScore;
    console.log(`You won! ${playerSelection} beats ${computerSelection}
    Score:  ${playerScore} to ${cpuScore}`);
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Scissors")
  ) {
    scoreValueCpu += ++cpuScore;
    console.log(`You lost! ${computerSelection} beats ${playerSelection}
    Score:  ${playerScore} to ${cpuScore}`);
  }
  gameTracker();
}
