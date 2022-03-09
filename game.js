"use script"

// Date: 03/07/2022 //
// Project: RPSLS //
// Customer: devCodeCamp //
// Developers: Dustin Barker && Parker Hadley //

const prompt = require("prompt-sync")();
const { Player, Human, AI } = require("./players");

class Game {
    constructor() {
        this.playerOne;
        this.playerTwo;
    }

    runGame(){
        this.gameSetup();
        this.startGame();

    }

    startGame() {
        console.log("Welcome to the Rock, Paper, Scissors, Lizard, Spock Arena!");
        console.log("You can play single or multiplayer in a best of 3 tournament.");
        console.log("The rules are as follows:");
        console.log("Rock crushed Scissors");
        console.loge("Scissors cut Paper");
        console.log("Paper covered Rock");
        console.log("Rock crushed Lizard");
        console.log("Lizard poisoned Spock");
        console.log("Spock smashed Scissors");
        console.log("Scissors decapitated Lizard");
        console.log("Lizard ate Paper");
        console.log("Paper disproved Spock");
        console.log("Spock vaporized Rock");
    }

    gameSetup() {
        let newName = prompt("PlayerOne what is your name?" +  " ");
        this.playerOne = new Human(newName);
        let opponentType = prompt("Would you like to play single or multiplayer?" + " ");
        if (opponentType == "multiplayer") {
            let playerTwoName = prompt("PlayerTwo what is your name?" + " ");
            this.playerTwo = new Human(playerTwoName);
        }
        else if (opponentType == "single") {
            this.playerTwo = new AI("Super Computer")
        }
        else {
            console.log("Error... Please choose an available option.");
        }
    }
}




module.exports = Game