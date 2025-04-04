let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let cRockButton = document.querySelector(".crock")
let cPaperButton = document.querySelector(".cpaper");
let cScissorsButton = document.querySelector(".cscissors")

function rockEvent()
{
  let computerChoice = getComputerChoice();
  playRound("Rock", computerChoice);
  resetHighlight()
  rockButton.classList.add("clicked");
  highlightComputerChoice(computerChoice);
}

function paperEvent()
{
  let computerChoice = getComputerChoice();
  playRound("Paper", computerChoice);
  resetHighlight()
  paperButton.classList.add("clicked");
  highlightComputerChoice(computerChoice);
}

function scissorsEvent()
{
  let computerChoice = getComputerChoice();
  playRound("Scissors", computerChoice);
  resetHighlight()
  scissorsButton.classList.add("clicked");
  highlightComputerChoice(computerChoice);
}

addEventListeners();

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
  result.textContent = "Human Wins!"

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

checkGameOver()

}

function resetHighlight()
{
  rockButton.classList.remove("clicked");
  paperButton.classList.remove("clicked");
  scissorsButton.classList.remove("clicked");

  cRockButton.classList.remove("clicked");
  cPaperButton.classList.remove("clicked");
  cScissorsButton.classList.remove("clicked");
}

function highlightComputerChoice(choice)
{
  if(choice === "Rock")
  {
    cRockButton.classList.add("clicked");
  }
  else if(choice === "Paper")
  {
    cPaperButton.classList.add("clicked");
  }
  else if(choice === "Scissors")
  {
    cScissorsButton.classList.add("clicked");
  }
}


document.querySelector(".reset").addEventListener('click', resetGame);

function checkGameOver()
{
  if(humanScore === 5)
  {
    document.querySelector(".winner").textContent = "Human Wins " + humanScore + " to " + computerScore;
    removeEventListeners();
    document.querySelector(".reset").classList.add("visible");
    return;
  }

  if(computerScore === 5)
  {
    
        document.querySelector(".winner").textContent = "Computer Wins " + computerScore + " to " + humanScore;
        removeEventListeners();
        document.querySelector(".reset").classList.add("visible");
      return;
  }

}


function removeEventListeners()
{
  rockButton.removeEventListener('click', rockEvent);
  paperButton.removeEventListener('click', paperEvent);
  scissorsButton.removeEventListener('click', scissorsEvent);
}

function addEventListeners()
{
  rockButton.addEventListener('click', rockEvent);
  paperButton.addEventListener('click', paperEvent);
  scissorsButton.addEventListener('click', scissorsEvent);
}

function resetGame()
{
  document.querySelector('.result').textContent = '';
  document.querySelector(".winner").textContent = "";
  document.querySelector(".reset").classList.remove('visible');

  addEventListeners();
  humanScore = 0;
  computerScore = 0;
  document.querySelector(".player-score").textContent = "Score: " + humanScore;
document.querySelector(".computer-score").textContent = "Score: " + computerScore;
resetHighlight()
}

