// Voy a aplicar una construcción un tanto extraña que rompe con lo visto hasta ahora
// Más adelante cobrará sentido porque hacerla así.

var Cine = function(duracion, genero) {
    this.duracion = duracion;
    this.genero = genero;
}

for (id in Arte.prototype) {
    Cine.prototype[id] = Arte.prototype[id]
}

Cine.prototype.toString = function() {
    let resultado;
    resultado =
        "Nombre: " + this.nombre +
        "\nDuración: " + this.duracion +
        "\nGénero: " + this.genero;
    return resultado;
}