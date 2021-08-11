// antes de es6
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country ||'MX';
    console.log(name, age, country);
}

// con es6
function newFunction2( name = 'Oscar', age = 32, country = "MX"){
    console.log(name, age, country)
};

newFunction2();
// OR
newFunction2('Ricardo', 23, "Col");

// templates sin es6
let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// templates con es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilinea
// sin es6
let lorem = "hola vamos a usar multilinea antigua xd \n"
+ "otra frase con que separar jaja ";
console.log(lorem);

// con es6
let lorem2 = `otra frase epica que necesitamos
esto ya se ve abajo jaja xD`;
console.log(lorem2);

// Desestructuracion

let person ={
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

// sin es6
console.log(person.name, person.age, person.country);

// con es6
let {name, age, country} = person;
console.log(name, age, country);

// Propagacion 
let  team1 = ['Oscar', 'Julian', 'Ricardo'];
let  team2 = ['Valeria', 'Yesica', 'Camila'];
// operador de propagacion (...)
let education = ['David', ...team1, ...team2];
console.log(education);

// var y let
// var es una variable global  y se puede volver a delcarar 
// let es una variable local y se puede volver a declarar 

{
    var globalVar = "Global var";
}

{
    let globalLet = 'Global Let'
    console.log(globalLet);
}

console.log(globalVar);

// const
const a = 'b';
a = 'a';
console.log(a);

//objetos 
let name ='Erick';
let age = 22;

// es5 antes de es6
obj = {name: name, age: age};
console.log(obj);
// con es6
obj2 = {name, age};
console.log(obj2);

// arrow function
const names = [
    {name: 'Erick', age: 22},
    {name: 'Mane', age: 23}
]
// sin es6
let listOfName = names.map(function(item){
    console.log(item.name);
});

// con es6
let listOfName2 = names.map(item => console.log(item.name));

// Otras opciones 
const listOfName3 = (name, age) => {
    // bloque de codigo
}

const listOfName4 = name => {
// bloque de codigo
}

const square = num => num * num;

// promesas
// algo va a pasar
const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('HEY!');
        }
        else{
            reject('UPS !!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

// clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// Modulos import and export
import { hello } from './module'
console.log(hello());

// generadores 
function* helloWorld(){
    if(true){
        yield 'hello';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);