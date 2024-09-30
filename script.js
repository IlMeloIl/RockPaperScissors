let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max){
    let choice = Math.floor(Math.random()*max);
    if (choice === 0)
        return "Rock"
    else if (choice === 1)
        return "Paper"
    else
        return "Scissors"
}

function getHumanChoice(e){
    return e.target.textContent;
}

function playGame(){
    
    function playRound(computerChoice, humanChoice){
        switch(humanChoice){
            case "Rock":
                if (computerChoice === "Paper"){
                    computerScore++;
                    console.log("You lose! Paper beats Rock");                        
                } else if (computerChoice === "Scissors") {
                    humanScore++;
                    console.log("You win! Rock beats Scissors");
                }else
                    console.log("It's a draw! You both chose Rock");
                break;
            case "Paper":
                if (computerChoice === "Scissors"){
                    computerScore++;
                    console.log("You lose! Scissors beats Paper");
                } else if (computerChoice === "Rock"){
                    humanScore++;
                    console.log("You win! Paper beats Rock");
                } else
                    console.log("It's a draw! You both chose Paper");
                break;
            case "Scissors":
                if (computerChoice === "Rock"){
                    computerScore++;
                    console.log("You lose! Rock beats Scissors");
                } else if (computerChoice === "Paper"){
                    humanScore++;
                    console.log("You win! Scissors beats Paper");
                } else
                    console.log("It's a draw! You both chose Scissors");
                    break;
        }
        
        console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);

    }

    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let humanChoice = getHumanChoice(e);
            let computerChoice = getComputerChoice(3);

            playRound(computerChoice, humanChoice);

        console.log(`Computer choice: ${computerChoice}`);
        console.log(`Your choice: ${humanChoice}`);

        });
    });
}


playGame();