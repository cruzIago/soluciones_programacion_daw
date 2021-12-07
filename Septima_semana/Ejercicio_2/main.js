/*
Generar un programa que simule el clásico juego de televisión donde se muestra un ítem, 
un objeto, y se debe intentar acertar o aproximarse al precio sin pasarse. Los requerimientos
son los siguientes

Los ítems deben de ser objetos del tipo “Premio” con los atributos nombre, precio, rango_mayor y 
rango_menor y una función llamada “generadorPrecio” que genere un valor aleatorio entre el rango_menor 
y el rango_mayor para el precio de dicho ítem.

El juego debe generar el precio de los ítems cada vez que se quiera comenzar una nueva partida.

Al acertar o fallar, el usuario podrá decidir si volver a jugar o terminar.
*/

//Generalmente el precio justo es un juego para varios jugadores en el que gana el que más se
//acerque al precio sin pasarse. Para un solo jugador, decido que obtendrá puntuación dependiendo de cuánto
//se acerque al premio
function __main__() {
    let isContinuar = true;
    let puntuacion = 0;
    do {
        let respuesta_usuario = "";
        let aproximacion_usuario = 0;
        let premio = null;
        alert_output("El juego va a comenzar. Obtendras puntos dependiendo de cuanto te acerques al precio del premio" +
            "\nPerfecto: 100 puntos");

        premio = crearPremio("Televisión", 100, 1100);
        premio.generadorPrecio();

        aproximacion_usuario = parseInt(simple_user_input("El premio es " + premio.getNombre() + "\n ¿Cuál es su precio?"));
        porcentaje_aproximado = Math.floor((aproximacion_usuario * 100) / premio.getPrecio());

        if (porcentaje_aproximado > 100) {
            puntuacion = puntuacion - 100;
            alert_output("Has fallado, el precio era" + premio.getPrecio() + "\nPuntuación: " + puntuacion);
        } else {
            puntuacion = puntuacion + porcentaje_aproximado;
            alert_output("El precio era " + premio.getPrecio() + "\nHas obtenido " + porcentaje_aproximado + " puntos");
        }

        respuesta_usuario = simple_user_input("Tienes " + puntuacion + " puntos\n¿Quieres volver a jugar?\n1- Si\n2- No");

        respuesta_usuario = respuesta_usuario.toLocaleLowerCase();

        if (respuesta_usuario == 2 || respuesta_usuario == "2" || respuesta_usuario == "no") {
            isContinuar = false;
        }

    } while (isContinuar);
}

__main__();