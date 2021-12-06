/*
Crea un programa que genere los 20 primeros números de la sucesión de 
Fibonacci de forma matemática y no a mano. Almacena estos números en un 
array y muestralo por pantalla.
Pista: La sucesión de Fibonacci es la que se obtiene de sumar cada número 
con el anterior y empieza con 0 y 1 siempre: 0, 1, 1(1+0), 2(1+1), 3(1+2),
5(3+2), 8(5+3)...
*/

function __main__() {
    let datos = [];
    const MAXIMO = 20;
    //Los dos primeros datos son necesarios introducirlos a mano al necesitar empezar con ellos
    datos[0] = 0;
    datos[1] = 1;

    //Si la i empezase en 0, al intentar restarle 1 o 2, daría un error de fuera de límites o 
    //outOfBounds
    for (let i = datos.length; i < MAXIMO; i++) {
        datos[i] = datos[i - 1] + datos[i - 2];
    }

    console_output("La sucesión de Fibonacci es:\n" + datos);
}

__main__();