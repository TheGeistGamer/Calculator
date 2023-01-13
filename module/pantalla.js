// --- Pantalla inferior ---

export function infMostrar(resul) {
    let inferior = document.getElementById('inferior');
    inferior.innerHTML = resul;
}

// --- Pantalla superior

export function supMostrar(operacion) {
    let superior = document.getElementById('superior');
    superior.innerHTML = operacion;
}

