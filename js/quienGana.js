window.addEventListener("load", iniciar);
var palabraJug1 = localStorage.getItem("palabraJug1");
var palabraJug2 = localStorage.getItem("palabraJug2");
var jugador1 = localStorage.getItem("jugador1");
var jugador2 = localStorage.getItem("jugador2");
var palabraLarga; // = 1 jug1; 2 jug2; 3 iguales
var jugadorActual;
var contadorNoCorrecta = 0;

function iniciar() {
    quePalabraLarga();
    comprobarPalabras();

}



function quePalabraLarga(){
    if (palabraJug1.length > palabraJug2.length) {
        palabraLarga= 1;
        jugadorActual = 1;
    } else if (palabraJug1.length < palabraJug2.length){
        palabraLarga = 2;
        jugadorActual = 2;
    } else{
        palabraLarga = 3;
    }
}

function comprobarPalabras(){
    if (palabraLarga === 1){
        var infoJugador1 = document.getElementById('infoJugador');
        infoJugador1.textContent = "La palabra de " + jugador1 + " es: " + palabraJug1;

        crearBotones();
    } else if (palabraLarga === 2){
        var infoJugador2 = document.getElementById('infoJugador');
        infoJugador2.textContent = "La palabra de " + jugador2 + " es: " + palabraJug2;
        crearBotones();
    } else {
        igualLargas();

    }
}


function crearBotones(){
    // Crear botones
    var botonCorrecta1 = document.createElement("input");
    botonCorrecta1.type = "button";
    botonCorrecta1.value = "Es correcta";
    botonCorrecta1.id = "correcta1";
    botonCorrecta1.addEventListener('click', function () {
        victoria(queJugadorEs());
    });

    var botonIncorrecta1 = document.createElement("input");
    botonIncorrecta1.type = "button";
    botonIncorrecta1.value = "No es correcta";
    botonIncorrecta1.id = "incorrecta1";
    botonIncorrecta1.addEventListener('click', function () {
        noCorrecta();
        
    });

    document.getElementById("jugador").appendChild(botonCorrecta1);
    document.getElementById("jugador").appendChild(botonIncorrecta1);
   
   
    var botonRae = document.createElement("input");
    botonRae.type = "button";
    botonRae.value = "Comprobar en la RAE";
    botonRae.id = "botonRae";
    document.getElementById("jugador").appendChild(botonRae);
    botonRae.addEventListener('click', function () {
        comprobarRae(quePalabra(jugadorActual))
    });
}



function quePalabra(jugador){
    var palabra = (jugador === 1) ? palabraJug1 : palabraJug2;
    return palabra;
}

function botonesEmpate(){
    var ambasCorrectas = document.createElement("input");
    ambasCorrectas.type = "button";
    ambasCorrectas.value = "Ambas son correctas";
    ambasCorrectas.id = "ambasCorrectas";
    ambasCorrectas.addEventListener('click', function () {
        window.location.href = "empate.html";
    });
    document.getElementById("jugador").appendChild(ambasCorrectas);
    

    var ningunaCorrecta = document.createElement("input");
    ningunaCorrecta.type = "button";
    ningunaCorrecta.value = "Ninguna es correcta";
    ningunaCorrecta.id = "ningunaCorrecta";
    ningunaCorrecta.addEventListener('click', function () {
        window.location.href = "empate.html";
    });
    document.getElementById("jugador").appendChild(ningunaCorrecta);

    var soloCorrecta1 = document.createElement("input");
    soloCorrecta1.type = "button";
    soloCorrecta1.value = "Solo esta es correcta";
    soloCorrecta1.id = "soloCorrecta1";
    soloCorrecta1.addEventListener('click', function () {
        victoria(jugador1);
    });
    document.getElementById("divBotones1").appendChild(soloCorrecta1);
    
    var soloCorrecta2 = document.createElement("input");
    soloCorrecta2.type = "button";
    soloCorrecta2.value = "Solo esta es correcta";
    soloCorrecta2.id = "soloCorrecta2";
    soloCorrecta2.addEventListener('click', function () {
        victoria(jugador2);
    });
    document.getElementById("divBotones2").appendChild(soloCorrecta2);

    var rae1 = document.createElement("input");
    rae1.type = "button";
    rae1.value = "Comprobar en la RAE";
    rae1.id = "rae1";
    rae1.addEventListener('click', function () {
        comprobarRae(palabraJug1)
    });
    document.getElementById("divBotones1").appendChild(rae1);

    var rae2 = document.createElement("input");
    rae2.type = "button";
    rae2.value = "Comprobar en la RAE";
    rae2.id = "rae1";
    rae2.addEventListener('click', function () {
        comprobarRae(palabraJug2)
    });
    document.getElementById("divBotones2").appendChild(rae2);
}


function noCorrecta(){
    if (contadorNoCorrecta === 0){
        if (jugadorActual === 1){
            var infoJugador = document.getElementById('infoJugador');
            infoJugador.textContent = "La palabra de " + jugador2 + " es: " + palabraJug2;
        } else if (jugadorActual === 2){
            var infoJugador = document.getElementById('infoJugador');
            infoJugador.textContent = "La palabra de " + jugador1 + " es: " + palabraJug1;
        }
    } if (contadorNoCorrecta === 1){
        window.location.href = "empate.html";
    }
    contadorNoCorrecta++;
}

function comprobarRae(palabra){
    window.open("https://dle.rae.es/"+ palabra);        
}
function victoria(jugador){
    localStorage.setItem("ganador", jugador);
    window.location = "ganador.html";

}

function queJugadorEs(){
    var nombreJugador = (jugadorActual===1) ? jugador1 : jugador2;
    return nombreJugador;
}

function igualLargas(){
    var infoJugador1 = document.createElement("div");
    var infoJugador2 = document.createElement("div");
    var informacionJugadores = document.getElementById("infoJugador");
    var botones1 = document.createElement("div");
    var botones2 = document.createElement("div");
    botones1.id = "divBotones1";
    botones2.id = "divBotones2";

    infoJugador1.textContent = "La palabra de " + jugador1 + " es: " + palabraJug1;
    infoJugador2.textContent = "La palabra de " + jugador2 + " es: " + palabraJug2;


    informacionJugadores.appendChild(infoJugador1);
    informacionJugadores.appendChild(infoJugador2);

    infoJugador1.appendChild(botones1);
    infoJugador2.appendChild(botones2);
    botonesEmpate();
}