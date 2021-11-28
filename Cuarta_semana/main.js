/*
Crear un programa que reciba por parámetros dos números que haya 
introducido el usuario y devuelva si son múltiplos o no con un booleano
true o false y muéstralo por pantalla.
*/

function ej_1(numero_1, numero_2) {
    let aux_numero_1 = numero_1;
    let aux_numero_2 = numero_2;
    let isMultiplo = false;
    let resto_1 = -1;
    let resto_2 = -1; //para la operacion inversa
    let resultado = "";

    resto_1 = aux_numero_1 % aux_numero_2;
    resto_2 = aux_numero_2 % aux_numero_1;

    isMultiplo = resto_1 == 0 || resto_2 == 0;

    if (isMultiplo) {
        resultado = aux_numero_1 + " y " + aux_numero_2 + " son múltiplos";
    } else {
        resultado = aux_numero_1 + " y " + aux_numero_2 + " no son múltiplos";
    }

    return resultado;
}

/*
Crea un programa que reciba por parámetro un número introducido por el usuario y compruebe,
si no es mayor que 100, si es primo o no, devolviendo un valor booleano true o false y muéstralo por pantalla.
*/
function ej_2(numero_1) {
    const COMPROBAR_CIEN = 100;
    let aux_numero_1 = numero_1;
    let resto = -1;
    let isMenorCien = false;
    let isNoPrimo = false;
    let resultado = "";
    let contador = 2; //Iniciamos a 2 el contador, pues todo número primo es divisible solo por si mismo y la unidad
    //Así que evitamos el 1 para falsos positivos

    isMenorCien = aux_numero_1 < COMPROBAR_CIEN;
    if (isMenorCien) {

        do {
            resto = aux_numero_1 % contador;
            isNoPrimo = resto == 0;
            contador++;
        } while (contador < aux_numero_1 && !isNoPrimo);

        if (isNoPrimo) {
            resultado = "El número " + aux_numero_1 + " no es primo";
        } else {
            resultado = "El número " + aux_numero_1 + " es primo";
        }

    } else {
        resultado = "El número introducido es mayor que cien";
    }

    return resultado;
}

/*
Crea un programa que reciba por parámetro una cadena de caracteres introducida por el usuario
 y que muestre por pantalla cada caracter de forma individual.
*/
function ej_3(cadena_1) {
    let aux_cadena = cadena_1;
    let resultado = "";

    for (let i = 0; i < aux_cadena.length; i++) {
        resultado = resultado + aux_cadena.charAt(i) + "\n";
    }

    return resultado;
}

/*
Crea un programa que reciba por parámetro un nombre y una cantidad de un alimento y cree un objeto
con esas propiedades. Muestra por pantalla sus atributos.
*/

function ej_4(nombre, cantidad) {
    let aux_nombre = nombre;
    let aux_cantidad = cantidad;
    let resultado = "";

    var Alimento = function(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;

        this.getNombre = function() {
            return this.nombre;
        }

        this.getCantidad = function() {
            return this.cantidad;
        }
    }

    let alimento_1 = new Alimento(aux_nombre, aux_cantidad);
    resultado = "Objeto tipo Alimento con \nnombre = " + alimento_1.getNombre() +
        "\ncantidad = " + alimento_1.getCantidad();
    return resultado;
}

/*
Crea un programa que reciba por parámetro lado y altura y cree un objeto Cuadrilátero con estas
 propiedades. Haz que tenga una función llamada calculoArea() que muestre por pantalla el resultado.
*/
function ej_5(lado, altura) {
    let aux_lado = lado;
    let aux_altura = altura;
    let resultado = "";

    var Cuadrilatero = function(lado, altura) {
        this.lado = lado;
        this.altura = altura;

        this.calculoArea = function() {
            let area = 0;
            area = this.lado * this.altura;
            return area;
        }
    }

    let cuadrilatero_1 = new Cuadrilatero(aux_lado, aux_altura);

    resultado = cuadrilatero_1.calculoArea();

    return resultado;
}

/*
Crea un programa que calcule la media acumulada de 10 números que introduzca el usuario y muestre por pantalla 
cual es la media en cada momento.
*/
function ej_6(repeticiones) {
    //En el enunciado no especifica que se usen parámetros, lo uso para que veais las posibilidades de los mismo
    //Se podría hacer devolviendo valores también, pero de momento vamos a usar una construcción como esta
    let numero_usuario = 0;
    let sumatorio = 0;
    let media = 0;
    for (let i = 0; i < repeticiones; i++) {
        numero_usuario = parseInt(prompt("Introduce un número para calcular la media"));
        sumatorio = sumatorio + numero_usuario;
        media = sumatorio / (i + 1);
        console.log("La media acumulada es " + media);
    }
}

