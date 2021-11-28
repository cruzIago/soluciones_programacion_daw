/*
Crea un programa que muestre por pantalla si un número introducido por el usuario es mayor o menor que 10
*/
function ej_1() {
    const COMPARADOR = 10;
    let dato = 0;
    let resultado = "";

    dato = parseInt(prompt("Introduce un número"));

    if (dato > COMPARADOR) {
        resultado = "El dato es mayor que " + COMPARADOR;
    } else if (dato == COMPARADOR) {
        resultado = "El dato es igual que " + COMPARADOR;
    } else {
        resultado = "El dato es menor que " + COMPARADOR;
    }

    console.log("Ejercicio 1\n--------------\n" + resultado);
}

/*
Crea un programa que muestre por pantalla si una palabra que introduzca el usuario contiene la letra b minúscula.
*/
function ej_2() {
    const COMPARADOR = "b";
    let palabra = "";
    let resultado = "";

    palabra = prompt("Introduce una palabra");

    if (palabra.includes(COMPARADOR)) {
        resultado = "La palabra '" + palabra + "' contiene la letra " + COMPARADOR;
    } else {
        resultado = "La palabra '" + palabra + "' no contiene la letra " + COMPARADOR;
    }

    console.log("Ejercicio 2\n--------------\n" + resultado);
}

/*
Crea un programa que muestre por pantalla si el usuario es mayor o no de 18 años, introduciendo su fecha de nacimiento.
*/
function ej_3() {
    const EDAD = 18;
    let fecha_nacimiento = 0;
    let fecha_actual = 0;
    let edad_actual = 0;
    let auxDate = 0;

    fecha_nacimiento = parseInt(prompt("Introduce tu año de nacimiento"));

    auxDate = new Date();
    fecha_actual = auxDate.getFullYear();

    edad_actual = fecha_actual - fecha_nacimiento;

    if (edad_actual < EDAD) {
        resultado = "No eres mayor de " + EDAD + " años";
    } else {
        resultado = "Eres mayor de " + EDAD + " años";
    }

    console.log("Ejercicio 3\n--------------\n" + resultado);
}
/*
Crea un programa que muestre por pantalla una selección de productos al usuario (3 o 4)
 y dependiendo de lo que escriba el usuario, se muestre el precio del producto.
*/
function ej_4() {
    //Se puede hacer de varias maneras, aquí voy a crear variables aunque podría hacerse
    //Mostrando por pantalla directamente el precio
    let leche = 1;
    let cacao = 2;
    let avellanas = 3;
    let azucar = 4;
    let tortilla = 5;
    let eleccion_usuario = "";
    let resultado = "";

    eleccion_usuario = prompt("¿Qué quieres comprar?\nLeche" +
        "\nCacao" +
        "\nAvellanas" +
        "\nAzucar" +
        "\nTortilla");

    //Usaré un switch para que sea más visual, pero un nido de ifelseif sería lo mismo.
    switch (eleccion_usuario) {
        case "Leche":
            resultado = "La leche vale " + leche + " euro";
            break;
        case "Cacao":
            resultado = "El cacao vale " + cacao + " euros";
            break;
        case "Avellanas":
            resultado = "Las avellanas valen " + avellanas + " euros";
            break;
        case "Azucar":
            resultado = "El azucar vale " + azucar + " euros";
            break;
        case "Tortilla":
            resultado = "La tortila vale " + tortilla + " euros";
            break;
        default:
            resultado = "El producto seleccionado no está disponible"
            break;
    }

    console.log("Ejercicio 4\n--------------\n" + resultado);
}

/*
Crea un programa que muestre por pantalla distintas figuras geométricas 
(triángulo, rectángulo, pentágono y hexágono). Según lo que escoja el usuario,
se le pedirá que introduzca unos valores clave para calcular el área de la figura
seleccionada. Mostrar por pantalla el resultado.
*/
function ej_5() {
    //Tanto este como el ejercicio 4 son ejemplos de como se realizan los menús.
    //Dependiendo de la figura geométrica necesitaremos unos valores u otros
    //se podrían usar dos variables igualmente, pero por claridad crearé las necesarias
    //para cada nombre.
    let lado = 0;
    let anchura = 0;
    let altura = 0;
    let apotema = 0;
    let area = 0;
    let eleccion = "";
    let aux_eleccion = "";
    let resultado = "";

    eleccion = prompt("Introduce de que figura quieres calcular el área\n1- Triángulo" +
        "\n2- Rectángulo" +
        "\n3- Pentágono" +
        "\n4- Hexágono");

    //Vamos a tener en cuenta que el usuario podría poner 1,2,3 o 4 también, así que usaremos nidos de
    //ifelseif
    //toLowerCase() transforma una cadena a todo minúsculas

    aux_eleccion = eleccion.toLowerCase();

    if (aux_eleccion == 1 ||
        aux_eleccion == "triangulo" ||
        aux_eleccion == "triángulo") {

        altura = parseInt(prompt("Introduce la altura"));
        lado = parseInt(prompt("Introduce el lado"));

        area = (altura * lado) / 2;
        resultado = "El area del triángulo es " + area;

    } else if (aux_eleccion == 2 ||
        aux_eleccion == "rectangulo" ||
        aux_eleccion == "rectángulo") {

        altura = parseInt(prompt("Introduce la altura"));
        anchura = parseInt(prompt("Introduce la anchura"));

        area = altura * anchura;
        resultado = "El area del rectángulo es " + area;

    } else if (aux_eleccion == 3 ||
        aux_eleccion == "pentagono" ||
        aux_eleccion == "pentágono") {

        lado = parseInt(prompt("Introduce el lado"));
        apotema = parseInt(prompt("Introduce la apotema"));

        area = (5 * lado * apotema) / 2;
        resultado = "El area del pentágono es " + area;

    } else if (aux_eleccion == 4 ||
        aux_eleccion == "hexagono" ||
        aux_eleccion == "hexágono") {

        lado = parseInt(prompt("Introduce el lado"));
        apotema = parseInt(prompt("Introduce la apotema"));

        area = 3 * lado * apotema;
        resultado = "El area del hexágono es " + area;

    } else {
        resultado = "La elección no está en la lista";
    }
    console.log("Ejercicio 5\n--------------\n" + resultado);
}

