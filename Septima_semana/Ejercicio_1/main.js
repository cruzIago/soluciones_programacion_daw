/*
Se debe programar el ya clásico juego de Mastermind, donde se debe adivinar una combinación
 de cinco números del 0 al 9 y sus posiciones y el ordenador debe dar una pista tal que:
Si el número existe en la combinación: X
Si el número existe en la combinación y la posición es correcta: O
Si el número no existe en la combinación: -
Un ejemplo de cómo se vería la ejecución (no código) de la secuencia de juego, siendo la combinación 12321 sería:

Entrada de usuario: 51314
Programa: - X O X -
Entrada de usuario: 16379
Programa: O - O - -

Y así hasta adivinar la secuencia al completo.
Para ello será necesario utilizar vectores o arrays, permitiendo generar la combinación numérica 
en posiciones de 0 a 4, añadiendo números aleatoriamente con Math.random().
El usuario tendrá 10 intentos para acertar y tras terminar la partida (siendo victoria o derrota) 
podrá volver a intentar otra partida.
*/

function __main__() {
    let numeros_aleatorios = [];
    let isContinuar = true;
    const N_ALEATORIOS = 5;
    const N_MIN = 0;
    const N_MAX = 9;
    const N_INTENTOS = 10;
    //Estas cuatro constantes podría elegirlas el usuario si quisieramos

    do {
        let intentos = 0;
        let isAcierto;
        let respuesta_usuario = "";
        alert_output("Va a comenzar el juego. Deberás adivinar la secuencia de " + N_ALEATORIOS + " numeros" +
            "\nen el orden correcto. La leyenda es:" +
            "\nX. Está en la secuencia pero no en posición" +
            "\nO. Está en la secuencia y en la posición" +
            "\n-. No existe en la secuencia");

        for (let i = 0; i < N_ALEATORIOS; i++) {
            numeros_aleatorios.push(min_max_generador(N_MIN, N_MAX));
        }
        do {
            let entrada_usuario = [];
            let aux_entrada_usuario;
            isAcierto = true;
            do {
                aux_entrada_usuario = simple_user_input("Introduce la secuencia numérica");
                //Vamos a confiar en que el usuario siempre introduce números y no letras
                //Si quisieramos comprobar eso también, deberíamos hacer la transformación a numerico
                //Y verificar que todo es un número.
                if (aux_entrada_usuario.length != N_ALEATORIOS) {
                    alert_output("La secuencia debe de ser de " + N_ALEATORIOS + " numeros");
                }
            } while (aux_entrada_usuario.length != N_ALEATORIOS);

            entrada_usuario = aux_entrada_usuario.split("");
            //Comprobamos el array y damos pistas al usuario
            let pistas = pistas_mastermind(numeros_aleatorios, entrada_usuario);

            intentos++;
            alert_output("Intentos restantes: " + (N_INTENTOS - intentos) + "\nCombinación: " + entrada_usuario +
                "\nPista: " + pistas);

            //Lee posicion a posicion los valores del array. Si hay alguno que no concuerda, para el bucle
            for (let g = 0; g < numeros_aleatorios.length; g++) {
                if (numeros_aleatorios[g] != entrada_usuario[g]) {
                    isAcierto = false;
                    break;
                }
            }
        } while (intentos < N_INTENTOS && !isAcierto);

        if (isAcierto) {
            alert_output("Has acertado la combinación, enhorabuena\n\t" + numeros_aleatorios);
        } else {
            alert_output("No has podido acertar la combinación, más suerte la próxima\n\t" + numeros_aleatorios);
        }
        respuesta_usuario = simple_user_input("¿Quieres jugar otra vez?\n1- Si\n2- No");
        respuesta_usuario = respuesta_usuario.toLocaleLowerCase();
        if (respuesta_usuario == "2" || respuesta_usuario == 2 || respuesta_usuario == "no") {
            isContinuar = false;
        }
    }
    while (isContinuar);
}

__main__();