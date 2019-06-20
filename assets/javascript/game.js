/* ---------- Starting Variables ---------- */
var character = {};
var defender = {};
var characterPicked = false;
var defenderPicked = false;
var defeated = 0;
var gg = false;

/* ---------- Characters ---------- */
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
    name: "Darth Sidious",
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

/* ---------- Functions ---------- */
//Translates character stats to characterPicked stats
function characterSelect(characterPicked) {
    character.name = characterPicked.name;
    character.health = characterPicked.health;
    character.attack = characterPicked.attack;
    character.baseAttack = characterPicked.baseAttack;
    character.counterAttack = characterPicked.counterAttack;
};

//Translates defender stats to defenderPicked stats
function defenderSelect(defenderPicked) {
    defender.name = defenderPicked.name;
    defender.health = defenderPicked.health;
    defender.attack = defenderPicked.attack;
    defender.baseAttack = defenderPicked.baseAttack;
    defender.counterAttack = defenderPicked.counterAttack;
};

//Selects your Character
function toChosen(characterPicked) {
    $(characterPicked).addClass("chosen-one").removeClass("character-choice");
    $("#your-character").append($(".chosen-one"));
};

//Selects your Defender
function toDefender(defenderPicked) {
    $(defenderPicked).addClass("defender-now").removeClass("character-choice");
    $("#defender").append($(".defender-now"));
};

//Moves unpicked characters to Enemies section
function toEnemies() {
    $(".character-choice").removeClass("character-choice").addClass("enemy-now");
    $("#enemy-characters").append($(".enemy-now"));
};

/* ---------- Processes ---------- */
$(document).ready(function() {  

    //Selects Obi-Wan Kenobi
    $("#obi-wan-kenobi").click(function() {
        if(characterPicked == false) {
            toChosen(this);
            characterSelect(obiWanKenobi);
            characterPicked = true;
            toEnemies();

        //Selects Obi-Wan Kenobi as Defender
        }else if((characterPicked == true) && (defenderPicked == false)) {
            if($("#obi-wan-kenobi").hasClass("enemy-now")) {
                toDefender(this)
                defenderSelect(obiWanKenobi);
                defenderPicked = true;
            }
        }
    }); 

    //Selects Luke Skywalker
    $("#luke-skywalker").click(function() {
        if(characterPicked == false) {
            toChosen(this);
            characterSelect(lukeSkywalker);
            characterPicked = true;
            toEnemies();

        //Selects Luke Skywalker as Defender
        }else if((characterPicked == true) && (defenderPicked == false)) {
            if($("#luke-skywalker").hasClass("enemy-now")) {
                toDefender(this);
                defenderSelect(lukeSkywalker);
                defenderPicked = true;
            }
        }    
    });

    //Selects Darth Sidious
    $("#darth-sidious").click(function() {
        if(characterPicked == false) {
            toChosen(this);
            characterSelect(darthSidious);
            characterPicked = true;
            toEnemies();
        
        //Select Darth Sidious as Defender
        }else if((characterPicked == true) && (defenderPicked == false)) {
            if($("#darth-sidious").hasClass("enemy-now")) {
                toDefender(this);
                defenderSelect(darthSidious);
                defenderPicked = true;
            }
        }
    });

    //Selects Darth Maul
    $("#darth-maul").click(function() {
        if(characterPicked == false) {
            toChosen(this);
            characterSelect(darthMaul);
            characterPicked = true;
            toEnemies();
        
        //Select Darth Maul as Defender
        }else if((characterPicked == true) && (defenderPicked == false)) {
            if($("#darth-maul").hasClass("enemy-now")) {
                toDefender(this);
                defenderSelect(darthMaul);
                defenderPicked = true;
            }
        }
    });
    

});