/*
Crea un programa que pida una frase al usuario y comprueba si en esa 
frase contiene alguna b o v. Si existe una b, buscar si tiene alguna p 
la frase. Si tiene v, buscar si tiene u. Estas cláusulas no son excluyentes.
Mostrar por pantalla si son ciertos todos los casos.
*/
function ej_6() {
    //El enunciado puede dar lugar a confusión por lo que se permiten múltiples soluciones
    //Esta solución era la esperada
    let frase_usuario = "";
    let aux_frase = "";
    const LETRA_1 = "b",
        LETRA_2 = "v",
        LETRA_3 = "p",
        LETRA_4 = "u";
    let isTodasLasLetras = false;
    let isLetra1 = false;
    let isLetra2 = false;
    let isLetra3 = false;
    let isLetra4 = false;
    let resultado = false;

    frase_usuario = prompt("Introduce una frase cualquiera");

    aux_frase = frase_usuario.toLowerCase();
    isLetra1 = aux_frase.includes(LETRA_1);
    isLetra2 = aux_frase.includes(LETRA_2);

    if (isLetra1) {
        isLetra3 = aux_frase.includes(LETRA_3);
    }

    if (isLetra2) {
        isLetra4 = aux_frase.includes(LETRA_4);
    }

    isTodasLasLetras = isLetra1 && isLetra2 && isLetra3 && isLetra4;

    if (isTodasLasLetras) {
        resultado = "La frase contiene las letras: " + LETRA_1 +
            ", " + LETRA_2 +
            ", " + LETRA_3 +
            ", " + LETRA_4;
    } else {
        resultado = "La frase NO contiene las letras: " + LETRA_1 +
            ", " + LETRA_2 +
            ", " + LETRA_3 +
            ", " + LETRA_4;
    }

    console.log("Ejercicio 6\n--------------\n" + resultado);
}

/*
Crea un programa que calcule si un número dado por el usuario es par o impar y lo muestre por pantalla.
*/
function ej_7() {
    const COMPROBAR_PAR = 2;
    let numero = 0;
    let resto = -1; //Ya que si es par el resto es 0, empezamos la variable a -1 por se acaso
    let resultado = "";
    let isPar = false;

    numero = parseInt(prompt("Introduce un número para comprobar si es par"));

    resto = numero % COMPROBAR_PAR;

    isPar = resto == 0;

    if (isPar) {
        resultado = "El número " + numero + " es par";
    } else {
        resultado = "El número " + numero + " es impar";
    }

    console.log("Ejercicio 7\n--------------\n" + resultado);
}

/*
Crea un programa que pida una cadena de texto al usuario. Calcular si la cadena
 contiene un número de caracteres par o impar y mostrarlo por pantalla.
*/
function ej_8() {
    const COMPROBAR_PAR = 2;
    let frase_usuario = "";
    let resultado = "";
    let contador_caracteres = 0;
    let resto = -1;
    let isPar = false;

    frase_usuario = prompt("Introduce una frase para comprobar el número de caracteres");

    contador_caracteres = frase_usuario.length; //Length devuelve el tamaño, incluidos los espacios
    resto = contador_caracteres % COMPROBAR_PAR;
    isPar = resto == 0;

    if (isPar) {
        resultado = "La frase tiene una cantidad de caracteres par"
    } else {
        resultado = "La frase tiene una cantidad de caracteres impar"
    }

    console.log("Ejercicio 8\n--------------\n" + resultado);
}
/*
Crea un programa que unifique todos los ejercicios anteriores, por orden numérico. 
*/
function ej_9() {
    //Esto ya lo fui haciendo en el main, voy a dejarlo en este ejercicio igualmente.
    ej_1();
    ej_2();
    ej_3();
    ej_4();
    ej_5();
    ej_6();
    ej_7();
    ej_8();
}

function __main__() {
    /*
    ej_1();
    ej_2();
    ej_3();
    ej_4();
    ej_5();
    ej_6();
    ej_7();
    ej_8();
    ej_9();*/
}

__main__();