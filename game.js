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
    //determined which key was pressed
    var userGuess = event.key;

    //randomly chooses a choice from the array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //game logic
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

        //displays the outcome and the user and computer choices. 
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lostText.textContent = "losses: " + lost;
        tiesText.textContent = "ties: " + ties;

    }
}