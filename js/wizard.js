let playerChoice;
let computerChoice;

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
    let midContainer = document.querySelector('.mid-container');
    let rpsTitle = document.querySelector('.rpsTitle');
    let rpsText = document.querySelector('.rpsText')
    let rpsGame = document.querySelector('.rpsGame');
    let playerWeapon = document.querySelector('.playerChoice');
    let computerWeapon = document.querySelector('.computerChoice');
    let rpsComment = document.querySelector('.rpsComment');
    let pScore = document.querySelector('.playerScore');
    let cScore = document.querySelector('.computerScore');

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

    // show score
    let playerScore = 0;
    let computerScore = 0;

    //play round function
    function playRound() {
        computerChoice = getComputerChoice();

        if ((playerChoice == "paper") && (computerChoice == "rock")) {
            playerWeapon.src = "../icons/paper.svg";
            computerWeapon.src = "../icons/rock.svg";
        
            rpsComment.textContent = "You won! Paper beats rock!";
            playerScore++; 

            pScore.textContent = playerScore;
        } else if ((playerChoice == "rock") && (computerChoice == "paper")) {
            playerWeapon.src = "../icons/rock.svg";
            computerWeapon.src = "../icons/paper.svg";

            rpsComment.textContent = "You lose! Paper beats rock!";
            computerScore++;

            cScore.textContent = computerScore;
        } else if ((playerChoice == "paper") && (computerChoice == "scissors")) {
            playerWeapon.src = "../icons/paper.svg";
            computerWeapon.src = "../icons/scissors.svg";

            rpsComment.textContent = "You lose! Scissors beat paper!";
            computerScore++; 

            cScore.textContent = computerScore;
        } else if ((playerChoice == "scissors") && (computerChoice == "paper")) {
            playerWeapon.src = "../icons/scissors.svg";
            computerWeapon.src = "../icons/paper.svg";

            rpsComment.textContent = "You win! Scissors beat paper!";
            playerScore++;

            pScore.textContent = playerScore;
        } else if ((playerChoice == "rock") && (computerChoice == "scissors")) {
            playerWeapon.src = "../icons/rock.svg";
            computerWeapon.src = "../icons/scissors.svg";

            rpsComment.textContent = "You win! Rock beats scissors!";
            playerScore++;

            pScore.textContent = playerScore;
        } else if ((playerChoice == "scissors") && (computerChoice == "rock")) {
            playerWeapon.src = "../icons/scissors.svg";
            computerWeapon.src = "../icons/rock.svg";

            rpsComment.textContent = "You lose! Rock beats scissors!"
            computerScore++;

            cScore.textContent = computerScore;
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

        //end game
        if (playerScore == 5) {
            rpsText.remove();
            rpsGame.remove();
            rpsComment.remove();

            let comment = document.createElement("div")
            midContainer.appendChild(comment);
            comment.textContent = "YOU WIN!";

            let endGame = document.createElement("div");
            midContainer.appendChild(endGame);

            let playAgain = document.createElement('button');
            playAgain.textContent = "Play Again";
            let mainMenu = document.createElement('button');
            mainMenu.textContent = "Main Menu";
            endGame.appendChild(playAgain);
            endGame.append(mainMenu);

            // set attribute
            comment.setAttribute("class", "rpsOutcome");
            endGame.setAttribute("class", "rpsAction");
            playAgain.setAttribute("class", "playAgain");
            mainMenu.setAttribute("class", "mainMenu");


            // remove event listeners
            playerRock.removeEventListener('click', playRound);
            playerPaper.removeEventListener('click', playRound);
            playerScissors.removeEventListener('click', playRound);

            //add event listeners
            playAgain.addEventListener('click', () => {
                window.location.assign("../webpages/girl_rps.html")});

            mainMenu.addEventListener('click', () => {
                window.location.assign("../index.html")});
            

        } else if (computerScore == 5) {
            rpsText.remove();
            rpsGame.remove();
            rpsComment.remove();

            let comment = document.createElement("div")
            midContainer.appendChild(comment);
            comment.textContent = "YOU LOSE!";

            let endGame = document.createElement("div");
            midContainer.appendChild(endGame);

            let playAgain = document.createElement('button');
            playAgain.textContent = "Play Again";
            let mainMenu = document.createElement('button');
            mainMenu.textContent = "Main Menu";
            endGame.appendChild(playAgain);
            endGame.append(mainMenu);

            // set attribute
            comment.setAttribute("class", "rpsOutcome");
            endGame.setAttribute("class", "rpsAction");
            playAgain.setAttribute("class", "playAgain");
            mainMenu.setAttribute("class", "mainMenu");

             // remove event listeners
             playerRock.removeEventListener('click', playRound);
             playerPaper.removeEventListener('click', playRound);
             playerScissors.removeEventListener('click', playRound);

             // style mid container
            midContainer.computedStyleMap.gap = "40%";

            //add event listeners
            playAgain.addEventListener('click', () => {
                window.location.assign("../webpages/wizard_rps.html")});

            mainMenu.addEventListener('click', () => {
                window.location.assign("../index.html")});
        }
    }
});




