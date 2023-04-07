const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const btn = document.querySelector("button");
const choice = document.getElementById("demo");
const choice1 = document.getElementById("demo1");
let player;
let computer;
let result;

rock.addEventListener("click", (player, computer) => {
  player = "rock";
  choice.innerHTML= player;
  computer = compChoice();
  choice1.innerHTML = computer;
  playRound(player, computer);

} )

paper.addEventListener("click", (player, computer) => {
  player = "paper";
  choice.innerHTML= player;
  computer = compChoice();
  choice1.innerHTML = computer;
  playRound(player, computer);

} )

scissor.addEventListener("click", (player, computer) => {
  player = "scissor";
  choice.innerHTML= player;
  computer = compChoice();
  choice1.innerHTML = computer;
  playRound(player, computer);

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
        return "pepar";
        break;

        case 3:
            return "scissor";
            break;

        
  }
}

function playRound(player, computer){
  if(player === computer){
    console.log("tie");
  }
  else if(player =="rock" && computer == "paper"){
    console.log("computer win")
  }
  else if (player == "paper" && computer == "scissor"){
    console.log("computer win")
  }
  else if (player == "scissor" && computer == "rock"){
    console.log("computer win")
  }
  else if (player == "paper"  && computer === "rock"){
    console.log("player win")
  }
  else if (player == "scissor" && computer === "paper"){
    console.log("player win")
  }
  else if (player === "rock" && computer === "scissor"){
    console.log("player win")
  }

}