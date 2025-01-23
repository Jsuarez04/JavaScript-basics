/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
function sumaNumeros(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Ambos valores deben ser números');
    }
    if(a === 0 || b === 0){
        throw new Error('Los números no pueden ser 0');
    }
    return a + b;
}

// try{
//     console.log(sumaNumeros(5,"0"));
// }catch(error){
//     console.log(error.message);
// }

// 2. Captura una excepción utilizando try-catch y finally
try{
    console.log(sumaNumeros(5,"0"));
}catch(error){
    console.log(error.message);
}finally{
    console.log('Proceso terminado');
}
// 3. Lanza una excepción genérica
function restaNumeros(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Ambos valores deben ser números');
    }
    if(a === 0 || b === 0){
        throw new TypeError('Los números no pueden ser 0');
    }
    if(a < b){
        throw new myException('El primer número debe ser mayor (Excepcion personalizada)')
    }
    return a - b;
}

try{
    console.log(restaNumeros(5,0));
}catch(error){
    console.log('Se ha producido un error:', error.message);
}

// 4. Crea una excepción personalizada
class myException extends Error{
    constructor(message){
        super(message);
        this.name = 'myException';
    }
}

// 5. Lanza una excepción personalizada
try{
    console.log(restaNumeros(1,10));
}catch(error){
    console.log('Se ha producido un error:', error.message);
}
// 6. Lanza varias excepciones según una lógica definida

function multiplicaNumeros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Ambos valores deben ser números');
    }
    if (a === 0 || b === 0) {
        throw new Error('Los números no pueden ser 0');
    }
    if (a < 0 || b < 0) {
        throw new RangeError('Los números no pueden ser negativos');
    }
    return a * b;
}

// try {
//     console.log(multiplicaNumeros(5, -2));
// } catch (error) {
//     console.log('Se ha producido un error:', error.message);
// }

// 7. Captura varias excepciones en un mismo try-catch

try {
    console.log(multiplicaNumeros(5, -2));
}catch(error){
    if(error instanceof Error){
        console.log('Se ha producido un error:', error.message);
    }
    if(error instanceof RangeError){
        console.log('Error de rango:', error.message);
    }
    if(error instanceof TypeError){
        console.log('Error de tipo:', error.message);
    }
}finally{
    console.log('Proceso terminado');
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let numeros = [1,2.3,"a",4.2,5.5,6.1,7.9,8.4,9.8,10.3];

for(let number of numeros){
    try{
        if(typeof number !== 'number'){
            throw new TypeError('The value must be a number');
        }
        console.log(parseFloat(number));
    }catch(error){
        console.log('An error has occurred:', error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
let myObject = {
    id : 'AK-820',
    price : '47$',
}
function propExists(objeto, propiedad) {
    try {
        if (!objeto.hasOwnProperty(propiedad)) {
            throw new myException("Error inesperado: Propiedad inexistente...");
        }
        return 'La propiedad existe';
    } catch (error) {
        console.log(error.message);
    }
    return 'No existe'; // Si el programa se ejecuta hasta aca, significa que se dieron las condicioines del error
}

console.log(propExists(myObject, "price"));
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation(operation, maxRetries) { //Esta funcion recibe una operacion que repetira hasta alcanzar el maximo de intentos fallidos
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            return operation();
        } catch (error) {
            attempts++;
            console.log(`Attempt ${attempts} failed: ${error.message}`);
        }
    }
    throw new Error(`Operation failed after ${maxRetries} attempts`);
}

function exampleOperation() {
    let random = Math.random();
    console.log(random);
    if (random < 0.7) {
        throw new Error('Random failure');
    }
    return 'Success';
}

try {
    let result = retryOperation(exampleOperation, 10);
    console.log(result);
} catch (error) {
    console.log(error.message);
}

