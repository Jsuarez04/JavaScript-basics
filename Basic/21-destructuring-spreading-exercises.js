/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array = [1,2,3,4,5,6];

let [myValue0, myValue1] = array;

console.log(myValue0);
console.log(myValue1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myValue2 , myValue3 , myValue4 , myValue5, , , myValue6 = 0, myValue7 = 'locura'] = array;

console.log(myValue2);
console.log(myValue3);
console.log(myValue4);
console.log(myValue5);
console.log(myValue6); // valor predeterminado
console.log(myValue7); // valor predeterminado

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name: "Julito",
    age: 20,
    gender: "Male",
    job: {
        cargo: "Developer",
        exp: "5 años",
        work: "Google",
    }
}

let {name: personName, age,gender} = person;

console.log(personName);
console.log(age);
console.log(gender);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name: employerName, age: employerAge, job: {work : workEnterprise} } = person;

// console.log(employerName);
// console.log(employerAge);
// console.log(workEnterprise);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {job: {cargo, exp}}  = person;

// console.log(cargo);
// console.log(exp);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = ["a", "b", "c"];
let array2 = [];

array2 = [...array1, ...array];

// console.log(array2);

// 7. Usa propagación para crear una copia de un array

let arrayCopy = [...array];

// 8. Usa propagación para combinar dos objetos en uno nuevo
let person2 = {
    name2: "Tina",
    age: 20,
    workspace: 'Microsoft'
}

let person3 = {...person , ...person2};

console.log(person3);
// 9. Usa propagación para crear una copia de un objeto

let person4 = {...person};
console.log(person4);
// 10. Combina desestructuración y propagación
console.log("Combina desestructuración y propagación");
let [myValue8, myValue9, ...rest] = array;
console.log(myValue8);
console.log(myValue9);
console.log(rest);
