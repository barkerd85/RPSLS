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
        this.gestures = [];
    }

    runGame() {
        this.gameSetup();
        this.startGame();

        while (this.playerOne.score < 2 && this.playerTwo.score < 2) {
            this.playerOne.getRandomChoice();
            this.playerTwo.getRandomChoice();

            if (this.playerOne.gesture1 == "rock") {
                if (this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "lizard") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "spock") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "rock") {
                    console.log("Oo, nice try! You both tied.");
                } else if (this.playerOne || this.playerTwo !== "rock", "paper", "scissors", "lizard", "spock");

            } else if (this.playerOne.gesture1 == "paper") {
                if (this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "spock") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "lizard") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "paper") {
                    console.log("Oo, nice try! You both tied.");
                }
            } else if (this.playerOne.gesture1 == "scissors") {
                if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "lizard") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "spock") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "scissors") {
                    console.log("Oo, nice try! You both tied.");
                }
            } else if (this.playerOne.gesture1 == "lizard") {
                if (this.playerTwo.gesture1 == "rock" || this.playerTwo.gesture1 == "scissors") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "spock") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "lizard") {
                    console.log("Oo, nice try! You both tied.");
                }
            } else if (this.playerOne.gesture1 == "spock") {
                if (this.playerTwo.gesture1 == "scissors" || this.playerTwo.gesture1 == "rock") {
                    console.log(this.playerOne.name + " " + "wins this round!");
                    this.playerOne.score += 1;
                } else if (this.playerTwo.gesture1 == "paper" || this.playerTwo.gesture1 == "lizard") {
                    console.log(this.playerTwo.name + " " + "wins this round!");
                    this.playerTwo.score += 1;
                } else if (this.playerTwo.gesture1 == "spock") {
                    console.log("Oo, nice try! You both tied.");
                }
            }
        }

        this.displayGameWinner();
    }

    startGame() {
        console.log(".\n" + "Welcome to Rock, Paper, Scissors, Lizard, Spock!")
        console.log("Best of 3!")
        console.log("Rules(below):")
        console.log("Rock breaks Scissors")
        console.log("Rock crushes Lizard")
        console.log("Paper disproves Spock")
        console.log("Paper covers Rock")
        console.log("Scissors decapitate Lizard")
        console.log("Scissors cut Paper")
        console.log("Lizard poisons Spock")
        console.log("Lizard eats Paper")
        console.log("Spock pockets the Scissors")
        console.log("Spock vaporizes Rock")
    }

    displayGameWinner() {
        if (this.playerOne.score > this.playerTwo.score) {
            console.log(this.playerOne.name + " " + "WINS THE GAME!");
            console.log(this.playerOne.score);
        }
        else {
            console.log(this.playerTwo.name + " " + "WINS THE GAME!");
            console.log(this.playerTwo.score);
        }
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
            console.log("Invalid Input.");
        }
    }
}



module.exports = Game