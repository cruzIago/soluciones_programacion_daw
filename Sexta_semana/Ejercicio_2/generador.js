function min_max_generador(min, max, cantidad) {
    let datos = [];

    for (let i = 0; i < cantidad; i++) {
        let auxDato = 0;
        auxDato = Math.floor(Math.random() * (max - min) + min);
        datos.push(auxDato);
    }

    return datos;
}