/* definicion de variables*/
let randompc;
let usuario;
let numveces = 0;
let ganador;

numveces=parseInt(prompt("Introduce el numero de jugadas"));
/* repetir numero de veces que quiere jugar el usuario */
for (let i = 0; i < numveces; i++) {
    usuario = prompt("Piedra, Papel o Tijera?");
  /* selector de ganador */
  switch (Usuario) {
    case ("Piedra" || "piedra"):
      // code block
      break;
    case ("Papel" || "papel"):
      // code block
      break;
    case ("Tijera" || "tijera"):
      // code block
      break;
    default:
    // code block
  }

 document.write(`El ganador es: ${ganador} en la jugada (${i+1})<br>`);
}

