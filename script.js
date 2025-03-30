console.log(getHumanChoice());





function getComputerChoice()
{
  let randomNumber = Math.floor((Math.random() * 3));
  // 0 - 2 random Number
  if(r === 0)
  {
    return "Rock";
  }
  else if(r === 1)
  {
    return "Paper";
  }
  else if(r === 2)
  {
    return "Scissors";
  }

}

function getHumanChoice()
{
  let humanChoice = prompt("Rock, paper, or scissors? ");
  return humanChoice;
}