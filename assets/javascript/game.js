//Starting Variables
var character = {};
var defender = {};
var characterPicked = false;
var defenderPicked = false;
var defeated = 0;
var gg = false;

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

function yourCharacter(characterPicked) {
    $(characterPicked).addClass("chosenOne").removeClass("character-choice");
    $("#your-character").append($(characterPicked));
}

function toDefender() {
    $(".character-choice").addClass("defender-now").removeClass("character-choice");
    $("#defender").append($(".defender-now"));
}

//Processing
$(document).ready(function() {  

    $("#obi-wan-kenobi").click(function() {
        yourCharacter(this);
        characterSelect(obiWanKenobi);
        $("#enemy-characters").append($(".character-choice"));
    });

});