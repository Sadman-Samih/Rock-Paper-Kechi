

function playGame() {
    // 1. Initialize scores inside playGame so they reset every time a new game starts
    let humanScore = 0;
    let computerScore = 0;

    // Helper function to get the computer's choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Helper function to get the human's choice
    function getHumanChoice() {
        let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        return choice;
    }

    // 2. The playRound function defined inside playGame
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
            return; // No one gets a point
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
            humanScore++; // Increment human score
        } else {
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
            computerScore++; // Increment computer score
        }
    }

    // 3. Play 5 rounds using a 'for' loop
    // --- ROUND 1 ---
    console.log("--- Round 1 ---");
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    // --- ROUND 2 ---
    console.log("--- Round 2 ---");
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    // --- ROUND 3 ---
    console.log("--- Round 3 ---");
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    // --- ROUND 4 ---
    console.log("--- Round 4 ---");
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    // --- ROUND 5 ---
    console.log("--- Round 5 ---");
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    // 4. Declare the ultimate winner after 5 rounds
    console.log("====================");
    console.log("GAME OVER!");
    console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game! 🏆");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game. Better luck next time! 🤖");
    } else {
        console.log("The entire game ended in a tie! 🤝");
    }
}

// To start the game, just call the function:
console.log(playGame());

