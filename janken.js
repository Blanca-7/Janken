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

//ignore
// if (playerSelection !== Rock || Raper || Scissors) {
//     return;
//   }
//ignore

// declaring variables for function below
let playerSelection;
let computerSelection;
let playerScore = 0;
let cpuScore = 0;

//5 rounds of Janken
function game() {
  console.log(playRound(playerSelection, computerSelection));
  //single round of Janken
  function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt(
      "Type either: Rock, Paper and Scissors" // Prompt for user input
    ).toLowerCase(); // and convert it to lowerCase

    var firstLetter = playerSelection[0].toUpperCase(); // toUpperCase first letter only
    playerSelection = firstLetter + playerSelection.slice(1); // Slicing back rest of string
    console.log(`User: ${playerSelection}`);
    console.log(`Cpu:  ${computerSelection}`);

    if (playerScore >= 2) {
      console.log(`Game finished! You won!`);
      return;
    }
    if (cpuScore >= 2) {
      console.log(`Game finished! You lost!`);
      return;
    }

    if (playerSelection == computerSelection) {
      return `\n It's a tie!
    it stands: ${playerScore} to ${cpuScore}`;
    } else if (
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Scissors" && computerSelection == "Paper") ||
      (playerSelection == "Paper" && computerSelection == "Rock")
    ) {
      return `You won! ${playerSelection} beats ${computerSelection}
    Score:  ${++playerScore} to ${cpuScore}`;
    } else if (
      (playerSelection == "Rock" && computerSelection == "Paper") ||
      (playerSelection == "Scissors" && computerSelection == "Rock") ||
      (playerSelection == "Paper" && computerSelection == "Scissors")
    )
      return `You lost! ${computerSelection} beats ${playerSelection}
    Score:  ${playerScore} to ${++cpuScore}`;
  }
}

game();
game();
game();
game();
game();
