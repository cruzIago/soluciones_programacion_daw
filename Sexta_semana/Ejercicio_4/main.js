/*
Crea un programa que rellene un array con 10 números aleatorios entre el 1 y el 100.
A continuación, crea otros dos arrays que almacene uno los números pares y el otro 
los impares del primero que creaste. Muestra por pantalla los 3 arrays.
*/

function __main__() {
    let datos = [];
    let datos_pares = [];
    let datos_impares = [];

    const MIN = 1;
    const MAX = 100;
    const CANTIDAD = 10;

    datos = min_max_generador(MIN, MAX, CANTIDAD);

    console_output("Los datos generados son:\n" + datos);

    /*
        for (let i = 0; i < datos.length; i++) {
            if ((datos[i] % 2) == 0) {
                datos_pares.push(datos[i]);
            } else {
                datos_impares.push(datos[i]);
            }
        }
    */

    //dato sería como datos[i] en este ejemplo
    for (let dato of datos) {
        if (dato % 2 == 0) {
            datos_pares.push(dato);
        } else {
            datos_impares.push(dato);
        }
    }

    console_output("Los datos generados pares son:\n" + datos_pares);
    console_output("Los datos generados impares son:\n" + datos_impares);
}

__main__();