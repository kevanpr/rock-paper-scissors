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
    let humanChoice = humanSelection; 
    let computerChoice = computerSelection; 

    if (humanChoice == computerChoice) {
        console.log("It's a tie. Try again");
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        humanScore++; 
        console.log("You won! Paper beats rock!");
    } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        computerScore++;
        console.log("You lose! Paper beats rock!");
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        computerScore++; 
        console.log("You lose! Scissors beat paper!");
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        humanScore++;
        console.log("You win! Scissors beat paper!");
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        humanScore++;
        console.log("You win! Rock beats scissors!");
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    } else {
        console.log("Wrong input. Please check your spelling and try again.");
    }
}

const humanSelection = getHumanChoice().toLocaleLowerCase();
const computerSelection = getComputerChoice();