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