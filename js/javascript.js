let playerChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

//computer choice
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

window.addEventListener("DOMContentLoaded", (event) => {
    let playerRock = document.querySelector('.pRock');
    let playerPaper = document.querySelector('.pPaper');
    let playerScissors = document.querySelector('.pScissors');  
    let playerWeapon = document.querySelector('.playerChoice');
    let computerWeapon = document.querySelector('.computerChoice');
    let rpsComment = document.querySelector('.rpsComment');

    // player choice
    playerRock.addEventListener('click', function () {
        return playerChoice = "rock";
    });

    playerPaper.addEventListener('click', function () {
        return playerChoice = "paper";
    });

    playerScissors.addEventListener('click', function () {
        return playerChoice = "scissors";
    });

    // play round events
    playerRock.addEventListener('click', playRound);
    playerPaper.addEventListener('click', playRound);
    playerScissors.addEventListener('click', playRound);

    //play round function
    function playRound() {
        computerChoice = getComputerChoice();

        if ((playerChoice == "paper") && (computerChoice == "rock")) {
            playerWeapon.src = "../icons/paper.svg";
            computerWeapon.src = "../icons/rock.svg";
        
            rpsComment.textContent = "You won! Paper beats rock!";
            humanScore++; 
        } else if ((playerChoice == "rock") && (computerChoice == "paper")) {
            playerWeapon.src = "../icons/rock.svg";
            computerWeapon.src = "../icons/paper.svg";

            rpsComment.textContent = "You lose! Paper beats rock!";
            computerScore++;
        } else if ((playerChoice == "paper") && (computerChoice == "scissors")) {
            playerWeapon.src = "../icons/paper.svg";
            computerWeapon.src = "../icons/scissors.svg";

            rpsComment.textContent = "You lose! Scissors beat paper!";
            computerScore++; 
        } else if ((playerChoice == "scissors") && (computerChoice == "paper")) {
            playerWeapon.src = "../icons/scissors.svg";
            computerWeapon.src = "../icons/paper.svg";

            rpsComment.textContent = "You win! Scissors beat paper!";
            humanScore++;
        } else if ((playerChoice == "rock") && (computerChoice == "scissors")) {
            playerWeapon.src = "../icons/rock.svg";
            computerWeapon.src = "../icons/scissors.svg";

            rpsComment.textContent = "You win! Rock beats scissors!";
            humanScore++;
        } else if ((playerChoice == "scissors") && (computerChoice == "rock")) {
            playerWeapon.src = "../icons/scissors.svg";
            computerWeapon.src = "../icons/rock.svg";

            rpsComment.textContent = "You lose! Rock beats scissors!"
            computerScore++;
        } else if ((playerChoice == "rock") && (computerChoice == "rock")) {
            playerWeapon.src = "../icons/rock.svg";
            computerWeapon.src = "../icons/rock.svg";

            rpsComment.textContent = "It's a tie. Try again."
        } else if ((playerChoice == "paper") && (computerChoice == "paper")) {
            playerWeapon.src = "../icons/paper.svg";
            computerWeapon.src = "../icons/paper.svg";

            rpsComment.textContent = "It's a tie. Try again."
        } else if ((playerChoice == "scissors") && (computerChoice == "scissors")) {
            playerWeapon.src = "../icons/scissors.svg";
            computerWeapon.src = "../icons/scissors.svg";

            rpsComment.textContent = "It's a tie. Try again."
        }
    }
});































/*function getComputerChoice () {
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

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log(playerChoice + " vs. " + computerChoice);
        console.log("It's a tie. Try again");
    } else if ((playerChoice == "paper") && (computerChoice == "rock")) {
        console.log(playerChoice + " vs. " + computerChoice);
        console.log("You won! Paper beats rock!");
        humanScore++; 
    } else if ((playerChoice == "rock") && (computerChoice == "paper")) {
        console.log(playerChoice + " vs. " + computerChoice);
        console.log("You lose! Paper beats rock!");
        computerScore++;
    } else if ((playerChoice == "paper") && (computerChoice == "scissors")) {
        console.log(playerChoice + " vs. " + computerChoice);
        console.log("You lose! Scissors beat paper!");
        computerScore++; 
    } else if ((playerChoice == "scissors") && (computerChoice == "paper")) {
        console.log(playerChoice + " vs. " + computerChoice);        
        console.log("You win! Scissors beat paper!");
        humanScore++;
    } else if ((playerChoice == "rock") && (computerChoice == "scissors")) {
        console.log(playerChoice + " vs. " + computerChoice);
        console.log("You win! Rock beats scissors!");
        humanScore++;
    } else if ((playerChoice == "scissors") && (computerChoice == "rock")) {
        console.log(playerChoice + " vs. " + computerChoice);
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

*/




/*
let i =0; 
while (i < 5) {    
    console.log("Round " + (i + 1));
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Score: " + humanScore + " | " + computerScore);    
    i++;
}
*/