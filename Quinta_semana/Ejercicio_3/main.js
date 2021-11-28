/*
Se requiere programar un perfil de usuario simple. El programa en su primera 
ejecución deberá pedir los datos al usuario: nombre, apellidos, dirección, teléfono, 
email… Una vez indicados, deberá desplegar un menú con opciones para ver todos los 
datos y la capacidad de modificar individualmente cualquier dato. El perfil del usuario
debe de ser un objeto llamado Perfil.
*/

/*
La nomenclatura es estándar en aplicaciones cuando hay un método que realiza acciones nada más comenzar
la ejecución de un programa.
*/
function __onStart__() {
    let perfil_usuario = 0;
    let nombre = "",
        apellidos = "",
        direccion = "",
        telefono = "",
        email = "";

    alert_output("Bienvenido a tu perfil personal temporal" +
        "\nPara empezar, vamos a introducir unos datos");

    nombre = simple_user_input("Introduce tu nombre");
    apellidos = simple_user_input("Introduce tus apellidos");
    direccion = simple_user_input("Introduce tu dirección");
    telefono = simple_user_input("Introduce tu teléfono");
    email = simple_user_input("Introduce tu email");


    perfil_usuario = crearPerfil(nombre, apellidos, direccion, telefono, email);

    return perfil_usuario;
}

/*
Nomenclatura estándar para referirse al método o función que se ejecuta a lo largo del programa, sobretodo
en videojuegos o aplicaciones de usuario
*/
function __update__(args) {

    let perfil_usuario = args;
    let isEditando = true;
    let respuesta_usuario = "";
    do {
        respuesta_usuario = simple_user_input(perfil_usuario.toString() +
            "\n\n¿Qué quieres editar del perfil?" +
            "\n 1- Nombre" +
            "\n 2- Apellidos" +
            "\n 3- Dirección" +
            "\n 4- Teléfono" +
            "\n 5- Email" +
            "\n 6- Salir");

        respuesta_usuario = respuesta_usuario.toLowerCase();

        switch (respuesta_usuario) {
            case "nombre":
            case 1:
            case "1":
                let aux_nombre = "";

                aux_nombre = simple_user_input(
                    "Anterior nombre: " + perfil_usuario.getNombre() +
                    "\nIntroduce el nuevo nombre:");

                perfil_usuario.setNombre(aux_nombre);
                break;
            case "apellidos":
            case 2:
            case "2":
                let aux_apellidos = "";

                aux_apellidos = simple_user_input(
                    "Anteriores apellidos: " + perfil_usuario.getApellidos() +
                    "\nIntroduce los nuevos apellidos:");

                perfil_usuario.setApellidos(aux_apellidos);
                break;
            case "direccion":
            case 3:
            case "3":
                let aux_direccion = "";

                aux_direccion = simple_user_input(
                    "Anterior dirección: " + perfil_usuario.getDireccion() +
                    "\nIntroduce la nueva dirección:");

                perfil_usuario.setDireccion(aux_direccion);
                break;
            case "telefono":
            case 4:
            case "4":
                let aux_telefono = "";

                aux_telefono = simple_user_input(
                    "Anterior teléfono: " + perfil_usuario.getTelefono() +
                    "\nIntroduce el nuevo teléfono:");

                perfil_usuario.setTelefono(aux_telefono);
                break;
            case "email":
            case 5:
            case "5":
                let aux_email = "";

                aux_email = simple_user_input(
                    "Anterior email: " + perfil_usuario.getEmail() +
                    "\nIntroduce el nuevo email:");

                perfil_usuario.setEmail(aux_email);
                break;
            case "salir":
            case 6:
            case "6":
                isEditando = false;
                alert_output("Recuerda, los datos no se guardan (de momento)");
                break;
        }
    } while (isEditando);
}

function __main__() {
    //Tenemos dos opciones:
    // 1 - Hacer un fichero de preguntas, donde se preguntará al usuario los valores del perfil y los cambios
    // 2 - Hacer las preguntas en el main
    // Ambas opciones tienen pros y contras, de la opción 1 habrá que tener en cuenta que debemos de trasladar el fichero
    // De inputs y outputs si lo queremos utilizar en otro lado
    // En la opción 2 tendremos un main un tanto conglomerado
    // Yo escogí la opción 1.5: Realizar métodos en el fichero main con el fin de organizar la función main sin 
    // crear un fichero. 
    // Esta opción no es mejor ni peor, pero llegar a esta conclusión, saber los pros y los contras es parte
    // del estudio de diseño de vuestra aplicación. Siempre lo digo: Lo que planteeis tiene que tener sentido y
    // una justificación.
    let perfil_usuario = "";

    perfil_usuario = __onStart__();
    __update__(perfil_usuario);


}

__main__();