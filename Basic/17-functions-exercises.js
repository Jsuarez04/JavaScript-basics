/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    return a+b;
} 
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor(array){
    let mayor = array[0];
    for(let numero of array){
        if (numero > mayor){
            mayor = numero;
        }
    }
    return mayor;
}
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocales(palabra){
    palabra = palabra.toLowerCase();
    let cont = 0;
    for(let letra of palabra){
        switch(letra){
            case 'a': 
            case 'e': 
            case 'i': 
            case 'o': 
            case 'u': 
                cont++;
                break;
            default:
                break;
        }
    }
    return cont;
}
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function toMayus(stringArray){
    let arrayMayus = [];

    for(let char in stringArray){
        char = char.toUpperCase();
    }
    return arrayMayus;
}
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2){
    let arrayComunes = [];
    for(let elemento of array1){
        if(array2.includes(elemento)){
            arrayComunes.push(elemento);
        }
    }
    return arrayComunes;
}
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(array){
    let suma = 0;
    for(let numero of array){
        if(numero%2 === 0){
            suma += numero;
        }
    }
    return suma;
}
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function alCuadrado(array){
    let cuadrados = [];
    for (let numero of array){
        cuadrados.push(numero ** 2);
    }
    return cuadrados;
}
// let array = [2,4,6,8];

// console.log(alCuadrado(array));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function revertirPalabra(word){
    return word.reverse();
}

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }
}