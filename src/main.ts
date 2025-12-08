//Variables y eventos
const Siguiente = document.getElementById("next");
    if (Siguiente !== null &&
        Siguiente !== undefined ) {
    Siguiente.addEventListener("click", () => {
    const TurnoActual = LeerTurno();
    const NuevoTurno: number = sumarTurno(TurnoActual);
    pintarTurno (NuevoTurno);
    });
}

const Anterior = document.getElementById("prev");
    if (Anterior !== null &&
        Anterior !== undefined ) {
    Anterior.addEventListener("click", () => {
    const TurnoActual = LeerTurno();
    const NuevoTurno: number = restarTurno(TurnoActual);
    pintarTurno (NuevoTurno);
    });
 }

const Reset = document.getElementById("reset");
    if (Reset !== null &&
        Reset !== undefined ) {
    Reset.addEventListener("click", () => {
    const NuevoTurno: number = resetearTurno();
    pintarTurno (NuevoTurno);
    });
}

const TurnoPersonalizado = document.getElementById("llamar");
    if (TurnoPersonalizado !== null &&
        TurnoPersonalizado !== undefined ) {
    TurnoPersonalizado.addEventListener("click", () => { 
    const NuevoTurno: number = cambiarTurno();
    pintarTurno (NuevoTurno);
    });
}
//Funciones

function LeerTurno () :number{
    const textoTurno = document.getElementById("turno-actual");
        if (
        textoTurno !== null &&
        textoTurno !== undefined) {
    return Number(textoTurno.textContent);
    }
        else {
    return 0;
        }
}

function restarTurno (turno: number) {
    if (turno > 0) {
        return turno - 1;
    }
    return 0;
}

function sumarTurno (turno: number) :number {
    if (turno < 20) {
        return turno + 1;
    }
    return 20;
}

function resetearTurno () {
    return 0;
}

function pintarTurno (MostrarTurno:number) :void {
    const NuevoTurno = document.getElementById("turno-actual");
    if (
        NuevoTurno !== null &&
        NuevoTurno !== undefined){

    NuevoTurno.textContent = String (MostrarTurno).padStart(2,"0");
    manipularBotones();
    }
}

 // Funcion extra, me apetecia jugar con el DOM

 function manipularBotones () {
    const TurnoActual = LeerTurno();

    if (TurnoActual===0) {
        Anterior?.setAttribute("disabled", "");
    }
    else {
        Anterior?.removeAttribute("disabled");
    }

    if (TurnoActual===20) {
        Siguiente?.setAttribute("disabled", "");
    }
    else {
        Siguiente?.removeAttribute("disabled");
 }
}

//Funcion para la parte Challenge

function cambiarTurno():number {
    const TurnoDeseado = document.getElementById("turno-deseado");
    let MiTurno =LeerTurno();
        if (TurnoDeseado instanceof HTMLInputElement) {
        const ValorTurno =  TurnoDeseado.value;
        MiTurno = Number(ValorTurno);
        if (
        MiTurno < 0 ||
        MiTurno >20) {
            MiTurno = 0;
        }
        TurnoDeseado.value = String (MiTurno).padStart(2,"0");
        }
    return MiTurno;
}
