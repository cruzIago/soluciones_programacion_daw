/*
Crea un programa que dado una cantidad de datos X y un rango de estos, 
genere un array con X cantidad de datos generados al azar en el rango 
pedido y muestralos por pantalla.
Pista: Math.random()...
*/

function __main__() {
    let min_rango = 0;
    let max_rango = 0;
    let cantidad_datos = 0;
    let isContinuar = true;
    let respuesta_usuario = "";
    let datos = [];

    do {
        do {
            min_rango = parseInt(simple_user_input("Introduce el mínimo del rango"));
            max_rango = parseInt(simple_user_input("Introduce el máximo del rango"));
            if (min_rango >= max_rango) {
                console_output("El rango no es válido");
            }
        } while (min_rango >= max_rango);

        do {
            cantidad_datos = parseInt(simple_user_input("Introduce la cantidad de datos que quieres generar en el rango"));
            if (typeof cantidad_datos != 'number' || cantidad_datos <= 0) {
                console_output("La cantidad  de datos no es posible")
            }
        } while (typeof cantidad_datos != 'number' || cantidad_datos <= 0);

        datos = min_max_generador(min_rango, max_rango, cantidad_datos);

        console_output("Los datos generados son\n" + datos);

        respuesta_usuario = simple_user_input("¿Quieres volver a generar datos?" +
            "\n1- Si" +
            "\n2- No");

        respuesta_usuario = respuesta_usuario.toLowerCase();

        if (respuesta_usuario == "No" ||
            respuesta_usuario == "2" ||
            respuesta_usuario == 2) {
            isContinuar = false;
        }

    } while (isContinuar);
}

__main__();