function min_max_generador(min, max) {
    let auxDato = 0;
    auxDato = Math.floor(Math.random() * (max - min) + min);
    return auxDato;
}