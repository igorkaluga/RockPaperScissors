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
function playerPlay() {
    const playerSelection = prompt("Rock, Paper, Scissors?: ").toLowerCase();
    const playerNum = getPlayerNum(playerSelection)
    return playerNum
}

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
        console.log("You lose! Rock beats scissors!");
        return 0;
    } else if (x == 1 && y == 0) {
        console.log("You lose! Paper beats rock!");
        return 0;
    } else if (x == 2 && y == 1) {
        console.log("You lose! Scissors beat paper!");
        return 0;
    } else if (x == 2 && y == 0) {
        console.log("You win! Rock beats scissors!");
        return 1;
    } else if (x == 0 && y == 1) {
        console.log("You win! Paper beats rock!");
        return 1;
    } else if (x == 1 && y == 2) {
        console.log("You win! Scissors beat paper!");
        return 1;
    } else {
        console.log("Its a tie!");
    }
}

function announceWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("Congratulations, you've won!");
    } else if (computerScore > playerScore) {
        console.log("Unfortunate! You've lost...");
    } else {
        console.log("This game was a tie!");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
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
}

game();