console.log("Thank you for playing and looking at this application!");

//variables to hold the number of wins, lost or ties. 
var wins = 0;
var lost = 0;
var ties = 0;

var winsText = document.getElementById("wins");
var lostText = document.getElementById("lost");
var tiesText = document.getElementById("ties");
var userChoiceText = document.getElementById("userChoice");
var computerChoiceText = document.getElementById("computerChoice");
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissors = document.getElementById("s");

//gererates a random computer choice.
function computerSelection() {
    //This is an array containing the possible choices to chose from.
    var computerChoices = ["r", "p", "s"];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerGuess;

}

//function with the game logic
function game(userChoice) {
    var computerChoice = computerSelection();

    if ((userChoice === "r") || (userChoice === "p") || (userChoice === "s")) {

        if ((userChoice === "r" && computerChoice === "s") ||
            (userChoice === "s" && computerChoice === "p") ||
            (userChoice === "p" && computerChoice === "r")) {
            wins++;
            console.log("wins " + wins);
        } else if (userChoice === computerChoice) {
            ties++;
            console.log("ties: " + ties);
        } else {
            lost++;
            console.log("lost: " + lost);
        }
    }

    winsText.textContent = "wins: " + wins;
    lostText.textContent = "losses: " + lost;
    tiesText.textContent = "ties: " + ties;

    userChoiceText.textContent = "You chose: " + convert(userChoice);
    computerChoiceText.textContent = "The computer chose: " + convert(computerChoice);
}

//function to convert the letter result to the word it represents. 

function convert(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    if (letter === "s") return "scissor";
}

function main() {
    rock.addEventListener("click", function () {
        game("r");
    })
    paper.addEventListener("click", function () {
        game("p");
    })
    scissors.addEventListener("click", function () {
        game("s");
    })

}

main();