/*
Crea un programa que cree 4 objetos del tipo Aventurero con los atributos de clase, nivel y raza. 
Muestra por pantalla cada uno y sus atributos.
*/
function ej_7() {
    //Se puede hacer pidiendo los datos al usuario o hacerlos manualmente
    var Aventurero = function(clase, raza, nivel) {
        this.clase = clase;
        this.raza = raza;
        this.nivel = nivel;

        this.toString = function() {
            let resultado = "";

            resultado = "Clase = " + clase +
                "\nRaza = " + raza +
                "\nNivel = " + nivel;

            return resultado;
        }
    }

    let resultado = "";

    let aventurero_1 = new Aventurero("Explorador", "Elfo", "20");
    let aventurero_2 = new Aventurero("Guerrero", "Humano", "22");
    let aventurero_3 = new Aventurero("Mago", "Aasimar", "50");
    let aventurero_4 = new Aventurero("Bárbaro", "Enano", "20");

    resultado = aventurero_1.toString() + "\n" +
        aventurero_2.toString() + "\n" +
        aventurero_3.toString() + "\n" +
        aventurero_4.toString();

    return resultado
}

/*
Crea un programa que permita usar una calculadora simple. Debe ofrecer al usuario 
la posibilidad de hacer sumas, restas, multiplicaciones y divisiones. El programa 
debe continuar hasta que el usuario decida terminar.
*/
function ej_8() {
    //Vamos a hacer el bucle del menú en un solo método, pero lo ideal sería fragmentarlo
    let isContinuar = true;
    let eleccion_menu = "";
    let numero_1 = 0,
        numero_2 = 0;
    let resultado = 0;

    do {

        eleccion_menu = prompt("¿Qué operación quieres hacer?" +
            "\n 1- Sumar" +
            "\n 2- Restar" +
            "\n 3- Multiplicar" +
            "\n 4- Dividir" +
            "\n 5- Salir");

        eleccion_menu = eleccion_menu.toLowerCase();

        switch (eleccion_menu) {
            case "1":
            case "Sumar":
            case 1:
                numero_1 = parseInt(prompt("Introduce el primer sumando"));
                numero_2 = parseInt(prompt("Introduce el segundo sumando"));
                resultado = numero_1 + numero_2;
                console.log(numero_1 + " + " + numero_2 + " = " + resultado);
                break;
            case "2":
            case "Restar":
            case 2:
                numero_1 = parseInt(prompt("Introduce el primer restando"));
                numero_2 = parseInt(prompt("Introduce el segundo restando"));
                resultado = numero_1 - numero_2;
                console.log(numero_1 + " - " + numero_2 + " = " + resultado);
                break;
            case "3":
            case "multiplicar":
            case 3:
                numero_1 = parseInt(prompt("Introduce el primer factor"));
                numero_2 = parseInt(prompt("Introduce el segundo factor"));
                resultado = numero_1 * numero_2;
                console.log(numero_1 + " X " + numero_2 + " = " + resultado);
                break;
            case "4":
            case "dividir":
            case 4:
                numero_1 = parseInt(prompt("Introduce el dividendo"));
                numero_2 = parseInt(prompt("Introduce el divisor"));
                resultado = numero_1 / numero_2;
                console.log(numero_1 + " / " + numero_2 + " = " + resultado);
                break;
            case "5":
            case "salir":
            case 5:
                isContinuar = false;
                break;
            default:
                console.log("Esa opción no está disponible, prueba otra vez");
                break;
        }
    } while (isContinuar);
}

