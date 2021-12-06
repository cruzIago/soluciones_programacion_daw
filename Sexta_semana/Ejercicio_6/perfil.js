function crearPerfil(nombre, apellidos, direccion, telefono, email) {

    var Perfil = function(nombre, apellidos, direccion, telefono, email) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;

        this.getNombre = function() {
            return this.nombre;
        }
        this.setNombre = function(nombre) {
            this.nombre = nombre;
        }

        this.getApellidos = function() {
            return this.apellidos;
        }
        this.setApellidos = function(apellidos) {
            this.apellidos = apellidos;
        }

        this.getDireccion = function() {
            return this.direccion;
        }
        this.setDireccion = function(direccion) {
            this.direccion = direccion;
        }

        this.getTelefono = function() {
            return this.telefono;
        }
        this.setTelefono = function(telefono) {
            this.telefono = telefono;
        }

        this.getEmail = function() {
            return this.email;
        }
        this.setEmail = function(email) {
            this.email = email;
        }

        this.toString = function() {
            let resultado = "";

            resultado =
                "Nombre: " + this.nombre +
                "\nApellidos: " + this.apellidos +
                "\nDirección: " + this.direccion +
                "\nTeléfono: " + this.telefono +
                "\nEmail: " + this.email;

            return resultado;
        }
    }

    let nuevo_perfil = 0;
    nuevo_perfil = new Perfil(nombre, apellidos, direccion, telefono, email);

    return nuevo_perfil;
}