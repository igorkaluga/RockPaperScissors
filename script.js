//0 - Rock
//1 - Paper
//2 - Scissors

//computerPlay() generates a random number 0-2 that correlates to rock/paper/scissors
//user picks rock/paper/scissors
//playRound() function compares the two and returns winner
//game() function plays multiple rounds

function computerPlay() {
    getRandNum = Math.floor(Math.random() * 3);
    return getRandNum;
}

// needs to throw an error if anything besides those are chosen.
/*function playerPlay() {
    const playerSelection = prompt("Rock, Paper, Scissors?: ").toLowerCase();
    const playerNum = getPlayerNum(playerSelection)
    return playerNum
}*/

function getPlayerNum(playerSelection) {
    if (playerSelection == "rock") {
        return 0;
    } if (playerSelection == "paper") {
        return 1;
    } else {
        return 2;
    }
}

function playRound(computerSelection, playerSelection) {
    let x = computerSelection;
    let y = playerSelection;
    if (x == 0 && y == 2) {
        text = "You lose! Rock beats scissors!";
        return [0, text];
    } else if (x == 1 && y == 0) {
        text = "You lose! Paper beats rock!";
        return [0, text];
    } else if (x == 2 && y == 1) {
        text = "You lose! Scissors beat paper!";
        return [0, text];
    } else if (x == 2 && y == 0) {
        text = "You win! Rock beats scissors!";
        return [1, text];
    } else if (x == 0 && y == 1) {
        text = "You win! Paper beats rock!";
        return [1, text];
    } else if (x == 1 && y == 2) {
        text = "You win! Scissors beat paper!";
        return [1, text];
    } else {
        text = "It's a tie!";
        return [null, text];
    }
}

function announceWinner(computerScore, playerScore) {
    if (playerScore > computerScore) {
        text = "Congratulations, you've won!";
        return text;
    } else if (computerScore > playerScore) {
        text = "Unfortunate! You've lost...";
        return text;
    }
}

//old game function for logging best of 3 game to console
/*function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 1; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();

        x = playRound(computerSelection,playerSelection);
        if (x == 0) {
            computerScore += 1;
        } else if (x == 1) {
            playerScore += 1;
        }

        if (playerScore == 3 || computerScore == 3) {
            break;
        }
    }

    announceWinner(playerScore, computerScore);
}*/

// main index.html div where everything will be stored.
const container = document.querySelector('#container-main');

//create elements to doo to the container
const mainHeading = document.createElement('h1');
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

const resultsDiv = document.createElement('div');
const resultsDivHeader = document.createElement('h2')

const pScoreText = document.createElement('p');
const pScore = document.createElement('p');

const cScoreText = document.createElement('p');
const cScore = document.createElement('p');

//add class to btns
btnRock.classList.add('player-choice');
btnPaper.classList.add('player-choice');
btnScissors.classList.add('player-choice');

//modify the elements
mainHeading.textContent = 'Lets play Rock, Paper, Scissors!';
btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent = 'Scissors';

pScoreText.textContent = 'Player score:';
pScore.textContent = '0';
cScoreText.textContent = 'Computer score:';
cScore.textContent = '0';

//add elements to the container
container.appendChild(mainHeading);
container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);
resultsDiv.appendChild(resultsDivHeader);

resultsDiv.appendChild(pScoreText);
resultsDiv.appendChild(pScore);
resultsDiv.appendChild(cScoreText);
resultsDiv.appendChild(cScore);

container.appendChild(resultsDiv);


//Stores all of the player choice buttons in this array
const playerChoice = Array.from(document.querySelectorAll('.player-choice'));

let playerScore = 0;
let computerScore = 0;

// When you click on a player choice button you are triggering a playRound() func.
playerChoice.forEach(choice => choice.addEventListener('click', function() {
    x = computerPlay();
    //translates the clicked button to a 0,1,2 choice that will be fed to the playRound function
    y = getPlayerNum(choice.textContent.toLowerCase());

    returnVals =  playRound(x,y);

    resultsDivHeader.textContent = returnVals[1];
    //score.textContent = returnVals[0];

    if (returnVals[0] == 0) {
        computerScore += 1;
        console.log('player lost, computer score =', computerScore);
        cScore.textContent = computerScore;
    } else if (returnVals[0] == 1) {
        playerScore += 1;
        pScore.textContent = playerScore;
        console.log('player won, player score =', playerScore);
    }

    if (playerScore == 2 || computerScore == 2) {
        winnerVal = announceWinner(computerScore, playerScore);
        resultsDivHeader.textContent = winnerVal;
        resetGame();
    }

}));

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = 0;
    cScore.textContent = 0;
}

//game();