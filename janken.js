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
