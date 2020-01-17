console.log("Connected");

//This is an array containing the possible choices to chose from.
var computerChoices = ["r", "p", "s"];

//variables to hold the number of wins, lost or ties. 
var wins = 0;
var lost = 0;
var ties = 0;

var winsText = document.getElementById("wins");
var lostText = document.getElementById("lost");
var tiesText = document.getElementById("ties");
var userChoiceText = document.getElementById("userChoice");
var computerChoiceText = document.getElementById("computerChoice");

document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") ||
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
        } else if (userGuess === computerGuess) {
            ties++;
        } else {
            lost++;
        }


        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lostText.textContent = "losses: " + lost;
        tiesText.textContent = "ties: " + ties;

    }
}