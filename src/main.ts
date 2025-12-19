
let turno: number = 0;

const textoTurno = document.getElementById("turno-actual");
const anterior = document.getElementById("prev");
const siguiente = document.getElementById("next");
const reset = document.getElementById("reset");
const turnoDeseado = document.getElementById("turno-deseado");
const llamar = document.getElementById("llamar");

const desactivarBoton = (
  boton: HTMLButtonElement,
  desactivar: boolean
): void => {
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLButtonElement
  ) {
    boton.disabled = desactivar;
  }
};

const escribirTurno = (turno: number): void => {
  if (textoTurno !== null && textoTurno !== undefined) {
    textoTurno.textContent = String(turno).padStart(2, "0");
  }
};

if (
  siguiente !== null &&
  siguiente !== undefined &&
  siguiente instanceof HTMLButtonElement &&
  anterior !== null &&
  anterior !== undefined &&
  anterior instanceof HTMLButtonElement &&
  reset !== null &&
  reset !== undefined &&
  reset instanceof HTMLButtonElement
) {
  const handleSiguiente = (): void => {
    if (turno < 20) {
      turno += 1;
      escribirTurno(turno);
    }
    if (turno === 20) {
      desactivarBoton(siguiente, true);
    }
  };

  const handleAnterior = (): void => {
    if (turno > 0) {
      turno -= 1;
      escribirTurno(turno);
    }
    if (turno === 0) {
      desactivarBoton(anterior, true);
    }
  };

  const handleReset = (): void => {
    turno = 0;
    escribirTurno(turno);
  };

  siguiente.addEventListener("click", handleSiguiente);
  anterior.addEventListener("click", handleAnterior);
  reset.addEventListener("click", handleReset);
}

const cambiarTurno = (): void => {
  if (
    turnoDeseado !== null &&
    turnoDeseado !== undefined &&
    turnoDeseado instanceof HTMLInputElement
  ) {
    let nuevoTurno = Number(turnoDeseado.value);
    if (nuevoTurno < 0 || nuevoTurno > 20) {
      nuevoTurno = 0;
    }
    turno = nuevoTurno;
    escribirTurno(turno);
  }
}

if (
  llamar !== null &&
  llamar !== undefined &&
  llamar instanceof HTMLButtonElement
) {
  llamar.addEventListener("click", cambiarTurno);
}
