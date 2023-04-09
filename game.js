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
    // game(playerScore, computerScore);
    return ("Draw")
  }
  else if (player == "rock" && computer == "paper") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    // game(playerScore, computerScore);
    return ("Computer win, paper beat rock")
  }
  else if (player == "paper" && computer == "scissor") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    // game(playerScore, computerScore);
    return ("Computer win, scissor beat paper")
  }
  else if (player == "scissor" && computer == "rock") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    // game(playerScore, computerScore);
    return ("Computer win,rock beat scissor")
  }
  else if (player == "paper" && computer === "rock") {
    playerScore++;
    playerWin.innerHTML = `player score: ${playerScore}`
    // game(playerScore, computerScore);
    return ("Player win, paper beat rock")
  }
  else if (player == "scissor" && computer === "paper") {
    playerScore++;
    playerWin.innerHTML = `player score: ${playerScore}`
    // game(playerScore, computerScore);
    return ("Player win, scisssor beat paper")
  }
  else if (player === "rock" && computer === "scissor") {
    playerScore++;
    playerWin.innerHTML = `player score: ${playerScore}`
    // game(playerScore, computerScore);
    return ("Player win, rock beat scissor")
  }

  if(playerScore == 5 || computerScore == 5){
    winner(playerScore, computerScore)
  }

}


// function game(playerScore, computerScore) {

//   if (playerScore == 5 && computerScore == 5) {
//     console.log(`it's draw`);

//   }
//   else if (playerScore > computerScore) {
//     console.log(`player win this macth`);
//   }
//   else if (playerScore < computerScore) {
//     console.log(`computer win this macth`);
//   }
//   else{
//     console.log("its draw the macth")
//   }

// }






function winner() {
if (playerScore > computerScore) {
    console.log("player win this macth");
  }
  else if (playerScore < computerScore) {
    console.log("computer win this macth");
  }
  else{
    console.log("its draw the macth")
  }
}