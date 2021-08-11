// flat: devuelve una matriz con una submatriz aplanada
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

// flatMap
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//trimStart | trimEnd: perimite eliminar los espacios en balnco de inicio o fin de un string
let hello = '           hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd());

// opcional catch/try, ya puedes hacerlo de forma independiente sin especifica error

// .fromEntries(): permite pasar de una matriz  a un objeto
let entries = [["name", "Erick"], ["age", 32]];
console.log(Object.fromEntries(entries));

// objeo de tipo simbolo
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
