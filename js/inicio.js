window.addEventListener("load", iniciar);

function iniciar(){
    localStorage.clear();}

function jugar(){
    var jugador1 = document.getElementById("jug1").value;
    var jugador2 = document.getElementById("jug2").value;

    if (jugador1 && jugador2){
        localStorage.setItem("jugador1", jugador1);
        localStorage.setItem("jugador2", jugador2);
        window.location.href = "generarLetras.html";
    } else {
        alert("Ingresa los nombres de los jugadores");
    }

}


