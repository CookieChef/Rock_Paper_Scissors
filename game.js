console.log("Connected");

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


function game(userChoice) {
    var computerChoice = computerSelection();
    
    if ((userChoice === "r") || (userChoice === "p") || (userChoice === "s")) {

            if ((userChoice === "r" && computerChoice === "s") ||
                (userChoice === "s" && computerChoice === "p") ||
                (userChoice === "p" && computerChoice === "r")) {
                wins++;
                console.log("wins" + wins);
            } else if (userChoice === computerChoice) {
                ties++;
                console.log("ties:" + ties);
            } else {
                lost++;
                console.log("lost: " + lost);
            }
}
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




        //displays the outcome and the user and computer choices. 
        // userChoiceText.textContent = "You chose: " + userGuess;
        // computerChoiceText.textContent = "The computer chose: " + computerGuess;
        // winsText.textContent = "wins: " + wins;
        // lostText.textContent = "losses: " + lost;
        // tiesText.textContent = "ties: " + ties;

    //}
