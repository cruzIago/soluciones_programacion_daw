function juego_adivinar(intentos, numero_azar) {
    let aux_intentos = intentos;
    let aux_azar = numero_azar;
    let numero_usuario = 0;
    let contador = 0;
    let isAcierto = false;

    do {
        //Vamos a utilizar un método de otro fichero. Este tipo de construcciones deben de ser excepcionales
        //Y habrá que tener en cuenta que al integrar este fichero en otro programa, debemos cambiar las llamadas
        //a funciones externas o traer los ficheros que utiliza.

        numero_usuario = simple_user_input("Te quedan " + (aux_intentos - contador) + " intentos." +
            "\nIntroduce un número");
        if (numero_usuario == numero_azar) {
            isAcierto = true;
        } else if (numero_usuario < numero_azar) {
            alert_output("El número introducido es menor que el que hay que adivinar");
        } else {
            alert_output("El número introducido es mayor que el que hay que adivinar");
        }

        contador++;

    } while (!isAcierto &&
        contador < aux_intentos);

    if (isAcierto) {
        return 0;
    } else {
        return 1;
    }
}