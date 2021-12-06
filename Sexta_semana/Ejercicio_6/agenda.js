function crearAgenda(max_perfiles) {
    var Agenda = function(max_perfiles) {
        const MAX_PERFILES = max_perfiles;
        this.perfiles = [];

        this.getMAX_PERFILES = function() {
            return MAX_PERFILES;
        }

        this.comprobarLleno = function() {
            let isFull = false;
            if (this.perfiles.length >= MAX_PERFILES) {
                isFull = true;
            } else {
                isFull = false;
            }
            return isFull;
        }

        //Permite añadir un perfil nuevo a la agenda
        this.addPerfilNuevo = function(nombre, apellidos, direccion, telefono, email) {
            let aux_perfil = null;

            aux_perfil = crearPerfil(nombre, apellidos, direccion, telefono, email);
            this.perfiles.push(aux_perfil);

        }

        //Borra el perfil indicado en el indice. splice borra desde la posición, el numero indicado de elementos
        //en este caso solo queremos borrar el 1
        this.borrarPorIndice = function(indice) {
            this.perfiles.splice(indice, 1);
        }

        this.borrarPorNombre = function(nombre) {
            let aux_perfil = null;
            for (let perfil of this.perfiles) {
                if (perfil.getNombre() == nombre) {
                    aux_perfil = perfil;
                    break;
                }
            }
            this.perfiles.splice(this.perfiles.indexOf(aux_perfil), 1);
        }

        //Para comprobar si el índice tiene algún elemento.
        this.comprobarIndice = function(indice) {
            let isAvaliable = false;
            if (typeof this.perfiles[indice] != "undefined") {
                isAvaliable = true;
            }
            return isAvaliable;
        }

        //Para modificar el perfil. Siempre usaremos el indice al final, aunque decida usar el nombre.
        this.modificarPerfil = function(nombre, apellidos, direccion, telefono, email, indice) {
            //this.perfiles[indice] = crearPerfil(nombre, aepllidos, direccion, telefono, email);
            //Ambas maneras son válidas, la primera crea un nuevo objeto, con lo que el id del objeto 
            //no será el mismo per se
            //La segunda modifica los valores del perfil sin cambiar el id del objeto
            //El id del objeto es un valor único de cada uno, que permite que existan dos objetos de 
            //valores identicos pero el objeto en si no lo es, como si fuera un DNI del objeto.
            this.perfiles[indice].setNombre(nombre);
            this.perfiles[indice].setApellidos(apellidos);
            this.perfiles[indice].setDireccion(direccion);
            this.perfiles[indice].setTelefono(telefono);
            this.perfiles[indice].setEmail(email);
        }

        //Buscamos el índice por nombre al mismo tiempo que comprobamos si existe
        this.comprobarNombre = function(nombre) {
            let aux_indice = -1;
            for (let perfil of this.perfiles) {
                if (perfil.getNombre() == nombre) {
                    aux_indice = this.perfiles.indexOf(perfil);
                    break;
                }
            }
            return aux_indice;
        }

        this.mostrarPerfil = function(indice) {
            return this.perfiles[indice].toString();
        }

        this.mostrarTodosPerfiles = function() {
            let resultado = "";
            for (let i = 0; i < this.perfiles.length; i++) {
                resultado = resultado + "Perfil " + (i + 1);
                resultado = resultado + "\n" + this.perfiles[i].toString() + "\n";
            }
            return resultado;
        }

        this.toString = function() {
            let resultado = "";
            for (var perfil of this.perfiles) {
                resultado = resultado + perfil.toString() + "\n\n";
            }
            return resultado;
        }
    };

    let aux_agenda = new Agenda(max_perfiles);

    return aux_agenda;
}