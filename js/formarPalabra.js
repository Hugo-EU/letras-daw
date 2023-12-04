window.addEventListener("load", iniciar);

var letrasGuardadas = [];
letrasGuardadas = localStorage.getItem("arrayLetras");
var palabraJug1 = "";
var palabraJug2 = "";
var turno = 1;

function iniciar() {
    // Obtener el turno y las palabras de localStorage
    turno = +localStorage.getItem('turno') || 1;
    palabraJug1 = localStorage.getItem('palabraJug1') || "";
    palabraJug2 = localStorage.getItem('palabraJug2') || "";

    // Inicializar el nombre del turno
    var nombreTurno = (turno === 1) ? localStorage.getItem("jugador1") : localStorage.getItem("jugador2");
    mostrarTurno(nombreTurno);

    mostrarLetras();
    document.getElementById("crearPalabra").addEventListener("click", function() {
        // Crear la palabra según el turno actual
        if (turno === 1) {
            palabraJug1 = crearPalabra(palabraJug1);
            window.location.href = "formarPalabra.html";

        } else {
            palabraJug2 = crearPalabra(palabraJug2);
            window.location.href = "quienGana.html";
        }

        // Cambiar el turno después de que el jugador haya creado su palabra
        cambiarTurno();

        // Mostrar las letras después de cambiar el turno
        mostrarLetras();
    });
}

function mostrarLetras() {
    // Limpiar el contenedor de letras antes de mostrarlas
    document.getElementById("contenedorLetras").innerHTML = "";

    for (var i = 0; i < letrasGuardadas.length; i++) {
        var div = document.createElement("div");
        var letra = letrasGuardadas[i];
        div.className = "letra"; 
        letra.className = "letra";
        div.textContent = letra;
        document.getElementById("contenedorLetras").appendChild(div);

        div.addEventListener("click", saberLetra(div, letra));
    }
}


function saberLetra(div, letra) {
    return function () {
        ponerLetra(div, letra);
    };
}

function ponerLetra(div, letra) {
    var div2 = document.createElement("div");
    div2.textContent = letra;
    div2.className = "letra-seleccionada";
    document.getElementById("contenedorSeleccionadas").appendChild(div2);

    div.style.display = 'none';

    if (turno === 1) {
        palabraJug1 += letra;
    } else {
        palabraJug2 += letra;
    }
}

function cambiarTurno() {
    // Cambiar el turno después de que el jugador haya creado su palabra
    turno = (turno === 1) ? 2 : 1;

    // Almacenar el turno en localStorage
    localStorage.setItem('turno', turno);

    // Cambiar el nombre del turno
    var nombreTurno = (turno === 1) ? localStorage.getItem("jugador1") : localStorage.getItem("jugador2");
    mostrarTurno(nombreTurno);
}

function mostrarTurno(nombreTurno) {
    document.getElementById("turno").textContent = "Turno de " + nombreTurno;
}

function crearPalabra(palabraActual) {
    localStorage.setItem('palabraJug' + turno, palabraActual);
    console.log("Palabra del Jugador " + turno + ": " + palabraActual);

    // Limpiar la palabra actual
    return "";
}
