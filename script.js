
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener('click', () => {
  playRound("Rock", getComputerChoice());
  rockButton.classList()
});

paperButton.addEventListener('click', () => {
  playRound("Paper", getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
  playRound("Scissors", getComputerChoice());
});

function getComputerChoice()
{
  let randomNumber = Math.floor((Math.random() * 3));
  // 0 - 2 random Number
  if(randomNumber === 0)
  {
    return "Rock";
  }
  else if(randomNumber === 1)
  {
    return "Paper";
  }
  else if(randomNumber === 2)
  {
    return "Scissors";
  }

}

let humanScore = 0;
let computerScore = 0;

function checkVictory()
{
  if(humanScore == 5)
  {
    // something
  }
  else if(computerScore === 5)
  {
    // something
  }
}

function playRound(humanChoice, computerChoice)
{

  let result = document.querySelector(".result");
  
humanChoice = humanChoice.toUpperCase();
computerChoice = computerChoice.toUpperCase();
if(humanChoice === computerChoice)
{

  result.textContent = "Tie!";

  // tie case
}
else if(humanChoice === "ROCK" && computerChoice === "PAPER")
{
  computerScore++;
  result.textContent = "Computer Wins!";

  // case
}
else if(humanChoice === "ROCK" && computerChoice === "SCISSORS")
{
  humanScore++;
  result.textContent = "Human Wins!;"

    // case
}
else if(humanChoice === "PAPER" && computerChoice === "ROCK")
{
  humanScore++;
  result.textContent = "Human Wins!";

    // case
}
else if(humanChoice === "PAPER" && computerChoice === "SCISSORS")
{
  computerScore++;
  result.textContent = "Computer Wins!";
    // case
}
else if(humanChoice === "SCISSORS" && computerChoice === "PAPER")
{
  humanScore++;
  result.textContent = "Human Wins!";
  
    // case
}
else if(humanChoice === "SCISSORS" && computerChoice === "ROCK")
{
  computerScore++;
  result.textContent = "Computer Wins!";
    // case
 }

document.querySelector(".player-score").textContent = "Score: " + humanScore;
document.querySelector(".computer-score").textContent = "Score: " + computerScore;
}

