/*
Los ejercicios de la primera semana están divididos en métodos encapsulados para
un mejor seguimiento, pero vosotros no teneis porque haberlo hecho así, pues todavía
no lo hemos visto.
*/

/*
Crea un programa que, dados unos valores fijos de altura y anchura, 
calcule el área de un rectángulo y lo muestre por pantalla.
*/
function ej_1() {
    let altura = 10;
    let anchura = 10;
    let area = 0;

    area = altura * anchura;

    console.log("Ejercicio 1\n--------------\nArea = " + area);
}

/*
Crea un programa que, dado un valor de radio, calcule el área y la 
longitud de una circunferencia y lo muestre por pantalla.
*/
function ej_2() {
    let radio = 10;
    let area = 0;
    let longitud = 0;

    area = Math.PI * (radio ** 2); // Podríamos usar Math.pow(base, exponente) para la potencia también.
    longitud = 2 * Math.PI * radio;

    console.log("Ejercicio 2\n--------------\nArea = " + area +
        "\nLongitud = " + longitud);
}

/*
Crea un programa que, dado un valor fijo de un nombre, una localidad
 y un gusto, los muestre por pantalla
*/
function ej_3() {
    let nombre = "Iago";
    let localidad = "Vigo";
    let gusto = "Videojuegos";

    console.log("Ejercicio 3\n--------------\nNombre = " + nombre +
        "\nLocalidad = " + localidad +
        "\nGusto = " + gusto);
}

/*
Crea el programa del ejercicio 1, pero esta vez los valores deben de obtenerse preguntando al usuario.
*/
function ej_4() {
    let altura = 0;
    let anchura = 0;
    let area = 0;

    altura = parseInt(prompt("Introduce la altura del rectángulo"));
    anchura = parseInt(prompt("Introduce la anchura del rectángulo"));

    area = altura * anchura;

    console.log("Ejercicio 4\n--------------\nArea = " + area);
}

/*
Crea el programa del ejercicio 2, pero esta vez los valores deben de obtenerse preguntando al usuario.
*/
function ej_5() {
    let radio = 0;
    let area = 0;
    let longitud = 0;

    radio = parseInt(prompt("Introduce el radio del círculo"));

    area = Math.PI * (radio ** 2);
    longitud = 2 * Math.PI * radio;

    console.log("Ejercicio 5\n--------------\nArea = " + area +
        "\nLongitud = " + longitud);
}

/*
Crea el programa del ejercicio 3, pero esta vez los valores deben obtenerse preguntando al usuario.
*/
function ej_6() {
    let nombre = ""
    let localidad = "";
    let gusto = "";

    nombre = prompt("Introduce tu nombre");
    localidad = prompt("Introduce tu localidad");
    gusto = prompt("Introduce tu gusto");

    console.log("Ejercicio 6\n--------------\nNombre = " + nombre +
        "\nLocalidad = " + localidad +
        "\nGusto = " + gusto);
}

/*
 Crea un programa que recoja el valor introducido por el usuario y calcule el módulo y lo muestre por pantalla.
 */
function ej_7() {
    let divisor = 0;
    let dividendo = 0;
    let resto = 0;

    dividendo = parseInt(prompt("Introduce el primer valor"));
    divisor = parseInt(prompt("Introduce el segundo valor"));

    resto = dividendo % divisor;

    console.log("Ejercicio 7\n--------------\nResto o módulo = " + resto);
}

/*
Crea un programa que permita calcular las diferentes potencias de 2, pidiendo al usuario el exponente y
 mostrando por pantalla el resultado.
*/
function ej_8() {
    const BASE = 2;
    let exponente = 0;
    let resultado = 0;

    exponente = parseInt(prompt("Introduce la potencia de dos a conocer"));

    resultado = Math.pow(BASE, exponente);

    console.log("Ejercicio 8\n--------------\nResultado = " + resultado);
}

/*
Crea un programa que compare dos datos introducidos por el usuario y muestre por pantalla si tienen 
el mismo valor o no.
*/
function ej_9() {
    let dato_1 = 0;
    let dato_2 = 0;
    let isEqualValue = false;
    let resultado = "";

    dato_1 = parseInt(prompt("Introduce el primer dato"));
    dato_2 = parseInt(prompt("Introduce el segundo dato"));

    isEqualValue = dato_1 == dato_2;

    if (isEqualValue) {
        resultado = "Son el mismo valor";
    } else {
        resultado = "Son distintos valores";
    }

    console.log("Ejercicio 9\n--------------\n" + resultado);
}

/*
Crea un programa que compare dos cadenas de texto y muestre por pantalla si son la misma.
*/
function ej_10() {
    //Funcionalmente es lo mismo que el anterior sin la necesidad de transformar los valores a enteros
    //aunque el anterior se podía hacer si el cambio de valores también.
    let dato_1 = 0;
    let dato_2 = 0;
    let isEqualValue = false;
    let resultado = "";

    dato_1 = prompt("Introduce el primer dato")
    dato_2 = prompt("Introduce el segundo dato")

    isEqualValue = dato_1 == dato_2;

    if (isEqualValue) {
        resultado = "Son el mismo valor";
    } else {
        resultado = "Son distintos valores";
    }

    console.log("Ejercicio 10\n--------------\n" + resultado);
}

