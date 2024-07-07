function getComputerChoice () {
    const randomNum = Math.floor(Math.random() * 3);
    let choice;

    switch (randomNum) {
        case 0: 
            choice = "rock";
            break;
        case 1: 
            choice = "paper";
            break;  
        case 2: 
            choice = "scissors";
            break;
    }
    
    return choice;
}

// make button
function getHumanChoice () { 
    let choice = prompt("Rock, paper, or scissors?").toLocaleLowerCase();   
    return choice; 
}

let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(humanChoice + " vs. " + computerChoice);
        console.log("It's a tie. Try again");
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        console.log(humanChoice + " vs. " + computerChoice);
        console.log("You won! Paper beats rock!");
        humanScore++; 
    } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        console.log(humanChoice + " vs. " + computerChoice);
        console.log("You lose! Paper beats rock!");
        computerScore++;
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        console.log(humanChoice + " vs. " + computerChoice);
        console.log("You lose! Scissors beat paper!");
        computerScore++; 
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        console.log(humanChoice + " vs. " + computerChoice);        
        console.log("You win! Scissors beat paper!");
        humanScore++;
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        console.log(humanChoice + " vs. " + computerChoice);
        console.log("You win! Rock beats scissors!");
        humanScore++;
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        console.log(humanChoice + " vs. " + computerChoice);
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    } else {
        console.log("Wrong input. Please check your spelling and try again.");
    }
}


if (humanScore > computerScore) {
    console.log("You won! Congratulations!");
} else if (humanScore < computerScore) {
    console.log("You lose! Try again, loser!");
} else {
    console.log("It's a tie! Try again to win!");
}

/*
let i =0; 
while (i < 5) {    
    console.log("Round " + (i + 1));
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Score: " + humanScore + " | " + computerScore);    
    i++;
}
*/