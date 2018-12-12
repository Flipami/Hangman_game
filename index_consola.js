import './style.scss';

var words  = ['elefante', 'caballo', 'oso', 'mono', 'vaca', 'cerdo', 'oveja', 'cabra', 'perro', 'gato', 'conejo', 'jirafa', 'camello', 'tortuga', 'gallina', 'pollo', 'gallo', 'toro', 'canario', 'leon'];
/*console.log(words.length);
var wordLength = words.length;
var randomIndex = Math.random()*wordLength;
var randomWords =Math.floor(randomIndex);*/
var guess = words[Math.floor(Math.random()*words.length)];
var lifes = 5;


    var words  = ['elefante', 'caballo', 'oso', 'mono', 'vaca', 'cerdo', 'oveja', 'cabra', 'perro', 'gato', 'conejo', 'jirafa', 'camello', 'tortuga', 'gallina', 'pollo', 'gallo', 'toro', 'canario', 'leon'];
    var guess = words[Math.floor(Math.random()*words.length)];
    console.log(guess);
    var guessing = [];
    var lifes = 5;  
    var count = 0;
    //función que genera el número de letras de la palabra elegida
    function generateGuessing(n, val) {
        guessing = Array(n).fill(val);
        return guessing;
    };

    console.log(generateGuessing(guess.length, '_'));

    //función que me pregunta la letra que quiero elegir y la reemplaza si es correcta
    function input(){
    var input_ltr = prompt('Selecciona una letra', 'letra');
    console.log(input_ltr);
        if(guess.indexOf(input_ltr) != -1){
            for (var i = 0; i < guess.length; i++){
                if(guess[i] === input_ltr){
                    guessing[i] = guess[i];
                }
                console.log(guessing);
            }
            alert('¡Bien hecho!Esta letra esta en la palabra que tienes que adivinar!');
            for (var i = 0; i < guess.length; i++){
                if(guessing[i] === guess[i]){
                    input();       
                }
            }
        } else {
            count ++;
            alert('¡Lo siento! Esta letra no esta en la palabra que tienes que adivinar!');
            if (count = lifes){
                return '¡Has perdido, prueba otra vez!';
            } else {
               
            }
        }
        console.log(guessing);
    };

    input();
    
    //esta función comprobará si hemos ganado o no
   /*function checkProgress(){
        if(){

        }else if (guessing.indexOf('_') == -1){
            return '¡HAS ACERTADO! ENHORABUENA!!!';
        } else if (count = lifes){
            return '¡Has perdido, prueba otra vez!';
        }
    };