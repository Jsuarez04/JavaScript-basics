/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let person = {
    name : 'Julio',
    age: 20,
    aka: 'Julito',
    sayHello : function (){
        console.log('saying hello...')
    }
}
// 2. Accede y muestra su valor
console.log('Objeto: \n', person)
// 3. Agrega una nueva propiedad
person.university = 'UNEG';
console.log('Objeto con nueva propiedad: \n', person)

// 4. Elimina una de las 3 primeras propiedades
if(person.hasOwnProperty('aka')){
    delete person.aka;
    console.log('Propiedad eliminada')
}
else{
    console.log('Propiedad no encontrada')
}

console.log('Objeto: \n', person)
// 5. Agrega una función e invócala
person.sayHello();
// 6. Itera las propiedades del objeto
for(let value in person){
    console.log("Props: ", value)
}

// 7. Crea un objeto anidado
let person1 = {
    name : 'julito',
    age: 20,
    address: {
        city: 'Puerto Ordaz',
        zip: '8050',
        country: 'Venezuela',
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log('Objeto anidado: \n', person1.address)
// 9. Comprueba si los dos objetos creados son iguales

function areEqual(obj1, obj2){
    for(let prop in obj1){
        if (obj1[prop] !== obj2[prop]) {
            console.log('No son iguales');
            return false;
        }else{
            console.log('Son iguales');
            return true;
        }
    }

}
console.log(areEqual(person, person1));

// 10. Comprueba si dos propiedades diferentes son iguales

function areEqualProps(obj, prop_1, prop_2){
    return obj[prop_1] === obj[prop_2];
}
console.log(areEqualProps(person, 'name', 'age'));