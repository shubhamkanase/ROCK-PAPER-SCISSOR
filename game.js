const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const btn = document.querySelector("button");
const choice = document.getElementById("demo");
const choice1 = document.getElementById("demo1");
const result = document.getElementById("result");
let player;
let computer;

rock.addEventListener("click", (player, computer) => {
  player = "rock";
  choice.innerHTML= player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML=  playRound(player, computer);

} )

paper.addEventListener("click", (player, computer) => {
  player = "paper";
  choice.innerHTML= player;
  computer = compChoice();
  choice1.innerHTML = computer;
   result.innerHTML= playRound(player, computer);

} )

scissor.addEventListener("click", (player, computer) => {
  player = "scissor";
  choice.innerHTML= player;
  computer = compChoice();
  choice1.innerHTML = computer;
  result.innerHTML= playRound(player, computer);

} )

function getRandNO(){
    return Math.floor(Math.random()*3 + 1);
}
function compChoice(computer){
  let num = getRandNO();
 
 switch(num){
    case 1:
    return "rock";
    break;
    
    case 2:
        return "paper";
        break;

        case 3:
            return "scissor";
            break;

        
  }
}

function playRound(player, computer){
  if(player == computer){
  return("Draw")
  }
  else if(player == "rock" && computer == "paper"){
      return("Computer win, paper beat rock")
  }
  else if (player == "paper" && computer == "scissor"){
      return("Computer win, scissor beat paper")
  }
  else if (player == "scissor" && computer == "rock"){
      return("Computer win,rock beat scissor")
  }
  else if (player == "paper"  && computer === "rock"){
      return("Player win, paper beat rock")
  }
  else if (player == "scissor" && computer === "paper"){
      return("Player win, scisssor beat paper")
  }
  else if (player === "rock" && computer === "scissor"){
      return("Player win, rock beat scissor")
  }

}
