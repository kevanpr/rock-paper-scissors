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

function playRound (humanChoice, compChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();