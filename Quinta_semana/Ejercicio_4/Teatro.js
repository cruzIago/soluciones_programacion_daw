// Voy a aplicar una construcción un tanto extraña que rompe con lo visto hasta ahora
// Más adelante cobrará sentido porque hacerla así.

var Teatro = function(duración, época) {
    this.duración = duración;
    this.época = época;
}

for (id in Arte.prototype) {
    Teatro.prototype[id] = Arte.prototype[id]
}

Teatro.prototype.toString = function() {
    let resultado;
    resultado =
        "Nombre: " + this.nombre +
        "\nDuración : " + this.duración +
        "\nÉpoca: " + this.época;
    return resultado;
}