// Voy a aplicar una construcción un tanto extraña que rompe con lo visto hasta ahora
// Más adelante cobrará sentido porque hacerla así.

var Arte = function() {}
    // Rompe con la encapsulación, pero quiero dejarlo así como referencia para el futuro.

Arte.prototype.nombre = "";
Arte.prototype.alabarObra = function() {
    let resultado = "";
    resultado = this.nombre + " es impresionante";
    return resultado;
}