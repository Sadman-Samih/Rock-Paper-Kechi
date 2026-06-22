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
    const Option = prompt("Rock, Paper Or Kechi?");
    return Option;

}

console.log(getHumanChoice());

let HumanScore = 0;
let ComputerScore = 0;

function playRound(HumanChoice, ComputerChoice) {
    const Human = HumanChoice.toLowerCase();
    const Computer = ComputerChoice;

    console.log(`Human: ${Human}`, `Computer: ${Computer}`)

    if (Human === Computer) {
        return "Its a tie!"
    }

    else if ((Human === "Rock" && Computer === "Kechi") || (Human === "Paper" && Computer === "Rock") || (Human === "Kechi" && Computer === "Paper")) { console.log(`You win this round! ${Human.charAt(0).toUpperCase() + Human.slice(1)} beats ${Computer}.`);
        HumanScore++; }
    else {
        console.log(`You lose this round! ${Computer.charAt(0).toUpperCase() + Computer.slice(1)} beats ${Human}.`);
        ComputerScore++;
    }
    console.log(`Current Score -> Human: ${HumanScore} | Computer: ${ComputerScore}`);
    console.log("-----------------------------------------");
}

console.log("STARTING THE GAME !");

//ROUND 1
playRound(getComputerChoice(), getHumanChoice());

//ROUND 2
playRound(getHumanChoice(), getComputerChoice());
//ROUND 3
playRound(getComputerChoice(), getHumanChoice());
//ROUND 4
playRound(getComputerChoice(), getHumanChoice());
//ROUND 4
playRound(getComputerChoice(), getHumanChoice());
//ROUND 5
playRound(getComputerChoice(), getHumanChoice());
//ROUND 6
playRound(getHumanChoice(), getComputerChoice());

console.log("--- FINAL RESULTS ---");
console.log(`Final Score -> You: ${HumanScore} | Computer: ${ComputerScore}`);

if (HumanScore > ComputerScore) {
    console.log("Congratulations! You won the entire game!");
} else if (ComputerScore > HumanScore) {
    console.log("Game over! The computer won the game.");
} else {
    console.log("The entire game ended in a tie!");

}
