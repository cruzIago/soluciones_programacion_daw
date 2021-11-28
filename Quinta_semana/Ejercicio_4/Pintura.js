// Voy a aplicar una construcción un tanto extraña que rompe con lo visto hasta ahora
// Más adelante cobrará sentido porque hacerla así.

var Pintura = function(autor, estilo) {
    this.autor = autor;
    this.estilo = estilo;
}

for (id in Arte.prototype) {
    Pintura.prototype[id] = Arte.prototype[id]
}

Pintura.prototype.toString = function() {
    let resultado;
    resultado =
        "Nombre: " + this.nombre +
        "\nAutor: " + this.autor +
        "\nEstilo: " + this.estilo;
    return resultado;
}