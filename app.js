let personaje = {
    nombre: "Pepe Potter",
    edad: 17,
    familia: true,
    casa: undefined,
    animalPatronus: undefined,
};

let cualidades = parseInt(prompt(`Elige las cualidades que deseas poseer\n
1- Valor, fuerza, audacia\n
2- Justicia, Lealtad, Paciencia\n
3- Creatividad, Erudición, Inteligencia\n
4- Ambición, Determinación, Astucia\n`));

switch (cualidades) {
    case 1:
        personaje["cualidad"] = ["Valor", "Fuerza", "Justicia"];

        opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
        1- Mestizo\n
        2- Muggle\n
        3- Sangre pura\n`));


        if (opcion == 1) {
            personaje["linaje"] = "Mestizo"
        } else if (opcion == 2){
            personaje["linaje"] = "Muggle"
        } else if (opcion ==3){
            personaje["linaje"] = "Sangre pura"
        } else {
            alert("Dato invalido")
        }

        personaje.casa = "Gryffindor"

        break;

    case 2:
        personaje["cualidad"] = ["Justicia", "Lealtad", "Paciencia"];
        opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
        1- Mestizo\n
        2- Muggle`));


        if (opcion == 1) {
            personaje["linaje"] = "Mestizo"
        } else if (opcion == 2){
            personaje["linaje"] = "Muggle"
        } else {
            alert("Dato invalido")
        }

        personaje.casa = "Hufflepuff"
        break;


    case 3:
        personaje["cualidad"] = ["Creatividad", "Erudición", "Inteligencia"];


        opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
        1- Mestizo\n
        2- Muggle\n
        3- Sangre pura\n`));


        if (opcion == 1) {
            personaje["linaje"] = "Mestizo"
        } else if (opcion == 2){
            personaje["linaje"] = "Muggle"
        } else if (opcion ==3){
            personaje["linaje"] = "Sangre pura"
        } else {
            alert("Dato invalido")
        }

        personaje.casa = "Ravenclaw"

        break;

    case 4:
        personaje["cualidad"] = ["Ambición", "Determinación", "Astucia"];

        personaje["linaje"] = "Mestizo"

        personaje.casa = "Slytherin"


        break;
        

    default:
        break;
}


alert(`Tu informacion es la siguiente: \n
 Nombre: ${personaje.nombre}\n Edad: ${personaje.edad}\n Familia: ${personaje.familia}\n Cualidad: ${personaje.cualidad}\n Linaje: ${personaje.linaje}\n`);



let clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
};





alert("Día del sombrero seleccionador");

alert("Seleccionando...")


alert(`Tu casa es: ${personaje.casa}`)




let claseTransformaciones =  {
    nombre: "Kevin Slughorn", 
    horario: "6 am", 
    random: parseInt((Math.random())*2), 


    
    realizarTransformacionRiddikulus: function () {

        if (this.random == 1) {
            alert("Realizando transformacion con el encantamiento Riddikulus")
            alert("Transformando la pesadilla a ridiculo")
            alert("Le pasa algo vergonzoso")
        } else {
            alert("No hay un boggart")
        }

    }, 
    

    enfrentarBoggart : function () {
        if (this.random == 1) {
            alert("Si hay un boggart")
            let miedo = prompt("Ingresa tus miedo")
            alert("El boggart se empieza a transformar")
            alert("Transformando...")
            alert("El boggart se transoforma en " + miedo) 
        }

    }, 




}

let boggartEjemplo = {
    llamarFunciones1: claseTransformaciones.enfrentarBoggart,
    llamarFunciones2: claseTransformaciones.realizarTransformacionRiddikulus,
};

boggartEjemplo.llamarFunciones1()
boggartEjemplo.llamarFunciones2()



opcionAnimal = prompt("¿Ya tienes tu animal patronus? (si o no)").toLowerCase();

if (opcionAnimal === "no") {
    alert(`${personaje.nombre} es absorbido y es llevado a la enfermería`);
} else {
    let defensaContraLasArtesOscuras = {
        generarUnAnimal: function() {
            let animales = ["perro", "gato", "aguila"];
            let numeroAnimal = parseInt(Math.random() * animales.length);

            let animalElegido = animales[numeroAnimal];

            personaje.animalPatronus = animalElegido

            alert(`El animal patronus es ${animalElegido}`);
            alert(`El Dementor es detenido`);
        }
    };

    defensaContraLasArtesOscuras.generarUnAnimal();
}




alert(`Tu informacion es la siguiente: \n
 Nombre: ${personaje.nombre}\n Edad: ${personaje.edad}\n Familia: ${personaje.familia}\n Cualidad: ${personaje.cualidad}\n Linaje: ${personaje.linaje}\n Animal patronus: ${personaje.animalPatronus}\n`);






//  Paso 7
//  Crear Objeto de clasePociones, con su profesor, y horario, donde debe tener unos
//  ingredientes: 2 Crisopos y 1 Tallo de Descurainia Sophia, y tiempo de preparacion de 5
//  min, si no, queda mal y hara daño, todo para crear la pocion, Poción Felix Felicis.
//  y luego de realizarla, las consecuencias sera cambiar el profesor de pociones por el de
//  animales magicos.




clasePociones = {
    profesor : clases.pociones,
    horario: "8am - 10am",
    ingredientes: ["2 Crisopos"," 1 Tallo de Descurainia Sophia"],
};


alert(`${clasePociones.profesor}
${clasePociones.horario}
Ingredientes:
${(clasePociones.ingredientes).join(", ")}`)

alert(`En la clase se hace una mezcla con los ingredientes:
${clasePociones.ingredientes[0]} 
${clasePociones.ingredientes[1]}`);






let tiempoDePreparacion;

do {
    tiempoDePreparacion = prompt(`¿Cuánto tiempo de preparación desea para la poción? 
    1 - 3 minutos
    2 - 5 minutos`);

    if (tiempoDePreparacion === "1") {
        alert("La poción ha quedado mal, generará daño");
    } else if (tiempoDePreparacion === "2") {
        alert("Poción Felix Felicis realizada con éxito");
        alert(`El profesor ${clases.pociones} es cambiado por el profesor ${clases.animalesMagicos}`);
    } else {
        alert("Número inválido. Por favor, elija 1 o 2.");
    }
} while (tiempoDePreparacion !== "1" && tiempoDePreparacion !== "2");