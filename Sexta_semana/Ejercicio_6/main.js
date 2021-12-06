/*
En ejercicios anteriores, generamos una agenda personal donde almacenábamos un solo perfil. 
En esta ocasión, deberemos crear una agenda de contactos para poder almacenar más de un perfil.

Se podrá utilizar el mismo objeto generado anteriormente. Las exigencias son las siguientes:

Nuestra agenda será básicamente un array que contiene los objetos del tipo Perfil, pues se 
pueden añadir cualquier tipo de variable a un array.

La agenda tiene un límite de 5 usuarios, sin importar el orden de los mismos, por lo 
que necesitaremos controlar el tamaño cuando queramos introducir un perfil nuevo.
El menú que se le presenta al usuario deberá contener las siguientes opciones:

Crear perfil
Borrar perfil, dando dos opciones
Por índice (del array)
Por nombre
Modificar perfil, dando dos opciones
Por índice (del array)
Por nombre
Mostrar un perfil, dando dos opciones
Por índice
Por nombre
Mostrar todos los perfiles
Salir

Pista: Para buscar por nombre en un array, tendremos que buscar en un bucle uno a
uno y comparando el nombre que solicita el usuario con el nombre de cada perfil.
*/

function __subMenuBorrar__(agenda) {
    let aux_agenda = agenda;
    let eleccion_menu = "";
    eleccion_menu = simple_user_input("¿Cómo quieres borrar el perfil?" +
        "\n1- Por índice" +
        "\n2- Por nombre" +
        "\n3- Volver");
    eleccion_menu = eleccion_menu.toLowerCase();
    switch (eleccion_menu) {
        case 1:
        case "1":
        case "indice":
        case "índice":
            //Para un usuario corriente, el índice 0 no existiría como tal, podriamos hacer
            //que cuando introduzca el índice, reducimos en 1 el valor, pero eso dependerá
            //del diseño, control de errores, testeo...
            let aux_indice = 0;
            aux_indice = parseInt(simple_user_input("Introduce el índice a borrar:"));
            aux_agenda.borrarPorIndice(aux_indice);
            break;
        case 2:
        case "2":
        case "nombre":
            let aux_nombre = "";
            aux_nombre = simple_user_input("Introduce el nombre a borrar." +
                "\nTen en cuenta que se borrará el primero con ese nombre");
            aux_agenda.borrarPorNombre(aux_nombre);
            break;
        case 3:
        case "3":
        case "volver":
        default:
            //Simplemente volvemos sin hacer nada
            break;
    }
    return aux_agenda;
}

function __subMenuModificar__(agenda) {
    let aux_agenda = agenda;
    let eleccion_menu = "";
    eleccion_menu = simple_user_input("¿Cómo quieres modificar el perfil?" +
        "\n1- Por índice" +
        "\n2- Por nombre" +
        "\n3- Volver");
    eleccion_menu = eleccion_menu.toLowerCase();
    switch (eleccion_menu) {
        case 1:
        case "1":
        case "indice":
        case "índice":
            var aux_indice = -1;
            let isAvaliable = false;
            aux_indice = parseInt(simple_user_input("Introduce el índice a modificar:"));
            isAvaliable = aux_agenda.comprobarIndice(aux_indice);
            if (isAvaliable) {
                var aux_nombre = simple_user_input("Introduce el nombre");
                var aux_apellido = simple_user_input("Introduce el apellido");
                var aux_direccion = simple_user_input("Introduce la dirección");
                var aux_telefono = simple_user_input("Introduce el teléfono");
                var aux_email = simple_user_input("Introduce el email");
                aux_agenda.modificarPerfil(aux_nombre, aux_apellido, aux_direccion, aux_telefono, aux_email, aux_indice);
            } else {
                alert_output("El índice indicado no existe");
            }
            break;
        case 2:
        case "2":
        case "nombre":
            var aux_nombre_modificar = "";
            var aux_indice = -1;
            aux_nombre_modificar = simple_user_input("Introduce el nombre a modificar." +
                "\nTen en cuenta que se modificará el primero con ese nombre");
            aux_indice = aux_agenda.comprobarNombre(aux_nombre_modificar);
            if (aux_indice != -1) {
                var aux_nombre = simple_user_input("Introduce el nombre");
                var aux_apellido = simple_user_input("Introduce el apellido");
                var aux_direccion = simple_user_input("Introduce la dirección");
                var aux_telefono = simple_user_input("Introduce el teléfono");
                var aux_email = simple_user_input("Introduce el email");
                aux_agenda.modificarPerfil(aux_nombre, aux_apellido, aux_direccion, aux_telefono, aux_email, aux_indice);
            } else {
                alert_output("El nombre indicado no existe");
            }
            break;
        case 3:
        case "3":
        case "volver":
        default:
            //Simplemente volvemos sin hacer nada
            break;
    }
    return aux_agenda;
}

