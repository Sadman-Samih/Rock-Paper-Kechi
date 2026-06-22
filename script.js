function getComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3);

    if (randomnumber === 0) {
        return "Rock";
    }

    else if (randomnumber === 1) {
        return "Paper";
    }
    else {
        return "Kechi";
    }

}

console.log(getComputerChoice());

function getHumanChoice() {
    const Choice = prompt("Rock, Paper Or Kechi?");
    return "Choice";

}

console.log(getHumanChoice());

let HumanScore = 0;
let ComputerScore = 0;

function playRound(HumanChoice, ComputerChoice) {
    const Human = HumanChoice.ToLowerCase();
    const Computer = ComputerChoice;

    console.log(`Human: ${Human}`, `Computer: ${Computer}`)

    if (Human === Computer) {
        return "Its a tie!"
    }

    else if ((Human === "Rock" && Computer === "Kechi") || (Human === "Paper" && Computer === "Rock") || (Human === "Kechi" && Computer === "Paper")) {
    }
}

