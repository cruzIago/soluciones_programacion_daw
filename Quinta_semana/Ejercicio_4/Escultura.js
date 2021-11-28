// Voy a aplicar una construcción un tanto extraña que rompe con lo visto hasta ahora
// Más adelante cobrará sentido porque hacerla así.

var Escultura = function(material, epoca) {
    this.material = material;
    this.epoca = epoca;
}

for (id in Arte.prototype) {
    Escultura.prototype[id] = Arte.prototype[id]
}

Escultura.prototype.toString = function() {
    let resultado;
    resultado =
        "Nombre: " + this.nombre +
        "\nMaterial: " + this.material +
        "\nÉpoca: " + this.epoca;
    return resultado;
}