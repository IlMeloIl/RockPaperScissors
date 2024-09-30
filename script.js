let humanScore = 0;
let computerScore = 0;

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
    while(true) {
        let humanChoice = prompt("Rock, Paper or Scissors?");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
            return humanChoice;
        }
    }
}

function playGame(){

    function playRound(computerChoice, humanChoice){
    switch(humanChoice){
        case "rock":
            if (computerChoice === "paper"){
                computerScore++;
                console.log("You lose! Paper beats Rock");                        
            } else if (computerChoice === "scissors") {
                humanScore++;
                console.log("You win! Rock beats Scissors");
            }else
                console.log("It's a draw! You both chose Rock");
            break;
        case "paper":
            if (computerChoice === "scissors"){
                computerScore++;
                console.log("You lose! Scissors beats Paper");
            } else if (computerChoice === "rock"){
                humanScore++;
                console.log("You win! Paper beats Rock");
            } else
                console.log("It's a draw! You both chose paper");
            break;
        case "scissors":
            if (computerChoice === "rock"){
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            } else if (computerChoice === "paper"){
                humanScore++;
                console.log("You win! Scissors beats Paper");
            } else
                console.log("It's a draw! You both chose Scissors");
                break;
    }
}

    const a = getComputerChoice(3);
    const b = getHumanChoice();

    playRound(a, b);

    console.log(`Computer choice: ${a}`);
    console.log(`Your choice: ${b}`);
    console.log(`Computer's score: ${computerScore}`);
    console.log(`Your score: ${humanScore}`);
}

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function(e){
        const choice = e.target.textContent;
        console.log(choice);
    });
});


//playGame();