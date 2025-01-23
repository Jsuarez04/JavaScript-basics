/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function errorFunction(a,b) {
    a != b ? console.error("¡Los números no son iguales!") : console.info("¡Los números son iguales!")
}   
errorFunction(1,2);

// 2. Crea una función que utilice warn correctamente
function warnFunction(a,b) {
    a != b ? console.warn("¡Los números no son iguales!") : console.info("¡Los números son iguales!")
}
warnFunction(1,3);
// 3. Crea una función que utilice info correctamente
function infoFunction(){
    console.info("¡Esto es un mensaje de información!");
}

// 4. Utiliza table
let data = [
    {id: '05425165', name: 'Jsuarezdev', age: 20},
    {id: '0134598', name: 'tinidev', age: 22},
    {id: '02195489', name: 'rubsdev', age: 24}, 
]

console.table(data);

// 5. Utiliza group
console.group("Usuarios:");
console.log("Nombre: Jsuarezdev");
console.log("Edad: 20");
console.groupEnd();
// 6. Utiliza time
console.time("Tiempo de ejecución 1");
for(let i = 0; i < 100000; i++){
}
console.timeEnd("Tiempo de ejecución 1");
// 7. Valida con assert si un número es positivo
let num = 6;
console.assert(num > 0, "¡El número es positivo!");

// 8. Utiliza count
console.count("Veces");
console.count("Veces");
console.count("Veces");
console.count("Veces");
console.count("Veces");

// 9. Utiliza trace
function trackFunction(){
    console.trace("¡Esto es un mensaje de tracking!");
}
function isPair(num){
    trackFunction();
    return num % 2 === 0;
}

console.log(isPair(2));

// 10. Utiliza clear
console.clear();