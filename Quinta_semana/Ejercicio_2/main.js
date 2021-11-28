/*
Crea un programa que genere un número al azar (entre el 1 y el 100) y el usuario
debe de intentar acertar el número que se generó, con 5 intentos como mucho. El
programa debe avisar al usuario si es menor o mayor que el que introdujo. Debe de 
preguntar al usuario al terminar, tanto si gana como si pierde, si quiere volver a jugar.
*/

function __main__() {
    const MIN = 0,
        MAX = 100,
        INTENTOS = 5;
    let numero_azar = 0;
    let respuesta_usuario = 0;
    let isPlaying = true;
    let resultado = -1;
    do {
        //MIN y MAX podían ser valores que pidiesemos al jugador incluso
        numero_azar = random_min_max(MIN, MAX);
        resultado = juego_adivinar(INTENTOS, numero_azar);
        if (resultado == 0) {
            console_output("Enhorabuena, el número era " + numero_azar);
        } else {
            console_output("¡Te quedaste sin intentos! El número era " + numero_azar);
        }

        respuesta_usuario = simple_user_input(
            "¿Quieres seguir jugando?" +
            "\n 1 - Jugar" +
            "\n 2 - Salir");

        if (respuesta_usuario == 2 ||
            respuesta_usuario == "salir" ||
            respuesta_usuario == "2") {
            isPlaying = false;
        }

    } while (isPlaying);
}

__main__();