/*
Crea un programa que aúne todos los ejercicios anteriores. Hazlo en un bucle, como un menú,
  para poder reproducir cada uno de forma individual y que se termine cuando decida el usuario.
*/
function ej_9() {
    //Este ejercicio es básicamente establecer un bucle para todo el main, con elecciones.
    let eleccion_menu = "";
    let resultado_ejercicio = "";
    let isContinuar = true;

    do {
        eleccion_menu = prompt("¿Qué ejercicio quieres ejecutar?" +
            "\n Ejercicio 1" +
            "\n Ejercicio 2" +
            "\n Ejercicio 3" +
            "\n Ejercicio 4" +
            "\n Ejercicio 5" +
            "\n Ejercicio 6" +
            "\n Ejercicio 7" +
            "\n Ejercicio 8" +
            "\n Salir");

        eleccion_menu = eleccion_menu.toLowerCase();
        console.log(eleccion_menu)
        switch (eleccion_menu) {
            case "1":
            case 1:
                let entrada_usuario_1 = 0;
                let entrada_usuario_2 = 0;

                entrada_usuario_1 = parseInt(prompt("Introduce el primer número"));
                entrada_usuario_2 = parseInt(prompt("Introduce el segundo número"));

                resultado_ejercicio = ej_1(entrada_usuario_1, entrada_usuario_2);

                console.log("Ejercicio 1\n--------------\n" + resultado_ejercicio);
                break;
            case "2":
            case 2:
                let entrada_usuario_3 = 0;

                entrada_usuario_3 = parseInt(prompt("Introduce el número para comprobar si es primo, menor que 100"));

                resultado_ejercicio = ej_2(entrada_usuario_3);

                console.log("Ejercicio 2\n--------------\n" + resultado_ejercicio);
                break;
            case "3":
            case 3:
                let entrada_usuario_4 = 0;

                entrada_usuario_4 = prompt("Introduce la cadena para visualizar");

                resultado_ejercicio = ej_3(entrada_usuario_4);

                console.log("Ejercicio 3\n--------------\n" + resultado_ejercicio);

                break;
            case "4":
            case 4:
                let entrada_usuario_5 = 0;
                let entrada_usuario_6 = 0;

                entrada_usuario_5 = prompt("Introduce un nombre para el alimento");
                entrada_usuario_6 = prompt("Introduce una cantidad para el alimento");

                resultado_ejercicio = ej_4(entrada_usuario_5, entrada_usuario_6);

                console.log("Ejercicio 4\n--------------\n" + resultado_ejercicio);
                break;
            case "5":
            case 5:
                let entrada_usuario_7 = 0;
                let entrada_usuario_8 = 0;

                entrada_usuario_7 = prompt("Introduce el lado del cuadrilatero");
                entrada_usuario_8 = prompt("Introduce la altura del cuadrilatero");

                resultado_ejercicio = ej_5(entrada_usuario_7, entrada_usuario_8);

                console.log("Ejercicio 5\n--------------\n" + resultado_ejercicio);
                break;
            case "6":
            case 6:
                console.log("Ejercicio 6\n--------------\n");
                resultado_ejercicio = ej_6(10);
                break;
            case "7":
            case 7:
                resultado_ejercicio = ej_7();

                console.log("Ejercicio 7\n--------------\n" + resultado_ejercicio);
                break;
            case "8":
            case 8:
                ej_8();
                break;
            case "salir":
            case "9":
            case 9:
                isContinuar = false;
                alert("Cerrando...");
                break;
            default:
                alert("La elección escogida no existe");
                break;
        }
    } while (isContinuar);
}

/**
 * El main va a tener muchas más lineas de código de lo normal por como propongo los ejercicios
 * No hay ningún problema para hacer prácticas pero recordad que el main debería estár lo más
 * limpio posible.
 */
function __main__() {
    let resultado_ejercicio = "";
    /*
    //EJERCICIO 1
    let entrada_usuario_1 = 0;
    let entrada_usuario_2 = 0;

    entrada_usuario_1 = parseInt(prompt("Introduce el primer número"));
    entrada_usuario_2 = parseInt(prompt("Introduce el segundo número"));

    resultado_ejercicio = ej_1(entrada_usuario_1, entrada_usuario_2);

    console.log("Ejercicio 1\n--------------\n" + resultado_ejercicio);

    //EJERCICIO 2
    let entrada_usuario_3 = 0;

    entrada_usuario_3 = parseInt(prompt("Introduce el número para comprobar si es primo, menor que 100"));

    resultado_ejercicio = ej_2(entrada_usuario_3);

    console.log("Ejercicio 2\n--------------\n" + resultado_ejercicio);

    //EJERCICIO 3

    let entrada_usuario_4 = 0;

    entrada_usuario_4 = prompt("Introduce la cadena para visualizar");

    resultado_ejercicio = ej_3(entrada_usuario_4);

    console.log("Ejercicio 3\n--------------\n" + resultado_ejercicio);

    //EJERCICIO 4

    let entrada_usuario_5 = 0;
    let entrada_usuario_6 = 0;

    entrada_usuario_5 = prompt("Introduce un nombre para el alimento");
    entrada_usuario_6 = prompt("Introduce una cantidad para el alimento");

    resultado_ejercicio = ej_4(entrada_usuario_5, entrada_usuario_6);

    console.log("Ejercicio 4\n--------------\n" + resultado_ejercicio);

    //EJERCICIO 5

    let entrada_usuario_7 = 0;
    let entrada_usuario_8 = 0;

    entrada_usuario_7 = prompt("Introduce el lado del cuadrilatero");
    entrada_usuario_8 = prompt("Introduce la altura del cuadrilatero");

    resultado_ejercicio = ej_5(entrada_usuario_7, entrada_usuario_8);

    console.log("Ejercicio 5\n--------------\n" + resultado_ejercicio);

    //EJERCICIO 6
    console.log("Ejercicio 6\n--------------\n");
    resultado_ejercicio = ej_6(10);

    //EJERCICIO 7

    resultado_ejercicio = ej_7();

    console.log("Ejercicio 7\n--------------\n" + resultado_ejercicio);

    //EJERCICIO 8

    ej_8();

    //EJERCICIO 9
    ej_9();*/
}

__main__();