function saludar() {
  let bandera = true;

  while (bandera) {
    let nombre = prompt("Ingrese su nombre");

    let apellido = prompt("Ingrese su apellido");

    if (nombre === "salir") {
      bandera = false;
      break;
    } else if (nombre && apellido) {
      alert(`Hola ${nombre} ${apellido}!!`);
    } else {
      alert("nombre o apellido incorrecto");
    }
  }
}

saludar()
