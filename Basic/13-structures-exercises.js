/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animals = ['vaca', 'gallo', 'perro', 'cerdo', 'gato'];
// for (let animal of animals){
//     console.log(animal);
// }

// 2. Añade dos más. Uno al principio y otro al final
animals.push('aguila');
animals.unshift('mosca');

// for (let animal of animals){
//     console.log(animal);
// }

// 3. Elimina el que se encuentra en tercera posición

// animals.splice(4,1);
// for (let animal of animals){
//     console.log(animal);
// }
// 4. Crea un set que almacene cinco libros
let books = new Set();

books = new Set (["100 años de soledad", "doña barbara", "la divina comedia","cronicas", "along craz-es"]);

// 5. Añade dos más. Uno de ellos repetido
books.add("venequian things"); 
console.log(books);

books = Array.from(books); //Convertimos el set a un array
books.push("winter has come"); // agregamos el elemento

books = new Set(books); //devolvemos a su forma original, sin necesidad de variables auxiliares
console.log(books);

// 6. Elimina uno concreto a tu elección
let eliminarElemento = "100 años de soledad";

if(books.delete(eliminarElemento) == true){
    console.log(`El libro: (${eliminarElemento})\nha sido eliminado`);
}else{
    console.log("El elemento no existe");
}

console.log(books);

// 7. Crea un mapa que asocie el número del mes a su nombre
let mesNombre = new Map();

mesNombre = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"],
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if(mesNombre.has("5")){
    console.log(mesNombre.get("5"));
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
mesNombre.set("mesesVerano" , ["Junio", "Julio", "Agosto"]);
console.log(mesNombre.values());
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = [1,2,3,4,5];
array = new Set(array);

let map = new Map();

map.set("Numeros", array);

console.log(map);
