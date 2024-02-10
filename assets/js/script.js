"use strict";

const idnombre = document.getElementById("fname"); // ACA SELECCIONAMOS EL INPUT
const qnombre = document.querySelector("#fname");
const idgames = document.getElementById("ngames"); // ACA SELECCIONAMOS EL INPUT
const qgames = document.querySelector("#ngames");
const ajugar = document.getElementById("a-jugar"); // ACA SELECCIONAMOS EL BOTON
/* const idjugar = document.getElementById("jugar"); // ACA SELECCIONAMOS EL BOTON */
const verganador = document.getElementById("ver-ganador");
const idrpiedra = document.querySelector("rpiedra"); // ACA SELECCIONAMOS EL INPUT
const idrpapel = document.querySelector("rpapel"); // ACA SELECCIONAMOS EL INPUT
const idrtijera = document.querySelector("rtijera"); // ACA SELECCIONAMOS EL INPUT
const idpiedra = document.getElementById("piedra"); // ACA SELECCIONAMOS EL INPUT
const idpapel = document.getElementById("papel"); // ACA SELECCIONAMOS EL INPUT
const idtijera = document.getElementById("tijera"); // ACA SELECCIONAMOS EL INPUT

let name;
let ngames;
let cachipun = ["piedra", "papel", "tijera"];

idgames.addEventListener("keypress", function (event) {
  // ACA AGREGAMOS UN EVENTO AL INPUT PARA QUE CUANDO SE PRESIONE ENTER SE EJECUTE EL BOTON
  if (event.key === "Enter") {
    if (qnombre.value != "" && qgames.value) {
      event.preventDefault(); // PREVENIMOS QUE SE RECARGUE LA PAGINA AL PRESIONAR ENTER
      ajugar.click(); // SIMULAMOS UN CLICK EN EL BOTON
    } else {
      qnombre.focus();
    }
  }
});

idnombre.addEventListener("keypress", function (event) {
  // ACA AGREGAMOS UN EVENTO AL INPUT PARA QUE CUANDO SE PRESIONE ENTER SE EJECUTE EL BOTON
  if (event.key === "Enter") {
    if (qnombre.value != "" && qgames.value) {
      event.preventDefault(); // PREVENIMOS QUE SE RECARGUE LA PAGINA AL PRESIONAR ENTER
      ajugar.click(); // SIMULAMOS UN CLICK EN EL BOTON
    } else {
      qgames.focus();
    }
  }
});

ajugar.addEventListener("click", function () {
  numjuego.innerHTML = 1;
  // ACA AGREGAMOS UN EVENTO AL BOTON PARA QUE CUANDO SE PRESIONE SE EJECUTE UNA ALERTA
});

idrpapel.addEventListener("click", function () {
  jugada = 0;
  idverganador.click();
});

idrpiedra.addEventListener("click", function () {
  jugada = 1;
  idverganador.click();
});

idrtijera.addEventListener("click", function () {
  jugada = 2;
  idverganador.click();
});

verganador.addEventListener("click", function () {
  alert(` ver ganador`);
  if (qgames.value > 1){ }
  for (let i = 2; i <= qgames.value; i++) {
    numjuego.innerHTML = i;
    pcjuego = Math.floor(Math.random() * 3);
    if (jugada == 0 || jugada == 1 || jugada == 2) {
      alert(`usted eligio ${cachipun[jugada]} ya estamos jugando`);

      validar_ganador(jugada, pcjuego);
    }
  }
 }) 

function validar_ganador(mijuego, juegopc) {
  if (
    (mijuego == 0 && juegopc == 1) ||
    (mijuego == 1 && juegopc == 2) ||
    (mijuego == 2 && juegopc == 0)
  ) {
    alert("Perdiste");
  } else {
    if (
      (mijuego == 0 && juegopc == 0) ||
      (mijuego == 1 && juegopc == 1) ||
      (mijuego == 2 && juegopc == 2)
    ) {
      alert("Empate");
    } else {
      alert("Ganaste");
    }
  }
}
