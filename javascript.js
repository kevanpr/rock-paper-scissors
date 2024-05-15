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

function getHumanChoice () {
    let choice = prompt("Rock, paper, or scissors?");   
    return choice; 
}

let humanScore = 0;
let computerScore = 0; 

/* rock | rock = 0 
paper | paper = 0
scissor | scissor = 0 

paper | rock = 1 | 0 
rock | paper = 0 | 1 

paper | scissors = 0 | 1 
scissors | paper = 1 | 0 

rock | scissors = 1 | 0 
scissors | rock = 0 | 1 
 */

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

const humanSelection = getHumanChoice().toLocaleLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);