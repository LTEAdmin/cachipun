/* definicion de variables*/
let randompc;
let usuario;
let numveces = 0;
let ganador;
let jugador;


jugador=prompt("Introduce tu nombre");
numveces = parseInt(prompt(` Hola ${jugador} dime cuantes veces quieres jugar`));

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
      ganador = true;
  }
  if (ganador==true) {
    document.write(`El ganador es: ${jugador}} en la jugada (${i + 1})<br>`);
  }
  else { 
    document.write(`El ganador es: el computador en la jugada (${i+1})<br>`);
  }
}

