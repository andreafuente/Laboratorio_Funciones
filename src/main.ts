//Variables 

const Siguiente = document.getElementById("next");
const Anterior = document.getElementById("prev");
const Reset = document.getElementById("reset");

function LeerTurno () :number {
 return Number(document.getElementById("turno-actual")?.textContent);
}

//Funciones
function restarTurno (turnoActual: number) {
    if (turnoActual> 0) {
        return turnoActual - 1;
    }
    return 0;
}

function sumarTurno (turnoActual: number) :number {
    if (turnoActual < 20) {
        return turnoActual + 1;
    }
    return 20;
}

function resetearTurno () {
    return 0;
}

function pintarTurno (NuevoTurno: number) :void {
    document.getElementById("turno-actual")!.textContent = String (NuevoTurno);
}
}


// Eventos
Siguiente?.addEventListener("click", () => sumarTurno());
Anterior?.addEventListener("click", () => restarTurno());
Reset?.addEventListener("click", () => resetearTurno());