function __subMenuMostrar__(agenda) {
    let aux_agenda = agenda;
    let eleccion_menu = "";
    let resultado = "";
    eleccion_menu = simple_user_input("¿Cómo quieres modificar el perfil?" +
        "\n1- Por índice" +
        "\n2- Por nombre" +
        "\n3- Mostrar todos" +
        "\n4- Volver");
    eleccion_menu = eleccion_menu.toLowerCase();

    switch (eleccion_menu) {
        case 1:
        case "1":
        case "índice":
        case "indice":
            var aux_indice = -1;
            let isAvaliable = false;
            aux_indice = parseInt(simple_user_input("Introduce el índice a modificar:"));
            isAvaliable = aux_agenda.comprobarIndice(aux_indice);
            if (isAvaliable) {
                resultado = aux_agenda.mostrarPerfil(aux_indice);
            } else {
                alert_output("El índice indicado no existe");
            }
            break;
        case 2:
        case "2":
        case "nombre":
            var aux_nombre_mmostrar = "";
            var aux_indice = -1;
            aux_nombre_mmostrar = simple_user_input("Introduce el nombre a mostrar." +
                "\nTen en cuenta que se mostrará el primero con ese nombre");
            aux_indice = aux_agenda.comprobarNombre(aux_nombre_mmostrar);
            if (aux_indice != -1) {
                resultado = aux_agenda.mostrarPerfil(aux_indice);
            } else {
                alert_output("El nombre indicado no existe");
            }
            break;
        case 3:
        case "3":
        case "todos":
            resultado = aux_agenda.mostrarTodosPerfiles();
            break;
        case 4:
        case "4":
        case "volver":
        default:
            break;
    }

    alert_output(resultado);
}

/*
Hay varias formas de afrontar este ejercicio, entre ellas
- Un objeto agenda que utilice objetos perfiles y tenga los métodos para borrar y modificar 
- El propio fichero perfil, ademas de la creación del perfil también contenga métodos para modificarlos, aunque la 
  búsqueda la haga el main

Me decanto por el objeto agenda que contiene un vector de perfiles para que veais uno de los casos en los que un fichero
utiliza otro.
*/

function __main__() {
    let eleccion_menu = "";
    let isContinuar = true;
    let agenda = null;

    agenda = crearAgenda(3); //Podría ser un valor que introdujera el usuario.

    do {
        eleccion_menu = simple_user_input("¿Qué quieres hacer?" +
            "\n1- Crear perfil" +
            "\n2- Borrar perfil" +
            "\n3- Modificar perfil" +
            "\n4- Mostrar perfil" +
            "\n5- Salir");

        eleccion_menu = eleccion_menu.toLowerCase();

        switch (eleccion_menu) {
            case 1:
            case "1":
            case "crear":
                let respuesta = "";
                respuesta = agenda.comprobarLleno();
                if (!respuesta) {
                    let aux_nombre = simple_user_input("Introduce el nombre");
                    let aux_apellido = simple_user_input("Introduce el apellido");
                    let aux_direccion = simple_user_input("Introduce la dirección");
                    let aux_telefono = simple_user_input("Introduce el teléfono");
                    let aux_email = simple_user_input("Introduce el email");

                    agenda.addPerfilNuevo(aux_nombre, aux_apellido, aux_direccion, aux_telefono, aux_email);
                } else {
                    alert_output("La agenda está llena");
                }
                break;
            case 2:
            case "2":
            case "borrar":
                //Llamada al submenu para mostrar el resto de opciones, habrá que enviar por parámetro la agenda
                //y recibirla de vuelta modificada
                agenda = __subMenuBorrar__(agenda);
                break;
            case 3:
            case "3":
            case "modificar":
                //Llamada al submenu para mostrar el resto de opciones, habrá que enviar por parámetro la agenda
                //y recibirla de vuelta modificada
                agenda = __subMenuModificar__(agenda);
                break;
            case 4:
            case "4":
            case "mostrar":
                //Llamada al submenu para mostrar el resto de opciones, habrá que enviar por parámetro la agenda
                //No hace falta recibirla, pues solo es mostrar datos
                //En mi caso decidí que este submenu fuese el que mostrase de uno en uno o todos en vez de hacer
                //Una 5 opcion de mostrar todo
                __subMenuMostrar__(agenda);
                break;
            case 5:
            case "5":
            case "salir":
                isContinuar = false;
                alert_output("Hasta luego");
                break;
            default:
                alert_output("Esa opción no está disponible");
                break;

        }
    } while (isContinuar);
}

__main__();