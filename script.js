let humanScore = 0
let computerScore = 0



function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    if (random <= 0) {
        return "Rock";
    } else if (random <= 1) {
        return "Paper";
    } else if (random <= 2) {
        return "Kechi";
    }
}

function getHumanChoice() {
    prompt("Rock, Paper, or Kechi");
}

function playRound(humanChoice, computerChoice) {
    const correction = humanChoice.toLowerCase()

    //Human Win Logic
    if (humanChoice === computerChoice) {
        return "Draw!";
    } else if (humanChoice === "Rock" && computerChoice === "Kechi") {
        return "You Win !";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "You Win !";
    } else if (humanChoice === "Kechi" && computerChoice === "Paper") {
        return "You Win !";
    }


    //Computer Win Logic
    if (humanChoice === computerChoice) {
        return "Draw !";
    } else if (computerChoice === "Rock" && humanChoice === "Kechi") {
        return "Computer Wins ! ";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        return "Computer Wins !";
    } else if (computerChoice === "Kechi" && humanChoice === "Paper") {
        return "Computer Wins !";
    }

}

