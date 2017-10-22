//---------------[Game Rules]---------------//
//To win: first to reach or go over 10,000
//each player rolls six dice on their turn
//the only dice that score points:
//  1
//  5
//  three of a kind
//  three pairs
//  six dice straight
//players much select at least one scoring dice
//if none of the dice on a roll earn points, the player gets a Frakle; three Frakles and a player looses 1000 points
//if the player gets a Frakle, all points accumulated during the turn (that have not been banked) are lost
//players can end turn, banking their points, or can continue with the risk of loosing the points accumulated
//Die Points:
//  SINGLE DIE
//      1   100
//      5   500
//  COMBONATIONS
//      Three 2's   200
//      Three 3's   300
//      Three 4's   400
//      Three 5's   500
//      Three 6's   600
//      Three 1's   1000
//      Three pairs 500
//      Six-dice straight   1000
// dice from different rolls cannot be combined
//------------------------------------------//


//---------------[Variables]---------------//
let numOfPlayers = 2; //NOTE: this value will come form an HTML input sometime in the future
let dice = [1, 2, 3];


// const player = {
//     score: [0, 0],
//     frakle: [0, 0],
//     active: 0
// };
const player = new PlayerSetup(numOfPlayers);


//---------------[Functions]---------------//
function PlayerSetup(plNo){
    this.score = [];
    this.frakle = [];
    this.active = 0;
    this.fillIn = function(plNo){
        for (var i = 0; i < plNo; i++) {
            this.score.push(0);
            this.frakle.push(0);
        }
    };
    
}

function init(){
    player.fillIn(numOfPlayers);
    
}


let rando = function(){
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice(rando){
    dice.length = 0;
    for (var i = 0; i < 6; i++) {
        dice.push(rando());
    }
}











//player scores are 0, player 1 is selected

//player clicks button and rolls dice

//player selects the dice to use for scoring

//player either rolls again or passes to next player

document.querySelector("#startBtn").addEventListener("click", init);