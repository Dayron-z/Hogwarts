let linaje = document.getElementById("linaje");
let cualidad = document.getElementById("cualidad");

let personaje = {
    nombre: "Pepe Potter",
    edad: 17,
    familia: true,
    casa: undefined,
    animalPatronus: undefined,
    cualidad: undefined,
    linaje: undefined
};

function agregarCualidad(event) {
    // Verificar la identificación (.id) de la opción clicada
    switch (event.target.id) {
        case "cualidad1":
            personaje.cualidad = ["Valor", "fuerza", "audacia"];

            if (personaje.cualidad !== undefined) {
                linaje.style.display = "block";
                cualidad.style.display = "none";
            }
            console.log(personaje);
            break;
        case "cualidad2":
            personaje.cualidad = ["Justicia", "Lealtad", "Paciencia"];

            if (personaje.cualidad !== undefined) {
                linaje.style.display = "block";
                cualidad.style.display = "none";
            }
            console.log(personaje);
            break;

        case "cualidad3":
            personaje.cualidad = ["Creatividad", "Erudición", "Inteligencia"];
            if (personaje.cualidad !== undefined) {
                linaje.style.display = "block";
                cualidad.style.display = "none";
            }
            console.log(personaje);
            break;

        case "cualidad4":
            personaje.cualidad = ["Ambición", "Determinación", "Astucia"]
            if (personaje.cualidad !== undefined) {
                linaje.style.display = "block";
                cualidad.style.display = "none";
            }
            console.log(personaje);
            break;

        default:
            break;
    }
}

function agregarLinaje(event) {
    switch (event.target.id) {
        case "linaje1":
            personaje.linaje = document.getElementById("linaje1").textContent;
            console.log(personaje);
            break;
        case "linaje2":
            personaje.linaje = document.getElementById("linaje2").textContent;
            console.log(personaje);
            break;
        case "linaje3":
            personaje.linaje = document.getElementById("linaje3").textContent;
            console.log(personaje);
            break;
        default:
            break;
    }
}



document.addEventListener("click", agregarCualidad);
document.addEventListener("click", agregarLinaje)




// let cualidades = parseInt(prompt(`Elige las cualidades que deseas poseer\n
// 1- Valor, fuerza, audacia\n
// 2- Justicia, Lealtad, Paciencia\n
// 3- Creatividad, Erudición, Inteligencia\n
// 4- Ambición, Determinación, Astucia\n`));

// switch (cualidades) {
//     case 1:
//         personaje["cualidad"] = ["Valor", "Fuerza", "Justicia"];

//         opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
//         1- Mestizo\n
//         2- Muggle\n
//         3- Sangre pura\n`));


//         if (opcion == 1) {
//             personaje["linaje"] = "Mestizo"
//         } else if (opcion == 2){
//             personaje["linaje"] = "Muggle"
//         } else if (opcion ==3){
//             personaje["linaje"] = "Sangre pura"
//         } else {
//             alert("Dato invalido")
//         }

//         personaje.casa = "Gryffindor"

//         break;

//     case 2:
//         personaje["cualidad"] = ["Justicia", "Lealtad", "Paciencia"];
//         opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
//         1- Mestizo\n
//         2- Muggle`));


//         if (opcion == 1) {
//             personaje["linaje"] = "Mestizo"
//         } else if (opcion == 2){
//             personaje["linaje"] = "Muggle"
//         } else {
//             alert("Dato invalido")
//         }

//         personaje.casa = "Hufflepuff"
//         break;


//     case 3:
//         personaje["cualidad"] = ["Creatividad", "Erudición", "Inteligencia"];


//         opcion = parseInt(prompt(`Elige el tipo de linaje que deseas tener\n
//         1- Mestizo\n
//         2- Muggle\n
//         3- Sangre pura\n`));


//         if (opcion == 1) {
//             personaje["linaje"] = "Mestizo"
//         } else if (opcion == 2){
//             personaje["linaje"] = "Muggle"
//         } else if (opcion ==3){
//             personaje["linaje"] = "Sangre pura"
//         } else {
//             alert("Dato invalido")
//         }

//         personaje.casa = "Ravenclaw"

//         break;

//     case 4:
//         personaje["cualidad"] = ["Ambición", "Determinación", "Astucia"];

//         personaje["linaje"] = "Mestizo"

//         personaje.casa = "Slytherin"


//         break;
        

//     default:
//         break;
// }


// alert(`Tu informacion es la siguiente: \n
//  Nombre: ${personaje.nombre}\n Edad: ${personaje.edad}\n Familia: ${personaje.familia}\n Cualidad: ${personaje.cualidad}\n Linaje: ${personaje.linaje}\n`);



// let clases = {
//     transformaciones: "Profesor Kevin Slughorn",
//     herbologia: "Profesor Maria Umbridge",
//     pociones: "Profesor Liliana McGonagall",
//     encantamientos: "Profesora Jackie",
//     defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
//     animalesMagicos: "Profesor David Filch",
//     historiaDeMagia: "Profesor Ronald Sprout"
// };





// alert("Día del sombrero seleccionador");

// alert("Seleccionando...")


// alert(`Tu casa es: ${personaje.casa}`)




// let claseTransformaciones =  {
//     nombre: "Kevin Slughorn", 
//     horario: "6 am", 
//     random: parseInt((Math.random())*2), 


    
//     realizarTransformacionRiddikulus: function () {

//         if (this.random == 1) {
//             alert("Realizando transformacion con el encantamiento Riddikulus")
//             alert("Transformando la pesadilla a ridiculo")
//             alert("Le pasa algo vergonzoso")
//         } else {
//             alert("No hay un boggart")
//         }

//     }, 
    

//     enfrentarBoggart : function () {
//         if (this.random == 1) {
//             alert("Si hay un boggart")
//             let miedo = prompt("Ingresa tus miedo")
//             alert("El boggart se empieza a transformar")
//             alert("Transformando...")
//             alert("El boggart se transoforma en " + miedo) 
//         }

//     }, 




// }

// let boggartEjemplo = {
//     llamarFunciones1: claseTransformaciones.enfrentarBoggart,
//     llamarFunciones2: claseTransformaciones.realizarTransformacionRiddikulus,
// };

// boggartEjemplo.llamarFunciones1()
// boggartEjemplo.llamarFunciones2()



// opcionAnimal = prompt("¿Ya tienes tu animal patronus? (si o no)").toLowerCase();

// if (opcionAnimal === "no") {
//     alert(`${personaje.nombre} es absorbido y es llevado a la enfermería`);
// } else {
//     let defensaContraLasArtesOscuras = {
//         generarUnAnimal: function() {
//             let animales = ["perro", "gato", "aguila"];
//             let numeroAnimal = parseInt(Math.random() * animales.length);

//             let animalElegido = animales[numeroAnimal];

//             personaje.animalPatronus = animalElegido

//             alert(`El animal patronus es ${animalElegido}`);
//             alert(`El Dementor es detenido`);
//         }
//     };

//     defensaContraLasArtesOscuras.generarUnAnimal();
// }




// alert(`Tu informacion es la siguiente: \n
//  Nombre: ${personaje.nombre}\n Edad: ${personaje.edad}\n Familia: ${personaje.familia}\n Cualidad: ${personaje.cualidad}\n Linaje: ${personaje.linaje}\n Animal patronus: ${personaje.animalPatronus}\n`);