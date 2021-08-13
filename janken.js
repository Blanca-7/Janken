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

// // 1 round of 'static' Janken, user has fixed value of "rock"
var playerSelection = prompt(
  "Type either: Rock, Paper and Scissors"
).toLowerCase(); // Prompt for user input and convert it to lowerCase
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  var firstLetter = playerSelection[0].toUpperCase(); // toUpperCase first letter only
  playerSelection = firstLetter + playerSelection.slice(1); // Slicing back rest of string
  console.log(`User: ${playerSelection}`);
  console.log(`Cpu:  ${computerSelection}`);
  if (playerSelection == computerSelection) {
    return "\n It's a tie!";
  }
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
  if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
  if (playerSelection == "Paper" && computerSelection == "Rock") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

console.log(playRound(playerSelection, computerSelection));
