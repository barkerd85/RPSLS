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
        console.log("Rock crushes Scissors");
        console.loge("Scissors cut Paper");
        console.log("Paper covers Rock");
        console.log("Rock crushes Lizard");
        console.log("Lizard poisons Spock");
        console.log("Spock smashes Scissors");
        console.log("Scissors decapitate Lizard");
        console.log("Lizard eats Paper");
        console.log("Paper disproves Spock");
        console.log("Spock vaporizes Rock");
    }
}




module.exports = Game