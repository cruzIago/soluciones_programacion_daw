/*
Se trata de un clásico problema de programación. Se necesita hacer un cajero automático que de 
servicio a los usuarios de tal manera que, cuando el usuario pida retirar dinero en efectivo, se 
muestre por pantalla la cantidad que se retira y los billetes que se usaron, evitando que el usuario 
introduzca una cifra que no pueda ser retirada del cajero (cualquiera que termine en otra cantidad 
que no sea 0 o 5 al no existir billetes más pequeños que los de 5 euros). Las operaciones de retirada 
no pararán hasta que el usuario lo pida.

El cajero debe de ser lo más eficiente posible con los billetes que da al usuario, por ejemplo:

El usuario desea retirar 380 euros y se le da:
1 billete de 200
1 billete de 100
1 billete de 50
1 billete de 20
1 billete de 10
*/
function __main__() {
    var cantidad_usuario = 0;
    var mensaje_continuar = "";
    var mensaje_billetes = "";
    var isRunning = false;
    //La clave del encapsulamiento radica en la capacidad de separar las funciones para poder 
    //ser utilizadas en otras situaciones
    do {
        cantidad_usuario = simple_user_input("Introduce la cantidad a retirar:");
        mensaje_billetes = cajero(cantidad_usuario);
        console_output(mensaje_billetes);
        mensaje_continuar = simple_user_input("¿Quieres retirar más dinero?\n1- Si\n2- No").toLowerCase();

        if (mensaje_continuar == "si" ||
            mensaje_continuar == "y" ||
            mensaje_continuar == "s" ||
            mensaje_continuar == "1") {
            isRunning = true;
        } else {
            isRunning = false;
        }
    } while (isRunning)
}

__main__()