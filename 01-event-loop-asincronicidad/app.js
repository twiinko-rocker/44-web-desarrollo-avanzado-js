// console.log("Event Loop Asincronicidad");

// const multiplicar = (x, y) => {
//   return x * y;
// }

// const imprimirCuadrado = (x) => {
//     let c = multiplicar(x, x);
//     console.log(c);
// }

// imprimirCuadrado(5); // Output: 25

// function foo () {
//     foo();
// }

// foo ()

// console.log("Hola");

// setTimeout(() => {
//     console.log("mundo");
// }, 3000);


// console.log("fruta", "mango", "banana");


// //call back

// const saludar = (nombre, callback) => {
//     console.log(`Hola, ${nombre}`);
//     callback()
// }

// saludar("Juan", () => {
//     console.log("Saludo terminado");
// });

//Promises 

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => { resolve("Promesa cumplida")}, 2000 );
// });

// promesa.then(resultado => console.log(resultado));


// async await

// async function obtenerDatos() {
//     const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await respuesta.json();
//     console.log(data);
// }

// obtenerDatos();


console.log("Inicio");

setTimeout(() => {
    console.log("Macrotarea - setTimeout");
}, 0)

Promise.resolve().then(() => {
    console.log("Microtarea - Promise");
})

console.log("Fin");



