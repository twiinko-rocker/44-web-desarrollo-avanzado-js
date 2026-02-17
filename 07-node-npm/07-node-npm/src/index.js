import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hola Mundo desde Express");
})

app.get("/data", (req, res) => {
    res.send({
        name: "Alan",
        age: 30,
    });
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
})









// import http from require('node:http')
// const hostname = '127.0.0.1';
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hola Mundo');
// })

// server.listen(PORT, hostname, () => {
//     console.log(`Servidor corriendo en http://${hostname}:${PORT}/`);
// })






//Ejemplo de Zod con node

// import { z } from "zod";

// const schema = z.object({
//     nombre: z.string().min(1, "El nombre es requerido"),
//     age: z.number().int().positive("La edad debe ser un número válido"),
// })


// try {
//     schema.parse({ name: "Alan", age: 30 }); // Esto es correcto
//     console.log("Datos válidos");
// } catch (error) {
//     console.log(error);
    
// }



// import { mostrarTitulo, mostrarMensaje, saludo } from "./tareas.js";
// import { user } from "./objetos.js";


// console.log(mostrarTitulo());
// console.log(saludo("Alan"));
// console.log(user.especialidad);




//desestructuración de objetos
// const { mostrarTitulo, mostrarMensaje } = require("./tareas");


// console.log(mostrarTitulo());
// console.log(mostrarMensaje());



// const tareas = require("./tareas");
// const objetos = require("./objetos");

// console.log("Hola node");

// let nombre = "pepe";

// console.log(tareas.mostrarTitulo());
// console.log(tareas.mostrarMensaje());
// console.log(objetos.user.especialidad)
