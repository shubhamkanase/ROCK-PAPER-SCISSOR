
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
const restart = document.getElementById("restart");
const cheering = document.getElementById("cheering");
const sadsound = document.getElementById("sadsound");
const multimedia = document.getElementById("multimedia");
let player;
let computer;


rock.addEventListener("click", (player, computer) => {
  multimedia.play();
  player = "Rock";
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
  multimedia.play();
  player = "Paper";
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
  multimedia.play();
  player = "Scissor";
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
      return "Rock";


    case 2:
      return "Paper";


    case 3:
      return "Scissor";

  }
}

function playRound(player, computer) {
  if (player == computer) {
    return "Draw"
  }
  else if (player == "Rock" && computer == "Paper") {
    computerScore++;
    
    return ("Computer win, Paper beat Rock")
  }
  else if (player == "Paper" && computer == "Scissor") {
    computerScore++;
    
    return ("Computer win, Scissor beat Paper")
  }
  else if (player == "Scissor" && computer == "Rock") {
    computerScore++;
    return ("Computer win,Rock beat Scissor")
  }
  else if (player == "Paper" && computer === "Rock") {
    playerScore++;
    return ("Player win, Paper beat Rock")
  }
  else if (player == "Scissor" && computer === "Paper") {
    playerScore++;
    return ("Player win, scisssor beat Paper")
  }
  else if (player === "Rock" && computer === "Scissor") {
    playerScore++;  
    return ("Player win, Rock beat Scissor")
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
    cheering.play();
    document.getElementById("flresult").innerHTML = "Let's Celebrate. You WIN THE MATCH"
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    document.getElementById("flresult").style.color = "green";

    playerScore = 0;
    computerScore = 0;
    

} else if(computerScore == 5){
  sadsound.play();
    document.getElementById("flresult").innerHTML = "OOPS, COMPUTER WIN THE MATCH"
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    document.getElementById("flresult").style.color = "red";
  
    playerScore = 0;
    computerScore = 0;
  

}else if(computerScore === 5 || playerScore === 5){
    document.getElementById("flresult").innerHTML = "DRAW  THE MATCH"
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    document.getElementById("flresult").style.color = "blue";
    
    
}
else if(playerScore === 0 || computerScore === 0)(
    document.getElementById("flresult").innerHTML = "START THE MATCH"
)

}

restart.addEventListener("click", function gameRestart(){
  location.reload();
})