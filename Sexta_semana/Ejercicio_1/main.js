/*
Crea un programa que permita al usuario insertar datos en 
un array o mostrar los datos que contiene el array y sus 
índices (posiciones) hasta que el usuario decida parar (bucle).
*/

function __main__() {
    let isContinue = true;
    let datos = [];
    do {
        let eleccion_usuario;
        eleccion_usuario = simple_user_input("¿Qué quieres hacer?" +
            "\n1- Introducir datos" +
            "\n2- Mostrar datos" +
            "\n3- Salir");

        eleccion_usuario = eleccion_usuario.toLowerCase();

        switch (eleccion_usuario) {
            case "1":
            case "introducir":
            case 1:
                //let dato_usuario;
                //dato_usuario = simple_user_input("Introduce el nuevo dato al final de la lista");
                //datos.push(dato_usuario);
                datos.push(simple_user_input("Introduce el nuevo dato al final de la lista"));
                break;
            case "2":
            case "mostrar":
            case 2:
                /*
                console_output("Estos son los datos que contiene la lista:")
                for (let i = 0; i<datos.length;i++){
                    console_output("\n"+datos[i])
                }
                */
                console_output("Estos son los datos que contiene la lista:\n" + datos);
                break;
            case "3":
            case "salir":
            case 3:
                isContinue = false;
                console_output("Hasta luego");
                break;
        }
        if (eleccion_usuario == "3" ||
            eleccion_usuario == "salir" ||
            eleccion_usuario == 3) {
            isContinue = false;
        }
    } while (isContinue);
}

__main__();