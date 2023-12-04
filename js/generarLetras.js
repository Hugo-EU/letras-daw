const vocales = ["a", "e", "i", "o", "u"];
const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", 
    "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

var contadorLetra = 1;
var turno = 2;
var jugadorActual = "";
window.addEventListener("load", iniciar);

function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function iniciar(){
    cambiarTurno();
    mostrarTurno();
}

function cambiarTurno(){
    if (turno === 1){
        jugadorActual = localStorage.getItem("jugador2");
        document.getElementById("turno").innerText = "Turno de " + jugadorActual;
        turno = 2;
    } else {
        jugadorActual = localStorage.getItem("jugador1");
        document.getElementById("turno").innerText = "Turno de " + jugadorActual;
        turno = 1;
    }
}
var letrasGuardadas=[];
function vocalConsonante(opcion) {

    if (opcion === 1) {
        letraGenerada = getVocal();
        cambiarTurno();
    } else if (opcion === 2) {
        letraGenerada = getConsonante();
        cambiarTurno();
    }
    
    document.getElementById("letra" + contadorLetra).textContent = letraGenerada; 
    contadorLetra++;

    if (contadorLetra > 9) {
        for (var i = 1; i <= 9; i++) {
            var letraElement = document.getElementById("letra" + i);
            var letra = letraElement.textContent;
            letrasGuardadas.push(letra);
        }
        localStorage.setItem("arrayLetras", letrasGuardadas.join(''));
        window.location.href = "formarPalabra.html";
    }
    
    
}

function getVocal(){
    return getRandomFromArray(vocales);
}

function getConsonante(){
    return getRandomFromArray(consonantes);
}

function mostrarTurno(){
    document.getElementById("turno").innerText = "Turno de " + jugadorActual;
}

