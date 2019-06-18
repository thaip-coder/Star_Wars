//Variables
var character = {};
var defender = {};
var characterPicked = false;
var defenderPicked = false;
var defeated = 0;
var gameOver = false;

//Characters
var obiWanKenobi = {
    name: "Obi-Wan Kenobi",
    health: 120,
    attack: 12,
    baseAttack: 12,
    counterAttack: 12,
};

var lukeSkywalker = {
    name: "Luke Skywalker",
    health: 100,
    attak: 10,
    baseAttack: 10,
    counterAttack: 10,
};

var darthSidious = {
    name: "Darth Sidiious",
    health: 150,
    attack: 15,
    baseAttack: 15,
    counterAttack: 15,
};

var darthMaul = {
    name: "Darth Maul",
    health: 180,
    attack: 20,
    baseAttack: 20,
    counterAttack: 20,
};

//Functions
function characterSelect(characterPicked) {
    character.name = characterPicked.name;
    character.health = characterPicked.health;
    character.attack = characterPicked.attack;
    character.baseAttack = characterPicked.baseAttack;
    character.counterAttack = characterPicked.counterAttack;
}

function defenderSelect(defenderPicked) {
    defender.name = defenderPicked.name;
    defender.health = defenderPicked.health;
    defender.attack = defenderPicked.attack;
    defender.baseAttack = defenderPicked.baseAttack;
    defender.counterAttack = defenderPicked.counterAttack;
}

function toDefenders() {
    $(".character-choice").addClass(".enemy-now").removeClass(".character-choice");
    $("#enemies").append($(".enemy-now"));
}

//Processes
$(document).ready(function() {
    
};