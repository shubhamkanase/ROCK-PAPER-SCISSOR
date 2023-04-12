
let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const btn = document.querySelector("button");
const choice = document.getElementById("demo");
const choice1 = document.getElementById("demo1");
const result = document.getElementById("result");
const playerWin = document.getElementById("playerWin");
const computerWin = document.getElementById("computerWin");
const flresult = document.getElementById("flresult");
let player;
let computer;


rock.addEventListener("click", (player, computer) => {
  player = "rock";
  choice.innerHTML = player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML = playRound(player, computer);
  updateScore();
  if(gameOver()){
   game();
  };

})

paper.addEventListener("click", (player, computer) => {
  player = "paper";
  choice.innerHTML = player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML = playRound(player, computer);
  updateScore();
  if(gameOver()){
   game();
  };
 
})

scissor.addEventListener("click", (player, computer) => {
  player = "scissor";
  choice.innerHTML = player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML = playRound(player, computer); 
  updateScore();
  if(gameOver()){
   game();
  };
  
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
    return "Draw"
  }
  else if (player == "rock" && computer == "paper") {
    computerScore++;
    
    return ("Computer win, paper beat rock")
  }
  else if (player == "paper" && computer == "scissor") {
    computerScore++;
    
    return ("Computer win, scissor beat paper")
  }
  else if (player == "scissor" && computer == "rock") {
    computerScore++;
    return ("Computer win,rock beat scissor")
  }
  else if (player == "paper" && computer === "rock") {
    playerScore++;
    return ("Player win, paper beat rock")
  }
  else if (player == "scissor" && computer === "paper") {
    playerScore++;
    return ("Player win, scisssor beat paper")
  }
  else if (player === "rock" && computer === "scissor") {
    playerScore++;  
    return ("Player win, rock beat scissor")
  }
}



function updateScore(){
 playerWin.innerHTML = `Player score: ${playerScore}`
 computerWin.innerHTML = `computer score: ${computerScore}`
}

function gameOver(){
  return (playerScore == 5 || computerScore == 5)

}


function game(){

  if (playerScore == 5) {
    document.getElementById("flresult").innerHTML = "Let's Celebrate. You WIN THE MATCH"

    playerScore = 0;
    computerScore = 0;
    

} else if(computerScore == 5){
    document.getElementById("flresult").innerHTML = "OOPS, COMPUTER WIN THE MATCH"
    
    playerScore = 0;
    computerScore = 0;
  

}else if(computerScore === 5 || playerScore === 5){
    document.getElementById("flresult").innerHTML = "DRAW  THE MATCH"
    
    
}
else if(playerScore === 0 || computerScore === 0)(
    document.getElementById("flresult").innerHTML = "START THE MATCH"
)

}
