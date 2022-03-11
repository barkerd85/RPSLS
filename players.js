"use script"

// Date: 03/07/2022 //
// Project: RPSLS //
// Customer: devCodeCamp //
// Developers: Dustin Barker && Parker Hadley //

const prompt = require("prompt-sync")();
class Player {
    constructor(names) {
        this.name = names;
        this.score = 0;
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
        this.gesture1;
    }
}

//inheritances
class Human extends Player {
    constructor(names) {
        super(names);
    }

    getRandomChoice() {
        let userInput = parseInt(prompt("Choose: 0 - rock, 1 - paper, 2 - scissors, 3 - lizard, 4 - spock"));
        this.gesture1 = this.gestures[userInput];
        

    }
}

class AI extends Player {
    constructor(name) {
        super(name);
        this.aIChoice; 
    }
    getRandomChoice() {
        this.gesture1 = this.gestures[Math.floor(Math.random() * this.gestures.length)];
        console.log("Super Computer chooses" + " " + this.gesture1);
    }
}

module.exports = { Player, Human, AI } 