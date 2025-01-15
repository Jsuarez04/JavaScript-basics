/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array = [1,2,3,4,5,6];

let [myValue0, myValue1] = array;

// console.log(myValue0);
// console.log(myValue1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myValue2 , myValue3 , myValue4 , myValue5, , , myValue6 = 0, myValue7 = 'locura'] = array;

console.log(myValue2);
console.log(myValue3);
console.log(myValue4);
console.log(myValue5);
console.log(myValue6); // valor predeterminado
console.log(myValue7); // valor predeterminado

// 3. Usa desestructuración para extraer dos propiedades de un objeto

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación