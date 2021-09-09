# Rock, Paper, Scissors (Janken)

Hi ! 

This is my first project: Rock, Paper, Scissors aka Janken (Jap.)

I'm super excited for it, i'll make sure to update this file along the way!

---

Some of the few things and lessons I learned while working on this project were:

- **Planned** my program prior to coding and writing the algorithm in Pseudo-code
- Created a **random number generator**
  - Used **Math.floor()** to round down a number
  - Used **Math.random()** and an argument to define a number range
- Used 
  - **logical operators**
  - **conditional statements**
  - **function delcarations**
  - **strict equal** in order to check for both, type and value equality
  - template literals & string interpolation
- Passed in **arguments** to a function


- Learned between different Error & Warning types
- Learned about debugging
- Used the following problem solving process:

  1. Understand <br>
  2. Plan <br>
  3. Divide <br>

- Learned about reassining/mutating arguments and to (almost) never do that
  - I used to have the following code: 
  ```js
  function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Type either: Rock, Paper and Scissors"...

  // Initially, when game() first runs, it passed in undefined for each argument, which was then reassigned. We don't want to do this at all. Pass in the correct values, don't assign them during the execution of the function.
  ``` 
---
- What's sets my game from others (in the console version apart) is that I wanted to stop the game asking for additional prompts once the player or cpu reached 3 points. This was at the time for me very difficult to achieve and learned **a lot** during the implementation of it!

- Perseverance
- Maintaining a *cool & clear head* when stuck
- Understanding what my code actually does, line by line
- Proper Googling for questions/problems
- Perseverance, oh and Perseverance 