/*
Crea un programa que recoja 3 datos del usuario y muestre si son el mismo dato alguno de ellos.
*/
function ej_11() {
    //Simplemente hay que añadir un tercer dato de entrada y en la comprobación
    //Añadir, o bien un anidamiento o comparador lógico OR ||
    let dato_1 = 0;
    let dato_2 = 0;
    let dato_3 = 0;
    let isEqualValue = false;
    let resultado = "";

    dato_1 = prompt("Introduce el primer dato")
    dato_2 = prompt("Introduce el segundo dato")
    dato_3 = prompt("Introduce el tercer dato");

    isEqualValue = (dato_1 == dato_2) || (dato_1 == dato_3) || (dato_2 == dato_3);

    if (isEqualValue) {
        resultado = "Al menos dos son el mismo valor";
    } else {
        resultado = "Son distintos valores";
    }

    console.log("Ejercicio 11\n--------------\n" + resultado);
}

/*
Crea un programa que recoja un dato del usuario, lo incremente en 1, que el usuario introduzca
 otro dato y que multiplique el nuevo dato por el anterior incrementado y lo muestre por pantalla.
*/
function ej_12() {
    //Se puede hacer de varias maneras, aquí utilizaré variables auxiliares para evitar modificar
    //lo introducido por el usuario
    let dato_1 = 0;
    let dato_2 = 0;
    let aux_dato_1 = 0;
    let aux_dato_2 = 0;

    dato_1 = parseInt(prompt("Introduce el primer dato para incrementarlo en 1"));
    aux_dato_1 = dato_1 + 1;

    dato_2 = parseInt(prompt("Introduce el segundo dato para multiplicarlo por el anterior incrementado"));
    aux_dato_2 = dato_2 * aux_dato_1;

    console.log("Ejercicio 12\n--------------\nResultado = " + aux_dato_2);
}

/*
Crea un programa que calcule el año de nacimiento introduciendo la edad del usuario y lo muestre por pantalla.
*/
function ej_13() {
    //Se puede resolver de muchas maneras, aquí utilizo objetos pero podeis pedir por pantalla el año actual
    //si no entendeis como se usa esta forma por el momento.
    let edad = 0;
    let fecha_adivinada = 0;
    let fecha_actual = 0;
    let auxDate = 0;

    edad = parseInt(prompt("Introduce tu edad"));

    auxDate = new Date(); //Instancio un objeto del tipo Date
    fecha_actual = auxDate.getFullYear(); //Utilizo el método getFullYear() de la clase Date

    fecha_adivinada = fecha_actual - edad;

    console.log("Ejercicio 13\n--------------\nTu año de nacimiento es " + fecha_adivinada);
}

/*
Crea un programa que compruebe, dada la edad introducida por el usuario, que puede obtener el 
permiso de conducción (18 años), mostrando por pantalla True o False.
*/
function ej_14() {
    //Se puede usar el operador ternario al ser una operación sencilla o mediante ifs.
    let edad = 0;
    const MINIMA_EDAD_PERMISO_CONDUCCION = 18;
    let resultado = "";

    edad = parseInt(prompt("Introduce tu edad"));
    resultado = edad >= MINIMA_EDAD_PERMISO_CONDUCCION ? "Puedes tener el carnet de conducir" : "No puedes tener el carnet de conducir";

    console.log("Ejercicio 14\n--------------\n" + resultado);
}

/*
Crea un programa que dado un número, calcule la tabla de multiplicar (de 1 a 9) y la muestre por pantalla.
*/
function ej_15() {
    //Vereis que se hace pesado escribir 10 veces un resultado y usar tantas variables o cálculos
    //Lo solucionamos más adelante
    let numero = 0;
    let mul0 = 0,
        mul1 = 0,
        mul2 = 0,
        mul3 = 0,
        mul4 = 0,
        mul5 = 0,
        mul6 = 0,
        mul7 = 0,
        mul8 = 0,
        mul9 = 0;

    numero = parseInt(prompt("Introduce el número para ver la tabla de multiplicar"));
    mul0 = numero * 0;
    mul1 = numero * 1;
    mul2 = numero * 2;
    mul3 = numero * 3;
    mul4 = numero * 4;
    mul5 = numero * 5;
    mul6 = numero * 6;
    mul7 = numero * 7;
    mul8 = numero * 8;
    mul9 = numero * 9;

    console.log("Ejercicio 15\n--------------\n0 X " + numero + " = " + mul0 +
        "\n1 X " + numero + " = " + mul1 +
        "\n2 X " + numero + " = " + mul2 +
        "\n3 X " + numero + " = " + mul3 +
        "\n4 X " + numero + " = " + mul4 +
        "\n5 X " + numero + " = " + mul5 +
        "\n6 X " + numero + " = " + mul6 +
        "\n7 X " + numero + " = " + mul7 +
        "\n8 X " + numero + " = " + mul8 +
        "\n9 X " + numero + " = " + mul9);
}

function __main__() {
    ej_1();
    ej_2();
    ej_3();
    ej_4();
    ej_5();
    ej_6();
    ej_7();
    ej_8();
    ej_9();
    ej_10();
    ej_11();
    ej_12();
    ej_13();
    ej_14();
    ej_15();
}

__main__();