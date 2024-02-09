"use strict";

const idnombre = document.getElementById("fname"); // ACA SELECCIONAMOS EL INPUT
const qnombre = document.querySelector("#fname");
const idgames = document.getElementById("ngames"); // ACA SELECCIONAMOS EL INPUT
const qgames = document.querySelector("#ngames");
const ajugar = document.getElementById("a-jugar"); // ACA SELECCIONAMOS EL BOTON

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
  // ACA AGREGAMOS UN EVENTO AL BOTON PARA QUE CUANDO SE PRESIONE SE EJECUTE UNA ALERTA
  alert(`Hola ${idnombre.value}`); // ALERTA QUE MUESTRA EL VALOR DEL INPUT
});
