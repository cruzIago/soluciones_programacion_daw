function pistas_mastermind(maquina, usuario) {
    let pistas = [];
    for (let i = 0; i < maquina.length; i++) {
        if (maquina.includes(parseInt(usuario[i]))) {
            if (maquina[i] == parseInt(usuario[i])) {
                pistas.push("O");
            } else {
                pistas.push("X");
            }
        } else {
            pistas.push("-");
        }
    }
    return pistas;
}