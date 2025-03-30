
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

function getHumanChoice()
{
  // case sensitive
  let humanChoice = prompt("Rock, paper, or scissors? ");
  return humanChoice;
}



function playGame()
{
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice)
{
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();
  if(humanChoice === computerChoice)
  {
    console.log("Tie! Both played " + humanChoice);
    // tie case
  }
  else if(humanChoice === "ROCK" && computerChoice === "PAPER")
  {
    computerScore++;
    console.log("Computer wins! Computer played: " + computerChoice + " human played: " + humanChoice);
    // case
  }
  else if(humanChoice === "ROCK" && computerChoice === "SCISSORS")
  {
    humanScore++;
    console.log("Human wins! Computer played: " + computerChoice + " human played: " + humanChoice);
      // case
  }
  else if(humanChoice === "PAPER" && computerChoice === "ROCK")
  {
    humanScore++;
    console.log("Human wins! Computer played: " + computerChoice + " human played: " + humanChoice);
      // case
  }
  else if(humanChoice === "PAPER" && computerChoice === "SCISSORS")
  {
    computerScore++;
    console.log("Computer wins! Computer played: " + computerChoice + " human played: " + humanChoice);
      // case
  }
  else if(humanChoice === "SCISSORS" && computerChoice === "PAPER")
  {
    humanScore++;
    console.log("Human wins! Computer played: " + computerChoice + " human played: " + humanChoice);
      // case
  }
  else if(humanChoice === "SCISSORS" && computerChoice === "ROCK")
  {
    computerScore++;
    console.log("Computer wins! Computer played: " + computerChoice + " human played: " + humanChoice);
      // case
   }
}

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  if(computerScore > humanScore)
  {
    console.log("Computer wins with " + computerScore + " vs human score: " + humanScore);
  }
  else if(humanScore > computerScore)
  {
    console.log("Human wins with " + humanScore + " vs computer score: " + computerScore);
  }
  else
  {
    console.log("TIE! Both had a score of " + humanScore);
  }
}

playGame();