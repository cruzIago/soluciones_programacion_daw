function crearPremio(nombre, rango_menor, rango_mayor) {

    var Premio = function(nombre, rango_menor, rango_mayor) {
        this.nombre = nombre;
        this.rango_menor = rango_menor;
        this.rango_mayor = rango_mayor;
        this.precio = 0;

        this.getNombre = function() {
            return this.nombre;
        }

        this.getPrecio = function() {
            return this.precio;
        }

        this.generadorPrecio = function() {
            this.precio = Math.floor(Math.random() * (this.rango_mayor - this.rango_menor) + this.rango_menor);
        }
    }

    let auxPremio = new Premio(nombre, rango_menor, rango_mayor);

    return auxPremio;
}