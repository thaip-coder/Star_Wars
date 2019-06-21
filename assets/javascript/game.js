/* ---------- Starting Variables ---------- */
var character = {};
var defender = {};
var characterPicked = false;
var defenderPicked = false;
var defeated = 0;
var gg = false;

/* ---------- Character Stats ---------- */
var obiWanKenobi = {
    name: "Obi-Wan Kenobi",
    health: 120,
    attack: 10,
    baseAttack: 10,
    counterAttack: 22,
};

var lukeSkywalker = {
    name: "Luke Skywalker",
    health: 100,
    attack: 18,
    baseAttack: 18,
    counterAttack: 14,
};

var darthSidious = {
    name: "Darth Sidious",
    health: 150,
    attack: 7,
    baseAttack: 7,
    counterAttack: 18,
};

var darthMaul = {
    name: "Darth Maul",
    health: 180,
    attack: 5,
    baseAttack: 5,
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
    $(".character-choice").addClass("enemy-now").removeClass("character-choice");
    $("#enemy-characters").append($(".enemy-now"));
};

/* ---------- Character Selects ---------- */
$(document).ready(function() {  

    $("#restart").hide();
    $("#attack").hide();

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
                $("#attack").show();
                $('html, body').animate({
                    scrollTop: $("#arena").offset().top
                }, 1000);
                toDefender(this)
                defenderSelect(obiWanKenobi);
                defenderPicked = true;
            };
        };
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
                $("#attack").show();
                $('html, body').animate({
                    scrollTop: $("#arena").offset().top
                }, 1000);
                toDefender(this);
                defenderSelect(lukeSkywalker);
                defenderPicked = true;
            };
        };
    });

    //Selects Darth Sidious
    $("#darth-sidious").click(function() {
        if(characterPicked == false) {
            toChosen(this);
            characterSelect(darthSidious);
            characterPicked = true;
            toEnemies();
        
        //Selects Darth Sidious as Defender
        }else if((characterPicked == true) && (defenderPicked == false)) {
            if($("#darth-sidious").hasClass("enemy-now")) {
                $("#attack").show();
                $('html, body').animate({
                    scrollTop: $("#arena").offset().top
                }, 1000);
                toDefender(this);
                defenderSelect(darthSidious);
                defenderPicked = true;
            };
        };
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
                $("#attack").show();
                $('html, body').animate({
                    scrollTop: $("#arena").offset().top
                }, 1000);
                toDefender(this);
                defenderSelect(darthMaul);
                defenderPicked = true;
            };
        };
    });
    
/* ---------- Battle Code ---------- */
$("#attack").click(function() {

    $('html, body').animate({
        scrollTop: $("#message2").offset().top
    }, 1000);
    
    if(characterPicked && defenderPicked && !gg) {
        defender.health -= character.attack;
        $(".defender-now").children(".health").html(defender.health);
        $("#message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage!!</p>");
        if(defender.health > 0) {
            character.health -= defender.counterAttack;
            $(".chosen-one").children(".health").html(character.health);
            $("#message2").html("<p>Oof! " + defender.name + " counter-attacked you for " + defender.counterAttack + " damage.</p>");
        }else if(defender.health <= 0) {
            defeated++;
            $(".defender-now").hide();
            defenderPicked = false;
            $("#message").html("<p>You have dispatched " + defender.name + " with ease!!</p>");
            $("#message2").html("<p>Select another enemy to engage, " + character.name + "!!</p>");
        };
            
        if(character.health > 0) {
            character.attack += character.baseAttack;
        }else if(character.health <= 0) {
            gg = true;
            $("#message").html("<p>Oh no! You have been slain by " + defender.name + ".</p>");
            $("#message2").html("<p>Do you wish to try again?</p>");
            $("#restart").text("Try Again!");
            $("#restart").show();
            $("#attack").hide();
            $(".myh4").hide();
        };

        if(defeated == 3) {
            gg = true;
            $("#message").html("<p><strong>You have fought valiantly! Victory is yours, " + character.name + "!!<strong></p>");
            $("#message2").html("<p>Do you wish to play again?</p>");
            $(".chosen-one").css("border", "double 6px cyan");
            $("#restart").show();
            $("#attack").hide();
            $(".myh4").hide();
        };
    };   
});

});

