const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const btn = document.querySelector("button");
const choice = document.getElementById("demo");
const choice1 = document.getElementById("demo1");
const result = document.getElementById("result");
const playerWin = document.getElementById("playerWin");
const computerWin = document.getElementById("computerWin");
let player;
let computer;
let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", (player, computer) => {
  player = "rock";
  choice.innerHTML = player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML = playRound(player, computer);


})

paper.addEventListener("click", (player, computer) => {
  player = "paper";
  choice.innerHTML = player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML = playRound(player, computer);
  
})

scissor.addEventListener("click", (player, computer) => {
  player = "scissor";
  choice.innerHTML = player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML = playRound(player, computer);

})

function getRandNO() {
  return Math.floor(Math.random() * 3 + 1);
}
function compChoice() {
  let num = getRandNO();

  switch (num) {
    case 1:
      return "rock";


    case 2:
      return "paper";


    case 3:
      return "scissor";



  }
}

function playRound(player, computer) {
  if (player == computer) {
    playerScore++;
    computerScore++;
    playerWin.innerHTML = `palyer score: ${playerScore}`
    computerWin.innerHTML = `computer score: ${computerScore}`
    game(playerScore, computerScore);
    return ("Draw")
  }
  else if (player == "rock" && computer == "paper") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    game(playerScore, computerScore);
    return ("Computer win, paper beat rock")
  }
  else if (player == "paper" && computer == "scissor") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    game(playerScore, computerScore);
    return ("Computer win, scissor beat paper")
  }
  else if (player == "scissor" && computer == "rock") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    game(playerScore, computerScore);
    return ("Computer win,rock beat scissor")
  }
  else if (player == "paper" && computer === "rock") {
    playerScore++;
    playerWin.innerHTML = `player score: ${playerScore}`
    game(playerScore, computerScore);
    return ("Player win, paper beat rock")
  }
  else if (player == "scissor" && computer === "paper") {
    playerScore++;
    playerWin.innerHTML = `player score: ${playerScore}`
    game(playerScore, computerScore);
    return ("Player win, scisssor beat paper")
  }
  else if (player === "rock" && computer === "scissor") {
    playerScore++;
    playerWin.innerHTML = `player score: ${playerScore}`
    game(playerScore, computerScore);
    return ("Player win, rock beat scissor")
  }

}


function game( computerScore, playerScore) {

  for (playerScore = 0; playerScore >= 5; playerScore++ ){

    for (computerScore = 0; computerScore >= 5; computerScore++){

  if (playerScore === 5 || computerScore === 5){
    return "match is Draw"
  }
  else if (playerScore < computerScore){
    return "computer win the match, try again"
  }
  else if (playerScore > computerScore){
    return "oohh you win the match"
  }

  }
  
}
}







// function game() {
//   playRound(player, computer);


//   for (player = 0; player >= 5; player++) {
//     console.log("player win this round");
//   }
// }