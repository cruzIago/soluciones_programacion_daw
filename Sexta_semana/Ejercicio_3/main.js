/*
Crea un programa que rellene un array con 10 números aleatorios entre el 1 y el 100. 
A continuación, ordena los números de mayor a menor y muestralo por pantalla. 
*/

function __main__() {
    let datos = [];
    let datos_ordenados = [];

    const MIN = 1;
    const MAX = 100;
    const CANTIDAD = 10;

    datos = min_max_generador(MIN, MAX, CANTIDAD);

    console_output("Los datos generados son:\n" + datos);

    datos_ordenados = datos.sort();

    console_output("Los datos ordenados son:\n" + datos_ordenados);
}

__main__();