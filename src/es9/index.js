// Operador de raposo
const obj = {
    name: 'Erick',
    age: 22,
    country: 'MX',
};

// usando operador de reposo para separar los objetos
let {name, ...all} = obj;
console.log(name, all);

// Propagacion
const obj ={
    name:'Erick',
    age: 23,
}

const obj1 = {
    ...obj,
    country: 'MX',
}
console.log(obj1);

// 
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

    // Regex
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2021-08-10');
    const year = match[1];
    const month = match[2];
    const day = match[3];

    console.log(year, month, day);