let humanChoice = 0;
let computerChoice = 0;

console.log("humanChoice = " + humanChoice + ", " + "computerChoice = " + computerChoice);

let humanChoiceGetting = function () { humanChoice = prompt("Choose rock, paper or scissors", "") }
let computerChoiceGetting = function () {
    
    let choice = Math.ceil(Math.random() * 3);

    switch (choice) {
        case 1: computerChoice = "rock"
        break;
        case 2: computerChoice = "paper"
        break;
        case 3: computerChoice = "scissors"
        break;
    };

    console.log(choice + ", " + computerChoice);
};

let compare = function () {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice;
    let result = 0;
    let winner = 0;

    if (human == computer) {result = 2}

    else if (human == "rock" && computer == "paper") { result = 1 }
    else if (human == "rock" && computer == "scissors") { result = 0 }

    else if (human == "paper" && computer == "rock") { result = 0 }
    else if (human == "paper" && computer == "scissors") { result = 1 }

    else if (human == "scissors" && computer == "rock") { result = 1 }
    else if (human == "scissors" && computer == "paper") { result = 0 }

    if (result == 0) { winner = "human wins!" } 
        else if (result == 1) {winner = "computer wins!"}
        else { winner = "It's a tie!"}

    alert("human = " + humanChoice + ", " + "computer = " + computerChoice + `\n${winner}`);
}

humanChoiceGetting();
computerChoiceGetting();
compare();




