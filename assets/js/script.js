const btnpiedra = document.getElementById("piedra");
const btnpapel = document.getElementById("papel");
const btntijera = document.getElementById("tijera");

/* definicion de variables*/
let randompc;
let usuario;
const numvecesIni = document.getElementById("ngames").value;
let numveces = 0;
let jugador;

btnpiedra.addEventListener("click", jugar("piedra"));

btnpapel.addEventListener("click", jugar("papel"));

btntijera.addEventListener("click", jugar("tijera"));

function jugar(seleccion) {
  numveces += 1;
  if (numveces <= numvecesIni) {
    randompc = Math.floor(Math.random() * 3);
    switch (randompc) {
      case 0: {
        randompc = "piedra";
        break;
      }
      case 1: {
        randompc = "papel";
        break;
      }
      case 2: {
        randompc = "tijera";
        break;
      }
    }
    document.write(`la maquina eligio ${randompc}<br>`);

    if (randompc == seleccion) {
      /* si el computador y el jugador eligen la misma figura empatan*/

      document.write(`el juego fue un empate<br>`);
    } else if (seleccion == "piedra" && randompc == "tijera") {
      /* si el jugador selecciona piedra y la maquina tijera Jugador gana*/
      document.write(`el juego fue ganado por el ${fname.value}<br>`);
    } else if (seleccion == "papel" && randompc == "piedra") {
      /* si el jugador selecciona papel  y la maquina piedra Jugador gana*/
      document.write(`el juego fue ganado por el ${fname.value}<br>`);
    } else if (seleccion == "tijera" && randompc == "papel") {
      /* si el jugador selecciona tijera y la maquina papel Jugador gana*/
      document.write(`el juego fue ganado por el ${fname.value}<br>`);
    } else if (seleccion == "tijera" && randompc == "piedra") {
      /* si el jugador selecciona tijera y la maquina piedra Jugador pierde*/
      document.write(`el juego fue ganado por la maquina <br>`);
    } else if (seleccion == "papel" && randompc == "tijera") {
      /* si el jugador selecciona papel y la maquina tijera Jugador pierde*/
      document.write(`el juego fue ganado por la maquina <br>`);
    } else if (seleccion == "piedra" && randompc == "papel") {
      /* si el jugador selecciona piedra y la maquina papel Jugador pierde*/
      document.write(`el juego fue ganado por la maquina <br>`);
    }
    document.write(`te quedan ${numvecesIni - numveces} jugadas <br>`);
  } else {
    document.write(`el juego ha terminado`);
  }
}
