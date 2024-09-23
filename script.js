function getComputerChoice(max){
    let choice = Math.floor(Math.random()*max);
    if (choice === 0)
        return "rock"
    else if (choice === 1)
        return "paper"
    else
        return "scissors"
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice.toLowerCase();
}

let a = getComputerChoice(3);
let b = getHumanChoice();
