/*
 * Rock = 1
 * Paper = 2
 * Scissors = 3
 *
 * Bot = 1
 * Player = 2
 */

const bopt = document.querySelector(".bot_option");
const result = document.querySelector(".result_txt");
const bsco = document.querySelector(".computer_score");
const psco = document.querySelector(".player_score");
const opt = document.querySelector(".opt");

var bot_option_value = 1, bot_option_name;
var player_option_value = 1;
var bot_score = 0, player_score = 0;
var winner = 3, winner_name;

function player_option(pass) {
    bopt.classList.remove("lose");
    bopt.classList.remove("win");
    if (bot_score <= 4 & player_score <= 4) {
        bot_option();
        player_option_value = pass;
        gameloop(bot_option_value, player_option_value);
    } else {
        winner = bot_score > player_score ? 1 : 2;
        winner_name = winner == 1 ? "Bot" : "You";
        result.innerHTML = `${winner_name} won! Click replay to play again.`;
    }
}

function bot_option() {
    var rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
        bot_option_value = 1;
    } else if (rand == 1) {
        bot_option_value = 2;
    } else {
         bot_option_value = 3;
    }
}

function names(value) {
    switch(value) {
    case 1:
        return "rock";
        break;
    case 2:
        return "paper";
        break;
    case 3:
        return "scissors";
        break;
    default:
        return "error";
        break;
    }
}

function gameloop(bot, player) {
    bot_option_name = names(bot);
    if (bot == player) {
        bopt.innerHTML = `Bot chose ${bot_option_name}. It's a TIE!`
    } else if (bot > player) {
        if (bot == 3 && player == 1) {
            player_score++;
            psco.innerHTML = player_score;
            bopt.innerHTML = `Bot chose ${bot_option_name}!`
            bopt.classList.add("win");
        } else {
            bot_score++;
            bsco.innerHTML = bot_score;
            bopt.innerHTML = `Bot chose ${bot_option_name}!`
            bopt.classList.add("lose");
        }
    } else {
        if (player == 3 && bot == 1) {
            bot_score++;
            bsco.innerHTML = bot_score;
            bopt.innerHTML = `Bot chose ${bot_option_name}!`
            bopt.classList.add("lose");
        } else {
            player_score++;
            psco.innerHTML = player_score;
            bopt.innerHTML = `Bot chose ${bot_option_name}!`
            bopt.classList.add("win");
        }
    }
    
    if (bot_score > 4 || player_score > 4) {
        winner = bot_score > player_score ? 1 : 2;
        winner_name = winner == 1 ? "Bot" : "You";
        result.innerHTML = `${winner_name} won! Click replay to play again.`;
    }
}

function reset() {
    bopt.innerHTML = `Choose One!`;
    bsco.innerHTML = 0;
    psco.innerHTML = 0;
    
    player_score = 0;
    bot_score = 0;
}