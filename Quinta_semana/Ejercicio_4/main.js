/*
Crear un programa que muestre por pantalla diversas obras de arte con los siguientes requisitos:
Las obras de arte tienen todos el mismo padre Arte con la misma función y el mismo atributo nombre.

function alabarObra(){
      console.log(nombre + “ es impresionante”)
}

Hay 4 objetos hijos de Arte llamados: Cine, Escultura, Pintura y Teatro.
El Cine debe tener los atributos de duración y género
Las Esculturas deben tener los atributos de material y época
La Pintura debe tener los atributos de autor y estilo
El Teatro debe tener los atributos de duración y época
Cada objeto hijo debe tener su propia función que muestre por pantalla sus atributos.
Crea por lo menos un objeto de cada y usa las funciones por lo menos una vez para mostrar que funciona.
*/

function __main__() {
    let cine_1 = new Cine(180, "Acción");
    let escultura_1 = new Escultura("Mármol", "Greca");
    let pintura_1 = new Pintura("Picasso", "Cubismo");
    let teatro_1 = new Teatro(90, "Generación del 27");

    cine_1.nombre = "El señor de los anillos";
    escultura_1.nombre = "La venus de milo";
    pintura_1.nombre = "Guernica";
    teatro_1.nombre = "La casa de Bernarda Alba";

    alert_output(cine_1.toString());
    alert_output(escultura_1.toString());
    alert_output(pintura_1.toString());
    alert_output(teatro_1.toString());


}

__main__();