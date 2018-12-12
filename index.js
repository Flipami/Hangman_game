import './style.scss';
import { getDiffieHellman } from 'crypto';


var words  = ['elefante', 'caballo', 'oso', 'mono', 'vaca', 'cerdo', 'oveja', 'cabra', 'perro', 'gato', 'conejo', 'jirafa', 'camello', 'tortuga', 'gallina', 'pollo', 'gallo', 'toro', 'canario', 'leon'];
var guess = words[Math.floor(Math.random()*words.length)];
console.log(guess);
var guessing = [];
var lifes = 5;  
var count = 0;
//función que me prepara el juego para la partida
function prepareGame(){
    getId("messages").innerHTML = "Elige una letra";
    getId("lifes").innerHTML = "Tienes " + lifes + " vidas";
    getId("input").innerHTML = " ";
    getId("play-again").display = "none";
    letter.forEach(function(e){
        document.getElementById(e).disable = false
    });
    letter.forEach(function(e){
        document.getElementById(e).className = "letter"
    });
    generateGuessing(guess.length, '_');
};

//función que genera el array con el número de letras de la palabra elegida
function generateGuessing(n, val) {
    guessing = Array(n).fill(val);
    getId("word-to-guess").innerHTML = guessing;
    return guessing; 
};
//console.log(generateGuessing(guess.length, '_'));

//función que comienza el juego
function startGame(){
    lifes = 5;
    for(i = 0; i<guess.length; i++){
        generateGuessing(guess.length, '_');
    }
    input();
}

//función que me pregunta la letra que quiero elegir y la reemplaza si es correcta
function input(){
    var input_ltr = letter;
    getId("letter").className = "letter-pressed";
    getId("letter").disable = true;
    if(guess.indexOf(input_ltr) != -1){
        getId("messages").innerHTML = "¡Bien hecho!";
        for (var i = 0; i < guess.length; i++){
            if(guess[i] === input_ltr){ 
                guessing[i] = guess[i]
            }
            getId("messages").innerHTML = "Elige una letra";
            getId("lifes").innerHTML = "Tienes " + lifes + " vidas";
        }
        checkProgress();
    } else {
        lifes --;
        getId("messages").innerHTML = "¡Prueba de nuevo!";
        getId("lifes").innerHTML = "Tienes " + lifes + " vidas";
        checkProgress();
    }
};

//esta función comprobará si hemos ganado o no
function checkProgress(){
    if (guessing.indexOf('_') === -1 || lifes === 0){
        theEnd();
    } else {
        input();
    }
};

//esta función termina el juego, tanto si has ganado como si has perdido
function theEnd(){
    letter.forEach(function(e){
        document.getElementById(e).disable = true
    });
    if(lifes > 0){
        getId("word-to-guess").innerHTML = guess;
        getId("messages").innerHTML = "¡Enhorabuena!¡Has ganado!";
        getId("lifes").innerHTML = "Te quedaban " + lifes + " vidas"
        prepareGame();
    } else {
        getId("word-to-guess").innerHTML = "La palabra era: " + guess;
        getId("messages").innerHTML = "¡Lo siento!¡Has perdido!";
        getId("lifes").innerHTML = "Puedes volver a probar";
        getId("play-again").innerHTML = "<button>Play again</button>";
        prepareGame();
    }
};
startGame();