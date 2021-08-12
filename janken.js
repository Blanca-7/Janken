// CPU randomly generates & prints rock, paper, scissors
function computerPlay() {
  var generation = Math.floor(Math.random() * 3);
  if (generation == 0) {
    return "rock";
  } else if (generation == 1) {
    return "scissors";
  } else {
    return "paper";
  }
}

// 1 round of 'static' Janken, user has fixed value of "rock"
var playerSelection;
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt(
    "Type either: Rock, Paper and Scissors"
  ).toLowerCase(); // Prompt for user input and converts it to lower-case
  var firstLetter = playerSelection[0].toUpperCase(); // Upper-case first letter
  var finalString = firstLetter + playerSelection.slice(1); // Slicing back rest of string
  playerSelection = finalString; // Assining new casing of string back to original variable
  console.log(`User: ${playerSelection}`);
  console.log(`Cpu:  ${computerSelection}`);
  if (playerSelection == computerSelection) {
    return "\n It's a tie!";
  } else if (playerSelection && computerSelection == "scissors") {
    return "You won! Rock beats scissors";
  } else {
    return "You lost! Paper beats rock";
  }
}

console.log(playRound(playerSelection, computerSelection));
