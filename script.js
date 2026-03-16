
let humanChoice = 0;
let computerChoice = 0;
let round = 0;
let humanWins = 0;
let computerWins = 0;
let humanCount = 0;
let computerCount = 0;

const body = document.querySelector("body");

const but1 = document.createElement("button");
but1.style.width = "100px";
but1.style.height = "50px";
but1.style.margin = "10px";
but1.textContent = "rock";
but1.addEventListener("click", () => humanChoiceGetting("rock"));
but1.addEventListener("click", () => computerChoiceGetting());
but1.addEventListener("click", () => compare());
body.appendChild(but1);

const but2 = document.createElement("button");
but2.style.width = "100px";
but2.style.height = "50px";
but2.style.margin = "10px";
but2.textContent = "paper";
but2.addEventListener("click", () => humanChoiceGetting("paper"));
but2.addEventListener("click", () => computerChoiceGetting());
but2.addEventListener("click", () => compare());
body.appendChild(but2);

const but3 = document.createElement("button");
but3.style.width = "100px";
but3.style.height = "50px";
but3.style.margin = "10px";
but3.textContent = "scissors";
but3.addEventListener("click", () => humanChoiceGetting("scissors"));
but3.addEventListener("click", () => computerChoiceGetting());
but3.addEventListener("click", () => compare());
body.appendChild(but3);

const div = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
// div.textContent = "Choice";
body.appendChild(div);



// for (let i = 1; i <= 5; i++) {  // loop to make 5 rounds

// function that asks for human decision in a prompt and stores it in humanChoice var
function humanChoiceGetting(text) {
    humanChoice = text;
    p1.textContent = `human's choice = ${humanChoice}`;
}

// function that generates a random computer decision and stores it in computerChoice var
let computerChoiceGetting = function () {
    let choice = Math.ceil(Math.random() * 3); // create a random number between 1 and 5

    switch (choice) { // Transforms computerChoice var in to user readable
        case 1: computerChoice = "rock"
            break;
        case 2: computerChoice = "paper"
            break;
        case 3: computerChoice = "scissors"
            break;
    };
    p2.textContent = `computer's choice = ${computerChoice}`;
};

// function that compares humanChoice with computerChoice and store result in winner var
let compare = function () {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice;
    let result = 0;
    let winner = 0;

    // if result = 0 human wins, result = 1 computer wins, result = 2 it's a tie
    if (human == computer) { result = 2 }

    else if (human == "rock" && computer == "paper") { result = 1 }
    else if (human == "rock" && computer == "scissors") { result = 0 }

    else if (human == "paper" && computer == "rock") { result = 0 }
    else if (human == "paper" && computer == "scissors") { result = 1 }

    else if (human == "scissors" && computer == "rock") { result = 1 }
    else if (human == "scissors" && computer == "paper") { result = 0 }

    // Transforms result var in to user readable
    if (result == 0) { winner = "human wins!" }
    else if (result == 1) { winner = "computer wins!" }
    else { winner = "It's a tie!" }

    // calls roundCounter() function that keeps track of who wins and round count
    roundCounter(result);

    // Creates alert to let the user know of the status of the game
    // alert("Round " + round + ", human = " + humanChoice + ", " + "computer = " + computerChoice + `\n${winner}`);
    p3.textContent = winner;
}

//roundCounter() function that keeps track of who wins and round count
let roundCounter = function (wins) {
    if (wins == 0) { ++humanCount } // human wins counter
    else if (wins == 1) { ++computerCount } // computer wins counter

    ++round; // round counter
    // console.log("round = " + round + ", human = " + humanCount + ", coumputer = " + computerCount);
}

// calls functions
humanChoiceGetting();
computerChoiceGetting();
compare();
// }

// when round var counts to 5 the game is over and alerts the final result
let gameover = function (humanFinal, computerFinal) {
    if (humanFinal == computerFinal) { result = "It's a tie!" }
    else if (humanFinal > computerFinal) { result = "Human wins!" }
    else if (humanFinal < computerFinal) { result = "Computer wins!" }

    alert("GAME OVER\n" + result)
}

gameover();  // gameover function call


