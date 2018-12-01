import './style.scss';

var words  = ['elefante', 'caballo', 'oso', 'mono', 'vaca', 'cerdo', 'oveja', 'cabra', 'perro', 'gato', 'conejo', 'jirafa', 'camello', 'tortuga', 'gallina', 'pollo', 'gallo', 'toro', 'canario', 'leon'];
console.log(words.length);
var wordLength = words.length;
var randomIndex = Math.random()*wordLength;
var randomWords =Math.floor(randomIndex);
var guess = words[randomWords];
console.log(guess);