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
  
  // flresult.innerHTML = game(playerScore, computerScore);


})

paper.addEventListener("click", (player, computer) => {
  player = "paper";
  choice.innerHTML = player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML = playRound(player, computer);
 
  // flresult.innerHTML = game(playerScore, computerScore);
})

scissor.addEventListener("click", (player, computer) => {
  player = "scissor";
  choice.innerHTML = player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML = playRound(player, computer); 
  
  // flresult.innerHTML = game(playerScore, computerScore);

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
    ++playerScore;
    computerScore++;
    playerWin.innerHTML = `Player score: ${playerScore}`
    computerWin.innerHTML = `computer score: ${computerScore}`
    game(playerScore, computerScore)
    return "Draw"
  }
  else if (player == "rock" && computer == "paper") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    game(playerScore, computerScore)
    return ("Computer win, paper beat rock")
  }
  else if (player == "paper" && computer == "scissor") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    game(playerScore, computerScore)
    return ("Computer win, scissor beat paper")
  }
  else if (player == "scissor" && computer == "rock") {
    computerScore++;
    computerWin.innerHTML = `computer score: ${computerScore}`
    game(playerScore, computerScore)
    return ("Computer win,rock beat scissor")
  }
  else if (player == "paper" && computer === "rock") {
    playerScore++;
    playerWin.innerHTML = `Player score: ${playerScore}`
    game(playerScore, computerScore)
    return ("Player win, paper beat rock")
  }
  else if (player == "scissor" && computer === "paper") {
    playerScore++;
    playerWin.innerHTML = `Player score: ${playerScore}`
    game(playerScore, computerScore)
    return ("Player win, scisssor beat paper")
  }
  else if (player === "rock" && computer === "scissor") {
    playerScore++;
    playerWin.innerHTML = `Player score: ${playerScore}`
    game(playerScore, computerScore)
    return ("Player win, rock beat scissor")
  }
}
// console.log(playerScore)
// function game(playerScore, computerScore) {
//     if (playerScore === 5 || computerScore === 5) {
//       if(playerScore === computerScore){
//         flresult.innerHTML = "tie";
//       }else{
//       flresult.innerHTML = (playerScore > computerScore)?  "win" : "loss"
//     }
//   }



function game(playerScore, computerScore){

  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
        text = document.createTextNode(`YOU WIN ${playerScore}:${computerScore}!`);
        flresult.appendChild(text);
        // location.reload;
        rock.removeEventListener("click", getRandNO);  
        paper.removeEventListener("click", getRandNO);  
        scissor.removeEventListener("click", getRandNO);  
      
    }
    else if (computerScore > playerScore) {
        text = document.createTextNode(`COMPUTER WINS ${computerScore}:${playerScore}!`);
        flresult.appendChild(text);
        // location.reload;
        rock.removeEventListener("click", getRandNO);  
        paper.removeEventListener("click", getRandNO);  
        scissor.removeEventListener("click", getRandNO);  
        
    }
    else {
        text = document.createTextNode(`IT WAS A DRAW!`);
        flresult.appendChild(text);
        // location.reload;
        rock.removeEventListener("click", getRandNO);  
        paper.removeEventListener("click", getRandNO);  
        scissor.removeEventListener("click", getRandNO);  
    }   
  }
}








  
  


  // else if (playerScore == 5) {
  //   playerScore++;
  //   flresult.innerHTML = "you win the macth";
  //   playerScore = 0;
  //   computerScore = 0;

  // }

  // else if (computerScore == 5) {
  //   computerScore++;
  //   flresult.innerHTML = "computer win this macth";
  //   playerScore = 0;
  //   computerScore = 0;

  // }

  // else if (playerScore == 5 && computerScore == 5) {
  //   playerScore = 0;
  //   computerScore = 0;
  //   flresult.innerHTML = "Draw this round";

  // }

  // if (playerScore == 0 && computerScore == 0) {
  //   flresult.innerHTML = "start the match";

  // }


  // playerScore = 0;
  // computerScore = 0;

  // if (playerScore <= 5) {
  //   flresult.innerHTML = "you win this match";
  //   playerScore++;
  // }

  // else if (computerScore <= 5) {
  //   flresult.innerHTML = "computer win this match";
  //   computerScore++;
  // }
  // else if (playerScore == 0 || computerScore == 0) {
  //   flresult.innerHTML = "draw this match";
  //   playerScore++;
  //   computerScore++;
  // }






  // do{
  //  playRound() 
  // }while(playerScore == 5 || computerScore == 5)

// }



// function winner(playerScore, computerScore) {
//   if (playerScore > computerScore) {
//     console.log("player win this macth");
//     flresult.innerHTML = "player win this round";
//   }
//   else if (playerScore < computerScore) {
//     flresult.innerHTML = "computer win this round";
//   }
//   else {
//     flresult.innerHTML = "Draw this round";
//   }
// }