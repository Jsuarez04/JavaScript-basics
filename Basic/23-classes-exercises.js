/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    static walk(distance){
        console.log(`I'm walking ${distance} meters`);
    }
}
// 2. Añade un método a la clase que utilice las propiedades
class Person2 {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    showProperties(){
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGender:${this.gender}`);
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let person = new Person2("Brais", 37, "Male");

person.showProperties();
// 4. Añade un método estático a la primera clase


// 5. Haz uso del método estático

Person.walk(100);

// 6. Crea una clase que haga uso de herencia
class Developer extends Person{
    constructor(name, age, gender, language, exp){
        super(name, age, gender);
        this.language = language;
        this.exp = exp;
    }
    showProperties(){
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}\nLanguage: ${this.language}\nExperience: ${this.exp}`);
    }    
}
// 7. Crea una clase que haga uso de getters y setters
class GetSetPerson{
    #age;
    #name;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }

    get age(){
        return this.#age;
    }

    set age(age){
        this.#age = age;
    }
}
// 8. Modifica la clase con getters y setters para que use propiedades privadas
let person3 = new GetSetPerson("Brais", 37);
console.log(person3.name);
person3.name = "MoureDev";
console.log(person3.name);
// 9. Utiliza los get y set y muestra sus valores
console.log(person3.age);
console.log(person3.name);
// 10. Sobrescribe un método de una clase que utilice herencia 

let developer = new Developer("Julio", 20, "Male", "JavaScript", 5);
developer.showProperties();